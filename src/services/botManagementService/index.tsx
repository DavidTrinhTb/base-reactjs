import type { GenericAbortSignal } from 'axios';

import ApiService from 'services/apiService';

class BotManagementService extends ApiService {
  constructor() {
    super();
  }

  getMarketOrderBot<T, U = {}>(data: T, signal?: GenericAbortSignal) {
    return this.get<U>('/bots/management/market', data, null, signal);
  }

  getLimitOrderBot<T, U = {}>(data: T, signal?: GenericAbortSignal) {
    return this.get<U>('/bots/management/limit', data, null, signal);
  }
}

export const botManagementService = new BotManagementService();
