import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { foundationTranslations } from './sections/FoundationContent';
import { residenciesProgramTranslations } from './sections/ResidenciesProgramContent'
import { archiveTranslations } from './sections/ArchiveContent';
import { homeTranslations } from './sections/HomeContent';
import { detailsTranslations } from './sections/DetailsContent';
import { publicationTranslations } from './sections/PublicationContent';
import { exhibitionTranslations } from './sections/ExpositionContent';
import { successCancelTranslations } from './sections/SuccesCancelContent';
import { nextResidencyTranslations } from './sections/NextResidencyContent';

const translations = {
  es: {
    home: "Inicio",
    foundation: "Fundación Azar",
    residenciesProgram: "Residencias",
    archive: "Proyectos",
    residency: "Residencia",
    exposition: "Exposición",
    artPiece: "Obra Colectiva",
    publication: "Publicación",
    collaboration: "Colaboración", 
    shop: "Tienda",
    all: "Todo",
    ...foundationTranslations.es,
    ...residenciesProgramTranslations.es,
    ...archiveTranslations.es,
    ...homeTranslations.es,
    ...detailsTranslations.es,
    ...publicationTranslations.es,
    ...exhibitionTranslations.es,
    ...successCancelTranslations.es,
    ...nextResidencyTranslations.es,
  },
  en: {
    home: "Home",
    foundation: "Azar Foundation",
    residenciesProgram: "Residencies",
    archive: "Projects",
    residency: "Residency",
    exposition: "Exhibition",
    artPiece: "Collective Art Piece",
    publication: "Publication",
    collaboration: "Collaboration", 
    shop: "Shop",
    all: "All",
    ...foundationTranslations.en,
    ...residenciesProgramTranslations.en,
    ...archiveTranslations.en,
    ...homeTranslations.en,
    ...detailsTranslations.en,
    ...publicationTranslations.en,
    ...exhibitionTranslations.en,
    ...successCancelTranslations.en,
    ...nextResidencyTranslations.en,
  },
  pt: {
    home: "Início",
    foundation: "Fundação Azar",
    residenciesProgram: "Residências",
    archive: "Projetos",
    residency: "Residência",
    exposition: "Exposição",
    artPiece: "Obra Coletiva",
    publication: "Publicação",
    collaboration: "Colaboração", 
    shop: "Loja",
    all: "Todo",
    ...foundationTranslations.pt,
    ...residenciesProgramTranslations.pt,
    ...archiveTranslations.pt,
    ...homeTranslations.pt,
    ...detailsTranslations.pt,
    ...publicationTranslations.pt,
    ...exhibitionTranslations.pt,
    ...successCancelTranslations.pt,
    ...nextResidencyTranslations.pt,
  }
};

const routes = {
  es: {
    home: "/inicio",
    foundation: "/fundacion-azar",
    residenciesProgram: "/programa-residencias",
    archive: "/proyectos",
    residency: "/residencia",
    exposition: "/exposicion",
    artPiece: "/obra-colectiva",
    publication: "/publicacion",
    collaboration: "/colaboracion" ,
    jury: "/jurado"
  },
  en: {
    home: "/home",
    foundation: "/azar-foundation",
    residenciesProgram: "/residencies-program",
    archive: "/projects",
    residency: "/residency",
    exposition: "/exhibition",
    artPiece: "/collective-art-piece",
    publication: "/publication",
    collaboration: "/collaboration",
    jury: "/jury"
  },
  pt: {
    home: "/pt/inicio",
    foundation: "/pt/azar-fundacao",
    residenciesProgram: "/pt/programa-residencias",
    archive: "/pt/projetos",
    residency: "/pt/residencia",
    exposition: "/pt/exposicao",
    artPiece: "/pt/obra-coletiva",
    publication: "/pt/publicacao",
    collaboration: "/pt/colaboracao",
    jury: "/pt/jurado"
  }
};

