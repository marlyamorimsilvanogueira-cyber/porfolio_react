/**
 * ProjectsSection Component
 * Renderiza a seção completa de projetos com grid responsivo
 * Implementa renderização dinâmica de um array de objetos de projetos
 */

import ProjectCard from "./ProjectCard";

interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  tecnologias: string[];
  link: string;
}

interface ProjectsSectionProps {
  projetos: Projeto[];
}

export default function ProjectsSection({ projetos }: ProjectsSectionProps) {
  return (
    <section id="projetos" className="py-16 md:py-24">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl text-center mb-4 text-white uppercase tracking-tight">
          Meus Projetos
        </h1>
        <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projetos.map((projeto) => (
            <ProjectCard
              key={projeto.id}
              id={projeto.id}
              nome={projeto.nome}
              descricao={projeto.descricao}
              tecnologias={projeto.tecnologias}
              link={projeto.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
