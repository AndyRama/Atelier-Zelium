"use client";

import { useState } from "react";
import { categories, projects, type Category } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  const [active, setActive] = useState<Category | "Tout">("Tout");
  const list = active === "Tout" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div role="group" aria-label="Filtrer par famille de projets" className="flex flex-wrap gap-2 border-t border-line pt-6">
        {(["Tout", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`border px-3.5 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors ${
              active === c ? "border-ink bg-ink text-cream" : "border-line text-body hover:border-ink hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length ? (
        <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <p className="mt-16 max-w-md text-body">Pas encore de réalisation dans cette famille. Écrivez-nous : on a sûrement une pièce à vous montrer.</p>
      )}
    </>
  );
}
