function autoIncrementId(key, lastRecordId) {
  let increasedNum = Number(lastRecordId.replace(key, "")) + 1;
  let kmsStr = lastRecordId.substr(0, 3);
  for (let i = 0; i < 4 - increasedNum.toString().length; i++) {
    kmsStr = kmsStr + "0";
  }
  kmsStr = kmsStr + increasedNum.toString();
  return kmsStr;
}

module.exports = { autoIncrementId };
