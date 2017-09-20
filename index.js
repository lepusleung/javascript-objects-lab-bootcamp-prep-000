var obj = {
  receipe: 'egg'
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, [key]:value);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return obj;
}

function destructiveltDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
