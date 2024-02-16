import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import { useState } from "react";
import InvoicePdf from "./components/invoicePdf/InvoicePdf.component";
import UserInput from "./components/userInput/UserInput.component";

const initialData = [
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
];

export default function App() {
  const [sampleData, setSampleData] = useState(initialData);

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "aquamarine",
        }}
      >
        <div style={{ width: "100%" }}>
          <UserInput sampleData={sampleData} setSampleData={setSampleData} />
        </div>
        <div>
          <PDFDownloadLink
            document={<InvoicePdf tableData={sampleData} />}
            fileName="invoiceDesign.pdf"
          >
            {({ loading }) =>
              loading ? (
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
                >
                  Loading document...
                </button>
              ) : (
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
                >
                  Download now!
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
      <div className="hidden md:block">
        <PDFViewer style={{ height: "100vh", width: "100%" }}>
          <InvoicePdf tableData={sampleData} />
        </PDFViewer>
      </div>
    </div>
  );
}
