// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../../../contexts/LanguageContext';
// import './IntroAg.css';

// function IntroAg({ t }) {
//     const { getRoute } = useLanguage();
//     const archive = getRoute('archive');

//     const activities = [
//         { label: 'Residencias', to: getRoute('residenciesProgram') },
//         { label: 'Exposiciones', to: `${archive}?tab=exhibitions` },
//         { label: 'Obras colectivas', to: `${archive}?tab=collectiveArtPieces` },
//         { label: 'Publicaciones', to: `${archive}?tab=publications` },
//         { label: 'Colaboraciones', to: `${archive}?tab=collaborations` },
//         { label: 'Tienda', to: `${archive}?tab=publications` },
//         { label: 'Fundación', to: getRoute('foundation') },
//     ];

//     return (
//         <div className='section-introag'>
//             <div className='tit-subtit'>
//                 <h1>Fundación Azar —</h1>
//                 <h2>{t('heroSubtitle')}</h2>
//             </div>
//             <div className='container2'>
//                 <div className='container-col-1'>
//                     <div className='intro-cont1'>
//                         <p dangerouslySetInnerHTML={{ __html: t('visionText') }} />                    </div>
//                     <div className='cta-quienes-somos'>
//                         <p>
//                             <Link to={getRoute('foundation')}>{t('aUs')}</Link>
//                         </p>
//                     </div>
//                 </div>
//                 <div className='container-activities'>
//                     <ul className='list-a-cosas'>
//                         {activities.map(({ label, to }) => (
//                             <li key={label}>
//                                 <Link to={to}>{label}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default IntroAg;



import { Link } from 'react-router-dom';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { useMobile } from '../../../../components/Hooks/useMobile';
import './IntroAg.css';

function IntroAg({ t }) {
    const { getRoute } = useLanguage();
    const isMobile = useMobile();
    const archive = getRoute('archive');

    const activities = [
        { label: 'Residencias', to: getRoute('residenciesProgram') },
        { label: 'Exposiciones', to: `${archive}?tab=exhibitions` },
        { label: 'Obras colectivas', to: `${archive}?tab=collectiveArtPieces` },
        { label: 'Publicaciones', to: `${archive}?tab=publications` },
        { label: 'Colaboraciones', to: `${archive}?tab=collaborations` },
        { label: 'Tienda', to: `${archive}?tab=publications` },
        { label: 'Fundación', to: getRoute('foundation') },
    ];

    return (
        <div className='section-introag'>
            <div className='tit-subtit'>
                <h1>Fundación Azar —</h1>
                <h2>{t('heroSubtitle')}</h2>
            </div>
            <div className='container2'>
                <div className='container-col-1'>
                    <div className='intro-cont1'>
                        <p dangerouslySetInnerHTML={{ __html: t('visionText') }} />
                    </div>
                    <div className='cta-quienes-somos'>
                        <p>
                            <Link to={getRoute('foundation')}>{t('aUs')}</Link>
                        </p>
                    </div>
                </div>

                {isMobile ? (
                    <div className='cta-quienes-somos'>
                        <p>
                            <Link to={archive}>{t('allStories')}</Link>
                        </p>
                    </div>
                ) : (
                    <div className='container-activities'>
                        <ul className='list-a-cosas'>
                            {activities.map(({ label, to }) => (
                                <li key={label}>
                                    <Link to={to}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default IntroAg;