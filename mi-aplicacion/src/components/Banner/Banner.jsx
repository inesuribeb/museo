import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext";
import './Banner.css';

function Banner() {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    const handleBannerClick = () => {
        navigate(getRoute('residenciesProgram'));
        setTimeout(() => {
            const element = document.getElementById('opencall-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="banner-openCall" onClick={handleBannerClick}>
            <div
                className='banner-text'
                dangerouslySetInnerHTML={{ __html: t('bannerText') }}
            />
        </div>
    )
}

export default Banner;