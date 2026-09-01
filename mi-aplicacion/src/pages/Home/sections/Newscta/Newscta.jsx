import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import './Newscta.css';

function Newscta({ t }) {
    return (
        <div className='section-newscta'>
            <h2 className="newscta-title">{t('newscta')}</h2>
        <button className='cta-suscribe-home'>{t('suscribe')}</button>
        </div>
    )
}

export default Newscta;