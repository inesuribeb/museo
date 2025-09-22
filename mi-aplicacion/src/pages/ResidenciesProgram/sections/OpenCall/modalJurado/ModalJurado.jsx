import Texts from '../../../../../components/Texts/Texts';
import './ModalJurado.css';

function ModalJurado({ member, language, onClose }) {
    return (
        <div className="jurado-modal-overlay">
            <div className="jurado-modal-content">
                <button className="jurado-modal-close-button" onClick={onClose}>
                    x
                </button>
                <div>
                    <img
                        src={member.portrait}
                        alt={member.name}
                        className="jurado-modal-portrait"
                    />
                </div>
                <div className='jury-info-modal'>
                    <h2>{member.name}</h2>
                    <p>{member.proffesion[language]}</p>
                    {/* <div
                        className="jurado-modal-bio"
                        dangerouslySetInnerHTML={{ __html: member.bio[language] }}
                    /> */}
                    <Texts
                    size="medium"
                    className='jurado-modal-bio'
                    dangerouslySetInnerHTML={{ __html: member.bio[language] }}                />
                </div>
            </div>
        </div>
    );
}

export default ModalJurado;