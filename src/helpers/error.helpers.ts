import { FieldErrors, FieldValues } from 'react-hook-form';
import { FormFieldProps } from '../Form';

export const getGeneralErrorMessage = <T>(error: FieldErrors<FieldValues>, fields: FormFieldProps<T>[] = []): string | null => {
  if (Object.keys(error).length === 0) {
    return null;
  }

  if (!fields.length) {
    return (error['']?.message as string) ?? null;
  }

  const availableFields = new Set(fields.map((field) => field.name as string));

  for (const key of Object.keys(error)) {
    if (key === '' || !availableFields.has(key)) {
      const errorKey = error[key];

      if (errorKey && typeof errorKey === 'object' && 'message' in errorKey) {
        return (errorKey as { message?: string }).message ?? null;
      }
    }
  }

  return null;
};
