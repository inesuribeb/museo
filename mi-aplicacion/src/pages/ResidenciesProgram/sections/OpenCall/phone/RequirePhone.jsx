import { useLanguage } from '../../../../../contexts/LanguageContext';
import MediumSans from '../../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../../components/Texts/Texts';
import BigSerif from '../../../../../components/Titles/BigSerif/BigSerif';
import './RequirePhone.css';

function RequirePhone({ t, residency }) {
    const { language } = useLanguage();

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
                <div className='require-phone-button-container'>
                    <button className='require-phone-button'>
                        {t('downloadPDF')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RequirePhone;