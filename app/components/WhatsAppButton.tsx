export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5549999999999?text=Olá,%20quero%20fazer%20um%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="
        fixed bottom-6 right-6 z-50
        bg-green-500 text-white
        px-5 py-3 rounded-full
        shadow-lg
        flex items-center gap-2
        transition-all duration-300
        hover:bg-green-600 hover:scale-110
        active:scale-95
      "
        >
            <span>💬</span>
            Pedir
        </a>
    );
}