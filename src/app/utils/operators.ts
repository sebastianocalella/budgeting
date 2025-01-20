export function isEmpty<T>(array: T[]): boolean {
  return !array?.length;
}

export function isNotEmpty<T>(array: T[]): boolean {
  return !isEmpty(array);
}
