import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../../contexts/LanguageContext';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import { teamData } from "../../../../utils/membersData";
import './Team.css';

function Team({ t }) {
    const [hoveredMember, setHoveredMember] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { getRoute } = useLanguage();
    const navigate = useNavigate();

    if (!t || typeof t !== 'function') {
        return <div>Cargando información del equipo...</div>;
    }

    const teamMembers = teamData(t);

    const handleMemberClick = (member) => {
        navigate(`${getRoute('foundation')}/${member.slug}`);
    };

    const handleMouseEnter = (member) => setHoveredMember(member);

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setHoveredMember(null);
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <section className='section-team'>
            <div className='team-pictures'>
                {teamMembers.map((member) => (
                    <img
                        key={member.id}
                        src={member.image}
                        alt={member.name}
                        onClick={() => handleMemberClick(member)}
                        onMouseEnter={() => handleMouseEnter(member)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className={`team-member ${
                            hoveredMember
                                ? hoveredMember.id === member.id
                                    ? 'selected'
                                    : 'not-selected'
                                : ''
                        }`}
                    />
                ))}
            </div>

            {hoveredMember && mousePosition.x > 0 && (
                <span
                    className="hover-click-text"
                    style={{ left: mousePosition.x, top: mousePosition.y }}
                >
                    {t('clickThis')}
                </span>
            )}

            {!hoveredMember && (
                <div className='team-intro'>
                    <p dangerouslySetInnerHTML={{ __html: t('knowUs') }}></p>
                </div>
            )}

            {hoveredMember && (
                <div className='team-bio hover-info'>
                    <MediumSans
                        className="member-name"
                        dangerouslySetInnerHTML={{ __html: hoveredMember.name }}
                    />
                    <MediumSans
                        className="member-role"
                        dangerouslySetInnerHTML={{ __html: hoveredMember.role }}
                    />
                </div>
            )}
        </section>
    );
}

export default Team;