import { ApplicationError } from '@/protocols';

export function adressNotContained(): ApplicationError {
  return {
    name: 'Address Bad Request',
    message: 'Must Contain a Valid Address',
  };
}
