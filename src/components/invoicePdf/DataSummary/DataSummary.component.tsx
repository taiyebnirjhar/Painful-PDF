import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 12,
    fontWeight: "medium",
  },
  col: {
    flex: 1,
  },
  center: {
    justifyContent: "center",
  },
  subSection: {
    width: "100%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 10,
    fontWeight: "medium",
  },
  text: {
    marginBottom: 6,
  },
});

export default function DataSummary() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          width: 150,
          borderTop: 1,
          borderLeft: 1,
          marginBottom: 16,
          alignSelf: "flex-end",
        }}
      >
        <View style={styles.container}>
          {/* First row */}
          <View style={styles.row}>
            <Text style={styles.col}>TOTAL HT</Text>
            <View style={[styles.col, styles.center]}>50</View>
          </View>
          {/* Second row */}
          <View style={styles.row}>
            <Text style={styles.col}>TOTAL TTC</Text>
            <View style={[styles.col, styles.center]}>100</View>
          </View>
        </View>
      </View>

      <View style={styles.subSection}>
        <Text style={styles.text}>
          A votre service de 8H30 à 12H15 et de 14H00 à 17H45
        </Text>
        <Text style={styles.text}>
          Toute anomalie de livraison doit être signalée dans les 10 jours après
          réception du colis.
        </Text>
        <Text style={styles.text}>
          Passé ce délai, aucune demande ne sera prise en compte.
        </Text>
      </View>
    </View>
  );
}
