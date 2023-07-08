import ApiService from 'services/apiService';

class UserService extends ApiService {
  constructor() {
    super();
  }

  getUserDetail() {
    return this.get('/users/profile');
  }
}

export const userService = new UserService();