const routeMap = {
  // Español (rutas por defecto)
  "/inicio": { es: "/inicio", en: "/home", pt: "/pt/inicio" },
  "/fundacion-azar": { es: "/fundacion-azar", en: "/azar-foundation", pt: "/pt/azar-fundacao" },
  "/programa-residencias": { es: "/programa-residencias", en: "/residencies-program", pt: "/pt/programa-residencias" },
  "/proyectos": { es: "/proyectos", en: "/projects", pt: "/pt/projetos" },
  "/residencia": { es: "/residencia", en: "/residency", pt: "/pt/residencia" },
  "/exposicion": { es: "/exposicion", en: "/exhibition", pt: "/pt/exposicao" },
  "/obra-colectiva": { es: "/obra-colectiva", en: "/collective-art-piece", pt: "/pt/obra-coletiva" },
  "/publicacion": { es: "/publicacion", en: "/publication", pt: "/pt/publicacao" },
  "/colaboracion": { es: "/colaboracion", en: "/collaboration", pt: "/pt/colaboracao" }, 
  "/jurado": { es: "/jurado", en: "/jury", pt: "/pt/jurado" }, 

  // Inglés
  "/home": { es: "/inicio", en: "/home", pt: "/pt/inicio" },
  "/azar-foundation": { es: "/fundacion-azar", en: "/azar-foundation", pt: "/pt/azar-fundacao" },
  "/residencies-program": { es: "/programa-residencias", en: "/residencies-program", pt: "/pt/programa-residencias" },
  "/projects": { es: "/proyectos", en: "/projects", pt: "/pt/projetos" },
  "/residency": { es: "/residencia", en: "/residency", pt: "/pt/residencia" },
  "/exhibition": { es: "/exposicion", en: "/exhibition", pt: "/pt/exposicao" },
  "/collective-art-piece": { es: "/obra-colectiva", en: "/collective-art-piece", pt: "/pt/obra-coletiva" },
  "/publication": { es: "/publicacion", en: "/publication", pt: "/pt/publicacao" },
  "/collaboration": { es: "/colaboracion", en: "/collaboration", pt: "/pt/colaboracao" }, 
  "/jury": { es: "/jurado", en: "/jury", pt: "/pt/jurado" }, 

  // Portugués
  "/pt/inicio": { es: "/inicio", en: "/home", pt: "/pt/inicio" },
  "/pt/azar-fundacao": { es: "/fundacion-azar", en: "/azar-foundation", pt: "/pt/azar-fundacao" },
  "/pt/programa-residencias": { es: "/programa-residencias", en: "/residencies-program", pt: "/pt/programa-residencias" },
  "/pt/projetos": { es: "/proyectos", en: "/projects", pt: "/pt/projetos" },
  "/pt/residencia": { es: "/residencia", en: "/residency", pt: "/pt/residencia" },
  "/pt/exposicao": { es: "/exposicion", en: "/exhibition", pt: "/pt/exposicao" },
  "/pt/obra-coletiva": { es: "/obra-colectiva", en: "/collective-art-piece", pt: "/pt/obra-coletiva" },
  "/pt/publicacao": { es: "/publicacion", en: "/publication", pt: "/pt/publicacao" },
  "/pt/colaboracao": { es: "/colaboracion", en: "/collaboration", pt: "/pt/colaboracao" } ,
  "/pt/jurado": { es: "/jurado", en: "/jury", pt: "/pt/jurado" }, 
};

const detectLanguageFromPath = (path) => {
  if (path.startsWith('/pt/')) {
    return 'pt';
  }

  const firstSegment = '/' + path.split('/')[1];

  for (const route of Object.values(routes.en)) {
    if (route === firstSegment) {
      return 'en';
    }
  }

  return 'es';
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [language, setLanguage] = useState(() => {
    return detectLanguageFromPath(location.pathname);
  });

  const changeLanguage = (newLanguage) => {
    const currentPath = location.pathname;
    let basePath;
    let params = '';

    const pathSegments = currentPath.split('/');
    
    if (currentPath.startsWith('/pt/')) {
      basePath = '/' + pathSegments.slice(0, 3).join('/').substring(1); 
      params = pathSegments.slice(3).join('/'); 
    } else {
      basePath = '/' + pathSegments[1]; 
      params = pathSegments.slice(2).join('/'); 
    }

    let newPath = routeMap[basePath]?.[newLanguage] || routes[newLanguage].home;

    const redirectPath = params ? `${newPath}/${params}` : newPath;

    navigate(redirectPath);
    setLanguage(newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const getRoute = (routeName, params = {}) => {
    const baseRoute = routes[language][routeName];

    if (!baseRoute) {
      console.warn(`No existe la ruta '${routeName}' para el idioma '${language}'`);
      return routes[language].home;
    }

    if (params.id !== undefined) {
      return `${baseRoute}/${params.id}`;
    }

    return baseRoute;
  };

  useEffect(() => {
    const detectedLanguage = detectLanguageFromPath(location.pathname);
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, [location.pathname, language]);

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
      t,
      getRoute,
      routes,
      availableLanguages: ['es', 'en', 'pt']
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;