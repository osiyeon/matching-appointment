import { Input, Button } from 'reactstrap';

import style from './SettingProfile.module.scss';

const SettingProfile = ({}) => {
    return (
        <div className={style.SettingProfile}>
            <div className={style.SettingProfile__header}>프로필 설정</div>
            <div className={style.SettingProfile__nickname__wrapper}>
                <div className={style.SettingProfile__title}>닉네임</div>
                <Input
                    placeholder="닉네임을 입력해 주세요."
                    className={style.SettingProfile__input}
                />
            </div>
            <div className={style.SettingProfile__character__wrapper}>
                <div className={style.SettingProfile__title}>캐릭터 선택</div>
                <div className={style.SettingProfile__characters}>
                    <div className={style.SettingProfile__characters__img}><img src="images/character_img_test.svg" alt="캐릭터"/></div>
                    <div className={style.SettingProfile__characters__img}><img src="images/character_img_test.svg" alt="캐릭터"/></div>
                    <div className={style.SettingProfile__characters__img}><img src="images/character_img_test.svg" alt="캐릭터"/></div>
                    <div className={style.SettingProfile__characters__img}><img src="images/character_img_test.svg" alt="캐릭터"/></div>
                    <div className={style.SettingProfile__characters__img}><img src="images/character_img_test.svg" alt="캐릭터"/></div>
                    <div className={style.SettingProfile__characters__img}><img src="images/character_img_test.svg" alt="캐릭터"/></div>
                    <div className={style.SettingProfile__characters__img}><img src="images/character_img_test.svg" alt="캐릭터"/></div>
                    <div className={style.SettingProfile__characters__img}><img src="images/character_img_test.svg" alt="캐릭터"/></div>
                    <div className={style.SettingProfile__characters__img}><img src="images/character_img_test.svg" alt="캐릭터"/></div>
                </div>
                <Button className={style.SettingProfile__startButton}>시작하기</Button>
            </div>
        </div>
    );
};

export default SettingProfile;