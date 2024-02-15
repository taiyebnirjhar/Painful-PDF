import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  table: {
    // display: "table",
    width: "auto",
    borderStyle: "solid",
    textAlign: "left",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    marginTop: 5,
    fontSize: 8,
    textAlign: "center",
  },
});

const Table = () => {
  const tableData = [
    {
      serialNo: 1,
      productDetails: `2566854 -  Google Glass Explorer Edition  - Google -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 10,
      unitPrice: 100,
      taxPercent: 0,
      taxAmount: 0,
      quantity: 20,
    },
    {
      serialNo: 2,
      productDetails: `7894561 - Apple iPhone 13 Pro Max - Apple -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 5,
      unitPrice: 1200,
      taxPercent: 8,
      taxAmount: 96,
      quantity: 15,
    },
    {
      serialNo: 3,
      productDetails: `3258749 - Samsung Galaxy Watch 4 Classic - Samsung -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 0,
      unitPrice: 350,
      taxPercent: 6,
      taxAmount: 21,
      quantity: 30,
    },
    {
      serialNo: 4,
      productDetails: `4789652 - Sony PlayStation 5 - Sony -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 15,
      unitPrice: 500,
      taxPercent: 10,
      taxAmount: 50,
      quantity: 10,
    },
    {
      serialNo: 5,
      productDetails: `6325418 - Bose QuietComfort 45 Headphones - Bose -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 20,
      unitPrice: 300,
      taxPercent: 5,
      taxAmount: 15,
      quantity: 25,
    },
    {
      serialNo: 6,
      productDetails: `8956321 - Lenovo ThinkPad X1 Carbon - Lenovo -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 8,
      unitPrice: 1500,
      taxPercent: 8,
      taxAmount: 120,
      quantity: 12,
    },
    {
      serialNo: 7,
      productDetails: `7412589 - Canon EOS R5 Mirrorless Camera - Canon -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 12,
      unitPrice: 3500,
      taxPercent: 7,
      taxAmount: 245,
      quantity: 8,
    },
    {
      serialNo: 8,
      productDetails: `3654789 - Fitbit Versa 3 Smartwatch - Fitbit -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 0,
      unitPrice: 200,
      taxPercent: 5,
      taxAmount: 10,
      quantity: 40,
    },
    {
      serialNo: 9,
      productDetails: `9874562 - LG OLED C1 Series TV - LG -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 10,
      unitPrice: 1800,
      taxPercent: 9,
      taxAmount: 162,
      quantity: 5,
    },
  ];

  console.log(tableData.length);

  return (
    <View style={{ border: 1 }}>
      <View style={styles.table}>
        <View style={{ ...styles.tableRow, backgroundColor: "#c0c0c0" }} fixed>
          <View style={{ ...styles.tableCol, width: "11%" }}>
            <Text style={styles.tableCell}>Sl No.</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "34%" }}>
            <Text style={styles.tableCell}>Product Details</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "11%" }}>
            <Text style={styles.tableCell}>Purchase Unit</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "11%" }}>
            <Text style={styles.tableCell}>Discount (%)</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "11%" }}>
            <Text style={styles.tableCell}>Unit Price</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "11%" }}>
            <Text style={styles.tableCell}>Tax</Text>
          </View>
          <View style={{ ...styles.tableCol, width: "11%" }}>
            <Text style={styles.tableCell}>Quantity</Text>
          </View>
        </View>
        {tableData.map((data, index) => {
          return (
            <View style={styles.tableRow} key={index}>
              <View style={{ ...styles.tableCol, width: "11%" }}>
                <Text style={styles.tableCell}>{data.serialNo}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "34%" }}>
                <Text style={styles.tableCell}>{data.productDetails}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "11%" }}>
                <Text style={styles.tableCell}>{data.purchaseUnit}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "11%" }}>
                <Text style={styles.tableCell}>{data.discount}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "11%" }}>
                <Text style={styles.tableCell}>{data.unitPrice}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "11%" }}>
                <Text style={styles.tableCell}>{data.taxPercent}</Text>
              </View>
              <View style={{ ...styles.tableCol, width: "11%" }}>
                <Text style={styles.tableCell}>{data.quantity}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Table;
