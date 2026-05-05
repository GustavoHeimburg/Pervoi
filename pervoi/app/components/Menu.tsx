"use client";

import { menu } from "../data/menu";

export default function Menu() {
    return (
        <section id="cardapio" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Nosso Cardápio 🍕
                </h2>

                <Category title="Pizzas Premium" items={menu.premium} />

                <Category title="Pizzas Salgadas" items={menu.salgadas} />

                <Category title="Pizzas Doces" items={menu.doces} />

            </div>
        </section>
    );
}

function Category({ title, items }: any) {
    return (
        <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-red-600">
                {title}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
                {items.map((item: any, i: number) => (
                    <div
                        key={i}
                        className="border rounded-xl p-5 hover:shadow-md transition"
                    >
                        <h4 className="font-bold text-lg">
                            {item.name}
                        </h4>
                        <p className="text-sm opacity-80 mt-1">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}