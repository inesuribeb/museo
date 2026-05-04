// import { useState } from 'react';
// import { useLanguage } from '../../contexts/LanguageContext';
// import { useHeader } from '../../contexts/HeaderContext';
// import './Newsletter.css';

// function Newsletter() {
//     const { t } = useLanguage();
//     const { isMenuOpen } = useHeader();  // ← nuevo
//     const [isOpen, setIsOpen] = useState(false);
//     const [submitted, setSubmitted] = useState(false);
//     const [form, setForm] = useState({ name: '', surname: '', email: '' });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = () => {
//         if (!form.name || !form.surname || !form.email) return;
//         console.log('Form:', form);
//         setSubmitted(true);
//         setTimeout(() => {
//             setIsOpen(false);
//             setSubmitted(false);
//             setForm({ name: '', surname: '', email: '' });
//         }, 2000);
//     };

//     return (
//         <>
//             <button
//                 className={`newsletter-fab ${isOpen ? 'newsletter-fab--open' : ''} ${isMenuOpen ? 'newsletter-fab--hidden' : ''}`}
//                 onClick={() => setIsOpen(!isOpen)}
//                 aria-label={t('suscribe')}
//             >
//                 <span className="newsletter-fab__text">{t('suscribe')}</span>
//             </button>

//             {isOpen && (
//                 <>
//                     <div
//                         className={`newsletter-overlay ${isMenuOpen ? 'newsletter--hidden' : ''}`}
//                         onClick={() => setIsOpen(false)}
//                     />
//                     <div
//                         className={`newsletter-popup ${isMenuOpen ? 'newsletter--hidden' : ''}`}
//                         onClick={(e) => e.stopPropagation()}
//                     >                        {!submitted ? (
//                         <>
//                             <p className="newsletter-popup__title">{t('suscribe')}</p>
//                             <div className="newsletter-popup__form">
//                                 <div className="newsletter-popup__name-row">
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         value={form.name}
//                                         onChange={handleChange}
//                                         placeholder={t('name')}
//                                         className="newsletter-popup__input"
//                                     />
//                                     <input
//                                         type="text"
//                                         name="surname"
//                                         value={form.surname}
//                                         onChange={handleChange}
//                                         placeholder={t('surnmame')}
//                                         className="newsletter-popup__input"
//                                     />
//                                 </div>
//                                 <div className="newsletter-popup__email-row">
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={form.email}
//                                         onChange={handleChange}
//                                         onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
//                                         placeholder="email@ejemplo.com"
//                                         className="newsletter-popup__input"
//                                     />
//                                     <button
//                                         className="newsletter-popup__submit"
//                                         onClick={handleSubmit}
//                                     >
//                                         →
//                                     </button>
//                                 </div>
//                             </div>
//                         </>
//                     ) : (
//                         <p className="newsletter-popup__success">✓ ¡Gracias!</p>
//                     )}
//                     </div>
//                 </>
//             )}
//         </>
//     );
// }

// export default Newsletter;

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useHeader } from '../../contexts/HeaderContext';
import './Newsletter.css';

function Newsletter() {
    const { t } = useLanguage();
    const { isMenuOpen } = useHeader();
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', surname: '', email: '' });
    const popupRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                popupRef.current && !popupRef.current.contains(e.target) &&
                buttonRef.current && !buttonRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // const handleSubmit = () => {
    //     if (!form.name || !form.surname || !form.email) return;
    //     console.log('Form:', form);
    //     setSubmitted(true);
    //     setTimeout(() => {
    //         setIsOpen(false);
    //         setSubmitted(false);
    //         setForm({ name: '', surname: '', email: '' });
    //     }, 2000);
    // };
    const handleSubmit = async () => {
        if (!form.name || !form.surname || !form.email) return;
    
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/subscribe`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                console.error("Error:", data);
                return;
            }
    
            setSubmitted(true);
            setTimeout(() => {
                setIsOpen(false);
                setSubmitted(false);
                setForm({ name: '', surname: '', email: '' });
            }, 2000);
    
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    return (
        <>
            <button
                ref={buttonRef}
                className={`newsletter-fab ${isOpen ? 'newsletter-fab--open' : ''} ${isMenuOpen ? 'newsletter--hidden' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={t('suscribe')}
            >
                <span className="newsletter-fab__text">{t('suscribe')}</span>
            </button>

            {isOpen && (
                <div
                    ref={popupRef}
                    className={`newsletter-popup ${isMenuOpen ? 'newsletter--hidden' : ''}`}
                >
                    {!submitted ? (
                        <>
                            <p className="newsletter-popup__title">{t('suscribe')}</p>
                            <div className="newsletter-popup__form">
                                <div className="newsletter-popup__name-row">
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder={t('name')}
                                        className="newsletter-popup__input"
                                    />
                                    <input
                                        type="text"
                                        name="surname"
                                        value={form.surname}
                                        onChange={handleChange}
                                        placeholder={t('surnmame')}
                                        className="newsletter-popup__input"
                                    />
                                </div>
                                <div className="newsletter-popup__email-row">
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                                        placeholder="email@ejemplo.com"
                                        className="newsletter-popup__input"
                                    />
                                    <button
                                        className="newsletter-popup__submit"
                                        onClick={handleSubmit}
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="newsletter-popup__success">✓ ¡Gracias!</p>
                    )}
                </div>
            )}
        </>
    );
}

export default Newsletter;