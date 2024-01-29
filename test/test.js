import ErrorRepositor from '../src/script';

test('must return Unknown error', () => {
  const error = new ErrorRepositor();
  const unknown = error.translate(100);
  expect(unknown).toBe('Unknown error');
});

test.each([
  [400, 'Bad Request'],
  [404, 'Not Found'],
  [405, 'Method Not Allowed'],
  [500, 'Internal Server Error'],
  [502, 'Bad Gateway'],
])('testing with status %s', (status, description) => {
  const errors = new ErrorRepositor();
  const result = errors.translate(status);
  expect(result).toBe(description);
});
