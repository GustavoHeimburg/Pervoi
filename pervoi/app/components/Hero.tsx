"use client";

export default function Hero() {
    return (
        <section className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden">

            {/* IMAGEM PRINCIPAL */}
            <img
                src="/Pizza.jpg"
                alt="Pizza"
                className="absolute inset-0 w-full h-full object-cover scale-110"
            />

            {/* IMAGENS SECUNDÁRIAS (efeito depth) */}
            <img
                src="/pizza2.jpg"
                className="absolute top-10 left-10 w-40 md:w-60 opacity-30 blur-sm rotate-12"
            />

            <img
                src="/pizza3.jpg"
                className="absolute bottom-10 right-10 w-40 md:w-60 opacity-30 blur-sm -rotate-12"
            />

            <img
                src="/pizza4.jpg"
                className="absolute top-1/3 right-20 w-32 md:w-48 opacity-20 blur-md rotate-6"
            />

            {/* OVERLAY PROFUNDO */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

            {/* GLOW */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/30 blur-3xl rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full" />

            {/* CONTEÚDO */}
            <div className="relative text-center px-6 max-w-3xl animate-fadeInUp">

                <h1 className="font-heading text-4xl md:text-6xl font-extrabold leading-tight">
                    A Pizza Mais{" "}
                    <span className="text-red-500">Saborosa</span> da Região 🍕🔥
                </h1>

                <p className="font-body mt-5 text-lg md:text-xl opacity-90">
                    Ingredientes selecionados, massa artesanal e entrega rápida.
                    Experimente agora.
                </p>

                <div className="mt-8 flex gap-4 justify-center flex-wrap">

                    <a
                        href="https://wa.me/5549999999999"
                        target="_blank"
                        className="
              bg-red-600 hover:bg-red-700
              px-8 py-4 rounded-full font-semibold text-lg
              shadow-xl
              transition-all duration-300
              hover:scale-110 active:scale-95
            "
                    >
                        Pedir Agora
                    </a>

                    <a
                        href="#lojas"
                        className="
              border border-white/70 px-8 py-4 rounded-full text-lg
              backdrop-blur-sm
              transition-all duration-300
              hover:bg-white hover:text-black
            "
                    >
                        Ver Lojas
                    </a>

                </div>

            </div>

            {/* FADE INFERIOR */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

        </section>
    );
}