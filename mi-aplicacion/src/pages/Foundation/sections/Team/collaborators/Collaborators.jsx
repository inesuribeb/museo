import { collaboratorsData } from '../../../../../utils/membersData';
import CollabCard from './components/CollabCard';
import './Collaborators.css';

function Collaborators({ t }) {
    return (
        <div className='collab-section-intern'>
            <div className='collab-grid'>
                <div className='collab-title-placeholder'>
                    <div className='collab-title-wrapper'>
                        <h1 className='collab-grid-title'>Colaboradores</h1>
                    </div>
                </div>
                {collaboratorsData.map((member) => (
                    <CollabCard key={member.id} member={member} t={t} />
                ))}
            </div>
        </div>
    )
}

export default Collaborators;