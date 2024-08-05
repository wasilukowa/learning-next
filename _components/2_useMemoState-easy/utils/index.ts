function isObjectType(value: unknown) {
  const isObject = Object.prototype.toString.call(value) === "[object Object]";
  return isObject;
}

function isArrayType(value: unknown) {
  const isArray = Object.prototype.toString.call(value) === "[object Array]";
  return isArray;
}

function compareObjects(firstObject: object, secondObject: object) {
  for (const element in firstObject) {
    const isObject =
      Object.prototype.toString.call(element) === "[object Object]";

    if (isObject) {
      const objectsAreEqual = areObjectsEqual(
        firstObject[element] as Record<string, unknown>,
        secondObject[element] as Record<string, unknown>,
      );
      if (!objectsAreEqual) return false;
    } else {
      if (firstObject[element] !== secondObject[element]) return false;
    }
  }

  return true;
}

function areArraysEqual(firstValue: Array<any>, secondValue: Array<any>) {
  const arraysHaveSameLenght = firstValue.length === secondValue.length;
  if (!arraysHaveSameLenght) return false;

  for (const i of firstValue) {
    const isObject = isObjectType(firstValue[i]);
    if (isObject) return areArraysEqual(firstValue[i], secondValue[i]);

    const isArray = isArrayType(firstValue[i]);
    if (isArray) return areObjectsEqual(firstValue[i], secondValue[i]);

    if (firstValue[i] !== secondValue[i]) return false;
  }

  return true;
}

function areObjectsEqual(firstValue: object, secondValue: object) {
  const arePropsFromirstObjectEqualToPropsInSencondObject = compareObjects(
    firstValue,
    secondValue,
  );
  if (!arePropsFromirstObjectEqualToPropsInSencondObject) return false;

  const arePropsFromSecondObjectEqualToPropsInFirstObject = compareObjects(
    secondValue,
    firstValue,
  );
  if (!arePropsFromSecondObjectEqualToPropsInFirstObject) return false;

  return true;
}

export function areTheyEqual<T>(firstValue: T, secondValue: T) {
  if (firstValue === secondValue) return true;

  const bothValuesAreArrays =
    isArrayType(firstValue) &&
    Array.isArray(firstValue) &&
    isArrayType(secondValue) &&
    Array.isArray(secondValue);
  if (bothValuesAreArrays) return areArraysEqual(firstValue, secondValue);

  const isFirstValueObject =
    isObjectType(firstValue) && typeof firstValue === "object";
  const isSecondValueObject =
    isObjectType(secondValue) && typeof secondValue === "object";

  const bothValuesAreObjects = isFirstValueObject && isSecondValueObject;
  if (bothValuesAreObjects)
    return areObjectsEqual(firstValue as Record<string, unknown>, secondValue);

  return false;
}
