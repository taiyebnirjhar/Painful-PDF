function increaseData(initialData, numToAdd) {
  const newDataArray = [];
  for (let i = 1; i <= numToAdd; i++) {
    const newSerialNo = i;
    const newData = {
      ...initialData[0],
      serialNo: newSerialNo,
    };
    newDataArray.push(newData);
  }
  return newDataArray;
}

export default increaseData;
