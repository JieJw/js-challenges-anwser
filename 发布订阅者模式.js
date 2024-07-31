function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function (name, cb) {
  if (this.events[name]) {
    this.events[name].push(cb);
  } else {
    this.events[name] = [cb];
  }
};

EventEmitter.prototype.emit = function (name, ...args) {
  const cbs = this.events[name];
  if (Array.isArray(cbs)) {
    cbs.forEach((_item) => {
      _item(...args);
    });
  }
};

EventEmitter.prototype.off = function (name, cb) {
  const cbs = this.events[name];
  if (Array.isArray(cbs)) {
    cbs.splice(cbs.indexOf(cb), 1);
  }
};

EventEmitter.prototype.once = function (name, cb) {
  const proxyCb = (...args) => {
    cb.apply(this, args);
    this.off(name, cb);
  };
  this.on(name, proxyCb);
};

const e = new EventEmitter();

function fn1(a, b) {
  console.log("fn1", a, b);
}
function fn2(a, b) {
  console.log("fn2", a, b);
}
function fn3(a, b) {
  console.log("fn3", a, b);
}

e.on("key1", fn1);
e.on("key1", fn2);
e.once("key1", fn3); // 只会被触发一次
e.on("key2", fn3);

e.emit("key1", 10, 20); // 触发 fn1、fn2、fn3
e.emit("key1", 11, 22); // 触发 fn1、fn2

e.off("key1", fn1); // 解绑 fn1

e.emit("key1", 100, 200); // 触发 fn2
