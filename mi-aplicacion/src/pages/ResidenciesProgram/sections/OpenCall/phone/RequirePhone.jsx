import { useState } from 'react';
import { useLanguage } from '../../../../../contexts/LanguageContext';
import MediumSans from '../../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../../components/Texts/Texts';
import BigSerif from '../../../../../components/Titles/BigSerif/BigSerif';
import './RequirePhone.css';

function RequirePhone({ t, residency }) {
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
        <div className='require-phone'>
            <div className='require-phone-image'>
                <img src="/Images/Residencies/NextResidency/Fantasmata.jpg" alt="" />
            </div>
            <div className='require-phone-content'>
                <div>
                    <BigSerif className='require-phone-title'>{residency?.artTitle}</BigSerif>
                    <MediumSans className='require-phone-disciplines'>{residency?.artDisciplines?.[language]}</MediumSans>
                    <Texts
                        size="medium"
                        className='require-phone-texts'
                        dangerouslySetInnerHTML={{ __html: residency?.artDescription?.[language] }}
                    />
                </div>
                {/* <div className='require-phone-button-container'>
                    <button className='require-phone-button'>
                        {t('downloadPDF')}
                    </button>
                </div> */}
                <div className='require-phone-button-container'>
                    <div className='phone-pdf-language-selection'>
                        <button
                            className={`phone-pdf-language-button ${selectedLanguage === 'es' ? 'active' : ''}`}
                            onClick={() => setSelectedLanguage('es')}
                        >
                            ES
                        </button>
                        <button
                            className={`phone-pdf-language-button ${selectedLanguage === 'pt' ? 'active' : ''}`}
                            onClick={() => setSelectedLanguage('pt')}
                        >
                            PT
                        </button>
                    </div>
                    <button
                        className='require-phone-button'
                        onClick={handleDownloadPDF}
                        disabled={!selectedLanguage}
                    >
                        {t('downloadPDF')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RequirePhone;