function increaseData(initialData, numToAdd) {
  const newDataArray = [];
  for (let i = 1; i <= numToAdd; i++) {
    const newSerialNo = i;
    const randomTaxCode = Math.floor(Math.random() * 3) + 1;
    const newData = {
      ...initialData[0],
      serialNo: newSerialNo,
      taxCode: randomTaxCode,
    };
    newDataArray.push(newData);
  }
  return newDataArray;
}

export default increaseData;
