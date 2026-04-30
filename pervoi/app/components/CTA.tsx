export default function CTA() {
    return (
        <section className="py-20 bg-red-600 text-white text-center relative overflow-hidden">

            <div className="absolute inset-0 opacity-10 bg-[url('/pizza-pattern.png')] bg-cover" />

            <div className="relative max-w-3xl mx-auto px-6">

                <h2 className="font-heading text-4xl font-bold">
                    Bateu a fome? 🍕🔥
                </h2>

                <p className="mt-4 text-lg md:text-xl opacity-90">
                    Peça agora no WhatsApp e receba sua pizza quentinha na sua casa
                </p>

                <a
                    href="https://wa.me/5549999999999?text=Olá,%20quero%20fazer%20um%20pedido"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            mt-8 inline-block
            bg-white text-red-600
            px-8 py-4
            rounded-full
            font-semibold text-lg
            shadow-lg
            transition-all duration-300
            hover:scale-105 hover:shadow-xl
            active:scale-95
          "
                >
                    Pedir Agora no WhatsApp
                </a>

            </div>
        </section>
    );
}