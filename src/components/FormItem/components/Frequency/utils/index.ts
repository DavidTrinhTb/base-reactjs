export const FREQUENCIES = [
  { label: 'frequency.secs', value: 1 },
  { label: 'frequency.mins', value: 60 },
  { label: 'frequency.hours', value: 3600 },
  { label: 'frequency.days', value: 86400 },
];

export const convertFrequency = (amount: string) => {
  let selectedFrequency = {} as { value: number | string; label: string; frequency: number };

  for (const { value, label } of FREQUENCIES.slice().reverse()) {
    const convertedFrequency = parseInt(amount) / value;

    if (convertedFrequency >= 1 && convertedFrequency === parseInt(convertedFrequency.toString())) {
      selectedFrequency = { value: parseInt(amount) / value || '', label, frequency: value };
      break;
    }
  }

  return selectedFrequency;
};
