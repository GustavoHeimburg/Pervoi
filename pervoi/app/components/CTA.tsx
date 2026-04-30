export default function CTA() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            {/* Fundo suave */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white" />

            <div className="relative max-w-4xl mx-auto px-6 text-center">

                {/* Título */}
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Pronto para pedir sua pizza? 🍕
                </h2>

                {/* Texto */}
                <p className="mt-5 text-lg text-gray-600">
                    Faça seu pedido agora e receba em casa com rapidez e qualidade.
                </p>

                {/* Botão */}
                <a
                    href="https://wa.me/5549999999999?text=Olá,%20quero%20fazer%20um%20pedido"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            mt-10 inline-flex items-center gap-2
            bg-red-600 text-white
            px-8 py-4 rounded-full
            font-semibold text-lg
            shadow-md
            transition-all duration-300
            hover:bg-red-700 hover:scale-105
            active:scale-95
          "
                >
                    💬 Pedir pelo WhatsApp
                </a>

            </div>
        </section>
    );
}