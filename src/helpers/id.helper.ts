/**
 * Generates a unique ID using timestamp and random numbers
 * @returns A unique string ID
 */
export function generateId(): string {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${randomStr}`;
}

/**
 * Validates if a string is a valid UUID format
 * @param id - The ID to validate
 * @returns True if valid UUID format, false otherwise
 */
export function isValidId(id: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id) || /^[a-z0-9]+-[a-z0-9]+$/i.test(id);
} 