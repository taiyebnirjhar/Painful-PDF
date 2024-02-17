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
    },
  ],
});

const styles = StyleSheet.create({
  section: {
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 98,
  },
  customerDetails: {
    alignSelf: "flex-start",
    paddingRight: 20,
    fontSize: 9,

    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  customerGrid: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 4,
    width: "100%",
  },
  customerLabel: {
    fontFamily: "Roboto",
    fontWeight: "medium",
    width: "30%",
  },
  customerValue: {
    width: 100,
  },
  companyNameContainer: {
    alignSelf: "flex-end",
    padding: "8 10",
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 10,
    fontSize: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 30,
    width: 225,
  },
  companyGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  detailsGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 2,
  },
  companyLabel: {
    width: "50%",
  },
  detailsLabel: {
    fontFamily: "Roboto",

    fontWeight: "medium",
    width: "50%",
  },
});

const Info = () => (
  <View style={styles.section}>
    {/* customer details */}
    <View style={styles.customerDetails}>
      <View style={styles.customerGrid}>
        <Text style={styles.customerLabel}>Company Name</Text>
        <Text style={styles.customerValue}>: B- Moto</Text>
      </View>
      <View style={styles.customerGrid}>
        <Text style={styles.customerLabel}>Name</Text>
        <Text style={styles.customerValue}>: B- Moto</Text>
      </View>

      <View style={styles.customerGrid}>
        <Text style={styles.customerLabel}>SIREN</Text>
        <Text style={styles.customerValue}>: 0000000000</Text>
      </View>
      <View style={styles.customerGrid}>
        <Text style={styles.customerLabel}>Tel</Text>
        <Text style={styles.customerValue}>: 0000000000</Text>
      </View>
      <View style={styles.customerGrid}>
        <Text style={styles.customerLabel}>Email</Text>
        <Text style={styles.customerValue}>: xyz@gmail.com</Text>
      </View>
      <View style={styles.customerGrid}>
        <Text style={styles.customerLabel}>Address</Text>
        <Text style={styles.customerValue}>
          : 49 Aveneu Jean Jaures93300 Aubervilliers
        </Text>
      </View>
      <Text
        style={{
          // marginTop: 4,
          marginBottom: 4,
          fontFamily: "Roboto",
          fontWeight: "medium",
        }}
      >
        www.xyz.com
      </Text>
    </View>
    {/* company details */}
    <View style={styles.companyNameContainer}>
      <View style={styles.companyGrid}>
        <Text style={styles.companyLabel}>Name: B-Moto</Text>
        <View
          style={{
            width: "80%",
          }}
        >
          <Text>49 Aveneu Jean Jaures93300 Aubervilliers</Text>
        </View>
      </View>

      <View style={styles.detailsGrid}>
        <Text style={styles.detailsLabel}>Email:</Text>
        <Text style={styles.detailsLabel}>Tel: 000000000000</Text>
      </View>
    </View>
  </View>
);

export default Info;
