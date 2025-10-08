import { useState } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import BigSerif from '../../../../components/Titles/BigSerif/BigSerif';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import './Requirements.css'

function Requirements({ t, residency }) {
    const { language } = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    // const handleDownloadPDF = () => {
    //     if (!selectedLanguage) return;

    //     const fileUrl = selectedLanguage === 'es'
    //         ? 'https://drive.google.com/file/d/1GHdhNaW_ppkzVzi3Dj_hh3Bb_p5P06Th/view?usp=drive_link'
    //         : 'https://drive.google.com/file/d/1J2fJgdyxRfOJw4E6yC3g8FEh7REugKYn/view?usp=drive_link';

    //     window.open(fileUrl, '_blank');
    // };
    const handleDownloadPDF = () => {
        if (!selectedLanguage) return;

        const fileUrl = selectedLanguage === 'es'
            ? 'https://drive.google.com/file/d/14_MsrDJd8xhn1NuK0J0Wtt6f3U8M7CDX/view?usp=drive_link'
            : 'https://drive.google.com/file/d/17uOOGBIKc7hIR2nb97s7YzR3d-0ebk-z/view?usp=drive_link';

        window.open(fileUrl, '_blank');
    };

    return (
        <div className='requirments-total'>
            {/* <div className='wrapper-oc-title-req'>
            <MediumSans className='oc-title-req'>{t('openCall')}</MediumSans>
            </div> */}
            <div className='requirements-section-of'>
                <div className='NR-column-left'>
                    <div>
                        <BigSerif className='RP-title'>{residency?.artTitle}</BigSerif>
                        <MediumSans className='RP-disciplines'>{residency?.artDisciplines?.[language]}</MediumSans>
                        <Texts
                            size="medium"
                            className='NR-texts'
                            dangerouslySetInnerHTML={{ __html: residency?.artDescription?.[language] }}
                        />
                    </div>
                    {/* <div className='pdf-button-container'>
                    <button className='pdf-button'>
                        {t('downloadPDF')}
                    </button>
                </div> */}
                    {/* <div className='pdf-button-container'>
                    <div className='pdf-language-selection'>
                        <button
                            className={`pdf-language-button ${selectedLanguage === 'es' ? 'active' : ''}`}
                            onClick={() => setSelectedLanguage('es')}
                        >
                            ES
                        </button>
                        <button
                            className={`pdf-language-button ${selectedLanguage === 'pt' ? 'active' : ''}`}
                            onClick={() => setSelectedLanguage('pt')}
                        >
                            PT
                        </button>
                    </div>
                    <button className='pdf-button' onClick={handleDownloadPDF} disabled={!selectedLanguage}>
                        {t('downloadPDF')}
                    </button>
                </div> */}
                    <div className='pdf-button-container'>
                        <div className='pdf-language-selection'>
                            <button
                                className={`pdf-language-button ${selectedLanguage === 'es' ? 'active' : ''}`}
                                onClick={() => setSelectedLanguage('es')}
                            >
                                ES
                            </button>
                            <button
                                className={`pdf-language-button ${selectedLanguage === 'pt' ? 'active' : ''}`}
                                onClick={() => setSelectedLanguage('pt')}
                            >
                                PT
                            </button>
                        </div>
                        <button
                            className='pdf-button'
                            onClick={handleDownloadPDF}
                            disabled={!selectedLanguage}
                        >
                            {t('downloadPDF')}
                        </button>
                    </div>

                </div>
                <div className='NR-column-right'>
                    <div className='fantasmata-img'>
                        <img src="/Images/Residencies/NextResidency/Fantasmata.jpg" alt="" />
                    </div>
                    <div className='application'>
                        <MediumSans className='sendUsTitle'>{t('sendUs')}</MediumSans>
                        <div className='appSending'>
                            <img src="/Icons/largeArrow.png" alt="arrow-icon" />
                            {t('whereToSend')}</div>
                        <div className='appSending'>
                            <img src="/Icons/largeArrow.png" alt="arrow-icon" />
                            {t('whenToSend')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requirements;