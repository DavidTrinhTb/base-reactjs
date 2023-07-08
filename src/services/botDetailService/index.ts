import ApiService from 'services/apiService';

class BotDetailService extends ApiService {
  constructor() {
    super();
  }

  getBotDetailById<T, U = {}>(id: T) {
    return this.get<U>(`/bots/${id}`);
  }

  getBotDetail<T, U = {}>(params: T) {
    return this.get<U>(`/bots/bot_detail`, params);
  }

  getOrderDetail<T, U = {}>(id: T) {
    return this.get<U>(`/orders/configs/${id}`);
  }

  getStatistic<T, U = {}>(params: T) {
    return this.get<U>('/bots/statistics', params);
  }

  createBot<T, U = {}>(data: T) {
    return this.post<U>('/bots/create', data);
  }

  deleteBot<T, U = {}>(id: T) {
    return this.delete<U>(`/bots/delete/${id}`);
  }

  editBot<T, U = {}>(data: T) {
    return this.post<U>('/bots/update', data);
  }

  createOrder<T, U = {}>(data: T) {
    return this.post<U>('/orders/configs/create', data);
  }

  updateOrder<T, U = {}>(data: T) {
    return this.post<U>('/orders/configs/update', data);
  }

  deleteOrder<T, U = {}>(id: T) {
    return this.delete<U>(`/orders/configs/delete/${id}`);
  }
}

export const botDetailService = new BotDetailService();
