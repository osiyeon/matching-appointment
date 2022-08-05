import { BsGeoAltFill } from 'react-icons/bs';

import style from './AppointmentMainInfos.module.scss';

const AppointmentMainInfos = ({ containingName }) => {
    const mainInfos = [
        {
            name: '예진이와 친구들',
            status: 'ing',
            votedNumber: 2,
            totalNumber: 0,
            placement: '신정네거리',
            members: [
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '/images/character_img_test.svg' },
            ],
            completedDate: '',
        },
    ];
    const name = '예진이와 친구들';
    const placement = '신정네거리';
    const content = '늦게 온 사람 아이스크림 쏘기 근처 건물 스타벅스 있음.';
    return (
        <div className={style.AppointmentMainInfos}>
            <div className={style.AppointmentMainInfos__wrapper}>
                <div className={style.AppointmentMainInfos__title}>장소</div>
                <div className={style.AppointmentMainInfos__body}><BsGeoAltFill className={style.AppointmentMainInfos__icon}/>{placement}</div>
            </div>
            {containingName && (<div className={style.AppointmentMainInfos__wrapper}>
                <div className={style.AppointmentMainInfos__title}>이름</div>
                <div className={style.AppointmentMainInfos__body}>{name}</div>
            </div>)}
            <div className={style.AppointmentMainInfos__wrapper}>
                <div className={style.AppointmentMainInfos__title}>내용</div>
                <div className={style.AppointmentMainInfos__body}>{content}</div>
            </div>
        </div>
    );
};

export default AppointmentMainInfos;