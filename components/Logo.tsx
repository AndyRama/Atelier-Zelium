import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-serif text-[22px] font-normal tracking-[-0.01em] ${className}`}>
      Atelier <em>Zélium</em>
    </Link>
  );
}
