/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */

interface ErrorType extends Error {
  error_code: number;
}

export function to<T, U = ErrorType>(
  promise: Promise<T>,
  errorExt?: object | null,
  cb?: () => void,
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt);
        return [parsedError, undefined];
      }

      return [err, undefined];
    })
    .finally(() => {
      if (typeof cb === 'function') cb();
    });
}

export default to;
