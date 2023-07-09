import { z } from 'zod';

import { DTO } from 'constant/dto';

import { PHOTO_MANAGEMENT } from '.';

export const PhotoSchema = z.object({
  [PHOTO_MANAGEMENT.BANNER_URL]: z.string(),
  [PHOTO_MANAGEMENT.TITLE]: z.string(),
});

export type IPhoto = z.infer<typeof PhotoSchema>;

export class ColumnDTO {
  bannerUrl?;
  title?;

  constructor(response: IPhoto) {
    const { bannerUrl, title } = new DTO().safeParseResponse<IPhoto>(PhotoSchema, response);

    this.bannerUrl = bannerUrl;
    this.title = title;
  }
}
