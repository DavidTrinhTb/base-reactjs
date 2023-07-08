import unset from 'lodash/unset';
import type { ZodObject } from 'zod';

export class DTO {
  constructor() {}

  public safeParseResponse<T>(schema: ZodObject<any>, response: any): T {
    const parsedResult = schema.safeParse(response);

    if (!parsedResult.success) {
      parsedResult.error.issues.map(({ path }) => {
        unset(response, path.join('.'));
      });
    }

    return parsedResult.success ? parsedResult.data || {} : response || {};
  }
}
