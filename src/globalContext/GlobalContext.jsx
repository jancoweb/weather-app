import { useState, useContext } from 'react';
import { GlobalContext } from './GlobalProvider';

export function useGlobalProvider() {
  const [weather, setWeather] = useState(null);
  const [notFound, setNotFound] = useState(false);

  return {
    weather, setWeather, notFound, setNotFound
  }
}
export function useGlobalContext() {
  return useContext(GlobalContext)
}