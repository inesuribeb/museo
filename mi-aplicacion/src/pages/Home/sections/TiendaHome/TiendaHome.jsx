import { Link, useNavigate } from 'react-router-dom';
import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import { mockPublicationsData } from '../../../../utils/Data/PublicationsData';
import './TiendaHome.css';

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
                                alt={pub.title}
                                className="tienda-card-image"
                            />
                            <div className="tienda-card-overlay">
                                <h3 className="tienda-card-title">{pub.title}</h3>
                                <p className="tienda-card-price">{pub.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TiendaHome;