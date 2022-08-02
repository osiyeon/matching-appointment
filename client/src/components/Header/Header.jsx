import { BsQuestionCircle, BsPlusCircleFill } from 'react-icons/bs';

import style from './Header.module.scss';

const Header = ({ title, addButton, introButton }) => {
    return (
        <>
            <div className={style.Header}>
                {introButton && <BsQuestionCircle className={style.Header__introButton} />}
                <div className={style.Header__title}>{title}</div>
                {addButton && <BsPlusCircleFill className={style.Header__addButton} />}
            </div>
        </>
    );
};

export default Header;