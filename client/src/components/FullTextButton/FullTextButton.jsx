import { Button } from 'reactstrap'
import style from './FullTextButton.module.scss';


const FullTextButton = ({text}) => {
    return (
        <Button block className={style.FullTextButton}>{text}</Button>
    );
};

export default FullTextButton;