import ApiService from 'services/apiService';

class OrderService extends ApiService {
  constructor() {
    super();
  }

  getOrderList<T, U = {}>(data: T) {
    return this.get<U>('/orders/management', data);
  }
}

export const orderService = new OrderService();
