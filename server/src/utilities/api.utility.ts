import { Response } from 'express';
import { IErrorResponse } from '../../../shared/api.schemas';
import { AppError } from '../models/AppError';
import { logError } from './logger';

export function handleApiError(res: Response): (error: Error | AppError) => void {
  return (error: Error | AppError): void => {
    logError(error);

    const isAppError = (error as AppError).isAppError;
    const status = isAppError ? 400 : 500;
    const message = isAppError ? error.message : 'Ups, something went wrong';

    const errorResponse: IErrorResponse = { error: message };

    res.status(status).send(errorResponse);
  };
}

export function handleApiResponse(res: Response): (data: any) => void {
  return (data: any): void => {
    res.status(200).send(data);
  };
}
