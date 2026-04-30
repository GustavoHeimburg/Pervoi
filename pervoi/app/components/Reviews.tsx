export default function Reviews() {
    return (
        <section className="py-20 bg-white text-center">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-12 text-gray-800">
                    O que nossos clientes dizem 🍕
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <p className="text-gray-700">
                            "Melhor pizza que já pedi! Massa perfeita e muito recheio."
                        </p>
                        <div className="mt-4 text-yellow-500 text-lg">
                            ★★★★★
                        </div>
                        <span className="block mt-2 text-sm font-semibold">
              — Cliente satisfeito
            </span>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <p className="text-gray-700">
                            "Entrega super rápida e atendimento excelente!"
                        </p>
                        <div className="mt-4 text-yellow-500 text-lg">
                            ★★★★★
                        </div>
                        <span className="block mt-2 text-sm font-semibold">
              — Cliente fiel
            </span>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                        <p className="text-gray-700">
                            "Peço toda semana, simplesmente viciante 😍"
                        </p>
                        <div className="mt-4 text-yellow-500 text-lg">
                            ★★★★★
                        </div>
                        <span className="block mt-2 text-sm font-semibold">
              — Cliente recorrente
            </span>
                    </div>

                </div>
            </div>
        </section>
    );
}