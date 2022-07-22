import React from 'react';
import axios from 'axios';

import SampleComp from '../components/sample';

const Sample = () => {    
    const addSample = async (text) => {
        const addResult = await axios.post('/api/sample', {
            userId: "sample_id",
            text,
        });
        
        if(addResult) {
            console.log(addResult)
        }
    }
    
    return (
    <SampleComp addSample={addSample}/>
    );
}

export default Sample;
