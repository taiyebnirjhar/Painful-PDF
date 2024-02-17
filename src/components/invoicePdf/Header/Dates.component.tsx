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
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 4,
    width: "100%",
  },
  label: {
    fontFamily: "Roboto",
    fontWeight: "medium",
    width: "30%",
  },
  value: {
    width: 300,
  },
});

const Dates = () => (
  <View style={{ marginTop: 10, width: 300 }}>
    <View style={styles.section}>
      <Text style={styles.label}>ORDER DATE</Text>
      <Text style={styles.value}>: {new Date().toDateString()}</Text>
    </View>
    <View style={styles.section}>
      <Text style={styles.label}>DELIVERY DATE:</Text>
      <Text style={styles.value}>: {new Date().toDateString()}</Text>
    </View>
    <View style={styles.section}>
      <Text style={styles.label}>COMMENT:</Text>
      <Text style={styles.value}>
        : Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, enim
        quasi. Vel debitis, nisi placeat totam iste mollitia obcaecati
        repudiandae atque ipsum ad accusamus dolore!
      </Text>
    </View>
  </View>
);

export default Dates;
