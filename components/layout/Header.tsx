"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

// Definição de tipos para os itens de menu
type MenuItem = {
  label: string;
  href: string;
  hasChildren: boolean;
  children?: {
    label: string;
    href: string;
  }[];
};

// Menu items (ajuste conforme suas rotas reais)
const NAV_ITEMS: MenuItem[] = [
  { label: "Produtos", href: "/solutions", hasChildren: false },
  { label: "Empresa", href: "/#company", hasChildren: false },  
  { 
    label: "Cases", 
    href: "/cases", 
    hasChildren: true,
    children: [
      { label: "Todos", href: "/cases" },
      { label: "Beverages", href: "/cases?industry=Beverages" },
      { label: "Energy", href: "/cases?industry=Energy" },
      { label: "Automotive", href: "/cases?industry=Automotive" },
      { label: "Cosmetics", href: "/cases?industry=Cosmetics" },
    ] 
  },
  { label: "Contato", href: "/contato", hasChildren: false },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("PT");
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
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
                className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-red-600"
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
              className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-red-600"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay escuro atrás com transição suave - Movido para fora do header */}
      <div 
        className={`fixed inset-0 z-[60] bg-black transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)} 
      />

      {/* Drawer lateral esquerdo - Movido para fora do header */}
      <aside
        aria-hidden={!isMenuOpen}
        className={`fixed inset-y-0 left-0 z-[70] w-[85vw] sm:w-[380px] max-w-[420px] transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0 shadow-[5px_0_25px_rgba(0,0,0,0.3)]" : "-translate-x-full"
        }`}
      >
        {/* Fundo branco com texto cinza médio */}
        <div className="relative h-full w-full bg-white text-gray-600 shadow-2xl border-r border-gray-200">
          <div className="flex items-center justify-between p-4">
            <button 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200" 
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
                  {item.hasChildren ? (
                    <button
                      className={`group flex items-center justify-between w-full text-lg sm:text-xl font-semibold tracking-wide py-2 ${
                        activeSubmenu === item.label
                          ? 'text-gray-800 bg-gray-100 pl-3 rounded-lg' 
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:pl-3 transition-all duration-200'
                      }`}
                      onClick={() => {
                        setActiveSubmenu(activeSubmenu === item.label ? null : item.label);
                      }}
                    >
                      <span className="whitespace-pre-line">{item.label}</span>
                      <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-gray-700" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`group flex items-center justify-between text-lg sm:text-xl font-semibold tracking-wide py-2 ${
                        pathname === item.href 
                          ? 'text-gray-800 bg-gray-100 pl-3 rounded-lg' 
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:pl-3 transition-all duration-200'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="whitespace-pre-line">{item.label}</span>
                      <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-gray-700" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Rodapé opcional do drawer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} JA Automation. Todos os direitos reservados.</p>
          </div>
        </div>
      </aside>

      {/* Submenu lateral (aparece à esquerda, após o menu principal) */}
      {NAV_ITEMS.map((item) => {
        if (item.hasChildren && activeSubmenu === item.label) {
          return (
            <aside
              key={`submenu-${item.label}`}
              aria-hidden={!isMenuOpen || activeSubmenu !== item.label}
              className={`fixed inset-y-0 left-0 z-[75] transform transition-all duration-300 ease-in-out ${
                isMenuOpen && activeSubmenu === item.label 
                  ? "translate-x-[85vw] sm:translate-x-[380px] shadow-[5px_0_25px_rgba(0,0,0,0.3)]" 
                  : "-translate-x-full"
              }`}
              style={{ 
                width: "85vw", // Para telas pequenas
                maxWidth: "380px" // Largura máxima
              }}
            >
              <div className="relative h-full w-full bg-white text-gray-600 shadow-2xl border-r border-gray-200">
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.label}</h3>
                  <button 
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200" 
                    onClick={() => setActiveSubmenu(null)}
                    aria-label="Fechar submenu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="mt-2 px-4">
                  <ul className="space-y-3">
                    {item.children?.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={`block text-xl font-medium py-2 px-3 rounded-lg ${
                            (pathname === child.href || 
                             (pathname === item.href && child.label === 'Todos')) 
                              ? 'text-gray-800 bg-gray-100' 
                              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all duration-200'
                          }`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveSubmenu(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          );
        }
        return null;
      })}
    </>
  );
}