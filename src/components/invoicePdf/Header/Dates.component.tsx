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

// Create styles
const styles = StyleSheet.create({
  section: {
    fontFamily: "Roboto",
    fontSize: 9,
    fontWeight: "medium",
    display: "flex",
    flexDirection: "row",
    gap: 2,
    marginBottom: 4,
  },
});

const Dates = () => (
  <View style={{ marginTop: -5 }}>
    <View style={styles.section}>
      <Text>ORDER DATE:</Text>
      <Text>{new Date().toDateString()}</Text>
    </View>
    <View style={styles.section}>
      <Text>DELIVERY DATE:</Text>
      <Text>{new Date().toDateString()}</Text>
    </View>
    <View style={styles.section}>
      <Text>COMMENT:</Text>
      <Text>This is a sample comment.</Text>
    </View>
  </View>
);

export default Dates;
