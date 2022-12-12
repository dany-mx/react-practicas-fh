import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../auth';
import { Dc, Marvel } from '../heroes';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="marvel"
          element={<Marvel />}
        />
        <Route
          path="dc"
          element={<Dc />}
        />
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="/"
          element={<Navigate to="/marvel" />}
        />
      </Routes>
    </>
  );
};
