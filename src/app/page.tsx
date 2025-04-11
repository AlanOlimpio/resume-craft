import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Logo from "@/components/ui/logo";
import { BadgeCheck, FileDown, FilePenLine, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Crie seu Currículo Profissional | ModeloCurriculo.com.br",
  description:
    "Crie seu currículo profissional gratuitamente com modelos prontos e edite conforme suas necessidades. Aumente suas chances no mercado de trabalho com facilidade.",
};

export default function Home() {
  return (
    <>
      <main className="w-full  bg-gradient-to-tl from-muted flex flex-col md:justify-center p-6 pb-8 ">
        <div className="w-full h-auto max-w-[1200px]  items-center mx-auto flex flex-col md:flex-row gap-8 md:gap-12 md:pt-16">
          <div className="max-md:max-w-full max-w-[50%]">
            <Logo className="mb-4 !w-[180px]" />
            <h1 className="font-title font-bold text-5xl max-md:text-3xl">
              Crie seu Currículo Profissional em Minutos
            </h1>
            <p className="text-muted-foreground text-lg mt-2">
              Com o <strong>ModeloCurriculo.com.br</strong>, você pode criar um
              currículo profissional de forma rápida e gratuita. Utilize nossos
              modelos prontos e edite conforme suas necessidades.
            </p>

            <Link href="/dashboard/resumes" passHref>
              <Button className="mt-4 max-md:w-full">Começar agora</Button>
            </Link>
          </div>

          <div>
            <Image
              src="/images/dashboard.webp"
              alt="Imagem do painel do ResumeCraft"
              width={480}
              height={280}
            />
          </div>
        </div>
        <div className="flex max-md:flex-wrap justify-center mt-8 md:mt-20 w-full max-w-[1200px] mx-auto  gap-8 ">
          <div className="w-full  px-4  bg-muted rounded shadow-md">
            <div className="flex flex-col items-center p-6 gap-4  text-center">
              <Rocket size={32} />
              <h2 className="text-xl font-semibold text-muted-foreground">
                Modelos Profissionais
              </h2>
              <p className="text-muted-foreground text-lg">
                Designs modernos que atendem às exigências do mercado de
                trabalho atual.
              </p>
            </div>
          </div>
          <div className="w-full  px-4 bg-muted rounded shadow-md">
            <div className="flex flex-col items-center p-6 gap-4  text-center">
              <FilePenLine size={32} />
              <h2 className="text-xl font-semibold text-muted-foreground">
                Edição Simples
              </h2>
              <p className="text-muted-foreground text-lg">
                Personalize seu currículo diretamente no navegador.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full pt-4">
          <Link
            href="/dashboard/resumes"
            passHref
            className="max-md:w-full flex items-center justify-center"
          >
            <Button className="mt-4 max-md:w-full">Começar agora</Button>
          </Link>
        </div>
      </main>
      <footer className="bg-muted ">
        <div className="w-full max-w-[1200px] justify-center mx-auto p-8">
          <span className="block text-sm  text-muted-foreground  sm:text-center ">
            © 2025{" "}
            <a
              href="https://modelocurriculo.com.br/"
              className="hover:underline"
            >
              ModeloCurriculo
            </a>
            . Todos os direitos reservados.
          </span>
        </div>
      </footer>
    </>
  );
}
