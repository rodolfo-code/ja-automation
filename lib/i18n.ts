import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Tipos para as traduções
export type Locale = 'pt' | 'en';

export interface Translations {
  navigation: {
    company: string;
    cases: string;
    services: string;
    contact: string;
    all: string;
    close: string;
  };
  services: {
    'plc-ihm': string;
    vfd: string;
    'electrical-projects': string;
    'panel-assembly': string;
    'nr12-compliance': string;
    'technical-support': string;
    consulting: string;
    training: string;
    'pneumatic-projects': string;
    'mitsubishi-representation': string;
  };
  industries: {
    beverages: string;
    energy: string;
    automotive: string;
    cosmetics: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    contactUs: string;
    getQuote: string;
    viewAll: string;
    backToTop: string;
  };
  footer: {
    rightsReserved: string;
    followUs: string;
    quickLinks: string;
    contactInfo: string;
  };
  servicesGrid: {
    title: string;
    subtitle: string;
    ctaText: string;
    viewAllServices: string;
    getInTouch: string;
  };
}

// Função para carregar traduções
export async function getTranslations(locale: Locale): Promise<Translations> {
  try {
    const translations = await import(`../locales/${locale}/common.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    // Fallback para português se houver erro
    const fallback = await import('../locales/pt/common.json');
    return fallback.default;
  }
}

// Hook para usar traduções em componentes client-side
export function useTranslations() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const [translations, setTranslations] = useState<Translations | null>(null);

  useEffect(() => {
    getTranslations(locale).then(setTranslations);
  }, [locale]);

  // Fallback para traduções em português se ainda não carregou
  const fallbackTranslations: Translations = {
    navigation: {
      company: "Empresa", 
      cases: "Cases",
      services: "Serviços",
      contact: "Contato",
      all: "Todos",
      close: "Fechar"
    },
    services: {
      "plc-ihm": "Programação de PLC e IHM",
      vfd: "Programação de Drivers e Inversores",
      "electrical-projects": "Projeto Elétrico",
      "panel-assembly": "Montagem de Painéis",
      "nr12-compliance": "Adequação de Máquinas a Norma NR-12",
      "technical-support": "Suporte Técnico",
      consulting: "Consultoria em Engenharia e Projetos",
      training: "Treinamentos",
      "pneumatic-projects": "Projeto Pneumático, Hidráulico e Vácuo",
      "mitsubishi-representation": "Representação Mitsubishi"
    },
    industries: {
      beverages: "Beverages",
      energy: "Energy",
      automotive: "Automotive",
      cosmetics: "Cosmetics"
    },
    common: {
      readMore: "Leia mais",
      learnMore: "Saiba mais",
      contactUs: "Entre em contato",
      getQuote: "Solicitar orçamento",
      viewAll: "Ver todos",
      backToTop: "Voltar ao topo"
    },
    footer: {
      rightsReserved: "Todos os direitos reservados",
      followUs: "Siga-nos",
      quickLinks: "Links rápidos",
      contactInfo: "Informações de contato"
    },
    servicesGrid: {
      title: "Nossos Serviços",
      subtitle: "Soluções completas para automação industrial e otimização de processos",
      ctaText: "Pronto para transformar seus processos industriais?",
      viewAllServices: "Ver Todos os Serviços",
      getInTouch: "Entre em Contato"
    }
  };

  return {
    locale,
    t: translations || fallbackTranslations,
    changeLocale: (newLocale: Locale) => {
      const pathWithoutLocale = getPathWithoutLocale(pathname);
      router.push(`/${newLocale}${pathWithoutLocale}`);
    }
  };
}

// Função utilitária para obter tradução por chave
export function getTranslationKey(translations: Translations, key: string): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }
  
  return value;
}

// Função para obter o idioma baseado na URL ou navegador
export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/');
  const firstSegment = segments[1];
  
  if (firstSegment === 'en') return 'en';
  if (firstSegment === 'pt') return 'pt';
  
  // Fallback para português
  return 'pt';
}

// Função para obter o caminho sem o idioma
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/');
  const locale = segments[1];
  
  if (locale === 'en' || locale === 'pt') {
    return '/' + segments.slice(2).join('/');
  }
  
  return pathname;
}
