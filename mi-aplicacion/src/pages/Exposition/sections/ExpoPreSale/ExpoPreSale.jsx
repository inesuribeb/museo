import Texts from '../../../../components/Texts/Texts';
import PubCTA from '../../../../components/PubCTA/PubCTA';
import { mockPublicationsData } from '../../../../utils/Data/PublicationsData';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans'
import './ExpoPreSale.css';

const stripHtml = (html = '') => html.replace(/<[^>]*>/g, '');

function ExpoPreSale({ t, currentLanguage, exhibition }) {
    if (!exhibition) return null;

    const getAssociatedPublication = () => {
        if (!exhibition.publicaciones || exhibition.publicaciones.length === 0) {
            return null;
        }

        const publicationId = exhibition.publicaciones[0];

        return mockPublicationsData.find(pub => pub.id === publicationId);
    };

    const associatedPublication = getAssociatedPublication();
    const altText = stripHtml(exhibition.title);

    return (
        <section className='expo-pre-sale'>
            <div className='presale-texts'>
                {exhibition.preSaleImage && (
                    <div className='intro-presale-img'>
                        <img
                            src={exhibition.preSaleImage}
                            alt={altText}
                        />
                    </div>
                )}

                <div className='intro-presale-texts'>
                    <div className='pre-sale-text'>
                        <h1
                            className="tu-clase-aqui"
                            dangerouslySetInnerHTML={{ __html: exhibition.preSaleTitle }}
                        />
                        <Texts
                            size="medium"
                            dangerouslySetInnerHTML={{ __html: exhibition.preSaleText }}
                        />
                    </div>
                    {exhibition.preSaleImage2 && (
                        <img
                            src={exhibition.preSaleImage2}
                            alt={altText}
                        />
                    )}
                </div>

            </div>
        </section>
    );
}

export default ExpoPreSale;