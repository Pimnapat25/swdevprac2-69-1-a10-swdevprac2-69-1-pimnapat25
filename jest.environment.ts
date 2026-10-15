import JSDOMEnvironment from "jest-environment-jsdom";

// jsdom does not expose Node's fetch; forward it so lib calls reach the backend.
export default class FetchJSDOMEnvironment extends JSDOMEnvironment {
  constructor(...args: ConstructorParameters<typeof JSDOMEnvironment>) {
    super(...args);
    this.global.fetch = fetch;
    this.global.Headers = Headers;
    this.global.Request = Request;
    this.global.Response = Response;
  }
}
