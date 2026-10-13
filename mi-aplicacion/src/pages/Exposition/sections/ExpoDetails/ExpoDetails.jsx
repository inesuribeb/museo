import Texts from '../../../../components/Texts/Texts'
import './ExpoDetails.css';

const stripHtml = (html = '') => html.replace(/<[^>]*>/g, '');

function ExpoDetails({ t, currentLanguage, exhibition }) {
    if (!exhibition) return null;

    const altText = stripHtml(exhibition.title);

    return (
        <section className='section-expo-details'>
            <div className='expo-texts'>
                {exhibition.imageDetail && (
                    <div className='intro-expoDetails-img'>
                        <img
                            src={exhibition.imageDetail}
                            alt={altText}
                        />
                    </div>
                )}

                <div className='intro-expoDetails-texts'>
                    <div>
                        <Texts
                            size="medium"
                            className='texts-intro'
                            dangerouslySetInnerHTML={{ __html: exhibition.intro }}
                        />
                        {/* <Texts
                            size="medium"
                            className='texts-intro'
                            dangerouslySetInnerHTML={{ __html: exhibition.intro2 }}
                        /> */}
                    </div>
                    {exhibition.imageDetail2 && (
                        <img
                            src={exhibition.imageDetail2}
                            alt={altText}
                        />
                    )}
                </div>

            </div>

        </section>
    );
}

export default ExpoDetails;
