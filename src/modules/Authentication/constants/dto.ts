import { z } from 'zod';

import { DTO } from 'constant/dto';

export const UserSchema = z
  .object({
    email: z.string(),
    access_token: z.string(),
    user: z.any(),
  })
  .partial();

export type IUser = z.infer<typeof UserSchema>;

export class UserDTO {
  email?;
  authenticationToken?;
  user?;

  constructor(response?: IUser) {
    const { email, access_token, user } = new DTO().safeParseResponse<IUser>(UserSchema, response);

    this.email = email;
    this.user = user;
    this.authenticationToken = access_token;
  }
}
