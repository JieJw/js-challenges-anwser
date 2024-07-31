function Parent(name) {
  this.name = name;
}

Parent.prototype.getName = () => {
  return this.name;
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype.getAge = () => {
  return this.age;
};

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child("wj", 18);
