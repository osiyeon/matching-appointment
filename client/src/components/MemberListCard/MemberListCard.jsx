import { Badge } from 'reactstrap';

import style from './MemberListCard.module.scss';

const MemberListCard = ({ memberList }) => {
    return (
        <div className={style.MemberListCard}>
            {memberList.map(({ profileImg, name }) => (
                <div className={style.MemberListCard__item}>
                    <img className={style['MemberListCard__item-profile']} src={profileImg} />
                    <Badge size="lg" className={style['MemberListCard__item-name']}>
                        {name}
                    </Badge>
                </div>
            ))}
        </div>
    );
};

export default MemberListCard;