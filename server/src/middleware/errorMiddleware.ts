import { ValidationError } from "@/types/error";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`Error Handler: ${err}`);
  
  if (err instanceof ValidationError) {
    res.status(400).json({error: err.message});
    return;
  }

  res.status(500).json({error: "Internal Server Error"});
};
