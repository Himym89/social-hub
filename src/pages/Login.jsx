import ButtonAction from '../components/UI/ButtonAction/ButtonAction';
import InputText from '../components/UI/InputText/InputText';
import { useAuthContext } from '../contexts/AuthContext';

function Login() {
  const { setIsAuth } = useAuthContext();

  const loginHandler = (event) => {
    event.preventDefault();

    setIsAuth(true);

    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>Пожалуйста, войдите</h1>
      <form onSubmit={loginHandler}>
        <InputText type="text" placeholder="Введите логин" />
        <InputText type="password" placeholder="Введите пароль" />
        <ButtonAction>Войти</ButtonAction>
      </form>
    </div>
  );
}

export default Login;
