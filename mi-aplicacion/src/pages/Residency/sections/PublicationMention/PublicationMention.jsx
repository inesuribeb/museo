import { Link } from 'react-router-dom';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { mockPublicationsData } from '../../../../utils/Data/PublicationsData';
import Texts from '../../../../components/Texts/Texts';
import './PublicationMention.css';

function PublicationMention({ residencia, t, currentLanguage }) {
    const { getRoute } = useLanguage();

    const publication = residencia.publicaciones && residencia.publicaciones.length > 0
        ? mockPublicationsData.find(pub => pub.id === residencia.publicaciones[0])
        : null;

    return (
        <section className='section-publication-mention'>
            <div className='description-info'>
                <Texts
                    size="medium"
                    className='residency-texts'
                    dangerouslySetInnerHTML={{ __html: residencia.textP }}
                />
            </div>

            <div className='residency-publication'>
                {publication && (
                    <Link 
                        to={getRoute('publication', { id: publication.id })}
                        className="publication-link"
                    >
                        <div className='pictures-mention'>
                            <img
                                src={publication.imageRef[0]}
                                alt={publication.title[currentLanguage] || publication.title.es}
                                className="publication-cover"
                            />

                            {publication.detailImages && publication.detailImages.length > 0 && (
                                <img
                                    src={publication.imageRef[1]}
                                    alt="Detail"
                                    className="publication-detail"
                                />
                            )}
                        </div>

                        <div className='publication-titleM'>
                            <h3>{publication.title[currentLanguage] || publication.title.es}</h3>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    )
}

export default PublicationMention;