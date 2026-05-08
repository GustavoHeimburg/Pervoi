export default function Reviews() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-heading font-bold text-gray-900">
                    Quem prova, aprova 🍕
                </h2>

                <p className="mt-4 text-gray-600">
                    Veja o que nossos clientes estão dizendo
                </p>

                <div className="mt-14 grid md:grid-cols-3 gap-8">

                    {/* Review */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left">

                        <div className="flex items-center gap-1 text-yellow-500 text-lg">
                            ★★★★★
                        </div>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Pizza incrível, muito bem recheada e chegou super rápido.
                            Com certeza vou pedir novamente!
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-500">
                                M
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    Marcos Silva
                                </p>
                                <p className="text-xs text-gray-500">
                                    Cliente de Concórdia
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Review 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left">

                        <div className="flex items-center gap-1 text-yellow-500 text-lg">
                            ★★★★★
                        </div>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Atendimento excelente e a pizza veio quentinha.
                            Uma das melhores da região!
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-500">
                                A
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    Amanda Souza
                                </p>
                                <p className="text-xs text-gray-500">
                                    Cliente de Seara
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Review 3 */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left">

                        <div className="flex items-center gap-1 text-yellow-500 text-lg">
                            ★★★★★
                        </div>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Simplesmente perfeita! Massa leve, ingredientes de qualidade
                            e muito sabor. Recomendo demais!
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-500">
                                J
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    João Pereira
                                </p>
                                <p className="text-xs text-gray-500">
                                    Cliente de Erechim
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}