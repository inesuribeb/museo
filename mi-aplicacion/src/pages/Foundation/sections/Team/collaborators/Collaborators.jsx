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

]

function Collaborators({ t }) {
    return (
        <div className='collab-section-intern'>
            <h1>Collaborators</h1>
            <div className='collab-grid'>
                {CollaboratorsMembers.map((member) => (
                    <CollabCard key={member.id} member={member} t={t} />
                ))}
            </div>
        </div>
    )
}

export default Collaborators;