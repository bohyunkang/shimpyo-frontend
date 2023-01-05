export default class Store {
  constructor() {
    this.listeners = new Set();
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener) {
    this.listeners.add(listener);
  }

  unsubscribe(listener) {
    this.listeners.delete(listener);
  }
}
