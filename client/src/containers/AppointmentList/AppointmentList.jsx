import AppointmentListCard from '../../components/AppointmentListCard/AppointmentListCard';

import style from './AppointmentList.module.scss';

const AppointmentList = () => {
    const ingData = [
        {
            name: '예진이와 친구들',
            status: 'ing',
            votedNumber: 2,
            totalNumber: 0,
            placement: '신정네거리',
            members: [
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '' },
                { profileImg: '' },
                
            ],
            completedDate: '',
        },
    ];
    const doneData = [
        {
            name: '예진이와 친구들',
            status: 'done',
            votedNumber: 2,
            totalNumber: 4,
            placement: '신정네거리',
            members: [
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '' },
            ],
            completedDate: '2022-07-30',
        },
        {
            name: '밍밍이들',
            status: 'done',
            votedNumber: 2,
            totalNumber: 2,
            placement: '신정네거리',
            members: [
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '/images/character_img_test.svg' },
                { profileImg: '/images/character_img_test.svg' },
                
            ],
            completedDate: '2022-07-30',
            
        },
    ];

    return (
        <>
            <div className={style.AppointmentList__title}>
                <div className={style.AppointmentList__title__text}>진행중인 투표</div>
            </div>
            {ingData.map(({ name, status, votedNumber, totalNumber, placement, members, completedDate }) => (
                <AppointmentListCard
                    name={name}
                    status={status}
                    votedNumber={votedNumber}
                    totalNumber={totalNumber}
                    placement={placement}
                    members={members}
                    completedDate={completedDate}
                />
            ))}
            <div className={style.AppointmentList__title}>
                <div className={style.AppointmentList__title__text}>종료된 투표</div>
            </div>
            {doneData.map(({ name, status, votedNumber, totalNumber, placement, members, completedDate }) => (
                <AppointmentListCard
                    name={name}
                    status={status}
                    votedNumber={votedNumber}
                    totalNumber={totalNumber}
                    placement={placement}
                    members={members}
                    completedDate={completedDate}
                />
            ))}
        </>
    );
};

export default AppointmentList;