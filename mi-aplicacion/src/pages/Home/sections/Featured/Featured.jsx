import { useNavigate } from 'react-router-dom';
import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import GenericCard from '../../../../components/GenericCard/GenericCard';
import './Featured.css';

const FeaturedItems = [
    {
        id: 1,
        img: '/Images/Residencies/Residency01/PortadaResi.jpg',
        tab: { es: "Residencias", en: "Residencies", pt: "Residências" },
        title: { es: "Residencia2025", en: "2025Residency", pt: "Residência2025" },
        description: { es: 'Escritura, Fotografía, y Cocina', en: 'Writing, Photography, and Cooking', pt: 'Escrita, Fotografia, e Culinária' },
        link: '/residencia/residencia-1',
    },
    {
        id: 2,
        img: '/Images/Exhibitions/Exhibition01/Cover-expo1.jpg',
        tab: { es: "Exposiciones", en: "Exhibitions", pt: "Exposiçãos" },
        title: { es: "Expo Residencia2025", en: "Residency2025 Expo", pt: "Expo Residência2025" },
        description: { es: "Muestra de la Residencia2025 en Madrid", en: "Sample of Residencia2025 in Madrid", pt: "Exposição da Residência2025 em Madrid" },
        link: '/exposicion/expo-1',
    },
    {
        id: 3,
        img: '/Images/Publications/Publication01/Publicaciones-1.jpg',
        tab: { es: "Publicaciones", en: "Publication", pt: "Publicaçãos" },
        title: { es: "Una residencia narrada por: Ivan Floro", en: "A Residency Narrated by: Ivan Floro", pt: "Uma residência narrada por: Ivan Floro" },
        description: { es: "Primera edición de la serie editorial <em>Una residencia narrada por</em>", en: "First edition of the editorial series <em>A residency narrated by</em>", pt: "Primeira edição da série editorial <em>Uma residência narrada por</em>" },
        link: '/publicacion/pub-1',
    },
    {
        id: 4,
        img: '/Images/Home/Intro/Intro2-obras.jpg',
        tab: { es: "Obras colectivas", en: "Collective works", pt: "Obras coletivas" },
        title: { es: "Memoria sense mancha", en: "Memoria sense mancha", pt: "Memoria sense mancha" },
        description: { es: "Instalación • Finca El Azahar", en: "Installation • Finca El Azahar", pt: "Instalação • Finca El Azahar" },
        link: '/obra-colectiva/artPiece-1',
    },
    {
        id: 5,
        img: '/Images/Exhibitions/Exhibition02/libro1bien.webp',
        tab: { es: "Exposiciones", en: "Exhibitions", pt: "Exposiçãos" },
        title: { es: "Presentación <em>Una residencia narrada por Ivan Floro</em>", en: "", pt: "" },
        description: { es: "Presentación en Barcelona del libro resultado de la Residencia2025", en: "", pt: "" },
        link: '/exposicion/expo-2',
    },
    {
        id: 6,
        img: '/Images/Collaborations/Collab01/Collab01-4.jpg',
        tab: { es: "Colaboraciones", en: "Collaborations", pt: "Colaboraçãos" },
        title: { es: "<em>Blanco</em>, una colaboración con el Circulo de Bellas Artes", en: "em>Blanco</em>, a collaboration with Círculo de Bellas Artes", pt: "<em>Blanco</em>, uma colaboração com o Círculo de Belas Artes" },
        description: { es: "", en: "", pt: "" },
        link: '/colaboracion/collab-1',
    }
];

function Featured({ t, getRoute }) {
    const navigate = useNavigate();
    const localizedItems = useLocalizedData(FeaturedItems);

    const handleClick = (item) => {
        if (item.link) {
            navigate(item.link);
        }
    };

    return (
        <div className="featured-section">
            <h2 className="featured-title">{t('featured')}</h2>

            <div className="featured-grid">
                {localizedItems.map(item => (
                    <GenericCard
                        key={item.id}
                        image={item.img}
                        title={item.title}
                        // description={item.description}
                        category={item.tab}
                        showCategory={!!item.tab}
                        onClick={() => handleClick(item)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Featured;