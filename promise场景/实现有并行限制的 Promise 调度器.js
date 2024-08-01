/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-01 16:26:09
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-01 16:49:25
 * @FilePath: /js-challenges/promise场景/实现有并行限制的 Promise 调度器.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const generatePromise = (deley) => {
	return () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(`deley-----${deley}`);
			}, deley);
		});
	};
};
function limitPromise(arr, max) {
	Promise.all(
		Array.from({ length: max }, () => {
			return new Promise((resolve, reject) => {
				const runTask = () => {
					if (!arr.length) {
						resolve();
						return;
					}
					const task = arr.shift();
					task().then((res) => {
						console.log("-----------", res, "-------------");
						runTask();
					});
				};

				runTask();
			});
		})
	);
}

const arr = [generatePromise(3000), generatePromise(2000), generatePromise(3000), generatePromise(4000), generatePromise(5000)];
limitPromise(arr, 3);
