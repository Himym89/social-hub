/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useContext, useEffect, useState,
} from 'react';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

// Кастомный хук (обертка над useContext) - чтобы не подтягивать AuthContext в другом компоненте
// useAuthContext возвращает всё, что находится в value провайдера
export const useAuthContext = () => useContext(AuthContext);
