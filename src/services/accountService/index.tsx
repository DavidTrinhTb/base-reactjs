import ApiService from 'services/apiService';

class AccountService extends ApiService {
  constructor() {
    super();
  }

  getAccountList<U = {}>() {
    return this.get<U>('/account');
  }

  getAccountDetail<T, U = {}>(id: T) {
    return this.get<U>(`/account/${id}`);
  }
}

export const accountService = new AccountService();
