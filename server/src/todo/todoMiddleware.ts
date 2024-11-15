import { ValidationError } from "@/types/error";
import e, { NextFunction, Request, Response } from "express";
import { todoService } from "./todoService";

export const validateTodoCreate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const {description} = req.body;

  if (!description) {
    next(new ValidationError("Description is required"));
    return;
  };

  if (typeof description !== "string") {
    next(new ValidationError("Description must be a string"));
    return;
  };
  
  if (description.trim().length === 0) {
    next(new ValidationError("Description cannot be empty"));
    return;
  };

  next();
};

export const validateTodoGet = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const {id} = req.params;

  if (!id || isNaN(parseInt(id))) {
    next(new ValidationError("Invalid or missing todo ID"));
    return;
  };

  todoService.getTodo(parseInt(id)).then((todo) => {
    if (!todo) {
      next(new ValidationError("Unknown todo ID"));
      return;
    };
    console.log("GET VALIDATION SUCCESS");
    next();
  }).catch((err) => {
    if (err instanceof ValidationError) {
      next(err);
    } else {
      console.error(`Error: ${err}`);
      res.status(500).json({error: "Internal server error."});
    };
  });

};


export const validateTodoUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const {id} = req.params;
  const {description} = req.body;

  if (!id || isNaN(parseInt(id))) {
    next(new ValidationError("Invalid or missing todo ID"));
    return;
  };

  if (!description) {
    next(new ValidationError("Description is required"));
    return;
  };

  if (typeof description !== "string") {
    next(new ValidationError("Description must be a string"));
    return;
  };
  
  if (description.trim().length === 0) {
    next(new ValidationError("Description cannot be empty"));
    return;
  };

  todoService.getTodo(parseInt(id)).then((todo) => {
    if (!todo) {
      next(new ValidationError("Cannot update a non-existing todo ID"));
      return;
    };

    console.log("UPDATE VALIDATION SUCCESS");
    next();
  }).catch((err) => {
    if (err instanceof ValidationError) {
      next(err);
    } else {
      console.error(`Error: ${err}`);
      res.status(500).json({error: "Internal server error."});
    };
  });
};

export const validateTodoDelete = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const {id} = req.params;
  
  if (!id || isNaN(parseInt(id))) {
    next(new ValidationError("Invalid or missing todo ID"));
    return;
  };

  todoService.getTodo(parseInt(id)).then((todo) => {
    if (!todo) {
      next(new ValidationError("Unknown todo ID"));
      return;
    };
    console.log("DELETE VALIDATION SUCCESS");
    next();
  }).catch((err) => {
    if (err instanceof ValidationError) {
      next(err);
    } else {
      console.error(`Error: ${err}`);
      res.status(500).json({error: "Internal server error."});
    };
  });
};
