import { BsQuestionCircle, BsPlusCircleFill } from 'react-icons/bs';

import style from './Header.module.scss';

const Header = ({ title, addButton, introButton }) => {
    return (
        <div className={style.Header}>
            <div className={style.Header__content}>
                {introButton && <BsQuestionCircle className={style.Header__introButton} />}
                <div className={style.Header__title}>{title}</div>
                {addButton && <BsPlusCircleFill className={style.Header__addButton} />}
            </div>
            <img src="/images/header.svg" className={style.Header__background} />
        </div>
    );
};

export default Header;