/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-07 14:35:19
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-07 14:43:27
 * @FilePath: /js-challenges/js手写题/有一堆整数，请把他们分成三份，确保每一份和尽量相等.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const arr = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90];

const splitTreeFn = (arr) => {
	const res = [
		{ sum: 0, arr: [] },
		{ sum: 0, arr: [] },
		{ sum: 0, arr: [] },
	];

	arr.sort((a, b) => a - b);
	for (let key of arr) {
		res.sort((a, b) => a.sum - b.sum);
		res[0].sum += key;
		res[0].arr.push(key);
	}

	return res.map((_item) => _item.arr);
};

console.log("-----------", splitTreeFn(arr), "-------------");

function splitToThree(arr) {
	const sum = arr.reduce((acc, cur) => acc + cur, 0); // 从大到小
	arr.sort((a, b) => b - a);
	const targetSum = sum / 3;
	const subArrs = [[], [], []];
	const sumArr = [0, 0, 0];
	for (let i of arr) {
		if (sumArr[0] < targetSum) {
			subArrs[0].push(i);
			sumArr[0] += i;
		} else if (sumArr[1] < targetSum) {
			subArrs[1].push(i);
			sumArr[1] += i;
		} else {
			subArrs[2].push(i);
			sumArr[2] += i;
		}
	}
	return subArrs;
}
splitToThree([11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]);
