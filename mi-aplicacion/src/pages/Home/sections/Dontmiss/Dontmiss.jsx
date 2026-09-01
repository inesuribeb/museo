import { Link } from 'react-router-dom';
import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import './Dontmiss.css';

const Dontmisscards = [
    {
        id: 1,
        img: '/Images/gag.png',
        title: { es: "PAULA G.GENER", en: "", pt: "" },
        subtitle: { es: "Directora de la fundación", en: "", pt: "" },
        cta: { es: "Descubre su historia", en: "", pt: "" },
        link: ''
    },
    {
        id: 2,
        img: '/Images/gag.png',
        title: { es: "PAULA G.GENER", en: "", pt: "" },
        subtitle: { es: "Directora de la fundación", en: "", pt: "" },
        cta: { es: "Descubre su historia", en: "", pt: "" },
        link: ''
    },
    {
        id: 3,
        img: '/Images/gag.png',
        title: { es: "PAULA G.GENER", en: "", pt: "" },
        subtitle: { es: "Directora de la fundación", en: "", pt: "" },
        cta: { es: "Descubre su historia", en: "", pt: "" },
        link: ''
    },
    // {
    //     id: 4,
    //     img: '/Images/gag.png',
    //     title: { es: "PAULA G.GENER", en: "", pt: "" },
    //     subtitle: { es: "Directora de la fundación", en: "", pt: "" },
    //     cta: { es: "Descubre su historia", en: "", pt: "" },
    //     link: ''
    // }
];

function Dontmiss({ t }) {
    const localizedCards = useLocalizedData(Dontmisscards);

    return (
        <div className='dontmiss-section'>
            <h2 className="dontmiss-title">{t('dontmiss')}</h2>

            <div className='dontmiss-grid'>
                {localizedCards.map(card => (
                    <div key={card.id} className="dontmiss-row">
                        <div className="dontmiss-image-container">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="dontmiss-image"
                            />
                        </div>

                        <div className="dontmiss-content">
                            <h3 className="dontmiss-card-title">{card.title}</h3>
                            <p className="dontmiss-card-subtitle">{card.subtitle}</p>

                            <Link to={card.link} className="dontmiss-cta">
                                {card.cta}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dontmiss;