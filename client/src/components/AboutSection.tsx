/**
 * AboutSection Component
 * Seção "Sobre mim" com foto de perfil e descrição
 * Design: Tema escuro com card destacado
 */

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="container">
        <div className="bg-card text-card-foreground rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col items-center mb-8">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-xl mb-6">
              <img
                src="/foto.jpg"
                alt="Foto de Marly Amorim"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight">
              Sobre mim
            </h1>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="font-body text-base md:text-lg leading-relaxed text-gray-300">
              Sou acadêmica graduanda, apaixonada pela área da Educação e pelo uso
              da tecnologia como ferramenta de transformação social e pedagógica,
              com interesse em metodologias inovadoras e no uso da Inteligência
              Artificial nos processos de ensino e aprendizagem.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed text-gray-300">
              Desenvolvo o projeto integrador{" "}
              <strong className="text-white">SISTOQUE</strong>, um sistema de
              controle de estoque criado para pequenos comércios e adaptável às
              Secretarias de Educação, com o objetivo de organizar e controlar a
              entrada e saída de materiais, contribuindo para maior eficiência,
              organização e transparência na gestão administrativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
