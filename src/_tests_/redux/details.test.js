import filterReducer, { filterData } from '../../redux/details/details';

const initialState = {};

test('should return and empty object', () => {
  expect(filterReducer(initialState, {})).toEqual({});
});

test('should return an object with three values', () => {
  expect(filterReducer(initialState, filterData({ country: 'Peru', confirmed: 900, total: 90000 }))).toEqual({ country: 'Peru', confirmed: 900, total: 90000 });
});

test('should return an object with one value', () => {
  expect(filterReducer(initialState, filterData({ country: 'Peru' }))).toEqual({ country: 'Peru' });
});
