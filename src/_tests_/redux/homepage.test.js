import dataReducer, { getDataAction } from '../../redux/homepage/homepage';

const initialState = [];

test('should return and empty array', () => {
  expect(dataReducer(initialState, [])).toEqual([]);
});

test('should return an array with three elements', () => {
  expect(dataReducer(initialState, getDataAction(['Peru', 'USA', 'Germany']))).toEqual(['Peru', 'USA', 'Germany']);
});

test('should return an array with one element', () => {
  expect(dataReducer(initialState, getDataAction(['Peru']))).toEqual(['Peru']);
});
