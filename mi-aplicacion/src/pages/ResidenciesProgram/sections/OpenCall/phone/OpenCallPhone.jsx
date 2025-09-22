import SelectionPhone from './SelectionPhone';
import RequirePhone from './RequirePhone';
import Jurado from '../Jurado';
import './OpenCallPhone.css';

function OpenCallPhone({ t, residency }) {
    return(
        <div>
            <SelectionPhone t={t} residency={residency} />
            <RequirePhone t={t} residency={residency}  />
            <Jurado t={t} residency={residency}  />
        </div>
    );
}

export default OpenCallPhone;