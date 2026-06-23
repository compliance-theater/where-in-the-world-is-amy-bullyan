import Image from "next/image";
import Link from "next/link";

const links = [
  ["PLSAS", "/plsas"],
  ["Hopkins", "/hopkins"],
  ["PLPD", "/plpd"],
  ["FAQ", "/faq"],
  ["Build a Request", "/form-builder"]
] as const;

export function Nav() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <Image
          src="/assets/nav-mark.png"
          alt="Mystery Compliance Theatre 2000"
          width={32}
          height={32}
          priority
        />
        <span>Mystery Compliance Theater 2000</span>
      </Link>
      <nav aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
