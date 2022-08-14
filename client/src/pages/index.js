import { useRouter } from 'next/router';
import { Button } from 'reactstrap';
import React from 'react';

const Index = () => {
    const router = useRouter();

    const backgroundStyle = {
        background: 'url(/images/first_page.svg)',
        width: '100%',
        height: '100vh',
        ['background-size']: 'cover',
        display: 'flex',
        ['align-items']: 'center',
        ['justify-content']: 'center'
    };
    
    const buttonStyle = {
        background: '#FAE100',
        color: '#000000',
        border: 'none',
        left: '1.125rem',
        width: '22.125rem',
        height: '50px',
        ['border-radius']: '1.875rem',
        ['font-weight']: '600',
        ['font-size']: '1rem',
        ['margin-top']: '8.5rem'
    };

    return (
        <div style={backgroundStyle}>
            <Button
                style={buttonStyle}
                onClick={() => {
                    router.push('/mainList');
                }}
            >
                <img src="/images/kakao_icon.svg" />
                카카오톡으로 3초만에 시작하기
            </Button>
        </div>
    );
};

export default Index;