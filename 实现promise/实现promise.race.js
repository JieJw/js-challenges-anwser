/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-07-31 16:00:48
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-01 18:05:58
 * @FilePath: /js-challenges/实现promise.all.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//
const generatePromise = (deley) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`deley-----${deley}`);
		}, deley);
	});
};

function myPromiseRace(arr) {
	if (!Array.isArray(arr) || !arr.length) {
		return [];
	}
	return new Promise((resolve, reject) => {
		arr.forEach((_item, _index) => {
			_item.then((_itemRes) => {
				resolve(_itemRes);
			});
		});
	});
}

const arr = [generatePromise(5000), generatePromise(1500), generatePromise(2000), generatePromise(4000)];
myPromiseAll(arr).then((res) => {
	console.log("-----------", res, "-------------");
});
