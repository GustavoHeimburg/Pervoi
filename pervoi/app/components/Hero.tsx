"use client";

export default function Hero() {
    return (
        <section className="relative h-[100vh] flex items-center text-white overflow-hidden">

            <img
                src="/pizza3.jpg"
                alt="Pizza"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 overflow-hidden opacity-20 blur-[2px]">

                <div className="absolute top-10 flex w-[200%] animate-slideSlow gap-16">
                    <img src="/pizza1.jpg" className="w-40 object-contain" />
                    <img src="/pizza2.jpg" className="w-40 object-contain" />
                    <img src="/pizza3.jpg" className="w-40 object-contain" />
                    <img src="/pizza4.jpg" className="w-40 object-contain" />

                    <img src="/pizza1.jpg" className="w-40 object-contain" />
                    <img src="/pizza2.jpg" className="w-40 object-contain" />
                    <img src="/pizza3.jpg" className="w-40 object-contain" />
                    <img src="/pizza4.jpg" className="w-40 object-contain" />
                </div>

                <div className="absolute bottom-10 flex w-[200%] animate-slideSlow-reverse gap-16">
                    <img src="/pizza2.jpg" className="w-32 object-contain" />
                    <img src="/pizza3.jpg" className="w-32 object-contain" />
                    <img src="/pizza1.jpg" className="w-32 object-contain" />
                    <img src="/pizza4.jpg" className="w-32 object-contain" />

                    <img src="/pizza2.jpg" className="w-32 object-contain" />
                    <img src="/pizza3.jpg" className="w-32 object-contain" />
                    <img src="/pizza1.jpg" className="w-32 object-contain" />
                    <img src="/pizza4.jpg" className="w-32 object-contain" />
                </div>

            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="max-w-xl">

          <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">
            Pizzaria Artesanal
          </span>

                    <h1 className="mt-4 font-heading text-5xl md:text-6xl font-extrabold leading-tight">
                        Sabor de verdade
                        <br />
                        <span className="text-red-500">
              em cada fatia 🍕
            </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-300">
                        Ingredientes selecionados, massa artesanal e aquele sabor
                        que faz você querer mais.
                    </p>

                    <div className="mt-8 flex gap-4 flex-wrap">

                        <a
                            href="https://wa.me/5549999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                        >
                            Pedir Agora
                        </a>

                        <a
                            href="/cardapio"
                            className="text-white border-b border-white/50 pb-1 hover:border-white"
                        >
                            Ver Cardápio →
                        </a>

                    </div>

                </div>
            </div>

        </section>
    );
}