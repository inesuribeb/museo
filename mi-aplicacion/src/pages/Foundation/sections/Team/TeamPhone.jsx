import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { teamData } from "../../../../utils/membersData";
import './TeamPhone.css';

function TeamPhone({ t }) {
    const navigate = useNavigate();
    const { getRoute } = useLanguage();

    if (!t || typeof t !== 'function') {
        return <div>Cargando información del equipo...</div>;
    }

    const teamMembers = teamData(t);

    const handleMemberClick = (member) => {
        navigate(`${getRoute('foundation')}/${member.slug}`);
    };

    return (
        <div className="team-phone">
            <div className="team-phone-intro">
                <p dangerouslySetInnerHTML={{ __html: t('knowUs') }}></p>
            </div>

            <div className="team-cards-container">
                {teamMembers.map((member, index) => (
                    <div 
                        key={member.id}
                        className={`team-member-card ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
                        onClick={() => handleMemberClick(member)}
                    >
                        <div className="card-content-phone">
                            <div className="text-section">
                                <div className="member-role-phone">
                                    {member.role}
                                </div>
                                <div className="member-name-phone">
                                    {member.name}
                                </div>
                            </div>
                            <div className="image-section">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="member-image-phone"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamPhone;