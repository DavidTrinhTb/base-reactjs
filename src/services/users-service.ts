import { UserApi } from './implements/implement-apis';
import { ServiceBase } from './core/service-base';
import { UserParams } from './params-type';

class UserServices extends ServiceBase implements UserApi {
  getListUser = (params: UserParams) => {
    return this.get('/admin', params);
  };
  // getDetailAdmin = (params: DetailAdminParams) => {
  //   const { id } = params;
  //   return this.get(`/admin/${id}`);
  // };
  // createNewAdmin = (params: AddNewAdminParams) => {
  //   return this.post('/admin', params);
  // };
  // putEditAdmin = (params: EditAdminParams) => {
  //   const { id, name, email, description, commissionRate } = params;
  //   return this.put(`/admin/${id}`, {
  //     name,////////
  //     email,
  //     description,
  //     commissionRate,
  //   });
  // };
  // deleteAdmin = (params: DeleteAdminParams) => {
  //   const { adminId } = params;
  //   return this.deleteByUrl(`/admin/${adminId}`);
  // };
}

export const userServices = new UserServices();
