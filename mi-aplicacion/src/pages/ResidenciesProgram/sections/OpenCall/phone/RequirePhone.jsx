import { useState } from 'react';
import { useLanguage } from '../../../../../contexts/LanguageContext';
import MediumSans from '../../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../../components/Texts/Texts';
import BigSerif from '../../../../../components/Titles/BigSerif/BigSerif';
import './RequirePhone.css';

function RequirePhone({ t, residency }) {
    const { language } = useLanguage();
    const [selectedLanguage, setSelectedLanguage] = useState(null);


    const handleDownloadPDF = () => {
        if (!selectedLanguage) return;
        const fileName =
          selectedLanguage === 'es'
            ? 'Fantasmata-ESP.pdf'
            : 'Fantasmata-PT.pdf';
        const link = document.createElement("a");
        link.href = '/Images/Residencies/NextResidency/pdf/${fileName}';
        link.download = fileName;
        link.click();
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