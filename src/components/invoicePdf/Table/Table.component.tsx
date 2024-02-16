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
    display: "flex",
  },
  tableCell: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 5,
    fontSize: 8,
    textAlign: "center",
    padding: "4px 2px",
  },
});

const Table = ({ tableData }) => {
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
