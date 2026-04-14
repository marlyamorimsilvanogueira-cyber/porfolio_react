/**
 * Footer Component
 * Rodapé com informações de copyright e links de contato
 * Design: Tema escuro com botões animados
 */

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 border-t border-gray-800 py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <p className="font-body text-gray-400 text-center">
            &copy; 2024 Marly Amorim. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:marlyamorim@hotmail.com.br"
              className="btn-animado text-sm"
            >
              E-mail
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <a href="#" className="btn-animado text-sm">
              GitHub
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
