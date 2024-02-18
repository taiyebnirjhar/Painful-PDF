import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import InvoicePdf from "./components/invoicePdf/InvoicePdf.component";
import UserInput from "./components/userInput/UserInput.component";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import { useAppContext } from "./hooks/useAppContext.hooks";
import { decrement, increment } from "./redux/slice/counter.slice";

export default function App() {
  const { sampleData } = useAppContext();
  const { counter } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

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
          <UserInput />
        </div>
        <div className="max-w-lg grid grid-cols-3 gap-24">
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
          >
            -
          </button>
          <div>{counter}</div>
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
          >
            +
          </button>
        </div>
        <div>
          <PDFDownloadLink
            document={<InvoicePdf sampleData={sampleData} />}
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
          <InvoicePdf sampleData={sampleData} />
        </PDFViewer>
      </div>
    </div>
  );
}
