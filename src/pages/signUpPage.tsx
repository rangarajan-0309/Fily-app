import React from 'react';
import Header from '../components/header';
import Signup from '../components/signUp';

const SignupPage: React.FC = () => {
    return (
        <>
            <Header
                heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/"
            />
            <Signup />
        </>
    );
};

export default SignupPage;
