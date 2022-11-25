import './login.scss';
import img from '../../assets/img/login.svg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="left">
          <h1>
            Learn English <span>Effortlessly</span> and <span>Powerfully</span>{' '}
            .
          </h1>
          <p>
            Take your english to the next level, with fun........ Lorem ipsum
            dolor sit amet. just choose your level and start learning.
          </p>
          <Link to="/levels">
            <button>choose your level</button>
          </Link>
        </div>
        <div className="right">
          <img src={img} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
