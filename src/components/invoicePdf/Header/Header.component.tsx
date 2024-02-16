import { StyleSheet, View } from "@react-pdf/renderer";
import BarcodeImage from "./BarcodeImage.component";
import Dates from "./Dates.component";
import Info from "./Info.component";
import Logo from "./Logo.component";
import Title from "./Title.component";

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
});

export default function Header() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Logo />
        <Title />
        <BarcodeImage />
      </View>
      <View>
        <Info />
        <Dates />
      </View>
    </>
  );
}
