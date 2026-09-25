import { Link, useNavigate } from 'react-router-dom';
import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import GenericCard from '../../../../components/GenericCard/GenericCard';
import './Featured.css';

// `route` es la clave de la ruta en LanguageContext (routes.es / en / pt)
// y `slug` el id del detalle. La URL final se construye según el idioma activo.
const FeaturedItems = [
    {
        id: 1,
        img: '/Images/Publications/Publication02/portada.webp',
        tab: { es: "Publicaciones", en: "Publications", pt: "Publicações" },
        title: { es: "Una residencia narrada por: Brais Rodríguez", en: "A Residency Narrated by: Brais Rodríguez", pt: "Uma residência narrada por: Brais Rodríguez" },
        description: { es: 'Escritura, Fotografía, y Cocina', en: 'Writing, Photography, and Cooking', pt: 'Escrita, Fotografia, e Culinária' },
        route: 'publication',
        slug: 'pub-2',
    },
    {
        id: 2,
        img: '/Images/Residencies/Residency01/PortadaResi.jpg',
        tab: { es: "Residencias", en: "Residencies", pt: "Residências" },
        title: { es: "Residencia2025", en: "2025Residency", pt: "Residência2025" },
        description: { es: 'Escritura, Fotografía, y Cocina', en: 'Writing, Photography, and Cooking', pt: 'Escrita, Fotografia, e Culinária' },
        route: 'residency',
        slug: 'residencia-1',
    },
    {
        id: 3,
        img: '/Images/Exhibitions/Exhibition01/Cover-expo1.jpg',
        tab: { es: "Exposiciones", en: "Exhibitions", pt: "Exposições" },
        title: { es: "Expo Residencia2025", en: "Residency2025 Expo", pt: "Expo Residência2025" },
        description: { es: "Muestra de la Residencia2025 en Madrid", en: "Sample of Residencia2025 in Madrid", pt: "Exposição da Residência2025 em Madrid" },
        route: 'exposition',
        slug: 'expo-1',
    },
    {
        id: 4,
        img: '/Images/Publications/Publication01/Publicaciones-1.jpg',
        tab: { es: "Publicaciones", en: "Publications", pt: "Publicações" },
        title: { es: "Una residencia narrada por: Ivan Floro", en: "A Residency Narrated by: Ivan Floro", pt: "Uma residência narrada por: Ivan Floro" },
        description: { es: "Primera edición de la serie editorial <em>Una residencia narrada por</em>", en: "First edition of the editorial series <em>A residency narrated by</em>", pt: "Primeira edição da série editorial <em>Uma residência narrada por</em>" },
        route: 'publication',
        slug: 'pub-1',
    },
    {
        id: 5,
        img: '/Images/Home/Intro/Intro2-obras.jpg',
        tab: { es: "Obras colectivas", en: "Collective works", pt: "Obras coletivas" },
        title: { es: "Memoria sense mancha", en: "Memoria sense mancha", pt: "Memoria sense mancha" },
        description: { es: "Instalación • Finca El Azahar", en: "Installation • Finca El Azahar", pt: "Instalação • Finca El Azahar" },
        route: 'artPiece',
        slug: 'artPiece-1',
    },
    {
        id: 6,
        img: '/Images/Exhibitions/Exhibition02/libro1bien.webp',
        tab: { es: "Exposiciones", en: "Exhibitions", pt: "Exposições" },
        title: { es: "Presentación <em>Una residencia narrada por Ivan Floro</em>", en: "Presentation of <em>Una residencia narrada por Ivan Floro</em>", pt: "Apresentação de <em>Una residencia narrada por Ivan Floro</em>" },
        description: { es: "Presentación en Barcelona del libro resultado de la Residencia2025", en: "Barcelona presentation of the book resulting from Residencia2025", pt: "Apresentação em Barcelona do livro resultante da Residência2025" },
        route: 'exposition',
        slug: 'expo-2',
    },
    {
        id: 7,
        img: '/Images/Collaborations/Collab01/Collab01-4.jpg',
        tab: { es: "Colaboraciones", en: "Collaborations", pt: "Colaborações" },
        title: { es: "<em>Blanco</em>, una colaboración con el Círculo de Bellas Artes", en: "<em>Blanco</em>, a collaboration with Círculo de Bellas Artes", pt: "<em>Blanco</em>, uma colaboração com o Círculo de Belas Artes" },
        description: { es: "", en: "", pt: "" },
        route: 'collaboration',
        slug: 'collab-1',
    }
];

function Featured({ t, getRoute }) {
    const navigate = useNavigate();
    const localizedItems = useLocalizedData(FeaturedItems);

    const handleClick = (item) => {
        if (item.route && item.slug) {
            navigate(getRoute(item.route, { id: item.slug }));
        }
    };

    return (
        <div className="featured-section">
            <div className='title-and-cta'>
                <h2 className="featured-title">{t('featured')}</h2>
                <h3>
                    <Link to={getRoute('archive')} className="see-all-link">
                        {t('seeAll')}
                    </Link>
                </h3>
            </div>
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