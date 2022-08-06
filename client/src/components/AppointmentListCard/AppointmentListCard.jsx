import { useRouter } from 'next/router';
import { Progress } from 'reactstrap';
import style from './AppointmentListCard.module.scss';

const AppointmentListCard = ({
    name,
    status,
    votedNumber,
    totalNumber,
    placement,
    members,
    completedDate,
    onClickHandler
}) => {
    const displayedMemembers = members.slice(0, 3);
    return (
        <div className={style.AppointmentListCard} onClick={onClickHandler}>
            <div className={style.AppointmentListCard__wrapper}>
                <div>
                    <div className={style.AppointmentListCard__row}>
                        <div className={style.AppointmentListCard__name}>{name}</div>
                        <div
                            className={
                                status === 'ing'
                                    ? style['AppointmentListCard__status-ing']
                                    : style['AppointmentListCard__status-done']
                            }
                        >
                            {status === 'ing' ? '미참여' : '참여 완료'}
                        </div>
                    </div>
                    <div className={style.AppointmentListCard__row}>
                        <Progress
                            value={(votedNumber / totalNumber) * 100}
                            className={style.AppointmentListCard__progressBar}
                            barClassName={style['AppointmentListCard__progressBar-inner']}
                        />
                        <div className={style.AppointmentListCard__progressBar__value}>
                            {totalNumber === 0 ? '미정' : `${votedNumber}/${totalNumber}`}
                        </div>
                    </div>
                </div>
                <div className={style.AppointmentListCard__members}>
                    {displayedMemembers.map(({ profileImg }) => (
                        <div className={style.AppointmentListCard__members__character}>
                            <img width="90%" src={profileImg} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.AppointmentListCard__row}>
                <div className={style.AppointmentListCard__badge}>
                    <img
                        className={style.AppointmentListCard__badge__icon}
                        src="images/placement_icon.svg"
                    />
                    {placement}
                </div>
                <div className={style.AppointmentListCard__badge}>{completedDate || '미정'}</div>
            </div>
        </div>
    );
};

export default AppointmentListCard;