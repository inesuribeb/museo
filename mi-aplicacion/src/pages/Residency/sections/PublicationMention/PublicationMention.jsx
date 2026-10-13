import { Link } from 'react-router-dom';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { mockPublicationsData } from '../../../../utils/Data/PublicationsData';
import Texts from '../../../../components/Texts/Texts';
import './PublicationMention.css';

const isValidImage = (src) =>
    typeof src === 'string' && src.trim() !== '' && !src.trim().endsWith('/');

function PublicationMention({ residencia, t, currentLanguage }) {
    const { getRoute } = useLanguage();

    const publication = residencia.publicaciones && residencia.publicaciones.length > 0
        ? mockPublicationsData.find(pub => pub.id === residencia.publicaciones[0])
        : null;

    const coverImage = publication?.imageRef?.[0];
    const detailImage = publication?.imageRef?.[1];
    const hasCover = isValidImage(coverImage);
    const hasDetail = isValidImage(detailImage);
    const hasText = Boolean(residencia.textP?.trim());

    if (!hasText && !publication) return null;

    const publicationTitle = publication
        ? publication.title[currentLanguage] || publication.title.es
        : '';

    return (
        <section className='section-publication-mention'>
            {hasText && (
                <div className='description-info'>
                    <Texts
                        size="medium"
                        className='residency-texts'
                        dangerouslySetInnerHTML={{ __html: residencia.textP }}
                    />
                </div>
            )}

            {publication && (
                <div className='residency-publication'>
                    <Link
                        to={getRoute('publication', { id: publication.id })}
                        className="publication-link"
                    >
                        {(hasCover || hasDetail) && (
                            <div className='pictures-mention'>
                                {hasCover && (
                                    <img
                                        src={coverImage}
                                        alt={publicationTitle}
                                        className="publication-cover"
                                    />
                                )}

                                {hasDetail && (
                                    <img
                                        src={detailImage}
                                        alt={publicationTitle}
                                        className="publication-detail"
                                    />
                                )}
                            </div>
                        )}

                        <div className='publication-titleM'>
                            <h3>{publicationTitle}</h3>
                        </div>
                    </Link>
                </div>
            )}
        </section>
    )
}

export default PublicationMention;