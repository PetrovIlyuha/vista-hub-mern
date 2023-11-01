import { NextFunction, Request, Response } from "express";

interface RequestError extends Error {
  statusCode?: number;
  message: string;
}

function errorHandlingMiddleware(
  err: RequestError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    message,
    success: false,
    statusCode,
  });
}

export default errorHandlingMiddleware;
