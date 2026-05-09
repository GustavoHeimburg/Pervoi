"use client";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black text-white">

            {/* BACKGROUND */}
            <div className="absolute inset-0">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7f0000,transparent_35%)] opacity-70" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ff000020,transparent_30%)]" />

                <div className="absolute inset-0 bg-black/70" />

            </div>

            {/* HERO */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">

                <div className="grid lg:grid-cols-2 items-center gap-20">

                    {/* LEFT */}
                    <div>

                        <div className="
              inline-flex items-center gap-2
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              rounded-full
              px-5 py-2
              text-sm text-gray-300
            ">
                            🍕 Pizzaria Artesanal Premium
                        </div>

                        <h1 className="
              mt-8
              text-5xl
              md:text-7xl
              font-black
              leading-[0.95]
              tracking-tight
            ">
                            A pizza que conquista
                            <span className="block text-red-500">
                toda a região.
              </span>
                        </h1>

                        <p className="
              mt-8
              text-lg
              text-gray-300
              max-w-xl
              leading-relaxed
            ">
                            Ingredientes selecionados, massa artesanal
                            e uma experiência absurda de sabor em cada fatia.
                        </p>

                        {/* BOTÕES */}
                        <div className="mt-10 flex flex-wrap gap-4">

                            <a
                                href="https://wa.me/554920200051"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  bg-red-600
                  hover:bg-red-700
                  px-8 py-4
                  rounded-2xl
                  font-bold
                  text-lg
                  transition-all duration-300
                  hover:scale-105
                  shadow-[0_0_40px_rgba(255,0,0,0.35)]
                "
                            >
                                Pedir Agora
                            </a>

                            <a
                                href="/cardapio"
                                className="
                  border border-white/15
                  bg-white/5
                  backdrop-blur-xl
                  hover:bg-white/10
                  px-8 py-4
                  rounded-2xl
                  font-semibold
                  text-white
                  transition-all duration-300
                "
                            >
                                Ver Cardápio →
                            </a>

                        </div>

                        {/* STATS */}
                        <div className="mt-14 flex gap-10">

                            <div>
                                <h3 className="text-4xl font-black">
                                    +12mil
                                </h3>

                                <p className="text-gray-400">
                                    pedidos entregues
                                </p>
                            </div>

                            <div className="w-px bg-white/10" />

                            <div>
                                <h3 className="text-4xl font-black">
                                    4.9★
                                </h3>

                                <p className="text-gray-400">
                                    avaliações reais
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center">

                        {/* GLOW */}
                        <div className="
              absolute
              w-[450px]
              h-[450px]
              bg-red-600/20
              blur-3xl
              rounded-full
            " />

                        {/* CARD */}
                        <div className="
              relative
              rounded-[2rem]
              overflow-hidden
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-2xl
              rotate-2
              hover:rotate-0
              transition-all duration-500
            ">

                            <img
                                src="/pizza5.webp"
                                alt="Pizza"
                                className="
                  w-full
                  max-w-[520px]
                  object-cover
                "
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}