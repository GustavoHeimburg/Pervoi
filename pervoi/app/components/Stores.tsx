"use client";

const stores = [
    {
        name: "Concórdia",
        address: "Rua Leonel Mosele, 397",
        image: "/loja1.jpg",
        phone: "5549999999999",
    },
    {
        name: "Seara",
        address: "Rua Herculano H. Zanuzzo, 890",
        image: "/loja2.jpg",
        phone: "5549999999999",
    },
    {
        name: "Erechim",
        address: "Rua Léo Neuls, 164",
        image: "/loja3.jpg",
        phone: "5549999999999",
    },
];

export default function Stores() {
    return (
        <section id="lojas" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="font-heading text-2xl font-bold">
                    Nossas Lojas
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {stores.map((store, index) => (
                        <div
                            key={index}
                            className="
                relative rounded-2xl overflow-hidden shadow-lg
                group
              "
                        >
                            <img
                                src={store.image}
                                alt={store.name}
                                className="
                  w-full h-72 object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
                            />

                            <div className="
                absolute inset-0 bg-black/60
                flex flex-col justify-end p-6 text-white
              ">
                                <h3 className="text-2xl font-bold">
                                    {store.name}
                                </h3>

                                <p className="text-sm opacity-80">
                                    {store.address}
                                </p>

                                <a
                                    href={`https://wa.me/${store.phone}?text=Olá,%20quero%20pedir%20na%20loja%20${store.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                    mt-4 inline-block
                    bg-red-600 px-4 py-2 rounded-full text-sm font-semibold
                    transition-all duration-300
                    hover:bg-red-700 hover:scale-105 active:scale-95
                  "
                                >
                                    Pedir nesta loja
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}