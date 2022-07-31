
import style from './Header.module.scss';

const Header = ({title, addButton, introButton}) => {
    return(
        <>
    	<div className={style.Header}>
            {introButton && (
                <div className={style.Header__introButton}>?</div>
            )}
            <div className={style.Header__title}>{title}</div>
            {addButton && (
                <div className={style.Header__addButton}>+</div>
            )}
        </div>
        
        </>
    )
}

export default Header;