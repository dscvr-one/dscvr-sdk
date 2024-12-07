import { SocietyRsError, ValidationErrors } from "./idl/dscvr.did";

export const SuccessStatus = 'happy';
export const ErrorStatus = 'sad';

//Monadic result type
export type Result<T> = Success<T> | Failure;

export interface Success<T> {
  type: "success";
  data: T;
}

export interface Failure {
  type: "failure";
  error: ErrorResult;
}

export interface ErrorResult {
  validationErrors?: ValidationErrors[];
  message: string;
  code?: SocietyRsError;
}