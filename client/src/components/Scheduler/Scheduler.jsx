import style from './Scheduler.module.scss';

import { Table } from 'reactstrap';

const Scheduler = () => {
    const hourList = Array.from({ length: 18 }, (_, i) => i + 7);
    const minuteList = Array.from({ length: 6 }, (_, i) => (i + 1) * 10);

    const onClickHandler = (e) => {
        e.stopPropagation();
        const { value: targetValue } = e.target;
        const { value: currentTargetValue } = e.currentTarget;

    };
    return (
        <Table className={style.Scheduler}>
            <th></th>
            {minuteList.map((min) => (
                <th>{min}</th>
            ))}
            {hourList.map((hour) => (
                <tr value={hour}>
                    <td className={style['Scheduler__header-vertical']}>{hour}</td>
                    {minuteList.map((min) => (
                        <td
                            className={style.Scheduler__col}
                            value={min}
                            onClick={onClickHandler}
                        ></td>
                    ))}
                </tr>
            ))}
        </Table>
    );
};

export default Scheduler;