"use client";

import { menu } from "../data/menu";

export default function Menu() {
    return (
        <section
            id="cardapio"
            className="
        relative
        py-32
        bg-[#050505]
        overflow-hidden
      "
        >

            {/* FUNDO */}
            <div className="absolute inset-0">

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full" />

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full" />

            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-20">

                    <span
                        className="
              inline-block
              px-5 py-2 rounded-full
              bg-red-500/10
              border border-red-500/20
              text-red-400
              text-sm font-semibold
              mb-6
            "
                    >
                        🍕 Cardápio Oficial
                    </span>

                    <h2
                        className="
              text-5xl md:text-7xl
              font-black
              text-white
              leading-none
            "
                    >
                        Sabores
                        <span className="block text-red-500">
              Inesquecíveis
            </span>
                    </h2>

                    <p
                        className="
              mt-6
              text-gray-400
              max-w-2xl
              mx-auto
              text-lg
            "
                    >
                        Ingredientes selecionados, receitas exclusivas
                        e pizzas feitas para impressionar.
                    </p>

                </div>

                {/* CATEGORIAS */}
                <Category
                    title="Pizzas Premium"
                    emoji="👑"
                    items={menu.premium}
                />

                <Category
                    title="Pizzas Salgadas"
                    emoji="🔥"
                    items={menu.salgadas}
                />

                <Category
                    title="Pizzas Doces"
                    emoji="🍫"
                    items={menu.doces}
                />

            </div>
        </section>
    );
}

function Category({ title, items, emoji }: any) {
    return (
        <div className="mb-24">

            {/* TÍTULO */}
            <div className="flex items-center gap-4 mb-10">

                <div
                    className="
            w-14 h-14
            rounded-2xl
            bg-red-500/10
            border border-red-500/20
            flex items-center justify-center
            text-2xl
          "
                >
                    {emoji}
                </div>

                <div>

                    <h3
                        className="
              text-3xl md:text-4xl
              font-bold
              text-white
            "
                    >
                        {title}
                    </h3>

                    <div className="w-24 h-1 bg-red-500 rounded-full mt-3" />

                </div>

            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-6">

                {items.map((item: any, i: number) => (

                    <div
                        key={i}
                        className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6

              transition-all duration-500
              hover:border-red-500/40
              hover:bg-white/[0.05]
              hover:-translate-y-1
            "
                    >

                        {/* GLOW */}
                        <div
                            className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
                bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_40%)]
              "
                        />

                        <div className="relative flex justify-between gap-5">

                            {/* TEXTO */}
                            <div>

                                <h4
                                    className="
                    text-xl
                    font-bold
                    text-white
                  "
                                >
                                    {item.name}
                                </h4>

                                <p
                                    className="
                    mt-2
                    text-gray-400
                    leading-relaxed
                    text-sm
                  "
                                >
                                    {item.description}
                                </p>

                            </div>

                            {/* BOTÃO */}
                            <a
                                href={`https://wa.me/554920200051?text=Quero%20a%20pizza%20${item.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  shrink-0
                  h-fit

                  bg-red-600/15
                  border border-red-500/20
                  text-red-400

                  px-4 py-2
                  rounded-xl

                  text-sm font-semibold

                  transition-all duration-300

                  hover:bg-red-500
                  hover:text-white
                  hover:scale-105
                "
                            >
                                Pedir →
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}