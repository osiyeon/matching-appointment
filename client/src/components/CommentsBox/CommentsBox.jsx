import { Progress, Badge, Input, Button } from 'reactstrap';

import style from './CommentsBox.module.scss';

const CommentsBox = () => {
    const comments = [
        {
            name: '지유',
            comment: '오늘약속 안오면절대 안댐',
            profileImg: '/images/bear_character.svg',
        },
        {
            name: '지유',
            comment: '오늘약속 안오면절대 안댐',
            profileImg: '/images/bear_character.svg',
        },
        {
            name: '지유',
            comment: '오늘약속 안오면절대 안댐',
            profileImg: '/images/bear_character.svg',
        },
        {
            name: '지유',
            comment: '오늘약속 안오면절대 안댐',
            profileImg: '/images/bear_character.svg',
        },
        {
            name: '지유',
            comment: '오늘약속 안오면절대 안댐',
            profileImg: '/images/bear_character.svg',
        },
    ];
    return (
        <div className={style.CommentsBox}>
            <div className={style.CommentsBox__body}>
                {comments.map(({ name, comment, profileImg }, idx) => (
                    <div className={style.CommentsBox__row} key={idx}>
                        <div className={style.CommentsBox__row__avatar}>
                            <img
                                src={profileImg}
                                className={style['CommentsBox__row__avatar-img']}
                            />
                        </div>
                        <div className={style.CommentsBox__row__body}>
                            <div className={style['CommentsBox__row__body-name']}>{name}</div>
                            <div className={style['CommentsBox__row__body-comment']}>{comment}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.CommentsBox__input}>
                <Input className={style['CommentsBox__input-inner']} placeholder="댓글을 남겨보세요."/>
                <Button className={style['CommentsBox__input-button']}>등록</Button>
            </div>
        </div>
    );
};

export default CommentsBox;