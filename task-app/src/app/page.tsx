import Image from "next/image";
import heroImage from "../../public/assets/hero.png";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main
      className={twMerge(
        "bg-[#0F0F0F] w-screen h-screen",
        "flex justify-center items-center flex-col"
      )}
    >
      <div>
        <Image
          className="max-w-[480px]"
          alt="Logo Tarefas+."
          src={heroImage}
          priority
        />
      </div>

      <h1
        className={twMerge(
          "text-white text-[38px] text-center",
          "font-bold mt-[69px]"
        )}
      >
        Sistema feito para você organizar <br /> seus estudos e tarefas
      </h1>
    </main>
  );
}
