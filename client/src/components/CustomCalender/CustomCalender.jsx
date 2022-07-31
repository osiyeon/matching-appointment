import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import style from './CustomCalender.module.scss';

const CustomCalender = () => {
    return (
        <div className={style.CustomCalender}>
            <Calendar minDate={new Date()} />
        </div>
    );
};

export default CustomCalender;