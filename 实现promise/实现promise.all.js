/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-07-31 16:00:48
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-01 17:43:25
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

function myPromiseAll(arr) {
	if (!Array.isArray(arr) || !arr.length) {
		return [];
	}
	const resArr = [];
	let count = 0;
	return new Promise((resolve, reject) => {
		arr.forEach((_item, _index) => {
			_item.then((_itemRes) => {
				resArr[_index] = _itemRes;
				count++;
				if (arr.length === count) {
					resolve(resArr);
				}
			});
		});
	});
}

const arr = [generatePromise(1000), generatePromise(2000), generatePromise(3000), generatePromise(4000)];
myPromiseRace(arr).then((res) => {
	console.log("-----------", res, "-------------");
});
