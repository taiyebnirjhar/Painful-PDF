import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import InvoicePdf from "./components/invoicePdf/InvoicePdf.component";

export default function App() {
  return (
    <div>
      <PDFViewer style={{ height: "100vh", width: "100%" }}>
        <InvoicePdf />
      </PDFViewer>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "aquamarine",
        }}
      >
        <PDFDownloadLink document={<InvoicePdf />} fileName="invoiceDesign.pdf">
          {({ loading }) =>
            loading ? (
              <button
                style={{
                  padding: "10px 16px",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
              >
                Loading document...
              </button>
            ) : (
              <button
                style={{
                  padding: "10px 16px",
                  border: "1px solid black",
                  borderRadius: "10px",
                }}
              >
                Download now!
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}
