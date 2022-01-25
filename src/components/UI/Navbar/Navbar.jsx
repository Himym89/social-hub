import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import classes from './Navbar.module.css';

export default function Navbar() {
  const { isAuth, setIsAuth } = useAuthContext();

  const logoutHandler = () => {
    setIsAuth(false);

    localStorage.removeItem('auth');
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        {isAuth && <span>Добро пожаловать</span>}
        <Link to="favorites">Избранное</Link>
        <Link to="posts">Посты</Link>
        {isAuth ? (
          <Link to="/" onClick={logoutHandler}>
            Выйти
          </Link>
        ) : (
          <Link to="login">Войти</Link>
        )}
      </div>
    </div>
  );
}
