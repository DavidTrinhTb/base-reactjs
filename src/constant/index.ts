export const TYPE_CONSTANTS = {
  MESSAGE: {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    IMG_DONE: 'done',
  } as const,
};

export const HTTP_STATUS_CONSTANTS = {
  OK: 200,
  ERROR_CODE_401: 401,
  ERROR_CODE_404: 404,
  SERVER_ERROR: 'E0',
  ERROR: 400,
  SERVER_ERROR_CODE: 500,
};

export const LENGTH_CONSTANTS = {
  DEFAULT_PAGE: 1,
  DEFAULT_TOTAL: 0,
  DEFAULT_TEXTAREA_ROWS: 4,
  MAX_LENGTH_16: 16,
  MAX_LENGTH_80: 80,
  MAX_LENGTH_INPUT: 256,
  MAX_LENGTH_PASSWORD: 20,
  DEFAULT_PAGE_SIZE: 10,
  MAX_LENGTH_DESCRIPTION: 320,
  DEFAULT_PAGE_SIZE_OPTIONS: ['10', '20', '50'],
};

export const DEFAULT_SEARCH_PARAMS = {
  limit: 10,
  offset: 0,
};

export const PAGE_SIZE_OPTIONS = ['10', '20', '50'];
export const PAGE_SIZE_DEFAULT = 10;

export const DEFAULT_SEARCH_DATE_FORMAT = 'DD/MM/YYYY';
export const DATE_TIME_FORMAT = 'dd/MM/yyyy HH:mm:ss';
export const DATE_FORMAT = 'dd/MM/yyyy';
export const TIME_FORMAT = 'HH:mm';

export const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>? ])[a-zA-Z\d!@#$%^&*()_\-+=<>? ]{8,20}$/,
);

export const ALL_OPTIONS = 'all';

export type SORT_PARAMS = {
  sort?: string;
  asc?: boolean;
};
export const THOUSAND_VALUE = 1000;
export const MAX_DATE_RANGE = 90;
export const MIN_COLUMNS_DEFAULT = 2;
export const SEARCH_TIME = 3000;
