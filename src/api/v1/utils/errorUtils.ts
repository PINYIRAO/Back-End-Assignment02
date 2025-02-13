/**
 * deal with the error message in a consistent way
 * @param error the thrown error
 * @returns
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

/**
 * deal with the error code in a consistent way
 * @param error the thrown error
 * @returns
 */
export function getErrorCode(error: unknown): string {
  if (error && typeof error === "object" && "code" in error) {
    return String(error.code);
  }
  // the default code is 500
  return "500";
}
