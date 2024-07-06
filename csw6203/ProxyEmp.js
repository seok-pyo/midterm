export class ProxyEmp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        // 이 부분을 작성하시오.
        if (prop === "fullName") { return `${target.firstName} ${target.lastName}`; } 
        return Reflect.get(target, prop);
      },

      set(target, prop, value) {
        // 이 부분을 작성하시오.
        if (prop === "fullName") { 
          const [firstName, lastName] = value.split(" "); 
          target.firstName = firstName; 
          target.lastName = lastName; 
          return true; 
        } 
        return Reflect.set(target, prop, value);
      },
    });
  }
}

const proxyHong = new ProxyEmp();
proxyHong.fullName = 'Kildong Hong';
console.log(proxyHong.fullName);//'Kildong HONG'
console.log(proxyHong.firstName);//'Kildong'
console.log(proxyHong.lastName);//'HONG'

proxyHong.lastName = 'LEE';
console.log(proxyHong.fullName);//'Kildong LEE'
console.log(proxyHong.firstName);//'Kildong'
console.log(proxyHong.lastName);//'LEE'
