export class ProxyEmp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        // 이 부분을 작성하시오.
        // console.log('get');
        if (prop === "fullName") { return `${target.firstName} ${target.lastName}`; } 
        return Reflect.get(target, prop);
      },

      set(target, prop, value) {
        // 이 부분을 작성하시오.
        
        if (prop === "fullName") { 
          if(value.length<4) {
            target.firstName = target.firstName;
            target.lastName = value;
            return 1;
          }
          const [firstName, lastName] = value.split(" ");
          // console.log('set', firstName, lastName); 
          target.firstName = firstName; 
          target.lastName = lastName; 
          return 1; 
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

proxyHong.fullName = 'LEE';
console.log(proxyHong.fullName);//'Kildong LEE'
console.log(proxyHong.firstName);//'Kildong'
console.log(proxyHong.lastName);//'LEE'
