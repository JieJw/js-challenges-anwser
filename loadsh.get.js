const obj = {
  a: {
    b: 123,
  },
  arr: [
    {
      demo: "demo",
    },
  ],
};
function getKey(obj, str) {
  const formatStr = str.replace(/\[/g, ".").replace(/\]/g, "");
  const keyArr = formatStr.split(".");

  let res = obj;
  while (keyArr.length) {
    const top = keyArr.shift();
    res = res[top];
  }

  return res;
}
console.log(getKey(obj, "a.b"));
console.log(getKey(obj, "arr[0].demo"));
