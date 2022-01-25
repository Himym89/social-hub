/*
  Данный кастомный хук:
  - обрабатывает индикацию загрузки;
  - обрабатывает ошибку запроса на получение данных;
  - выполняет колбэк (запрос)
 */

import { useState } from 'react';

// callback - это запрос, перед выполнением которого необходимо показать loader,
// а после выполнения - скрыть
const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState('');

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (error) {
      setLoadingError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, loadingError];
};

export default useFetching;
