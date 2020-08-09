import React from 'react';
import './sign-in-and-sign-out.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import Signp from '../../components/sign-up/sign-up.component';
import SignUp from '../../components/sign-up/sign-up.component';
const SignInAndSIgnOut = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)
export default SignInAndSIgnOut;