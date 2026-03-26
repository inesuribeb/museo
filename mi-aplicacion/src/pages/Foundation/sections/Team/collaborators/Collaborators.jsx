import CollabCard from './components/CollabCard';
import './Collaborators.css';


const CollaboratorsMembers = [
    {
        id: 1,
        img: "/Images/Team/Nathalie.jpeg",
        name: "Pepito",
        surname: "Mandarino",
        role: {
            es: "Jefe de planta",
            en: "Jefe de planta",
            pt: "Jefe de planta",
        },
        quote: {
            es: "Que bonita es la vida",
            en: "Que bonita es la vida",
            pt: "Que bonita es la vida",
        },
        bio: {
            es: "Estudía farmacia y churrería",
            en: "Estudía farmacia y churrería",
            pt: "Estudía farmacia y churrería",
        },
    },
    {
        id: 2,
        img: "/Images/Team/Nathalie.jpeg",
        name: "Nombre",
        surname: "Apellido",
        role: {
            es: "Jefe de planta",
            en: "Jefe de planta",
            pt: "Jefe de planta",
        },
        quote: {
            es: "Que bonita es la vida",
            en: "Que bonita es la vida",
            pt: "Que bonita es la vida",
        },
        bio: {
            es: "Estudía farmacia y churrería",
            en: "Estudía farmacia y churrería",
            pt: "Estudía farmacia y churrería",
        },
    },
    {
        id: 3,
        img: "/Images/Team/Nathalie.jpeg",
        name: "Nombre",
        surname: "Apellido",
        role: {
            es: "Jefe de planta",
            en: "Jefe de planta",
            pt: "Jefe de planta",
        },
        quote: {
            es: "Que bonita es la vida",
            en: "Que bonita es la vida",
            pt: "Que bonita es la vida",
        },
        bio: {
            es: "Estudía farmacia y churrería",
            en: "Estudía farmacia y churrería",
            pt: "Estudía farmacia y churrería",
        },
    },
    {
        id: 4,
        img: "/Images/Team/Nathalie.jpeg",
        name: "Nombre",
        surname: "Apellido",
        role: {
            es: "Jefe de planta",
            en: "Jefe de planta",
            pt: "Jefe de planta",
        },
        quote: {
            es: "Que bonita es la vida",
            en: "Que bonita es la vida",
            pt: "Que bonita es la vida",
        },
        bio: {
            es: "Estudía farmacia y churrería",
            en: "Estudía farmacia y churrería",
            pt: "Estudía farmacia y churrería",
        },
    },
    {
        id: 5,
        img: "/Images/Team/Nathalie.jpeg",
        name: "Nombre",
        surname: "Apellido",
        role: {
            es: "Jefe de planta",
            en: "Jefe de planta",
            pt: "Jefe de planta",
        },
        quote: {
            es: "Que bonita es la vida",
            en: "Que bonita es la vida",
            pt: "Que bonita es la vida",
        },
        bio: {
            es: "Estudía farmacia y churrería",
            en: "Estudía farmacia y churrería",
            pt: "Estudía farmacia y churrería",
        },
    },
    {
        id: 6,
        img: "/Images/Team/Nathalie.jpeg",
        name: "Nombre",
        surname: "Apellido",
        role: {
            es: "Jefe de planta",
            en: "Jefe de planta",
            pt: "Jefe de planta",
        },
        quote: {
            es: "Que bonita es la vida",
            en: "Que bonita es la vida",
            pt: "Que bonita es la vida",
        },
        bio: {
            es: "Estudía farmacia y churrería",
            en: "Estudía farmacia y churrería",
            pt: "Estudía farmacia y churrería",
        },
    },
    {
        id: 7,
        img: "/Images/Team/Nathalie.jpeg",
        name: "Nombre",
        surname: "Apellido",
        role: {
            es: "Jefe de planta",
            en: "Jefe de planta",
            pt: "Jefe de planta",
        },
        quote: {
            es: "Que bonita es la vida",
            en: "Que bonita es la vida",
            pt: "Que bonita es la vida",
        },
        bio: {
            es: "Estudía farmacia y churrería",
            en: "Estudía farmacia y churrería",
            pt: "Estudía farmacia y churrería",
        },
    },
    {
        id: 8,
        img: "/Images/Team/Nathalie.jpeg",
        name: "Nombre",
        surname: "Apellido",
        role: {
            es: "Jefe de planta",
            en: "Jefe de planta",
            pt: "Jefe de planta",
        },
        quote: {
            es: "Que bonita es la vida",
            en: "Que bonita es la vida",
            pt: "Que bonita es la vida",
        },
        bio: {
            es: "Estudía farmacia y churrería",
            en: "Estudía farmacia y churrería",
            pt: "Estudía farmacia y churrería",
        },
    },
    {
        id: 9,
        img: "/Images/Team/Nathalie.jpeg",
        name: "Nombre",
        surname: "Apellido",
        role: {
            es: "Jefe de planta",
            en: "Jefe de planta",
            pt: "Jefe de planta",
        },
        quote: {
            es: "Que bonita es la vida",
            en: "Que bonita es la vida",
            pt: "Que bonita es la vida",
        },
        bio: {
            es: "Estudía farmacia y churrería",
            en: "Estudía farmacia y churrería",
            pt: "Estudía farmacia y churrería",
        },
    },

]


// function Collaborators({ t }) {
//     return (
//         <div className='collab-section-intern'>
//             <div className='collab-grid'>
//                 <h1 className='collab-grid-title'>Colaboradores</h1>
//                 {CollaboratorsMembers.map((member, index) => (
//                     <CollabCard key={member.id} member={member} t={t} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Collaborators;

function Collaborators({ t }) {
    return (
        <div className='collab-section-intern'>
            <div className='collab-grid'>
                <div className='collab-title-placeholder'>
                    {/* <h1 className='collab-grid-title'>Colaboradores</h1> */}
                    <div className='collab-title-wrapper'>
                        <h1 className='collab-grid-title'>Colaboradores</h1>
                    </div>
                </div>
                {CollaboratorsMembers.map((member) => (
                    <CollabCard key={member.id} member={member} t={t} />
                ))}
            </div>
        </div>
    )
}

export default Collaborators;