import Link from "next/link";

const Breadcrumb = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <section className="relative z-10 pb-18 pt-30 lg:pt-35 xl:pt-40">
      <div className="px-4 text-center">
        <h1 className="mb-5.5 text-heading-2 font-extrabold text-ink">
          {pageTitle}
        </h1>
        <ul className="flex items-center justify-center gap-2 text-ink/70">
          <li className="font-medium">
            <Link href="/">Home</Link>
          </li>
          <li className="font-medium">/ {pageTitle}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
