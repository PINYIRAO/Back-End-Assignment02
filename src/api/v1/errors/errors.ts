// define error classes
export class ExtendedError extends Error {
  code?: string;

  constructor(message: string, code?: string) {
    super(message);
    this.code = code;
    this.name = new.target.name;
  }
}

export class RepositoryError extends ExtendedError {
  constructor(message: string, code: string = "501") {
    super(message, code);
  }
}

export class ServiceError extends ExtendedError {
  constructor(message: string, code: string = "502") {
    super(message, code);
  }
}

export class ValidationError extends ExtendedError {
  constructor(message: string, code: string = "503") {
    super(message, code);
  }
}
