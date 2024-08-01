/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-01 16:26:59
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-01 17:17:26
 * @FilePath: /js-challenges/实现一个lazyMan.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
		实现一个LazyMan，可以按照以下方式调用:
		LazyMan(“Hank”)输出:
		Hi! This is Hank!

		LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
		Hi! This is Hank!
		//等待10秒..
		Wake up after 10
		Eat dinner~

		LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
		Hi This is Hank!
		Eat dinner~
		Eat supper~

		LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
		//等待5秒
		Wake up after 5
		Hi This is Hank!
		Eat supper
*/
function LazyMan(name) {
	this.tasks = [];
	this.sayHi(name);
	setTimeout(() => {
		this.run();
	}, 0);
}

LazyMan.prototype.sayHi = function (name) {
	const task = () => {
		console.log("-----------", `Hi This is ${name}!`, "-------------");
		this.run();
	};
	this.tasks.push(task);
	return this;
};

LazyMan.prototype.eat = function (food) {
	const task = () => {
		console.log("-----------", `Eat ${food}`, "-------------");
		this.run();
	};
	this.tasks.push(task);
	return this;
};

LazyMan.prototype.sleep = function (time) {
	const task = async () => {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
				console.log("-----------", `等待${time}秒`, "-------------");
				this.run();
			}, time * 1000);
		});
	};
	this.tasks.push(task);
	return this;
};

LazyMan.prototype.sleepFirst = function (time) {
	const task = async () => {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
				console.log("-----------", `等待${time}秒`, "-------------");
				this.run();
			}, time * 1000);
		});
	};
	this.tasks.unshift(task);
	return this;
};

LazyMan.prototype.run = function () {
	const task = this.tasks.shift();
	task && task();
};

new LazyMan("wj").sleepFirst(2).sleep(2).eat("wa").sleepFirst(2);
