import {
  Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import Favorites from '../../pages/Favorites';
import Posts from '../../pages/Posts';
import NotFound from '../../pages/NotFound';
import PostPage from '../../pages/PostPage';
import Login from '../../pages/Login';
import { useAuthContext } from '../../contexts/AuthContext';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="posts" />} />
      <Route path="/login" element={<Login />} />

      <Route path="posts" element={<Posts />} />
      <Route path="posts/:id" element={<PostPage />} />

      <Route element={<RequireAuth />}>
        <Route path="favorites" element={<Favorites />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function RequireAuth() {
  const { isAuth } = useAuthContext();

  if (!isAuth) {
    // Redirect them to the /login page
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
