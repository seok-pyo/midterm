export class ProxyEmp {
  firstName;
  lastName;
  fullName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop === 'fullName') {
          return `${target.firstName} ${target.lastName}`;
        }

        return target[prop];
      },

      set(target, prop, value) {
        // 이 부분을 작성하시오.
        if (prop === 'fullName') {
          const [f, l] = value.split(' ');
          if (f && l) {
            target.firstName = f;
            target.lastName = l.toUpperCase();
            target.fullName = `${f} ${l}`;
          } else {
            target.lastName = f.toUpperCase();
          }
        }

        return target[prop];
      },
    });
  }
}
