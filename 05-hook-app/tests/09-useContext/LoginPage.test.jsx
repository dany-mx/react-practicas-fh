import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en <LoginPage/>', () => {
  const user = {
    id: 123,
    name: 'Daniel Hernandez',
    email: 'daniel@mail.com',
  };

  const setUserMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('debe de mostar null cuando no se establece el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de llamar a la funcion setUser con los datos de user', () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const botonUsuario = screen.getByRole('button');
    fireEvent.click(botonUsuario);

    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
