import Barcode from "react-barcode";

export default function PdfDesign() {
  // const ref_no = "PS10000148";

  const products = [
    {
      serialNo: 1,
      productDetails: `2566854 -  Google Glass Explorer Edition  - Google -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 10,
      unitPrice: 100,
      taxPercent: 0,
      taxAmount: 0,
      quantity: 20,
    },
    {
      serialNo: 2,
      productDetails: `7894561 - Apple iPhone 13 Pro Max - Apple -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 5,
      unitPrice: 1200,
      taxPercent: 8,
      taxAmount: 96,
      quantity: 15,
    },
    {
      serialNo: 3,
      productDetails: `3258749 - Samsung Galaxy Watch 4 Classic - Samsung -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 0,
      unitPrice: 350,
      taxPercent: 6,
      taxAmount: 21,
      quantity: 30,
    },
    {
      serialNo: 4,
      productDetails: `4789652 - Sony PlayStation 5 - Sony -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 15,
      unitPrice: 500,
      taxPercent: 10,
      taxAmount: 50,
      quantity: 10,
    },
    {
      serialNo: 5,
      productDetails: `6325418 - Bose QuietComfort 45 Headphones - Bose -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 20,
      unitPrice: 300,
      taxPercent: 5,
      taxAmount: 15,
      quantity: 25,
    },
    {
      serialNo: 6,
      productDetails: `8956321 - Lenovo ThinkPad X1 Carbon - Lenovo -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 8,
      unitPrice: 1500,
      taxPercent: 8,
      taxAmount: 120,
      quantity: 12,
    },
    {
      serialNo: 7,
      productDetails: `7412589 - Canon EOS R5 Mirrorless Camera - Canon -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 12,
      unitPrice: 3500,
      taxPercent: 7,
      taxAmount: 245,
      quantity: 8,
    },
    {
      serialNo: 8,
      productDetails: `3654789 - Fitbit Versa 3 Smartwatch - Fitbit -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 0,
      unitPrice: 200,
      taxPercent: 5,
      taxAmount: 10,
      quantity: 40,
    },
    {
      serialNo: 9,
      productDetails: `9874562 - LG OLED C1 Series TV - LG -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 10,
      unitPrice: 1800,
      taxPercent: 9,
      taxAmount: 162,
      quantity: 5,
    },
    {
      serialNo: 10,
      productDetails: `1452369 - Microsoft Surface Laptop 4 - Microsoft -
      --Color--Size--`,
      purchaseUnit: "pieces",
      discount: 15,
      unitPrice: 1200,
      taxPercent: 6,
      taxAmount: 72,
      quantity: 18,
    },
  ];

  function getTodaysDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="max-w-7xl mx-auto  p-8 ">
      <header className="flex justify-between mb-6">
        {/* logo */}
        <div className="flex justify-start">
          <div className="flex justify-center gap-2 w-full">
            <img
              src={"/public/assets/B_Moto.png"}
              alt="profile_icon"
              width={350}
              height={350}
              className="mx-auto transition-transform transform origin-center bg-cover min-w-[80%] max-w-[80%] mb-2"
            />
          </div>
        </div>
        {/* title */}
        <div className="flex flex-col justify-center items-center font-bold opacity-95">
          <div className="text-3xl">Purchase Details</div>
          <div className="text-xl">Client Code: 00000</div>
        </div>
        {/* barcode */}
        <div className="flex justify-end">
          <div className="flex justify-center items-center">
            <Barcode
              value={`0000`}
              width={2}
              height={40}
              background={"white"}
              displayValue={false}
            />
          </div>
        </div>
      </header>

      {/* info */}
      <section className="mt-3 grid grid-cols-2  ">
        {/* customer details */}
        <div className="justify-self-start   flex flex-col justify-center">
          <div className="grid grid-cols-3  ">
            <div className="font-bold">Name </div>
            <div className=" justify-self-start col-span-2">
              : Taiyeb Nirjhor
            </div>
          </div>
          <div className="grid grid-cols-3  ">
            <div className="font-bold">Tel </div>
            <div className=" justify-self-start col-span-2">: 0000000000</div>
          </div>
          <div className="grid grid-cols-3  ">
            <div className="font-bold">Email </div>
            <div className=" justify-self-start col-span-2">
              : xyz@gmail.com
            </div>
          </div>
          <div className="font-bold">www.xyz.com</div>
        </div>
        {/* company  details */}
        <div className="justify-self-end p-4 border-2 border-black/80 rounded-2xl flex flex-col text-lg">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div>
                Name: <span className="font-bold">B-Moto</span>{" "}
              </div>
              <div>49 Aveneu Jean Jaures93300 Aubervilliers </div>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-12 font-bold">
            <div className="justify-self-start">Email:</div>
            <div className="justify-self-end">Tel: 07 83 20 96 97</div>
          </div>
        </div>
      </section>
      {/* Dates */}
      <section className="font-bold uppercase text-lg">
        <div>Order Date : </div>
        <div>Delivery Date : </div>
        <div>Comment : </div>
      </section>
      {/* table */}
      <section className="mt-12">
        <table className="relative w-full overflow-auto ">
          <thead className="bg-gray-300 ">
            <tr className="uppercase font-medium ">
              <th className="text-xs text-start align-middle font-semibold text-black [&:has([role=checkbox])]:pr-0 px-2 py-2">
                Sl No.
              </th>

              <th className="text-xs text-center align-middle font-semibold text-black [&:has([role=checkbox])]:pr-0 px-2 py-2">
                Product Details
              </th>
              <th className="text-xs text-center align-middle font-semibold  text-black [&:has([role=checkbox])]:pr-0 px-2 py-2">
                Purchase Unit
              </th>

              <th className="text-xs text-end align-middle font-semibold  text-black [&:has([role=checkbox])]:pr-0 px-2 py-2">
                Discount (%)
              </th>

              <th className="text-xs text-end align-middle font-semibold  text-black [&:has([role=checkbox])]:pr-0 px-2 py-2">
                Unit Price
              </th>

              <th className="text-xs text-end align-middle font-semibold  text-black [&:has([role=checkbox])]:pr-0 px-2 py-2">
                Tax
              </th>
              <th className="text-xs text-end align-middle font-semibold  text-black [&:has([role=checkbox])]:pr-0 px-2 py-2">
                Quantity
              </th>
            </tr>
          </thead>

          <tbody className="space-y-3 ">
            {products.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="text-xs  font-semibold  border-b border-dashed border-border text-black px-4 py-2"
                >
                  <td className="text-start align-middle [&:has([role=checkbox])]:pr-0 text-black px-2 py-4">
                    {item.serialNo}
                  </td>
                  <td className=" text-center align-middle [&:has([role=checkbox])]:pr-0 text-black px-2 py-4">
                    {item.productDetails}
                  </td>
                  <td className=" text-center align-middle [&:has([role=checkbox])]:pr-0 text-black px-2 py-4">
                    {item.purchaseUnit}
                  </td>
                  <td className=" text-center align-middle [&:has([role=checkbox])]:pr-0 text-black px-2 py-4">
                    {item.discount} %
                  </td>
                  <td className=" text-center align-middle [&:has([role=checkbox])]:pr-0 text-black px-2 py-4">
                    € {item.unitPrice}
                  </td>
                  <td className=" text-center align-middle [&:has([role=checkbox])]:pr-0 text-black px-2 py-4">
                    {item.taxPercent}% €({item.taxAmount})
                  </td>{" "}
                  <td className=" text-end align-middle [&:has([role=checkbox])]:pr-0 text-black px-2 py-4">
                    {item.quantity}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      {/* Total */}
      <section className="w-full mt-12 mb-6">
        <div className="flex justify-end">
          <div className="border-2 border-black/90">
            <div className="grid grid-cols-2 border-b-2 border-black/90 p-4 font-bold">
              <div className="">TOTAL HT</div>
              <div className="justify-self-center"> 50</div>
            </div>
            <div className="grid grid-cols-2 p-4 font-bold">
              <div className="">TOTAL TTC</div>
              <div className="justify-self-center">100</div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="w-full border-2 border-black/90 font-bold text-sm px-3 py-6">
        <div>A votre service de 8H30 à 12H15 et de 14H00 à 17H45</div>
        <div>
          Toute anomalie de livraison doit être signalée dans les 10 jours après
          réception du colis.
        </div>
        <div>Passé ce délai, aucune demande ne sera prise en compte.</div>
      </section>

      <footer className="text-xs font-bold p-2 space-y-2 mt-3">
        <div className="">
          {getTodaysDate()} - Facture N∞ 458965 - 93B006 - ETABLISSEMENT B-MOTO
          - GOLFE DU BENGALE
        </div>
        <div>
          **Produits réservés aux terrains privés ou concours tuning, interdit
          sur la voie publique. Voir nos conditions générales au verso.
        </div>
        <div>
          P2R PROCONCEPT 2 ROUES - SAS au Capital de: 150 000 Euros - Siren :
          503 218 562 RCS NANTES - APE: 4649Z - N° de TVA Intracommunautaire :
          FR78503218562
        </div>
      </footer>
    </div>
  );
}
