import { useLanguage } from '../../../../../../contexts/LanguageContext';
import './CollabCard.css';

function CollabCard({ member, t }) {
    const { language } = useLanguage();

    return (
        <div className='collab-card'>
            <div className='collab-img'>
                <img src={member.img} alt={`${member.name} ${member.surname}`} />

                {/* <p className='collab-role'>{member.role}</p> */}
                <p className='collab-role'>{member.role[language]}</p>
            </div>
            <div className='collab-fullname'>
                <p className='collab-name'>{member.name}</p>
                <p className='collab-surname'>{member.surname}</p>
            </div>
        </div>
    )
}

export default CollabCard;