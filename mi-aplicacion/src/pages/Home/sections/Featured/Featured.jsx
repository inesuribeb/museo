import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import GenericCard from '../../../../components/GenericCard/GenericCard';
import './Featured.css';

const FeaturedItems = [
    {
        id: 1,
        img: '',
        tab: { es: "Exposiciones", en: "Exposiciones", pt: "Exposiciones" },
        title: { es: "Expo Residencia2025", en: "Expo Residencia2025", pt: "Expo Residencia2025" },
        description: { es: "Muestra de la Residencia2025 en Madrid", en: "Muestra de la Residencia2025 en Madrid", pt: "Muestra de la Residencia2025 en Madrid" }
    },
    {
        id: 2,
        img: '',
        tab: { es: "", en: "", pt: "" },
        title: { es: "", en: "", pt: "" },
        description: { es: "", en: "", pt: "" }
    },
    {
        id: 3,
        img: '',
        tab: { es: "", en: "", pt: "" },
        title: { es: "", en: "", pt: "" },
        description: { es: "", en: "", pt: "" }
    },
    {
        id: 4,
        img: '',
        tab: { es: "", en: "", pt: "" },
        title: { es: "", en: "", pt: "" },
        description: { es: "", en: "", pt: "" }
    },
    {
        id: 5,
        img: '',
        tab: { es: "", en: "", pt: "" },
        title: { es: "", en: "", pt: "" },
        description: { es: "", en: "", pt: "" }
    },
    {
        id: 6,
        img: '',
        tab: { es: "", en: "", pt: "" },
        title: { es: "", en: "", pt: "" },
        description: { es: "", en: "", pt: "" }
    }
];

function Featured({ t, getRoute }) {
    const localizedItems = useLocalizedData(FeaturedItems);

    const handleClick = (item) => {
        // navega con getRoute, ej: navigate(getRoute('archive', { id: item.id }))
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
                        description={item.description}
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