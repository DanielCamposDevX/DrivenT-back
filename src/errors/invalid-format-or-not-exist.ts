import { ApplicationError } from '@/protocols';

export function CepinvalidFormatorNotExist(): ApplicationError {
  return {
    name: 'CepInvalidorNotExist',
    message: 'The cep is invalid or dont exist!',
  };
}
