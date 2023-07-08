import ApiService from 'services/apiService';

class AuthService extends ApiService {
  constructor() {
    super();
  }

  login<T, U = {}>(data: T) {
    return this.post<U>('/auth', data);
  }

  forgotPassword<T, U = {}>(data: T) {
    return this.post<U>('/auth/forgot_password', data);
  }

  resendOTP<T, U = {}>(data: T) {
    return this.post<U>('/auth/resend_code', data);
  }

  submitOTP<T, U = {}>(data: T) {
    return this.post<U>('/auth/verify_code', data);
  }

  resetPassword<T, U = {}>(data: T) {
    return this.post<U>('/auth/reset_password', data);
  }

  changePassword<T, U = {}>(data: T) {
    return this.post<U>('/users/change_password', data);
  }
}

export const authService = new AuthService();
