/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-07-31 17:12:47
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-07-31 17:42:31
 * @FilePath: /js-challenges/call、apply、bind.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// fn.call(this, []);
// fn.apply(this, ...args);
// fn.bind(this, ...args)();

// call
Function.prototype.myCall = function (ctx, ...args) {
	if (!ctx) ctx = window;
	ctx.__fn = this;

	const res = ctx.__fn(...args);
	delete ctx.__fn;

	return res;
};

const obj = {
	name: "wj",
};
function getName(age, date) {
	console.log(this.name, age, date);
}
getName.myCall(obj, [18, "1997-02-06"]);
