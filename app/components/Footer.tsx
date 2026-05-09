export default function Footer() {
    return (
        <footer className="bg-black text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

                <div>
                    <h2 className="text-2xl font-bold text-red-500">
                        Pervoi
                    </h2>
                    <p className="mt-4 text-sm opacity-80">
                        A melhor pizza da região, feita com ingredientes selecionados
                        e muito sabor 🍕
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Navegação
                    </h3>
                    <ul className="space-y-2 text-sm opacity-80">
                        <li><a href="#" className="hover:text-red-400">Início</a></li>
                        <li><a href="/pervoi/public#lojas" className="hover:text-red-400">Lojas</a></li>
                        <li><a href="/pervoi/public#contato" className="hover:text-red-400">Contato</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Contato
                    </h3>

                    <ul className="space-y-2 text-sm opacity-80">
                        <li>📞 (49) 2020-0051</li>
                        <li>🕒 Terça-Feira á Domingo, 18h às 23h</li>
                    </ul>

                    <a
                        href="https://wa.me/554920200051"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 bg-green-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition"
                    >
                        Falar no WhatsApp
                    </a>
                </div>

            </div>

            <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm opacity-70">
                © {new Date().getFullYear()} Pervoi Pizzaria. Todos os direitos reservados.
            </div>
        </footer>
    );
}