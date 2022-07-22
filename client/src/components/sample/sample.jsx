import React, {useState} from 'react'

import style from './sample.module.scss';

const Sample = ({ addSample }) => {
    const [sample, setSample] = useState('');
    
    const onChange = (e) => {
        const input = e.currentTarget.value;
        
        setSample(input);
    }
    
    const onClick = () => {
        addSample(sample);
        setSample('');
    }

    return (
        <div className={style.Sample__container}>
            <div className={style.Sample__wrapper}>
                <div>It's MERN sample code</div>
                <input value={sample} onChange={onChange}/>
                <button onClick={onClick}>add to db!</button>
            </div>
        </div>
    );
}

export default Sample;
