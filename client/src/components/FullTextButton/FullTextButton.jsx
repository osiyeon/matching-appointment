import { Button } from 'reactstrap'
import cx from 'classnames';

import style from './FullTextButton.module.scss';


const FullTextButton = ({text, className}) => {
    return (
        <Button block className={cx(style.FullTextButton, className)}>{text}</Button>
    );
};

export default FullTextButton;