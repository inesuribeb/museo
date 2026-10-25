import { Link, useNavigate } from 'react-router-dom';
import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import { mockPublicationsData } from '../../../../utils/Data/PublicationsData';
import './TiendaHome.css';

// Quita etiquetas HTML para usos que requieren texto plano (alt, aria-label…)
const stripHtml = (html = '') => html.replace(/<[^>]*>/g, '').trim();

function TiendaHome({ t, getRoute }) {
    const navigate = useNavigate();
    const localizedPublications = useLocalizedData(mockPublicationsData);
    const count = localizedPublications.length;

    const handleClick = (pub) => {
        navigate(getRoute('publication', { id: pub.id }));
    };

    return (
        <div className='section-tiendahome'>
            {/* <h2 className="featured-title">{t('tiendaHome')}</h2> */}

            <div className='title-and-cta-shop'>
                <h2 className="featured-title-shop">{t('tiendaHome')}</h2>
                <h3>
                    <Link to={`${getRoute('archive')}?tab=publications`} className="see-all-link-shop">
                        {t('seeShop')}
                    </Link>
                </h3>
            </div>

            <div className={`grid-tienda-home count-${count}`}>
                {localizedPublications.map(pub => (
                    <div
                        key={pub.id}
                        className="tienda-card"
                        onClick={() => handleClick(pub)}
                    >
                        <div className="tienda-card-image-container">
                            <img
                                src={pub.cover}
                                alt={stripHtml(pub.title)}
                                className="tienda-card-image"
                            />
                            <div className="tienda-card-overlay">
                                <h3
                                    className="tienda-card-title"
                                    dangerouslySetInnerHTML={{ __html: pub.title }}
                                />
                                <p
                                    className="tienda-card-price"
                                    dangerouslySetInnerHTML={{ __html: pub.price }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TiendaHome;