import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { collaboratorsData, teamData } from "../../utils/membersData";
import CollabCard from '../Foundation/sections/Team/collaborators/components/CollabCard';
import './IndividualMember.css';

function IndividualMember() {
    const { slug } = useParams();
    const { t, language } = useLanguage();

    // const allMembers = [...collaboratorsData, ...teamData(t)];
    const allMembers = [...teamData(t), ...collaboratorsData];
    const member = allMembers.find(m => m.slug === slug);

    if (!member) return <div>Miembro no encontrado</div>;

    const name = member.name || `${member.name}`;
    const role = member.role?.[language] || member.role || '';
    const bio = typeof member.bio === 'object' ? (member.bio?.[language] || '') : (member.bio || '');
    const quote = typeof member.quote === 'object'
        ? (member.quote?.[language] || '')
        : (member.quote || '');
    const img = member.bigImg || member.image || member.img;
    
    const fullName = member.surname
        ? `${member.name} ${member.surname}`
        : member.name || '';

    const nameParts = fullName.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    return (
        <div className='individual-member'>

            <div className='individual-member-top'>
                <div className='individual-member-left'>
                    <div className='individual-member-name'>
                        <h1>{firstName}</h1>
                        <h1>{lastName}</h1>
                    </div>
                    <div className='individual-member-role'>
                        <p>{role}</p>
                    </div>
                </div>
                <div className='individual-member-right'>
                    <img src={img} alt={member.name} />
                </div>
            </div>

            {quote && quote.trim() !== '' && !quote.endsWith('Quote') && (
                <div className='individual-member-quote'>
                    <blockquote>"{quote}"</blockquote>
                </div>
            )}

            {bio && bio.trim() !== '' && (
                <div className='individual-member-bio'>
                    <p dangerouslySetInnerHTML={{ __html: bio }} />
                </div>
            )}

            <div className='line-prueba'>
                <div className='others'>
                    <p className='others-title'>{t('discoverOthers') || 'Descubre la historia de otros miembros del equipo y colaboradores'}</p>
                    <div className='others-grid'>
                        {allMembers
                            .filter(m => m.slug !== slug)
                            .map(m => (
                                <CollabCard key={m.slug} member={{
                                    ...m,
                                    img: m.img || m.image,
                                    surname: m.surname || '',
                                }} t={t} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualMember;