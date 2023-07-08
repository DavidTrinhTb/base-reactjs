import { useCallback } from 'react';
import type { FieldValues, Path, UseFormWatch } from 'react-hook-form';

import { addDays, parseISO, startOfDay } from 'date-fns';
import endOfDay from 'date-fns/endOfDay';
import format from 'date-fns/format';
import subDays from 'date-fns/subDays';
import range from 'lodash/range';

import { DATE_FORMAT } from 'constant';

const useDisableDateRange = <T extends FieldValues>(
  watch: UseFormWatch<T>,
  fromKey: Path<T>,
  toKey: Path<T>,
  disableFutureDate?: boolean,
  disablePastDate?: boolean,
  showTime?: boolean,
) => {
  const watchFromValue = watch(fromKey);
  const watchToValue = watch(toKey);

  const from = watchFromValue === '0' ? new Date() : watchFromValue;
  const to = watchToValue === '0' ? new Date() : watchToValue;

  const disableStartDate = useCallback(
    (current: Date) => {
      const currentDate = showTime ? new Date() : endOfDay(new Date());
      const yesterday = endOfDay(subDays(new Date(), 1));

      if (to) {
        return !!(
          current > startOfDay(addDays(new Date(typeof to === 'string' ? parseISO(to) : to), 1)) ||
          (disablePastDate && current > currentDate) ||
          (disableFutureDate && current < yesterday)
        );
      }

      if (disablePastDate) return current > currentDate;
      if (disableFutureDate) return current < yesterday;

      return false;
    },
    [to],
  );

  const disableEndDate = useCallback(
    (current: Date) => {
      const currentDate = showTime ? new Date() : endOfDay(new Date());
      const yesterday = endOfDay(subDays(new Date(), 1));

      if (from) {
        return !!(
          current < endOfDay(subDays(new Date(typeof from === 'string' ? parseISO(from) : from), 1)) ||
          (disablePastDate && current > currentDate) ||
          (disableFutureDate && current < yesterday)
        );
      }

      if (disablePastDate) return current > currentDate;
      if (disableFutureDate) return current < yesterday;

      return false;
    },
    [from],
  );

  const disableStartTime = useCallback(
    (current: Date | null) => {
      if (current) {
        const toDate = to ? (typeof to === 'string' ? parseISO(to) : to) : '';

        const currentDate = format(new Date(current), DATE_FORMAT);
        const today = format(new Date(), DATE_FORMAT);

        const currentHour = new Date(current).getHours();
        const currentMinute = new Date(current).getMinutes();
        const currentSecond = new Date(current).getSeconds();

        const hourDisable = new Date().getHours();
        const minuteDisable = new Date().getMinutes();
        const secondsDisable = new Date().getSeconds();

        const toHourDisable = new Date(toDate).getHours();
        const toMinuteDisable = new Date(toDate).getMinutes();
        const toSecondsDisable = new Date(toDate).getSeconds();

        if (toDate && currentDate === format(new Date(toDate), DATE_FORMAT)) {
          if (currentHour >= toHourDisable) {
            if (currentMinute >= toMinuteDisable) {
              if (currentSecond >= toSecondsDisable) {
                return {
                  disabledHours: () => range(0, 24).splice(toHourDisable + 1, 24),
                  disabledMinutes: () => range(0, 60).splice(toMinuteDisable + 1, 60),
                  disabledSeconds: () => range(0, 60).splice(toSecondsDisable + 1, 60),
                };
              }

              return {
                disabledHours: () => range(0, 24).splice(toHourDisable + 1, 24),
                disabledMinutes: () => range(0, 60).splice(toMinuteDisable + 1, 60),
                disabledSeconds: () =>
                  currentSecond > toSecondsDisable ? range(0, 60).splice(toSecondsDisable + 1, 60) : [],
              };
            }

            return {
              disabledHours: () => range(0, 24).splice(toHourDisable + 1, 24),
              disabledMinutes: () =>
                currentMinute > toMinuteDisable ? [] : range(0, 60).splice(toMinuteDisable + 1, 60),
              disabledSeconds: () => [],
            };
          }

          return {
            disabledHours: () => (currentHour > toHourDisable ? [] : range(0, 24).splice(toHourDisable + 1, 24)),
            disabledMinutes: () => [],
            disabledSeconds: () => [],
          };
        }

        if (currentDate === today) {
          if (hourDisable < currentHour) {
            return {
              disabledHours: () => range(0, 24).splice(0, hourDisable),
              disabledMinutes: () => [],
              disabledSeconds: () => [],
            };
          }

          if (minuteDisable < currentMinute) {
            return {
              disabledHours: () => range(0, 24).splice(0, hourDisable),
              disabledMinutes: () => range(0, minuteDisable),
              disabledSeconds: () => [],
            };
          }

          return {
            disabledHours: () => range(0, 24).splice(0, hourDisable),
            disabledMinutes: () => range(0, minuteDisable),
            disabledSeconds: () => range(0, secondsDisable),
          };
        }

        return {
          disabledHours: () => [],
          disabledMinutes: () => [],
          disabledSeconds: () => [],
        };
      }

      return {
        disabledHours: () => range(0, 24),
        disabledMinutes: () => range(0, 60),
        disabledSeconds: () => range(0, 60),
      };
    },
    [to],
  );

  const disableEndTime = useCallback(
    (current: Date | null) => {
      if (current) {
        const fromDate = from ? (typeof from === 'string' ? parseISO(from) : from) : '';

        const currentDate = format(new Date(current), DATE_FORMAT);
        const today = format(new Date(), DATE_FORMAT);

        const currentHour = new Date(current).getHours();
        const currentMinute = new Date(current).getMinutes();

        const hourDisable = new Date().getHours();
        const minuteDisable = new Date().getMinutes();
        const secondsDisable = new Date().getSeconds();

        const fromHourDisable = new Date(fromDate).getHours();
        const fromMinuteDisable = new Date(fromDate).getMinutes();
        const fromSecondDisable = new Date(fromDate).getSeconds();

        if (fromDate && currentDate === format(new Date(fromDate), DATE_FORMAT)) {
          if (fromHourDisable < currentHour) {
            return {
              disabledHours: () => range(0, 24).splice(0, fromHourDisable),
              disabledMinutes: () => [],
              disabledSeconds: () => [],
            };
          }

          if (fromMinuteDisable < currentMinute) {
            return {
              disabledHours: () => range(0, 24).splice(0, fromHourDisable),
              disabledMinutes: () => range(0, fromMinuteDisable),
              disabledSeconds: () => [],
            };
          }

          return {
            disabledHours: () => range(0, 24).splice(0, fromHourDisable),
            disabledMinutes: () => range(0, fromMinuteDisable),
            disabledSeconds: () => range(0, fromSecondDisable),
          };
        }

        if (currentDate === today) {
          if (hourDisable < currentHour) {
            return {
              disabledHours: () => range(0, 24).splice(0, hourDisable),
              disabledMinutes: () => [],
              disabledSeconds: () => [],
            };
          }

          if (minuteDisable < currentMinute) {
            return {
              disabledHours: () => range(0, 24).splice(0, hourDisable),
              disabledMinutes: () => range(0, minuteDisable),
              disabledSeconds: () => [],
            };
          }

          return {
            disabledHours: () => range(0, 24).splice(0, hourDisable),
            disabledMinutes: () => range(0, minuteDisable),
            disabledSeconds: () => range(0, secondsDisable),
          };
        }

        return {
          disabledHours: () => [],
          disabledMinutes: () => [],
          disabledSeconds: () => [],
        };
      }

      return {
        disabledHours: () => range(0, 24),
        disabledMinutes: () => range(0, 60),
        disabledSeconds: () => range(0, 60),
      };
    },
    [from],
  );

  return [disableStartDate, disableEndDate, disableStartTime, disableEndTime] as const;
};

export default useDisableDateRange;
