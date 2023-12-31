import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';

/** Принимает весь объект хранилища, передаёт его во все функции, кроме последней.
 * Результаты возвращаемые из этих функций кэширует и передаёт в последнюю функцию.
 * Результат возвращаемый из последней функции так же кэширует и возвращает как итоговый.
 * useSelect возвращает этот результат в компонент
 */
export const getCounterValue = createSelector(
  getCounter,
  counter => counter.value,
);
