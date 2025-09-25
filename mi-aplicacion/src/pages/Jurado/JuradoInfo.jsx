import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { mockNextResidencia } from '../../utils/Data/NextResidencyData';
import Texts from '../../components/Texts/Texts';
import './JuradoInfo.css';

function JuradoInfo() {
    const { id } = useParams();
    const { language } = useLanguage();

    // Buscar el miembro del jurado por su ID en el array mockNextResidencia
    const residency = mockNextResidencia.find(residency => residency.id === 'residencia-1');
    const member = residency.jury.find(member => member.id === parseInt(id));

    if (!member) {
        return <div>No se encontró el miembro del jurado.</div>;
    }

    return (
        <div className="jurado-path">
            <div className='first-line-jury'>
                <div className='first-line-img'>
                    <img src={member.portrait} alt={member.name} />
                </div>
                <div className='second-column'>
                    <h1>{member.name}</h1>
                    <p>{member.proffesion[language]}</p>
                </div>
            </div>

            <div className='first-line-jury'>
                <div className='first-line-img'></div>
                {/* <p className='second-column' dangerouslySetInnerHTML={{ __html: member.bio[language] }}></p> */}
                <Texts
                    size="medium"
                    className='second-column-texts'
                    dangerouslySetInnerHTML={{ __html: member.bio[language] }}
                />
            </div>
        </div>
    );
}

export default JuradoInfo;