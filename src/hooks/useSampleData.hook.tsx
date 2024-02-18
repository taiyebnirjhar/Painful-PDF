import { useState } from "react";

const initialData = [
  {
    serialNo: 1,
    taxCode: 1,
    productDetails: `AXE/PIGNON DE KICK SCOOT ADAPTABLE SCOOT 50 CHINOIS 4T GY6,139QMB/KYMCO 50 AGILITY 4T/PEUGEOT 50 KISBEE 4T, V-CLIC 4T/SYM 50 ORBIT 4T/BAOTIAN 50 BT49QT 4T (AVEC RESSORT)`,
    purchaseUnit: "pieces",
    discount: 10,
    unitPrice: 100,
    taxPercent: 0,
    taxAmount: 0,
    quantity: 20,
  },
];

export default function useSampleData() {
  const [sampleData, setSampleData] = useState(initialData);

  return { sampleData, setSampleData };
}
