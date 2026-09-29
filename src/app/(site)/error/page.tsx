import Breadcrumb from "@/components/Breadcrumb";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Erik Larios",
  description: "The page you're looking for doesn't exist.",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Error Page" />

      <section className="pb-20 pt-17.5 lg:pb-25 lg:pt-22.5 xl:pb-30 xl:pt-27.5 2xl:pb-[150px]">
        <div className="mx-auto w-full max-w-[597px] px-4 text-center sm:px-8 lg:px-0">
          <div className="relative mx-auto mb-12.5 aspect-191/143 w-full max-w-[382px]">
            <Image src="/images/404.svg" alt="404" fill />
          </div>
          <h2 className="mb-5.5 text-heading-3 font-bold text-ink">
            Oops! Page Not Found.
          </h2>
          <p className="mb-9 font-medium text-ink/70">
            The page you are looking for is not available or has been moved. Try
            a different page or go to homepage with the button below.
          </p>
          <Link
            href="/"
            className="inline-flex rounded-lg bg-accent px-7 py-3 font-medium text-background duration-300 ease-in hover:opacity-85"
          >
            Go To Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
