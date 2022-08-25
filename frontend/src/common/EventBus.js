/**
 * Event Bus implements the PubSub pattern which allows us to listen and dispatch events from independent components & they don’t have direct dependencies between each other
 * Dispatch logout event to App component when response status tells us the token is expired. 
 */
const eventBus = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default eventBus;
