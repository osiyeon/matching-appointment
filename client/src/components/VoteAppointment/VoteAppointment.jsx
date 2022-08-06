import { useRouter } from 'next/router';
import style from './VoteAppointment.module.scss';

import Scheduler from '../Scheduler/Scheduler';
import VotingDateBadgeWrapper from '../VotingDateBadgeWrapper/VotingDateBadgeWrapper';
import AppointmentMainInfos from '../AppointmentMainInfos/AppointmentMainInfos';
import FullTextButton from '../FullTextButton/FullTextButton';

const VoteAppointment = () => {
    const router = useRouter();
    
    return (
        <div className={style.VoteAppointment}>
            <VotingDateBadgeWrapper />
            <Scheduler />
            <div className={style.VoteAppointment__infos}>
                <AppointmentMainInfos containingName />
                <FullTextButton text="투표하기" onClickHandler={() => {router.push('/main')}}/>
            </div>
        </div>
    );
};

export default VoteAppointment;