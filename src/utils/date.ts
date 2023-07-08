const ISO_8601 = 'yyyy-MM-dd HH:mm:ss.SSSSSSxxx';

//Placeholder for the value new Date(). Because only calculate the new Date() value and send to BE when user click submit.
export const NOW_VALUE_PLACEHOLDER = '0';
export const convertToISOString = (date: Date | null) => (date ? date.toISOString() : '');
