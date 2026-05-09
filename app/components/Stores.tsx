"use client";

const stores = [
    {
        name: "PERVOI CONCÓRDIA - SC",
        address: "Centro, Rua Leonel Mosele, 397",
        image: "/loja1.webp",
        phone: "34445377",
    },
    {
        name: "PERVOI SEARA - SC",
        address: "Rua Herculano H. Zanuzzo, 890",
        image: "/loja2.webp",
        phone: "34524100",
    },
    {
        name: "PERVOI ERECHIM - RS",
        address: "Rua Léo Neuls, 164",
        image: "/loja3.webp",
        phone: "35222020",
    },
    {
        name: "PERVOI XANXERÊ - SC",
        address: "Rua Emílio Alett, 366 – Bairro Veneza",
        image: "/loja4.webp",
        phone: "4920200051",
    },
    {
        name: "PERVOI IRANI - SC",
        address: "Centro, Rua Constante Poggere, 25",
        image: "/loja5.webp",
        phone: "554930308500",
    },
];

export default function Stores() {
    return (
        <section id="lojas" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
                    Nossas <span className="text-red-500">Lojas</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {stores.map((store, index) => (
                        <div
                            key={index}
                            className="group relative h-[320px] rounded-3xl overflow-hidden shadow-xl"
                        >

                            <img
                                src={store.image}
                                alt={store.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            <div className="absolute bottom-0 w-full p-6">

                                <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-5">

                                    <h3 className="text-lg font-bold text-white leading-tight">
                                        {store.name}
                                    </h3>

                                    <p className="text-sm text-gray-300 mt-1">
                                        {store.address}
                                    </p>

                                    <a
                                        href={`https://wa.me/55${store.phone}?text=Olá,%20quero%20pedir%20na%20loja%20${store.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      mt-4 inline-flex items-center gap-2
                      text-sm font-semibold text-red-400
                      hover:text-white transition
                    "
                                    >
                                        Pedir agora →
                                    </a>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}