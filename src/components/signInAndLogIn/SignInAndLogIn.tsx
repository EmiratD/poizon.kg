import {FC} from 'react';

import {Link} from 'react-router-dom';

const SignInAndLogIn:FC = () => {
  return (
    <div className="signInAndLogIn-btns">
      <button className="signInAndLogIn-btns-btn log-in"><Link to='/UserRoomPage'>войти</Link></button>
      <button className="signInAndLogIn-btns-btn sign-up">регистрация</button>
    </div>
  );
};

export default SignInAndLogIn;