/**
 * Validates email format using regex
 * @param email - Email to validate
 * @returns True if valid email format, false otherwise
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates if a string is not empty and has minimum length
 * @param value - String to validate
 * @param minLength - Minimum length required
 * @returns True if valid, false otherwise
 */
export function validateString(value: string, minLength: number = 1): boolean {
  return typeof value === 'string' && value.trim().length >= minLength;
}

/**
 * Validates if a value is a valid number
 * @param value - Value to validate
 * @returns True if valid number, false otherwise
 */
export function validateNumber(value: any): boolean {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Validates if a value is a valid date
 * @param value - Value to validate
 * @returns True if valid date, false otherwise
 */
export function validateDate(value: any): boolean {
  const date = new Date(value);
  return date instanceof Date && !isNaN(date.getTime());
} 