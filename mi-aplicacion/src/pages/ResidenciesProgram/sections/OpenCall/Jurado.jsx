import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../../contexts/LanguageContext';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import ModalJurado from './modalJurado/ModalJurado';
import './Jurado.css';
import './JuradoSlider.css';

function Jurado({ t, residency }) {
    const { language } = useLanguage();
    const navigate = useNavigate();
    // const [selectedMember, setSelectedMember] = useState(null);


    // const handleMemberClick = (member) => {
    //     setSelectedMember(member);
    // };
    const handleMemberClick = (member) => {
        navigate(`/jurado/${member.id}`);
    };

    // const closeModal = () => {
    //     setSelectedMember(null);
    // };

    return (
        <div className='jurado-section'>
            <div className='opencall-large'>
                <MediumSans className='openCalltitle'>{t('residency2026')}</MediumSans>
                <Texts
                    size="medium"
                    className='description-large'
                    dangerouslySetInnerHTML={{ __html: residency?.largeDescription?.[language] }}
                />

                <MediumSans className='openCalltitle'>{t('juryR')}</MediumSans>
            </div>

            <div className='jury-desplegado'>
                {residency?.jury?.map((member, index) => (
                    <div 
                        key={member.id} 
                        className='jury-member'
                        onClick={() => handleMemberClick(member)}
                        // onClick={() => onMemberClick(member)}
                    >
                        <div className='jury-photo-container'>
                            <img
                                src={member.portrait}
                                alt={member.name}
                                className='jury-photo'
                            />
                        </div>
                        <div className='jury-info'>
                            <h3 className='jury-name'>{member.name}</h3>
                            <p className='jury-profession'>{member.proffesion[language]}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* {selectedMember && (
                <ModalJurado 
                    member={selectedMember} 
                    language={language}
                    onClose={closeModal} 
                />
            )} */}
        </div>
    )
}

export default Jurado;