import { useState } from 'react';
import MediumSans from '../../../../../components/Titles/MediumSans/MediumSans';
import './SelectionPhone.css';

function SelectionPhone({ t }) {
    const [isRequirementsExpanded, setIsRequirementsExpanded] = useState(false);
    const [isDocumentationExpanded, setIsDocumentationExpanded] = useState(false);
    const [isJuryExpanded, setIsJuryExpanded] = useState(false);

    const toggleRequirements = () => {
        setIsRequirementsExpanded(!isRequirementsExpanded);
    };

    const toggleDocumentation = () => {
        setIsDocumentationExpanded(!isDocumentationExpanded);
    };

    const toggleJury = () => {
        setIsJuryExpanded(!isJuryExpanded);
    };

    return (
        <div className="selection-phone-content">
            <h2>{t('selectionProcessTitle')}</h2>

            <div className="selection-phone-section">
                <div className="selection-phone-title" onClick={toggleRequirements}>
                    {t('requirements')}
                    <span className={`arrow ${isRequirementsExpanded ? 'up' : 'down'}`}></span>
                </div>
                {isRequirementsExpanded && (
                    <ul className="selection-phone-list">
                        <li>{t('ageRequirement')}</li>
                        <li>{t('residencyRequirement')}</li>
                    </ul>
                )}
            </div>

            <div className="selection-phone-section">
                <div className="selection-phone-title" onClick={toggleDocumentation}>
                    {t('documentation')}
                    <span className={`arrow ${isDocumentationExpanded ? 'up' : 'down'}`}></span>
                </div>
                {isDocumentationExpanded && (
                    <ul className="selection-phone-list">
                        <li>1. {t('portfolioRequirement')}</li>
                        <li>2. {t('applicationLetter')}</li>
                    </ul>
                )}
            </div>

            <div className="selection-phone-section">
                <div className="selection-phone-title" onClick={toggleJury}>
                    {t('juryAndSelection')}
                    <span className={`arrow ${isJuryExpanded ? 'up' : 'down'}`}></span>
                </div>
                {isJuryExpanded && (
                    <div className="selection-phone-content">
                        <p className="selection-phone-description">
                            {t('juryEvaluation')}
                        </p>
                        <p className="selection-phone-description">
                            {t('selectedArtists')}
                        </p>
                    </div>
                )}
            </div>

            <div className='application-phone'>
                <MediumSans className='sendUsTitle-phone'>{t('sendUs')}</MediumSans>
                <div className='appSending-phone'>
                    <img src="Icons/largeArrow.png" alt="arrow-icon" />
                    {t('whereToSend')}
                </div>
                <div className='appSending-phone'>
                    <img src="Icons/largeArrow.png" alt="arrow-icon" />
                    {t('whenToSend')}
                </div>
            </div>
        </div>
    );
}

export default SelectionPhone;