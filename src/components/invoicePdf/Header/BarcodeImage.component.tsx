import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import JsBarcode from "jsbarcode";
import React from "react";

// Create styles
const styles = StyleSheet.create({
  codeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    fontFamily: "Roboto",
    fontWeight: "medium",
    textTransform: "uppercase",
  },
  codeImage: {
    width: 110,
    height: 30,
  },
});

const generateBarcode = async (data: string) => {
  const barcodeCanvas = document.createElement("canvas");
  JsBarcode(barcodeCanvas, data, { displayValue: false });
  return barcodeCanvas.toDataURL();
};

const BarcodeImage = () => {
  const [barcodeDataUrl, setBarcodeDataUrl] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      const barcode = await generateBarcode("F13022401");
      setBarcodeDataUrl(barcode);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.codeContainer}>
      <Text style={styles.title}>Invoice - F13022401</Text>
      <Image src={barcodeDataUrl} style={styles.codeImage} />
    </View>
  );
};

export default BarcodeImage;
