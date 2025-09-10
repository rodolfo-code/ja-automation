"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

// Menu items (ajuste conforme suas rotas reais)
const NAV_ITEMS = [
  { label: "Produtos", href: "/solutions", hasChildren: false },
  { label: "Empresa", href: "/#company", hasChildren: false },
  { label: "Carreiras", href: "/#career", hasChildren: false },
  { label: "Contato", href: "/contato", hasChildren: false },
  { label: "Cases", href: "/cases", hasChildren: false },
];

// Evento especial
const SPECIAL_EVENT = {
  label: "drinktec 2025",
  href: "/drinktec-2025"
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("PT");
  const pathname = usePathname();

  // Evita scroll do body quando o menu está aberto
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logos/logo_jaautomation.png" 
              alt="JA Automation Logo" 
              width={180} 
              height={48} 
              className="object-contain h-auto w-auto max-h-16 sm:max-h-24" 
              priority
            />
          </Link>

          <div className="flex items-center gap-5">                        
            {/* Seletor de idioma */}
            <div className="relative hidden sm:block">
              <button
                className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsLanguageOpen((v) => !v)}
                aria-label="Selecionar idioma"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-28 rounded-md border border-black/10 bg-white shadow-lg">
                  <button
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setCurrentLanguage("PT");
                      setIsLanguageOpen(false);
                    }}
                  >
                    PT
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setCurrentLanguage("EN");
                      setIsLanguageOpen(false);
                    }}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
            
            {/* Botão hamburger */}
            <button
              aria-label="Abrir menu"
              className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay escuro atrás com transição suave - Movido para fora do header */}
      <div 
        className={`fixed inset-0 z-[60] bg-black transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)} 
      />

      {/* Drawer lateral esquerdo - Movido para fora do header */}
      <aside
        aria-hidden={!isMenuOpen}
        className={`fixed inset-y-0 left-0 z-[70] w-[85vw] sm:w-[380px] max-w-[420px] transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0 shadow-[5px_0_25px_rgba(0,0,0,0.3)]" : "-translate-x-full"
        }`}
      >
        {/* Gradiente e conteúdo */}
        <div className="relative h-full w-full bg-[linear-gradient(180deg,#0b5394_0%,#06386a_100%)] text-white shadow-2xl border-r border-blue-800">
          <div className="flex items-center justify-between p-4">
            <button 
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" />
              <span className="text-sm">Fechar</span>
            </button>
          </div>

          <nav className="mt-2 px-6">
            <ul className="space-y-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`group flex items-center justify-between text-2xl sm:text-3xl font-semibold tracking-wide py-2 ${
                      pathname === item.href 
                        ? 'text-white bg-blue-800/30 pl-3 rounded-lg' 
                        : 'text-white/90 hover:text-white hover:bg-blue-800/20 hover:pl-3 transition-all duration-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="whitespace-pre-line">{item.label}</span>
                    <ChevronRight className="h-5 w-5 text-white/70 group-hover:text-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Rodapé opcional do drawer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white/70 text-sm">
            <p>© {new Date().getFullYear()} JA Automation. Todos os direitos reservados.</p>
          </div>
        </div>
      </aside>
    </>
  );
}