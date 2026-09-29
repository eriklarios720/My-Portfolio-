import Link from "next/link";
import menuData from "@/components/Header/menuData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-ink/10 py-12">
      <div className="mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-6 px-4 sm:px-8 md:flex-row xl:px-0">
        <div className="text-center md:text-left">
          <p className="text-lg font-extrabold text-ink">Erik Larios</p>
          <p className="text-sm font-medium text-ink/60">
            Full-Stack Developer · U.S. Army Veteran
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-5">
            {menuData.map((item) => (
              <li key={item.id}>
                <Link
                  href={`${item.path}`}
                  className="text-sm font-medium text-ink/70 hover:text-accent"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm font-medium text-ink/60">
          &copy; {year} Erik Larios. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
