export class ProxyEmp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop === 'fullName') return `${target.firstName} ${target.lastName}`;
        return target[prop];
      },

      set(target, prop, value) {
        if (prop === 'fullName') {
          const [firstName, lastName] = value.split(' ');
          lastName === undefined ?
            target.lastName = firstName.toUpperCase() :
            (target.firstName = firstName, target.lastName = lastName.toUpperCase());
          return true;
        }
        return;
      },
    });
  }
}
