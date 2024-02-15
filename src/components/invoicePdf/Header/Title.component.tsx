import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";

import RobotoBlack from "../../../assets/fonts/Roboto-Black.ttf";
import RobotoMedium from "../../../assets/fonts/Roboto-Medium.ttf";
import RobotoRegular from "../../../assets/fonts/Roboto-Regular.ttf";

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
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 2,
    fontFamily: "Roboto",
    fontWeight: "medium",
  },
  clientCode: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "medium",
  },
});

export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Purchase Details</Text>
      <Text style={styles.clientCode}>Client Code: 00000</Text>
    </View>
  );
}
