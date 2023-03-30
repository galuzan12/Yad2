export const promiseHandler = async <T>(
  promise: Promise<T>
): Promise<[T, null] | [null, Error]> => {
  try {
    return [await promise, null];
  } catch (err) {
    return [null, err as Error];
  }
};
