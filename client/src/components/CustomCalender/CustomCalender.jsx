import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import style from './CustomCalender.module.scss';

const CustomCalender = () => {
    return (
        <div className={style.CustomCalender}>
            <Calendar
                allowPartialRange={false}
                minDate={new Date()}
                next2Label={null}
                prev2Label={null}
                minDetail="month"
                showNeighboringMonth={false}
                tileClassName={style.CustomCalender__inner}
            />
        </div>
    );
};

export default CustomCalender;