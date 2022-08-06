import { Button } from 'reactstrap'
import cx from 'classnames';

import style from './FullTextButton.module.scss';


const FullTextButton = ({text, className, onClickHandler}) => {
    return (
        <Button block className={cx(style.FullTextButton, className)} onClick={onClickHandler}>{text}</Button>
    );
};

export default FullTextButton;