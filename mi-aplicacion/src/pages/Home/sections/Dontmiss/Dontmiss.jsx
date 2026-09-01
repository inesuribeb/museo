import { Link } from 'react-router-dom';
import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import './Dontmiss.css';

const Dontmisscards = [
    {
        id: 1,
        img: '/Images/fotosresi.png',
        title: { es: "Residencia2026", en: "", pt: "" },
        subtitle: { es: "Cinco artistas, un paisaje y un mes de lluvia para dar forma a una obra colectiva: Una visión remota.", en: "Five artists, a landscape and a month of rain came together to create a collective work: Una visión remota.", pt: "Cinco artistas, uma paisagem e um mês de chuva deram forma a uma obra coletiva: Uma visão remota." },
        cta: { es: "Descubre más", en: "Discover more", pt: "Descubra mais" },
        link: 'https://www.instagram.com/p/DWQ8NgWDOnc/?img_index=1'
    },
    {
        id: 2,
        img: '/Images/wipweb.webp',
        title: { es: "En proceso: Residencia2026", en: "In progress: Residencia2026", pt: "Em processo: Residencia2026" },
        subtitle: { es: "Una mirada al trabajo que está tomando forma durante la residencia.", en: "A glimpse into the work taking shape during the residency.", pt: "Um olhar sobre o trabalho que está a ganhar forma durante a residência." },
        cta: { es: "Descubre más", en: "Discover more", pt: "Descubra mais" },
        link: 'https://www.instagram.com/p/DUEOq_TDB7U/?img_index=1'
    },
    {
        id: 3,
        img: '/Images/Team/Pau_card.png',
        title: { es: "PAULA G.GENER", en: "", pt: "" },
        subtitle: { es: "Directora de la fundación", en: "", pt: "" },
        cta: { es: "Descubre su historia", en: "Discover her story", pt: "Descubra a sua história" },
        link: '/fundacion-azar/paula-g-genner'
    },
];

const isExternalLink = (link) => /^https?:\/\//.test(link);

function Dontmiss({ t }) {
    const localizedCards = useLocalizedData(Dontmisscards);

    return (
        <div className='dontmiss-section'>
            <h2 className="dontmiss-title">{t('dontmiss')}</h2>

            <div className='dontmiss-grid'>
                {localizedCards.map(card => {
                    const external = isExternalLink(card.link);
                    const CtaTag = external ? 'a' : Link;
                    const ctaProps = external
                        ? { href: card.link, target: '_blank', rel: 'noopener noreferrer' }
                        : { to: card.link };

                    return (
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

                                <CtaTag className="dontmiss-cta" {...ctaProps}>
                                    {card.cta}
                                </CtaTag>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Dontmiss;