"use client";

const stores = [
    {
        name: "PERVOI CONCÓRDIA - SC",
        address: "Centro, Rua Leonel Mosele, 397",
        image: "/loja1.webp",
        phone: "34445377",
        city: "Concórdia",
    },
    {
        name: "PERVOI SEARA - SC",
        address: "Rua Herculano H. Zanuzzo, 890",
        image: "/loja2.webp",
        phone: "34524100",
        city: "Seara",
    },
    {
        name: "PERVOI ERECHIM - RS",
        address: "Rua Léo Neuls, 164",
        image: "/loja3.webp",
        phone: "35222020",
        city: "Erechim",
    },
    {
        name: "PERVOI XANXERÊ - SC",
        address: "Rua Emílio Alett, 366 – Bairro Veneza",
        image: "/loja4.webp",
        phone: "4920200051",
        city: "Xanxerê",
    },
    {
        name: "PERVOI IRANI - SC",
        address: "Centro, Rua Constante Poggere, 25",
        image: "/loja5.webp",
        phone: "554930308500",
        city: "Irani",
    },
];

export default function Stores() {
    return (
        <section
            id="lojas"
            className="relative py-32 bg-black overflow-hidden"
        >
            {/* FUNDO */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.18),transparent_40%)]" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* TOPO */}
                <div className="text-center max-w-3xl mx-auto">

                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300">
                        🍕 Atendimento em toda região
                    </span>

                    <h2 className="mt-6 font-black text-5xl md:text-7xl leading-none text-white">
                        Escolha sua
                        <span className="block text-red-500">
                            loja favorita.
                        </span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                        Ambientes modernos, pizzas artesanais e entrega rápida
                        para você receber sabor de verdade em casa.
                    </p>
                </div>

                {/* GRID */}
                <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {stores.map((store, index) => (
                        <div
                            key={index}
                            className="
                group relative overflow-hidden rounded-[32px]
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:border-red-500/40
                transition-all duration-500
                hover:-translate-y-2
              "
                        >

                            {/* IMAGEM */}
                            <div className="relative h-[340px] overflow-hidden">

                                <img
                                    src={store.image}
                                    alt={store.name}
                                    className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                {/* BADGE */}
                                <div className="absolute top-5 left-5">
                  <span className="
                    px-4 py-2 rounded-full
                    bg-red-600/90 backdrop-blur-md
                    text-white text-xs font-bold tracking-wide
                    shadow-lg
                  ">
                    {store.city}
                  </span>
                                </div>

                            </div>

                            {/* CONTEÚDO */}
                            <div className="relative p-7">

                                <h3 className="text-2xl font-black text-white leading-tight">
                                    {store.name}
                                </h3>

                                <p className="mt-3 text-gray-400 leading-relaxed">
                                    {store.address}
                                </p>

                                {/* LINHA */}
                                <div className="w-full h-px bg-white/10 my-6" />

                                {/* BOTÃO */}
                                <a
                                    href={`https://wa.me/55${store.phone}?text=Olá,%20quero%20pedir%20na%20loja%20${store.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    group/btn relative overflow-hidden
                    flex items-center justify-between
                    w-full rounded-2xl
                    bg-red-600
                    px-6 py-4
                    font-bold text-white
                    transition-all duration-300
                    hover:bg-red-500
                    hover:scale-[1.02]
                  "
                                >

                                    <span className="relative z-10">
                    Pedir nesta loja
                  </span>

                                    <span className="
                    relative z-10 text-xl
                    transition-transform duration-300
                    group-hover/btn:translate-x-1
                  ">
                    →
                  </span>

                                    {/* brilho */}
                                    <div className="
                    absolute inset-0 opacity-0
                    group-hover/btn:opacity-100
                    transition duration-500
                    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)]
                    translate-x-[-100%]
                    group-hover/btn:translate-x-[100%]
                  " />

                                </a>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}