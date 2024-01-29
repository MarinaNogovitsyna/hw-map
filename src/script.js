export default class ErrorRepositor {
  constructor() {
    this.errors = new Map();
    this.errors.set(400, 'Bad Request');
    this.errors.set(404, 'Not Found');
    this.errors.set(405, 'Method Not Allowed');
    this.errors.set(500, 'Internal Server Error');
    this.errors.set(502, 'Bad Gateway');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
