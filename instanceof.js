/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-07-31 16:55:56
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-07-31 17:13:46
 * @FilePath: /js-challenges/instanceof.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const myInstanceOf = (obj, fn) => {
	let left = obj.__proto__;
	let right = fn.prototype;
	while (true) {
		if (left === right) return true;
		if (!left) return false;

		left = left.__proto__;
	}
};

console.log("-----------", myInstanceOf(new Date(), Date), "-------------");
console.log("-----------", myInstanceOf({}, Function), "-------------");
function Person(name, age) {
	this.name = name;
	this.age = age;
}
function School(name, address) {
	this.name = name;
	this.address = address;
}
const p1 = new Person("james", 23);
console.log(myInstanceOf(p1, Person) + "--" + myInstanceOf(p1, Object) + "--" + myInstanceOf(p1, School));
