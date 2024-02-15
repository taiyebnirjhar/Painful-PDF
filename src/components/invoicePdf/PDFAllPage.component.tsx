import { Font, Page, StyleSheet, View } from "@react-pdf/renderer";

import RobotoBlack from "../../assets/fonts/Roboto-Black.ttf";
import RobotoMedium from "../../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../../assets/fonts/Roboto-Regular.ttf";

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

export default function PDFAllPage({ items }) {
  return (
    <Page size="A4" style={styles.page}>
      <View fixed>
        <Header />
      </View>
      <View style={styles.tableContainer}>
        <Table tableData={items} />
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
}
