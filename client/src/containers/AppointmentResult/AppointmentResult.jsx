import { useState } from 'react';
import cx from 'classnames';

import AppointmentMainInfos from '../../components/AppointmentMainInfos/AppointmentMainInfos';
import MemberListCard from '../../components/MemberListCard/MemberListCard';
import CommentsBox from '../../components/CommentsBox/CommentsBox';

import style from './AppointmentResult.module.scss';

const AppointmentResult = () => {
    const rankingList = [
        '2022년 7월 21일 오전 11:40 - 오후 15:40',
        '2022년 7월 21일 오전 11:40 - 오후 15:40',
        '2022년 7월 21일 오전 11:40 - 오후 15:40',
        '2022년 7월 21일 오전 11:40 - 오후 15:40',
        '2022년 7월 21일 오전 11:40 - 오후 15:40',
    ];

    const members = [
        { profileImg: '/images/bear_character.svg', name: '무너' },
        { profileImg: '/images/bear_character.svg', name: '꽥꽥이' },
        { profileImg: '/images/bear_character.svg', name: '곰돌이' },
        { profileImg: '/images/bear_character.svg', name: '기러기' },
    ];
    const [selectedRankingIdx, setSelectedRankingIdx] = useState(0);
    const [selectedRanking, setSelectedRanking] = useState('');

    const selectRanking = (idx, value) => {
        if (selectedRankingIdx !== idx) {
            setSelectedRankingIdx(idx + 1);
            setSelectedRanking(value);
        } else {
            setSelectedRankingIdx(0);
            setSelectedRanking('');
        }
    };

    return (
        <div className={style.AppointmentResult}>
            {!!selectedRankingIdx && (
            <div className={style.AppointmentResult__wrapper}>
                <div className={style.AppointmentResult__title}>약속 투표 결과</div>
                    <div className={style['AppointmentResult__ranking-selected']}>{selectedRanking}</div>
            </div>)}
            <div className={style.AppointmentResult__wrapper}>
                <div className={style.AppointmentResult__title}>순위</div>
                <div
                    className={cx(style.AppointmentResult__body, style.AppointmentResult__ranking)}
                >
                    {rankingList.map((item, idx) => {
                        const imgSrc = `/images/ranking_badge_${idx + 1}.svg`;
                        return (
                            <div
                                className={cx(
                                    style.AppointmentResult__row,
                                    selectedRankingIdx === idx + 1 &&
                                        style['AppointmentResult__row-active']
                                )}
                                onClick={() => {
                                    selectRanking(idx, item);
                                }}
                            >
                                <img src={imgSrc} />
                                {item}
                            </div>
                        );
                    })}
                </div>
            </div>
            <AppointmentMainInfos />
            <div className={style.AppointmentResult__wrapper}>
                <div className={style.AppointmentResult__title}>멤버</div>
                <MemberListCard memberList={members} />
            </div>
            <div className={style.AppointmentResult__wrapper}>
                <div className={style.AppointmentResult__title}>댓글</div>
                <CommentsBox />
            </div>
        </div>
    );
};

export default AppointmentResult;