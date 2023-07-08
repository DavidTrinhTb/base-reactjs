import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';

import { DEFAULT_SEARCH_PARAMS } from 'constant';

export const SEARCH_PANEL_KEY = '1';

const useSearchBar = <T>({
  defaultValues,
  defaultSearchParams,
  formResetValues,
  defaultSort = {},
  setSort,
  setSearchParams,
  resolver,
}: {
  defaultValues: any;
  defaultSearchParams: any;
  defaultSort?: any;
  resolver?: any;
  formResetValues?: any;
  setSort?: Dispatch<any>;
  setSearchParams?: Dispatch<SetStateAction<T>>;
}) => {
  const [activeKey, setActiveKey] = useState<string[]>([]);

  const formContext = useForm({
    defaultValues,
    resolver,
  });
  const { handleSubmit, reset } = formContext;

  const toggleFilter = () => {
    setActiveKey((activeKey) => (activeKey.length > 0 ? [] : [SEARCH_PANEL_KEY]));
  };

  const resetForm = () => {
    if (formResetValues) reset(formResetValues);
    else reset();
    setSort && setSort(defaultSort);
    setSearchParams && setSearchParams(defaultSearchParams);
  };

  const onSubmit = () => {
    handleSubmit((searchParams: T) => {
      if (typeof setSearchParams === 'function') {
        setSearchParams((previousSearchParams) => ({
          ...previousSearchParams,
          ...searchParams,
          offset: defaultSearchParams?.offset || DEFAULT_SEARCH_PARAMS.offset,
        }));
      }
    })();
  };

  return {
    formContext,
    activeKey,

    resetForm,
    onSubmit,
    toggleFilter,
  };
};

export default useSearchBar;
