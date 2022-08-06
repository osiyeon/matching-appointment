import { useRouter } from 'next/router';
import { Progress, Badge } from 'reactstrap';
import FullTextButton from '../../components/FullTextButton/FullTextButton';
import AppointmentMainInfos from '../../components/AppointmentMainInfos/AppointmentMainInfos';
import CommentsBox from '../../components/CommentsBox/CommentsBox';
import MemberListCard from '../../components/MemberListCard/MemberListCard';

import style from './MainAppointment.module.scss';

const MainAppointment = () => {
    const router = useRouter();

    const name = '예진이와 친구들';
    const placement = '신정네거리';
    const content = '늦게 온 사람 아이스크림 쏘기 근처 건물 스타벅스 있음.';
     const members = [
        { profileImg: '/images/character/character_bear_1.svg', name: '무너' },
        { profileImg: '/images/character/character_rabbit_1.svg', name: '꽥꽥이' },
        { profileImg: '/images/character/character_penguin_1.svg', name: '곰돌이' },
        { profileImg: '/images/character/character_poppy_1.svg', name: '기러기' },
        { profileImg: '/images/character/character_hedgehog_1.svg', name: '고슴도치' },
        { profileImg: '/images/character/character_seal_1.svg', name: '물개' },
        { profileImg: '/images/character/character_fox_1.svg', name: '곰돌이' },
        { profileImg: '/images/character/character_snail_1.svg', name: '기러기' },
    ];
    return (
        <div className={style.MainAppointment}>
            <div className={style.MainAppointment__wrapper}>
                <div className={style.MainAppointment__title}>남은시간</div>
                <div className={style.MainAppointment__time}>12:00:15</div>
                <FullTextButton text="투표 다시하기" className={style.MainAppointment__button} onClickHandler={() => {router.push('/vote')}}/>
            </div>
            <AppointmentMainInfos />
            <div className={style.MainAppointment__wrapper}>
                <div className={style.MainAppointment__title}>진행상황</div>
                <div className={style.MainAppointment__progress}>
                    <Progress
                        value={50}
                        className={style.MainAppointment__progress__bar}
                        barClassName={style['MainAppointment__progress__bar-inner']}
                    />
                    <div>1/2</div>
                </div>
            </div>
            <div className={style.MainAppointment__wrapper}>
                <div className={style.MainAppointment__title}>멤버</div>
                <MemberListCard memberList={members} />
            </div>
            <div className={style.MainAppointment__wrapper}>
                <div className={style.MainAppointment__title}>댓글</div>
                <CommentsBox />
            </div>
        </div>
    );
};

export default MainAppointment;