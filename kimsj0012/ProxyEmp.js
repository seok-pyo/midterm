export class ProxyEmp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop === 'fullName')
          return target.firstName + ' ' + target.lastName;
        return target[prop];
      },

      set(target, prop, value) {
        if (prop === 'fullName') {
          let [firstName, lastName] =
            value.split(' ').length === 1
              ? [undefined, value]
              : value.split(' ');
          target.firstName = target.firstName || firstName;
          target.lastName = lastName.toUpperCase();
          return target;
        }
      },
    });
  }
}
