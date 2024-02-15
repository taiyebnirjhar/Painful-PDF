import { Document, Font, StyleSheet } from "@react-pdf/renderer";

import RobotoBlack from "../../assets/fonts/Roboto-Black.ttf";
import RobotoMedium from "../../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../../assets/fonts/Roboto-Regular.ttf";
import PDFAllPage from "./PDFAllPage.component";
import {
  default as PDFLastPage,
  default as PDFPage,
} from "./PDFLastPage.component";

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
  {
    serialNo: 10,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 10,
    unitPrice: 1800,
    taxPercent: 9,
    taxAmount: 162,
    quantity: 5,
  },
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
  {
    serialNo: 10,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 10,
    unitPrice: 1800,
    taxPercent: 9,
    taxAmount: 162,
    quantity: 5,
  },
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

  let arr = [];
  const pageArr = [];

  for (let i = 0; i < len; i++) {
    counter++;
    arr.push(tableData[i]);

    if (counter === 10) {
      if (pageArr.length < pageCount - 1) {
        const localArr = [...arr];

        const collect = <PDFAllPage items={localArr} />;
        pageArr.push(collect);
        arr = [];
      }
      counter = 0;
    }
  }

  console.log(arr.length);

  if (pageArr.length === pageCount - 1 && arr.length > 0) {
    const localArr = [];
    const anotherArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i < 5) localArr.push(arr[i]);
      else anotherArr.push(arr[i]);
    }
    if (anotherArr.length === 0) {
      const collect = <PDFLastPage items={localArr} />;
      pageArr.push(collect);
    } else {
      const collect = <PDFAllPage items={localArr} />;
      pageArr.push(collect);
    }

    if (anotherArr.length > 0) {
      const collectAnother = <PDFLastPage items={anotherArr} />;
      pageArr.push(collectAnother);
    }

    arr = [];
  } else if (counter > 0) {
    counter = 0;
    const localArr = [...arr];
    arr = [];

    const collect = <PDFPage items={localArr} />;

    pageArr.push(collect);
  }

  return (
    <Document>
      {pageArr.map((item) => {
        return item;
      })}
    </Document>
  );
}
