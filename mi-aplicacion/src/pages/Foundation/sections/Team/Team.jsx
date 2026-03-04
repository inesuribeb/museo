import { useState } from 'react';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import './Team.css';

function Team({ t }) {
    const [selectedMember, setSelectedMember] = useState(null);
    const [hoveredMember, setHoveredMember] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    if (!t || typeof t !== 'function') {
        return <div>Cargando información del equipo...</div>;
    }

    const teamMembers = [
        {
            id: 'nathalie',
            image: '/Images/Team/Nathalie.jpeg',
            name: t('nathalieName'),
            role: t('nathalieRole'),
            bio: t('nathalieBio'),
            quote: t('nathalieQuote'),
        },
        {
            id: 'denis',
            image: '/Images/Team/Dennis.jpeg',
            name: t('denisName'),
            role: t('denisRole'),
            bio: t('denisBio'),
            quote: t('denisQuote'),
        },
        {
            id: 'paula',
            image: '/Images/Team/Paula.jpg',
            name: t('paulaName'),
            role: t('paulaRole'),
            bio: t('paulaBio'),
            quote: t('paulaQuote'),
        }
    ];

    const handleMemberClick = (member) => {
        setSelectedMember(selectedMember?.id === member.id ? null : member);
    };

    const handleMouseEnter = (member) => {
        setHoveredMember(member);
    };

    const handleMouseMove = (e) => {
        if (!selectedMember) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseLeave = () => {
        setHoveredMember(null);
        setMousePosition({ x: 0, y: 0 });
    };

    const getDisplayMember = () => {
        if (selectedMember) {
            return hoveredMember || selectedMember;
        } else {
            return hoveredMember;
        }
    };

    const displayMember = getDisplayMember();
    const showFullBio = selectedMember !== null;

    return (
        <section className='section-team'>
            <div className='team-pictures'>
                {teamMembers.map((member) => (
                    <img
                        key={member.id}
                        src={member.image}
                        alt={member.name}
                        // onClick={() => handleMemberClick(member)}
                        onMouseEnter={() => handleMouseEnter(member)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className={`team-member ${
                            displayMember
                                ? displayMember.id === member.id
                                    ? 'selected'
                                    : 'not-selected'
                                : ''
                        } ${selectedMember?.id === member.id ? 'clicked' : ''}`}
                    />
                ))}
            </div>

            {hoveredMember && !selectedMember && mousePosition.x > 0 && (
                <span 
                    className="hover-click-text"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y,
                    }}
                >
                    {t('clickThis')}
                </span>
            )}

            {!displayMember && (
                <div className='team-intro'>
                    <p dangerouslySetInnerHTML={{ __html: t('knowUs') }}></p>
                </div>
            )}

            {displayMember && (
                <div className={`team-bio ${showFullBio ? 'full-bio' : 'hover-info'}`}>
                    <MediumSans
                        className="member-name"
                        dangerouslySetInnerHTML={{ __html: displayMember.name }}
                    />
                    <MediumSans
                        className="member-role"
                        dangerouslySetInnerHTML={{ __html: displayMember.role }}
                    />

                    {showFullBio && (
                        <>
                            {displayMember.quote &&
                                displayMember.quote.trim() !== '' &&
                                !displayMember.quote.endsWith('Quote') && (
                                    <blockquote dangerouslySetInnerHTML={{ __html: displayMember.quote }}></blockquote>
                                )}

                            <Texts size="medium" className='member-bio'>
                                {displayMember.bio}
                            </Texts>

                            <cite dangerouslySetInnerHTML={{ __html: displayMember.name }}></cite>
                        </>
                    )}
                </div>
            )}
        </section>
    );
}

export default Team;