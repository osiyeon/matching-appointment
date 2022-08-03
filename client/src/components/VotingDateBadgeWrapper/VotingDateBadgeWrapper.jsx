import style from './VotingDateBadgeWrapper.module.scss';

import { Button } from 'reactstrap';

const VotingDateBadgeWrapper = () => {
    const dateList = ['07월 17일 (월)', '07월 18일 (화)', '07월 19일 (수)', '07월 20일 (목)'];
    return (
        <div className={style.VotingDateBadgeWrapper}>
            {dateList.map((date) => (
                <Button outline className={style.VotingDateBadgeWrapper__button}>{date}</Button>
            ))}
        </div>
    );
};

export default VotingDateBadgeWrapper;