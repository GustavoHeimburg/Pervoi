export default function CTA() {
    return (
        <section className="relative py-32 overflow-hidden bg-black text-white">

            {/* BACKGROUND */}
            <div className="absolute inset-0">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff000030,transparent_35%)]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#7f0000,transparent_40%)]" />

                <div className="absolute inset-0 bg-black/80" />

            </div>

            {/* CONTEÚDO */}
            <div className="relative max-w-5xl mx-auto px-6 text-center">

                {/* TAG */}
                <div className="
          inline-flex items-center gap-2
          px-5 py-2
          rounded-full
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          text-sm text-gray-300
        ">
                    🔥 Delivery rápido • Pizza premium
                </div>

                {/* TÍTULO */}
                <h2 className="
          mt-8
          text-5xl md:text-7xl
          font-black
          leading-[0.95]
          tracking-tight
        ">
                    Sua próxima
                    <span className="block text-red-500">
            pizza favorita.
          </span>
                </h2>

                {/* TEXTO */}
                <p className="
          mt-8
          text-lg md:text-xl
          text-gray-300
          max-w-2xl
          mx-auto
          leading-relaxed
        ">
                    Ingredientes selecionados, massa artesanal,
                    muito recheio e uma experiência absurda em cada fatia.
                </p>

                {/* BOTÃO */}
                <div className="mt-12">

                    <a
                        href="https://wa.me/554920200051?text=Olá,%20quero%20fazer%20um%20pedido"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              inline-flex items-center gap-3
              bg-red-600
              hover:bg-red-700
              px-10 py-5
              rounded-2xl
              font-bold
              text-lg
              transition-all duration-300
              hover:scale-105
              shadow-[0_0_50px_rgba(255,0,0,0.4)]
            "
                    >
                        💬 Pedir pelo WhatsApp
                    </a>

                </div>

            </div>
        </section>
    );
}