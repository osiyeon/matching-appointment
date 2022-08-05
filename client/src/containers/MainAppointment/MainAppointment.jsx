import { Progress, Badge } from 'reactstrap';
import FullTextButton from '../../components/FullTextButton/FullTextButton';
import AppointmentMainInfos from '../../components/AppointmentMainInfos/AppointmentMainInfos';
import CommentsBox from '../../components/CommentsBox/CommentsBox';

import style from './MainAppointment.module.scss';

const MainAppointment = () => {
    const name = '예진이와 친구들';
    const placement = '신정네거리';
    const content = '늦게 온 사람 아이스크림 쏘기 근처 건물 스타벅스 있음.';
    const members = [
        { profileImg: '/images/bear_character.svg', name: '무너' },
        { profileImg: '/images/bear_character.svg', name: '꽥꽥이' },
        { profileImg: '/images/bear_character.svg', name: '곰돌이' },
        { profileImg: '/images/bear_character.svg', name: '기러기' },
    ];
    return (
        <div className={style.MainAppointment}>
            <div className={style.MainAppointment__wrapper}>
                <div className={style.MainAppointment__title}>남은시간</div>
                <div className={style.MainAppointment__time}>12:00:15</div>
                <FullTextButton text="투표 다시하기" className={style.MainAppointment__button} />
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
                <div className={style.MainAppointment__member}>
                    {members.map(({ profileImg, name }) => (
                        <div className={style['MainAppointment__member-item']}>
                            <img
                                className={style['MainAppointment__member-profile']}
                                src={profileImg}
                            />
                            <Badge size="lg" className={style['MainAppointment__member-name']}>
                                {name}
                            </Badge>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.MainAppointment__wrapper}>
                <div className={style.MainAppointment__title}>댓글</div>
                <CommentsBox />
            </div>
        </div>
    );
};

export default MainAppointment;