interface SampleDataItem {
  serialNo: number;
  taxCode: number;
  productDetails: string;
  purchaseUnit: string;
  discount: number;
  unitPrice: number;
  taxPercent: number;
  taxAmount: number;
  quantity: number;
}

type AppContextProps = {
  sampleData: SampleDataItem[];
  setSampleData: (value: object) => void;
};

export default AppContextProps;
