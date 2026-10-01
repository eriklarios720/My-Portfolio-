const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-4 px-4 text-center sm:px-8 md:flex-row md:text-left xl:px-0">
        <div>
          <p className="text-xl font-extrabold text-ink">Erik Larios</p>
          <p className="text-base font-medium text-ink/60">
            Full-Stack Developer · U.S. Army Veteran
          </p>
        </div>

        <div className="flex flex-col items-center gap-1 md:items-end">
          <a
            href="mailto:erik.larios720@gmail.com"
            className="text-base font-medium text-ink/70 hover:text-accent"
          >
            erik.larios720@gmail.com
          </a>
          <p className="text-sm font-medium text-ink/50">
            &copy; {year} Erik Larios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
