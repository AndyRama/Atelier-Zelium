import Image from "next/image";
import Link from "next/link";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export function ProjectCard({ project, sizes }: { project: Project; sizes?: string }) {
  return (
    <article>
      <Link href="/realisations" className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes={sizes ?? "(min-width: 768px) 33vw, 100vw"}
            className="object-cover"
          />
        </div>
        <div className="mt-4 flex items-start justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
          <span>{project.category}</span>
          <span aria-hidden className="text-sm leading-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </div>
        <h3 className="mt-2 text-[22px] font-normal leading-snug">{project.title}</h3>
        <p className="mt-2 max-w-[24rem] text-sm leading-relaxed text-body">{project.text}</p>
      </Link>
    </article>
  );
}
