import { SocietyRsError, ValidationErrors } from './idl/dscvr.did';
import { Result, SuccessStatus } from './types';

export const isNullish = <T>(
  argument: T | undefined | null,
): argument is undefined | null => argument === null || argument === undefined;

export type TransformOptional<T> = {
  [K in keyof T]: T[K] extends [] | [infer U] ? U | undefined : T[K];
};

export type TransformKeys<T> = T extends { [K in keyof T]: null } ? keyof T : never;

export function convertToResult<T>(
  response: {
    status: string;
    result: [] | [T];
    errors?: [] | [Array<ValidationErrors>];
    message: string;
    error_code?: [] | [SocietyRsError];
  }
): Result<T> {
  const isSuccess = response.status === "success";
  const data = response.result.length > 0 ? response.result[0] : undefined;
  const validationErrors = response.errors?.[0] || [];
  const code = response.error_code?.[0];

  if (isSuccess) {
    return {
      type: "success",
      data: data as T, // Assuming result is valid on success
    };
  } else {
    return {
      type: "failure",
      error: {
        validationErrors: validationErrors.length > 0 ? validationErrors : undefined,
        message: response.message,
        code,
      },
    };
  }
}

export function convertToSuccessResult<T>(data: T): Result<T> {
  return {
    type: "success",
    data,
  };
}

export function convertToErrorResult<T>(
  message: string,
  code?: SocietyRsError,
  validationErrors?: ValidationErrors[]
): Result<T> {
  return {
    type: "failure",
    error: {
      message,
      code,
      validationErrors,
    },
  };
}