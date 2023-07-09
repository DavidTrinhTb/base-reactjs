import { z } from 'zod';

import { DTO } from 'constant/dto';

import { COLUMN_MANAGEMENT } from '.';

export const PhotoSchema = z.object({
  [COLUMN_MANAGEMENT.BANNER_URL]: z.string(),
  [COLUMN_MANAGEMENT.TITLE]: z.string(),
});

export type IPhoto = z.infer<typeof PhotoSchema>;

export class PhotoDTO {
  bannerUrl?;
  title?;

  constructor(response: IPhoto) {
    const { bannerUrl, title } = new DTO().safeParseResponse<IPhoto>(PhotoSchema, response);

    this.bannerUrl = bannerUrl;
    this.title = title;
  }
}
