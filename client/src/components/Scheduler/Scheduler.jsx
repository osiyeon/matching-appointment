import style from './Scheduler.module.scss';

import { Table } from 'reactstrap';

const Scheduler = () => {
    const hourList = Array.from({ length: 18 }, (_, i) => i + 7);
    const minuteList = Array.from({ length: 6 }, (_, i) => (i+1)*10)
    return (
        <Table className={style.Scheduler}>
            <th></th>
            {minuteList.map((min) => (<th>{min}</th>))}
            {hourList.map((hour) => (
                <tr>
                    <td className={style['Scheduler__header-vertical']}>{hour}</td>
                    {minuteList.map((min) => <td className={style.Scheduler__col}></td>)}
                </tr>
            ))}
        </Table>
    );
};

export default Scheduler;