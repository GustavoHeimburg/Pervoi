export default function Reviews() {
    return (
        <section className="relative py-32 bg-black text-white overflow-hidden">

            {/* BG */}
            <div className="absolute inset-0">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ff000020,transparent_30%)]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#7f0000,transparent_35%)]" />

            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto">

                    <div className="
            inline-flex items-center gap-2
            px-5 py-2
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            text-sm text-gray-300
          ">
                        ⭐ Avaliações reais
                    </div>

                    <h2 className="
            mt-8
            text-5xl md:text-6xl
            font-black
            leading-tight
          ">
                        Quem prova,
                        <span className="block text-red-500">
              não esquece.
            </span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-400">
                        Clientes apaixonados pelo sabor da Pervoi 🍕
                    </p>

                </div>

                {/* CARDS */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">

                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="
                relative
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                overflow-hidden
                hover:-translate-y-2
                transition-all duration-500
              "
                        >

                            {/* GLOW */}
                            <div className="
                absolute inset-0
                bg-gradient-to-br
                from-red-500/10
                to-transparent
                opacity-0 hover:opacity-100
                transition-all duration-500
              " />

                            <div className="relative z-10">

                                <div className="text-yellow-400 text-xl">
                                    ★★★★★
                                </div>

                                <p className="
                  mt-6
                  text-gray-300
                  leading-relaxed
                  text-lg
                ">
                                    {review.text}
                                </p>

                                <div className="mt-8 flex items-center gap-4">

                                    <div className="
                    w-14 h-14
                    rounded-2xl
                    bg-red-600
                    flex items-center justify-center
                    font-black
                    text-lg
                  ">
                                        {review.initial}
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg">
                                            {review.name}
                                        </h3>

                                        <p className="text-sm text-gray-400">
                                            {review.city}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

const reviews = [
    {
        name: "Marcos Silva",
        city: "Cliente de Concórdia",
        initial: "M",
        text: "Pizza incrível, muito recheada e chegou super rápido. Uma das melhores que já comi.",
    },
    {
        name: "Amanda Souza",
        city: "Cliente de Seara",
        initial: "A",
        text: "Atendimento excelente e sabor absurdo. Dá pra sentir a qualidade dos ingredientes.",
    },
    {
        name: "João Pereira",
        city: "Cliente de Erechim",
        initial: "J",
        text: "Simplesmente perfeita. Massa leve, muito sabor e uma experiência diferenciada.",
    },
];