"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 left-0 z-50">

            <div className="bg-black/60 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-6 py-4 text-white">

                    <img
                        src="/pervoi_logo_site.png"
                        alt="Pervoi Pizzaria"
                        className="h-10 md:h-12 object-contain"
                    />

                    <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
                        <a href="/" className="hover:text-red-400 transition">
                            Início
                        </a>

                        <a href="/#lojas" className="hover:text-red-400 transition">
                            Lojas
                        </a>

                        <a href="/#contato" className="hover:text-red-400 transition">
                            Contato
                        </a>

                        <a href="/cardapio" className="hover:text-red-400 transition">
                            Cardápio
                        </a>
                    </nav>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden justify-self-end p-2 rounded-lg hover:bg-white/10 transition"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            <div
                className={`
          md:hidden bg-black/60 backdrop-blur-md text-white
          border-b border-white/10
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-80 py-6" : "max-h-0"}
        `}
            >
                <div className="flex flex-col items-center gap-6 text-lg">

                    <a href="/" onClick={() => setOpen(false)}>
                        Início
                    </a>

                    <a href="/#lojas" onClick={() => setOpen(false)}>
                        Lojas
                    </a>

                    <a href="/#contato" onClick={() => setOpen(false)}>
                        Contato
                    </a>

                    <a href="/cardapio" onClick={() => setOpen(false)}>
                        Cardápio
                    </a>

                </div>
            </div>

        </header>
    );
}