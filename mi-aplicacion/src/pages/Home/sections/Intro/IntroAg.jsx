import './IntroAg.css';

function IntroAg() {
    return (
        <div className='section-introag'>
            <div className='tit-subtit'>
                <h1>Fundación Azar —</h1>
                    <h2>Una apuesta distinta para las artes.</h2>
            </div>
            <div className='container2'>
                <div className='container-col-1'>
                    <div className='intro-cont1'>
                        <p>En Fundación Azar queremos reflexionar alrededor del significado del término «arte» dentro del panorama cultural contemporáneo. Nos gusta creer que las obras nacen tanto de la creatividad de los artistas, como del savoir-faire de los artesanos o la mecánica de los pensadores. Y también nos gusta imaginar que uno de los caminos para reformular la creación es facilitando el encuentro fortuito entre distintas disciplinas fomentando el diálogo y la «polinización cruzada».</p>
                    </div>
                    <div className='cta-quienes-somos'>
                        <p>Quiénes somos</p>
                    </div>
                </div>
                <div className='container-activities'>
                    <ul className='list-a-cosas'>
                        <li>Residencias</li>
                        <li>Exposiciones</li>
                        <li>Obras colectivas</li>
                        <li>Publicaciones</li>
                        <li>Colaboraciones</li>
                        <li>Tienda</li>
                        <li>Fundación</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default IntroAg;