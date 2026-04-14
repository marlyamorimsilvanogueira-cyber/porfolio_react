/// <reference types="node" />

import { defineConfig, Plugin, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import fs from "node:fs";

const rootDir = process.cwd();

/* =========================================================
   LOG CONFIG
========================================================= */

const LOG_DIR = path.resolve(rootDir, "logs");

const MAX_LOG_SIZE_BYTES = 1_000_000;

/* =========================================================
   HELPERS
========================================================= */

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath)) return;

    const stats = fs.statSync(logPath);
    if (stats.size <= maxSize) return;

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");

    const keptLines: string[] = [];
    let keptBytes = 0;

    for (let i = lines.length - 1; i >= 0; i--) {
      const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
      if (keptBytes + lineBytes > Math.floor(maxSize * 0.6)) break;

      keptLines.unshift(lines[i]);
      keptBytes += lineBytes;
    }

    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch {}
}

function writeToLogFile(source: string, entries: unknown[]) {
  if (!entries?.length) return;

  ensureLogDir();

  const logPath = path.join(LOG_DIR, `${source}.log`);

  const lines = entries.map((entry) => {
    return `[${new Date().toISOString()}] ${JSON.stringify(entry)}`;
  });

  fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");
  trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

/* =========================================================
   PLUGIN DEBUG
========================================================= */

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",

    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") return html;

      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: {
              src: "/__manus__/debug-collector.js",
              defer: true,
            },
            injectTo: "head",
          },
        ],
      };
    },

    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();

        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", () => {
          try {
            const payload = JSON.parse(body);

            if (payload.consoleLogs) {
              writeToLogFile("browserConsole", payload.consoleLogs);
            }

            if (payload.networkRequests) {
              writeToLogFile("networkRequests", payload.networkRequests);
            }

            if (payload.sessionEvents) {
              writeToLogFile("sessionReplay", payload.sessionEvents);
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ success: false, error: String(e) }));
          }
        });
      });
    },
  };
}

/* =========================================================
   VITE CONFIG FINAL (VERCEL OK)
========================================================= */

export default defineConfig({
  plugins: [
    react(),
    vitePluginManusDebugCollector(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(rootDir, "client", "src"),
      "@shared": path.resolve(rootDir, "shared"),
      "@assets": path.resolve(rootDir, "attached_assets"),
    },
  },

  // frontend dentro da pasta client
  root: path.resolve(rootDir, "client"),

  // 🔥 CORREÇÃO FINAL DO 404 NA VERCEL
  build: {
    outDir: path.resolve(rootDir, "dist"),
    emptyOutDir: true,
  },
});