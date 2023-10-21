const str = 'one.two.three.four.five';

const makeObjFromStr = (str) => {
  const arrKeys = str.split('.');
  const objFromStr = {};
  let currentObj = objFromStr;

  arrKeys.forEach((item) => {
    currentObj[item] = {};

    currentObj = currentObj[item];
  });

  return objFromStr;
};

const obj = makeObjFromStr(str);
console.log(obj.one.two.three.four.five);
