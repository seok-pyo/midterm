export class ProxyEmp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        // 이 부분을 작성하시오.
      },

      set(target, prop, value) {
        // 이 부분을 작성하시오.
      },
    });
  }
}
