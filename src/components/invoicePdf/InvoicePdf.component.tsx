import { Document, Font, Page, StyleSheet, View } from "@react-pdf/renderer";

import RobotoBlack from "../../assets/fonts/Roboto-Black.ttf";
import RobotoMedium from "../../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../../assets/fonts/Roboto-Regular.ttf";

import DataSummary from "./DataSummary/DataSummary.component";
import Footer from "./Footer/Footer.component";
import Header from "./Header/Header.component";
import Table from "./Table/Table.component";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: RobotoRegular,
      fontWeight: "normal",
    },
    {
      src: RobotoMedium,
      fontWeight: "medium",
    },
    {
      src: RobotoBlack,
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 16,
    fontFamily: "Roboto",
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  tableContainer: {
    marginTop: 32,
  },
});
const tableData = [
  {
    serialNo: 1,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 10,
    unitPrice: 100,
    taxPercent: 0,
    taxAmount: 0,
    quantity: 20,
  },
  {
    serialNo: 2,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 5,
    unitPrice: 1200,
    taxPercent: 8,
    taxAmount: 96,
    quantity: 15,
  },
  {
    serialNo: 3,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 0,
    unitPrice: 350,
    taxPercent: 6,
    taxAmount: 21,
    quantity: 30,
  },
  {
    serialNo: 4,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 15,
    unitPrice: 500,
    taxPercent: 10,
    taxAmount: 50,
    quantity: 10,
  },
  {
    serialNo: 5,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 20,
    unitPrice: 300,
    taxPercent: 5,
    taxAmount: 15,
    quantity: 25,
  },
  {
    serialNo: 6,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 8,
    unitPrice: 1500,
    taxPercent: 8,
    taxAmount: 120,
    quantity: 12,
  },
  {
    serialNo: 7,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 12,
    unitPrice: 3500,
    taxPercent: 7,
    taxAmount: 245,
    quantity: 8,
  },
  {
    serialNo: 8,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 0,
    unitPrice: 200,
    taxPercent: 5,
    taxAmount: 10,
    quantity: 40,
  },
  {
    serialNo: 9,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 10,
    unitPrice: 1800,
    taxPercent: 9,
    taxAmount: 162,
    quantity: 5,
  },
];

export default function InvoicePdf() {
  const len = tableData.length;

  let pageCount = 0;

  let lastPageRowCount = 0;

  const divider = 10;

  const quotient = Math.floor(len / divider);

  const remainder = len % divider;

  if (remainder > 0 && remainder < 10) {
    pageCount = quotient + 1;

    lastPageRowCount = remainder;
  } else if (remainder == 0) {
    pageCount = quotient;

    lastPageRowCount = divider;
  }

  let counter = 0;

  return (
    <Document>
      {tableData.map((item, index) => {
        return (
          <Page size="A4" style={styles.page}>
            <View fixed>
              <Header />
            </View>
            <View style={styles.tableContainer}>
              <Table tableData={tableData} />
            </View>

            <View
              style={{
                position: "absolute",
                bottom: 60,
                width: "100%",
                padding: 16,
                right: 0,
              }}
            >
              <DataSummary />
            </View>
            <View
              fixed
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                padding: 16,
              }}
            >
              <Footer />
            </View>
          </Page>
        );
      })}
    </Document>
  );
}