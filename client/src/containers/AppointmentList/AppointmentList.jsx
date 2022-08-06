import { useRouter } from 'next/router';
import AppointmentListCard from '../../components/AppointmentListCard/AppointmentListCard';

import style from './AppointmentList.module.scss';

const AppointmentList = () => {
    const router = useRouter();
    const ingData = [
        {
            name: '예진이와 친구들',
            status: 'ing',
            votedNumber: 2,
            totalNumber: 0,
            placement: '신정네거리',
            members: [
                { profileImg: '/images/character/character_rabbit_1.svg' },
                { profileImg: '/images/character/character_penguin_1.svg' },
                { profileImg: '/images/default_icon_1.svg' },
            ],
            completedDate: '',
        },
    ];
    const doneData = [
        {
            name: '예진이와 친구들',
            status: 'done',
            votedNumber: 2,
            totalNumber: 5,
            placement: '신정네거리',
            members: [
                { profileImg: '/images/character/character_poppy_1.svg' },
                { profileImg: '/images/character/character_hedgehog_1.svg' },
                { profileImg: '/images/character/character_bear_1.svg' },
                { profileImg: '/images/character/character_seal_1.svg' },
                { profileImg: '/images/character/character_fox_1.svg' },
            ],
            completedDate: '2022-07-06 오후 12:30',
        },
        {
            name: '밍밍이들',
            status: 'done',
            votedNumber: 2,
            totalNumber: 2,
            placement: '신정네거리',
            members: [
                { profileImg: '/images/character/character_snail_1.svg' },
                { profileImg: '/images/character/character_fox_1.svg' },
                { profileImg: '/images/character/character_penguin_1.svg' },
                { profileImg: '/images/character/character_seal_1.svg' },
            ],
            completedDate: '2022-07-06 오후 12:30',
        },
    ];

    return (
        <>
            <div className={style.AppointmentList__title}>
                <div className={style.AppointmentList__title__text}>진행중인 투표</div>
            </div>
            {ingData.map(
                ({ name, status, votedNumber, totalNumber, placement, members, completedDate }) => (
                    <AppointmentListCard
                        name={name}
                        status={status}
                        votedNumber={votedNumber}
                        totalNumber={totalNumber}
                        placement={placement}
                        members={members}
                        completedDate={completedDate}
                        onClickHandler={() => router.push('/main')}
                        
                    />
                )
            )}
            <div className={style.AppointmentList__title}>
                <div className={style.AppointmentList__title__text}>종료된 투표</div>
            </div>
            {doneData.map(
                ({ name, status, votedNumber, totalNumber, placement, members, completedDate }) => (
                    <AppointmentListCard
                        name={name}
                        status={status}
                        votedNumber={votedNumber}
                        totalNumber={totalNumber}
                        placement={placement}
                        members={members}
                        completedDate={completedDate}
                        onClickHandler={() => router.push('/result')}
                    />
                )
            )}
        </>
    );
};

export default AppointmentList;