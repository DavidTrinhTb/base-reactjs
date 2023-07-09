import { z } from 'zod';

import { DTO } from 'constant/dto';

import { DIARY_MANAGEMENT } from '.';

export const DiarySchema = z.object({
  [DIARY_MANAGEMENT.DATE]: z.string(),
  [DIARY_MANAGEMENT.TITLE]: z.string(),
  [DIARY_MANAGEMENT.DESCRIPTION]: z.string(),
});

export type IDiary = z.infer<typeof DiarySchema>;

export class DiaryDTO {
  date?;
  title?;
  description?;

  constructor(response: IDiary) {
    const { date, title, description } = new DTO().safeParseResponse<IDiary>(DiarySchema, response);

    this.date = date;
    this.title = title;
    this.description = description;
  }
}
