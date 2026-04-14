/**
 * ProjectCard Component
 * Renderiza um card individual de projeto com nome, descrição, tecnologias e link
 * Design: Tema escuro com efeito hover e botão animado
 */

interface ProjectCardProps {
  id: number;
  nome: string;
  descricao: string;
  tecnologias: string[];
  link: string;
}

export default function ProjectCard({
  nome,
  descricao,
  tecnologias,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <h3 className="font-display text-xl mb-4 text-white">{nome}</h3>
        <p className="font-body text-sm leading-relaxed mb-5 text-gray-300">
          {descricao}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tecnologias.map((tech, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a href={link} className="btn-animado inline-block">
        Ver Detalhes
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
}
