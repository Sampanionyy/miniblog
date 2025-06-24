import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
          Je suis Sampaniony RAKOTOARIVELO
        </h1>

        <p className="text-base leading-relaxed text-center sm:text-left text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          purus et augue imperdiet eleifend. Quisque malesuada tincidunt
          volutpat. Vivamus non nulla ac sapien egestas varius.
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">À propos de moi</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            interdum tincidunt mi, vitae facilisis mauris suscipit at. Morbi
            posuere pretium libero, a viverra est. Sed at magna ut libero
            luctus congue.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Mes projets</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Ut sed lectus sed sapien suscipit sodales. Praesent vitae tincidunt
            justo, nec commodo nisl. Nunc vulputate, justo vel ultricies
            fermentum, enim nisl malesuada velit, in varius felis turpis at
            neque.
          </p>
        </section>

        <h1>INGETIS</h1>
      </main>
    </div>
  );
}
