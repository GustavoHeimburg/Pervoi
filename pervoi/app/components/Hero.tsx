"use client";

export default function Hero() {
    return (
        <section className="relative h-[100vh] flex items-center justify-center text-white pt-20 overflow-hidden">

            <img
                src="/Pizza.jpg"
                alt="Pizza"
                className="absolute inset-0 w-full h-full object-cover scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

            <div className="relative text-center px-6 max-w-3xl animate-fadeInUp">

                <h1 className="font-heading text-4xl md:text-6xl font-extrabold">
                    A Pizza Mais{" "}
                    <span className="text-red-500">Saborosa</span> da Região 🍕🔥
                </h1>

                <p className="font-body mt-5 text-lg md:text-xl opacity-90">
                    Ingredientes selecionados, massa artesanal e entrega rápida.
                    Experimente agora.
                </p>

                <div className="mt-8 flex gap-4 justify-center flex-wrap">

                    <a
                        href="https://wa.me/5549999999999?text=Olá,%20quero%20fazer%20um%20pedido"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              bg-red-600 hover:bg-red-700
              px-8 py-4 rounded-full font-semibold text-lg
              shadow-lg
              transition-all duration-300
              hover:scale-105 active:scale-95
            "
                    >
                        Pedir Agora
                    </a>

                    <a
                        href="#lojas"
                        className="
              border border-white/70 px-8 py-4 rounded-full text-lg
              transition-all duration-300
              hover:bg-white hover:text-black
            "
                    >
                        Ver Lojas
                    </a>

                </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

        </section>
    );
}