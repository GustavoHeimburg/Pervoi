export default function Footer() {
    return (
        <footer
            id="contato"
            className="relative overflow-hidden bg-black text-white"
        >

            {/* FUNDO */}
            <div className="absolute inset-0">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.25),transparent_60%)]" />

                <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-600/20 blur-3xl rounded-full" />

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full" />

            </div>

            {/* CONTEÚDO */}
            <div className="relative max-w-7xl mx-auto px-6 py-24">

                <div className="grid md:grid-cols-3 gap-14">

                    {/* LOGO */}
                    <div>

                        <img
                            src="/pervoi_logo_site.png"
                            alt="Pervoi"
                            className="h-14 object-contain"
                        />

                        <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
                            A experiência definitiva em pizzas artesanais.
                            Ingredientes selecionados, sabores únicos e entrega
                            rápida para toda região 🍕
                        </p>

                    </div>

                    {/* LINKS */}
                    <div>

                        <h3 className="text-xl font-bold mb-6">
                            Navegação
                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-red-400 transition"
                                >
                                    Início
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#lojas"
                                    className="hover:text-red-400 transition"
                                >
                                    Lojas
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#contato"
                                    className="hover:text-red-400 transition"
                                >
                                    Contato
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/cardapio"
                                    className="hover:text-red-400 transition"
                                >
                                    Cardápio
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* CONTATO */}
                    <div>

                        <h3 className="text-xl font-bold mb-6">
                            Contato
                        </h3>

                        <div className="space-y-4 text-gray-400">

                            <p>
                                📞 (49) 2020-0051
                            </p>

                            <p>
                                🕒 Terça à Domingo — 18h às 23h
                            </p>

                            <p>
                                📍 Xanxerê - SC
                            </p>

                        </div>

                        <a
                            href="https://wa.me/554920200051"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                mt-8 inline-flex items-center gap-3
                bg-red-600 hover:bg-red-500
                px-6 py-4 rounded-2xl
                font-semibold
                transition-all duration-300
                hover:scale-105
                shadow-[0_0_30px_rgba(239,68,68,0.35)]
              "
                        >
                            💬 Pedir pelo WhatsApp
                        </a>

                    </div>

                </div>

                {/* LINHA */}
                <div className="border-t border-white/10 mt-16 pt-8">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-sm text-gray-500 text-center md:text-left">
                            © {new Date().getFullYear()} Pervoi Pizzaria.
                            Todos os direitos reservados.
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
}