import { useState, useEffect } from 'react';
import cx from 'classnames';

import style from './Scheduler.module.scss';

import { Table } from 'reactstrap';

const Scheduler = () => {
    const [hourList, setHourList] = useState([]);
    const [minuteList, setMinuteList] = useState([]);

    const [selectedTimeList, setSelectedTimeList] = useState([]);
    const selectingCount = 6;

    useEffect(() => {
        const hours = Array.from({ length: 18 }, (_, i) => i + 7);
        const minutes = Array.from({ length: 6 }, (_, i) => (i + 1) * 10);

        setHourList(hours);
        setMinuteList(minutes);
    }, []);

    const onClickHandler = ({ hour, min }) => {
        const timeRange = [];
        let changingHour = hour;
        let changingMin = min;
        for (let i = 0; i < selectingCount; i++) {
            timeRange.push({ hour: changingHour, min: changingMin });
            changingMin = changingMin + 10;
            if (changingMin > 60) {
                changingHour += 1;
                changingMin = 10;
            }
        }

        setSelectedTimeList([...timeRange, ...selectedTimeList]);
    };

    const checkIsSelected = ({ hour, min }) => {
        let result = false;
        selectedTimeList.forEach((item) => {
            if (item.hour === hour && item.min === min) {
                result = true;
            }
        });
        return result;
    };

    // console.log({ selectedTimeList });
    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <>
            <Table className={style.Scheduler}>
                <th></th>
                {minuteList.map((min) => (
                    <th key={min}>{min}</th>
                ))}
                {hourList.map((hour) => (
                    <tr value={hour} key={hour}>
                        <td className={style['Scheduler__header-vertical']}>{hour}</td>
                        {minuteList.map((min) => {
                            const isSelected = checkIsSelected({ hour, min });
                            return (
                                <td
                                    className={cx(
                                        style.Scheduler__col,
                                        isSelected && style['Scheduler__col-selected']
                                    )}
                                    value={min}
                                    onClick={() => onClickHandler({ hour, min })}
                                    key={min}
                                ></td>
                            );
                        })}
                    </tr>
                ))}
            </Table>
            </>
        );
    }
};

export default Scheduler;