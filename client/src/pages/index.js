import { useRouter } from 'next/router';
import { Button } from 'reactstrap';
import React from 'react';

const Index = () => {
    const router = useRouter();

    const buttonStyle = {
        position: 'sticky',
        bottom: '21.125rem',
        background: '#FAE100',
        color: '#000000',
        border: 'none',
        left: '1.125rem',
        width: '22.125rem',
        height: '50px',
        ['border-radius']: '1.875rem',
        ['font-weight']: '600',
        ['font-size']: '18px',
    };

    return (
        <div>
            <img width="100%" src="/images/first_page.svg" />
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