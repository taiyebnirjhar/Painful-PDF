import { Image, StyleSheet, View } from "@react-pdf/renderer";
import JsBarcode from "jsbarcode";
import React from "react";

// Create styles
const styles = StyleSheet.create({
  codeContainer: {
    display: "flex",
    justifyContent: "center",
  },
  codeImage: {
    width: 110,
    height: 35,
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
      const barcode = await generateBarcode("0000"); // Change "0000" to your desired data
      setBarcodeDataUrl(barcode);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.codeContainer}>
      <Image src={barcodeDataUrl} style={styles.codeImage} />
    </View>
  );
};

export default BarcodeImage;
