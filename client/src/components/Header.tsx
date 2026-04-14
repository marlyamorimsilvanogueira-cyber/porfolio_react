/**
 * Header Component
 * Navegação sticky com logo e menu
 * Design: Tema escuro com botões animados
 */

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg border-b border-gray-800">
      <nav className="container py-4 flex justify-between items-center">
        <div className="font-display text-xl md:text-2xl text-white uppercase tracking-widest">
          Marly Amorim
        </div>

        <ul className="flex gap-4 md:gap-6 list-none">
          <li>
            <button
              onClick={() => scrollToSection("sobre")}
              className="btn-animado text-xs md:text-sm"
            >
              Sobre mim
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projetos")}
              className="btn-animado text-xs md:text-sm"
            >
              Projetos
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contato")}
              className="btn-animado text-xs md:text-sm"
            >
              Contato
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
