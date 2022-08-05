import style from './VoteAppointment.module.scss';

import Scheduler from '../Scheduler/Scheduler';
import VotingDateBadgeWrapper from '../VotingDateBadgeWrapper/VotingDateBadgeWrapper';
import AppointmentMainInfos from '../AppointmentMainInfos/AppointmentMainInfos';
import FullTextButton from '../FullTextButton/FullTextButton';

const VoteAppointment = () => {
    return (
        <div className={style.VoteAppointment}>
            <VotingDateBadgeWrapper />
            <Scheduler />
            <div className={style.VoteAppointment__infos}>
                <AppointmentMainInfos containingName />
                <FullTextButton text="투표하기" />
            </div>
        </div>
    );
};

export default VoteAppointment;