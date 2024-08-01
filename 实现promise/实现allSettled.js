/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-01 17:30:30
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-01 17:42:06
 * @FilePath: /js-challenges/实现promise/实现allSettled.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const generatePromise = (deley) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`resolve-----${deley}`);
		}, deley);
	});
};

const generatePromise2 = (deley) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(`reject-----${deley}`);
		}, deley);
	});
};

Promise.myAllSettled = function (arr) {
	let res = [];
	let count = 0;
	return new Promise((resolve, reject) => {
		arr.forEach((item, index) => [
			item
				.then((val) => {
					res[index] = val;
				})
				.catch((err) => {
					res[index] = err;
				})
				.finally(() => {
					count++;
					if (count === arr.length) {
						resolve(res);
					}
				}),
		]);
	});
};

const arr = [generatePromise(1000), generatePromise2(2000), generatePromise(3000), generatePromise2(4000)];
Promise.myAllSettled(arr).then((res) => {
	console.log("-----------", res, "-------------");
});
