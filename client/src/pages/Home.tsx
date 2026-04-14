/**
 * Home Page
 * Página principal do portfólio com todas as seções
 * Renderiza dinamicamente os projetos a partir de um array de objetos
 */

import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

// Array de objetos contendo os projetos (requisito do MVP)
const projetos = [
  {
    id: 1,
    nome: "SISTOQUE",
    descricao:
      "Um sistema inteligente de controle de estoque criado para pequenos comércios e adaptável às Secretarias de Educação. Focado em organizar a entrada e saída de materiais com eficiência e transparência.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    link: "#",
  },
  {
    id: 2,
    nome: "SISTOQUE - Módulo Adm",
    descricao:
      "Módulo administrativo do sistema Sitoque, permitindo o gerenciamento de usuários e relatórios detalhados de movimentação de materiais.",
    tecnologias: ["JavaScript", "Flexbox", "LocalStorage"],
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection projetos={projetos} />
      </main>
      <Footer />
    </div>
  );
}
