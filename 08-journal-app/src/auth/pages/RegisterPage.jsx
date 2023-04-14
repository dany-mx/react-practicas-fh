import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: 'daniel@google.com',
  password: '123456',
  displayName: 'Daniel Hernandez',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe contener @'],
  password: [(value) => value.length >= 6, 'El password debe tener al menos 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    displayName,
    email,
    password,
    handleChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formState);
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}
          >
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              name="displayName"
              value={displayName}
              onChange={handleChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}
          >
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@test.com"
              name="email"
              value={email}
              onChange={handleChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}
          >
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              fullWidth
            />
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid
              item
              xs={12}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="end"
          >
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link
              component={RouterLink}
              color="inherit"
              to="/auth/login"
            >
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
