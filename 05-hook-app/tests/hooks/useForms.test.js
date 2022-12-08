import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks"

describe('Pruebas  en useForm', () => {

  const initialForm = {
    name: 'Daniel',
    email: 'daniel@mail.com'
  }

  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      handleChange: expect.any(Function),
      handleReset: expect.any(Function),
    })
  })

  test('debe de cambiar el nombre del formulario', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const {handleChange} = result.current;
    const newValue = 'Gandarillas';
    act(() => {
      handleChange({target: {name: 'name', value: newValue}});
    });

    expect(result.current.name).toEqual(newValue);
    expect(result.current.formState.name).toEqual(newValue)
  })

  test('debe de cambiar el nombre del formulario', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const {handleChange, handleReset} = result.current;
    const newValue = 'Gandarillas';
    act(() => {
      handleChange({target: {name: 'name', value: newValue}});
      handleReset();
    });

    expect(result.current.name).toEqual(initialForm.name);
    expect(result.current.formState.name).toEqual(initialForm.name)
  })
})