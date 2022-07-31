import style from './AppointmentListCard.module.scss';

const AppointmentListCard = ({
    name,
    status,
    votedNumber,
    totalNumber,
    placement,
    members,
    completedDate,
}) => {
    return (
        <div className={style.AppointmentListCard}>
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
                    <div className={style.AppointmentListCard__progressBar} />
                    <div className={style.AppointmentListCard__progressBar__value}>
                        {totalNumber === 0 ? '미정' : `${votedNumber}/${totalNumber}`}
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
                    <div className={style.AppointmentListCard__badge}>
                        {completedDate || '미정'}
                    </div>
                </div>
            </div>
            <div className={style.AppointmentListCard__members}>
                {members.map(({ profileImg }) => (
                    <img className={style.AppointmentListCard__members__character} src={profileImg} />
                ))}
            </div>
        </div>
    );
};

export default AppointmentListCard;