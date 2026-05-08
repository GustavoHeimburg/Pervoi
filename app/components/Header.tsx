"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 left-0 z-50">

            <div className="bg-black/60 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

                    <img
                        src="/pervoi_logo_site.png"
                        alt="Pervoi Pizzaria"
                        className="h-10 md:h-12 object-contain"
                    />

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="/pervoi/public" className="hover:text-red-400 transition">Início</a>
                        <a href="/pervoi/public#lojas" className="hover:text-red-400 transition">Lojas</a>
                        <a href="/pervoi/public#contato" className="hover:text-red-400 transition">Contato</a>
                        <a href="/cardapio" className="hover:text-red-400 transition">Cardápio</a>
                    </nav>

                    <a
                        href="https://wa.me/5549999999999?text=Olá,%20quero%20fazer%20um%20pedido"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              hidden md:inline-block
              bg-red-600 px-6 py-2 rounded-full
              font-semibold text-sm
              shadow-md
              transition-all duration-300
              hover:bg-red-700 hover:scale-105 active:scale-95
            "
                    >
                        Pedir Agora
                    </a>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            <div
                className={`
          md:hidden bg-black/95 backdrop-blur-md text-white
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-60 py-6" : "max-h-0"}
        `}
            >
                <div className="flex flex-col items-center gap-6 text-lg">

                    <a onClick={() => setOpen(false)}>Início</a>
                    <a href="#lojas" onClick={() => setOpen(false)}>Lojas</a>
                    <a href="#contato" onClick={() => setOpen(false)}>Contato</a>

                    <a
                        href="https://wa.me/5549999999999"
                        className="bg-red-600 px-6 py-3 rounded-full font-semibold"
                    >
                        Pedir Agora
                    </a>

                </div>
            </div>
        </header>
    );
}