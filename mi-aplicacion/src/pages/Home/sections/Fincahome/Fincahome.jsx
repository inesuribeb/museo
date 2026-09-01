import { useState, useEffect } from 'react';
import { useLocalizedData } from '../../../../components/Hooks/Hooks';
import './Fincahome.css';

const Fincaspaces = [
    { id: 1, img: '/Images/Finca/finca01.jpg', type: { es: "Habitación principal", en: "", pt: "" } },
    { id: 2, img: '/Images/Finca/finca02.jpg', type: { es: "Comedor", en: "", pt: "" } },
    { id: 3, img: '/Images/Finca/finca03.jpg', type: { es: "Salón", en: "", pt: "" } },
    { id: 4, img: '/Images/Finca/finca04.jpg', type: { es: "Jardín", en: "", pt: "" } },
    { id: 5, img: '/Images/Finca/finca05.jpg', type: { es: "Sala de tertulia", en: "", pt: "" } },
];

function Fincahome({ t, getRoute }) {
    const localizedSpaces = useLocalizedData(Fincaspaces);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % localizedSpaces.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [localizedSpaces.length]);

    const activeSpace = localizedSpaces[activeIndex];

    return (
        <div className="finca-section">
            {localizedSpaces.map((space, index) => (
                <div
                    key={space.id}
                    className="finca-bg-layer"
                    style={{
                        backgroundImage: `url(${space.img})`,
                        opacity: index === activeIndex ? 1 : 0
                    }}
                />
            ))}

            <div className="finca-overlay">
                <div className="finca-info">
                    <h2>Finca El Azahar</h2>
                    <h3>{t('discover')}</h3>
                </div>

                <div className="finca-type">
                    {activeSpace.type}
                </div>
            </div>
        </div>
    );
}

export default Fincahome;