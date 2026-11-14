"use client";

import type { FormEvent } from "react";

// Mise en page seulement : le formulaire n'envoie rien pour l'instant.
// TODO (2e temps) : react-hook-form + zod, route handler (/api/contact), envoi Brevo/SMTP, upload des fichiers.

const field =
  "w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none focus:ring-0";
const label = "block text-[10px] font-medium uppercase tracking-[0.2em] text-muted";

const projectTypes = ["Cuisine", "Dressing & rangements", "Bibliothèque", "Escalier", "Mobilier & pièce unique", "Agencement professionnel", "Atelier à la demande", "Autre"];
const budgets = ["Je ne sais pas encore", "Moins de 3 000 €", "3 000 – 10 000 €", "10 000 – 25 000 €", "Plus de 25 000 €"]; // TODO : valider les tranches avec l'atelier

export function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className={label}>Nom et prénom *</label>
          <input id="nom" name="nom" required autoComplete="name" placeholder="Camille Martin" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="camille@exemple.fr" className={field} />
        </div>
        <div>
          <label htmlFor="tel" className={label}>Téléphone</label>
          <input id="tel" name="tel" type="tel" autoComplete="tel" placeholder="06 00 00 00 00" className={field} />
        </div>
        <div>
          <label htmlFor="type" className={label}>Type de projet</label>
          <select id="type" name="type" defaultValue="" className={`${field} appearance-none`}>
            <option value="" disabled>Choisir…</option>
            {projectTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={label}>Budget indicatif</label>
        <select id="budget" name="budget" defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled>Choisir…</option>
          {budgets.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="projet" className={label}>Votre projet *</label>
        <textarea id="projet" name="projet" required rows={4} placeholder="Le lieu, les dimensions approximatives, ce que vous aimeriez faire…" className={`${field} resize-none`} />
      </div>

      <div>
        <span className={label}>Photos ou plans (optionnel)</span>
        <label className="mt-3 flex cursor-pointer items-center gap-3 border border-dashed border-ink/30 px-4 py-3.5 text-sm text-body transition-colors hover:border-ink focus-within:border-ink focus-within:outline focus-within:outline-2 focus-within:outline-gold">
          <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M8 11V2m0 0L5 5m3-3 3 3M2 11v2.5h12V11" /></svg>
          Ajouter des photos ou un plan (5 max)
          <input type="file" name="fichiers" multiple accept="image/*,.pdf" className="sr-only" />
        </label>
        <p className="mt-2 text-xs text-muted">Les fichiers sont envoyés dans un espace privé, accessibles seulement par l'atelier.</p>
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-body">
        <input type="checkbox" name="consentement" required className="mt-0.5 h-4 w-4 shrink-0 accent-ink" />
        J'accepte que ces informations soient utilisées pour répondre à ma demande. Aucun démarchage, aucune revente de données.
      </label>

      <button type="submit" className="bg-ink px-7 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-ink/85">
        Envoyer ma demande
      </button>
    </form>
  );
}
