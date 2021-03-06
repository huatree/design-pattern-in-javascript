class Customer {
  constructor(name) {
    this.name = name
  }
  getName() {}
  isNil() {}
}

class RealCustomer extends Customer {
  getName() {
    return this.name
  }
  isNil() {
    return false
  }
}
class NullCustomer extends Customer {
  getName() {
    return 'Not Available in Customer Database'
  }
  isNil() {
    return true
  }
}

class CustomerFactory {
  static getCustomer(name) {
    for (let i = 0; i < CustomerFactory.names.length; i++) {
      if (CustomerFactory.names[i].toUpperCase() == name.toUpperCase()) {
        return new RealCustomer(name)
      }
    }
    return new NullCustomer()
  }
}
CustomerFactory.names = ['Rob', 'Joe', 'Julie']

const customer1 = CustomerFactory.getCustomer('Rob')
const customer2 = CustomerFactory.getCustomer('Bob')
const customer3 = CustomerFactory.getCustomer('Julie')
const customer4 = CustomerFactory.getCustomer('Laura')

console.log('Customers')
console.log(customer1.getName())
console.log(customer2.getName())
console.log(customer3.getName())
console.log(customer4.getName())
/**
 * output:
 * Customers
 * Rob
 * Not Available in Customer Database
 * Julie
 * Not Available in Customer Database
 */

/**
 * title: 空对象模式
 * scene: 当存在两个同类的对象时，可以用相同的空对象来代替Null或undefined来做一些检测
 * conclusion: 比如在使用某个类时，需要对这个类来做空判断，在不确定后续这个类的方法是否会被调用时，
 * 用一个相同类的空对象来返回，这样可以更加无缝对接空值判断
 */
