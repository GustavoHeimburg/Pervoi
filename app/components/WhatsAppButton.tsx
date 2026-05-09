export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/554920200051?text=Olá,%20quero%20fazer%20um%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="
        group
        fixed bottom-5 right-5 md:bottom-8 md:right-8
        z-[999]
      "
        >

            {/* GLOW */}
            <div
                className="
          absolute inset-0
          bg-green-500/40
          blur-2xl
          rounded-full
          scale-110
          group-hover:scale-125
          transition-all duration-500
        "
            />

            {/* BOTÃO */}
            <div
                className="
          relative
          flex items-center gap-3
          bg-gradient-to-br from-green-400 to-green-600
          text-white
          px-5 md:px-6
          py-4
          rounded-full
          shadow-[0_10px_40px_rgba(34,197,94,0.45)]
          border border-white/10
          backdrop-blur-xl

          transition-all duration-300
          group-hover:scale-110
          group-hover:-translate-y-1
          active:scale-95
        "
            >

                {/* ÍCONE */}
                <div
                    className="
            w-10 h-10
            rounded-full
            bg-white/15
            flex items-center justify-center
            text-xl
          "
                >
                    💬
                </div>

                {/* TEXTO */}
                <div className="hidden sm:block leading-tight">

                    <p className="text-xs opacity-80">
                        Faça seu pedido
                    </p>

                    <p className="font-bold text-sm">
                        WhatsApp
                    </p>

                </div>

            </div>

        </a>
    );
}