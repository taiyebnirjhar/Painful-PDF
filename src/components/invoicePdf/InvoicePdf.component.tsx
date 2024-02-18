import { Document, Font } from "@react-pdf/renderer";

import RobotoBlack from "../../assets/fonts/Roboto-Black.ttf";
import RobotoMedium from "../../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../../assets/fonts/Roboto-Regular.ttf";
import PDFAllPage from "./PDFAllPage.component";
import { default as PDFLastPage } from "./PDFLastPage.component";

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

export default function InvoicePdf({ sampleData }) {
  // const { sampleData } = useAppContext();

  const len = sampleData.length;

  let pageCount = 0;

  const divider = 8;

  const quotient = Math.floor(len / divider);

  const remainder = len % divider;

  if (remainder > 0 && remainder < 8) {
    pageCount = quotient + 1;
  } else if (remainder == 0) {
    pageCount = quotient;
  }

  let counter = 0;

  let arr = [];
  const pageArr = [];

  for (let i = 0; i < len; i++) {
    counter++;
    arr.push(sampleData[i]);

    if (counter === 8) {
      if (pageArr.length < pageCount - 1) {
        const localArr = [...arr];

        const collect = <PDFAllPage items={localArr} />;
        pageArr.push(collect);
        arr = [];
      }
      counter = 0;
    }
  }

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
  }

  return (
    <Document>
      <Document>
        {pageArr.map((item) => {
          return item;
        })}
      </Document>
    </Document>
  );
}
