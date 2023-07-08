import ApiService from 'services/apiService';

class NotificationsService extends ApiService {
  constructor() {
    super();
  }

  getNotifications() {
    return this.get('/notifications');
  }

  updateNotification<T, U = {}>(data: T) {
    return this.post<U>(`/notifications`, data);
  }
}

export const notificationsService = new NotificationsService();
