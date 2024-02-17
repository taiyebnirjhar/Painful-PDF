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
    padding: 6,
    fontWeight: "medium",
    gap: 2,
    justifyContent: "space-between",
  },
  col: {
    flex: 1,
  },
  value: {
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
  },
  heading: {
    fontSize: 12,
    fontWeight: "medium",
    marginBottom: 6,
    textDecoration: "underline",
    textTransform: "uppercase",
  },
  text: {
    marginBottom: 6,
    fontSize: 8,
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
          width: 180,
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
            <Text style={styles.value}>€ 0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.col}>TOTAL TVA</Text>
            <Text style={styles.value}>€ 0 (0 %)</Text>
          </View>
          {/* Second row */}
          <View style={styles.row}>
            <Text style={styles.col}>TOTAL TTC</Text>
            <Text style={styles.value}>€ 0</Text>
          </View>
        </View>
      </View>

      <View style={styles.subSection}>
        <Text style={styles.heading}>conditions</Text>
        <Text style={styles.text}>
          Conditions de paiement : paiement à réception de facture, à 30
          jours... Aucun escompte consenti pour règlement anticipé
        </Text>
        <Text style={styles.text}>
          Tout incident de paiement est passible d'intérêt de retard. Le montant
          des pénalités résulte de l'application aux sommes restant dues d'un
          taux d'intérêt légal en vigueur au moment de l'incident.
        </Text>
        <Text style={styles.text}>
          Indemnité forfaitaire pour frais de recouvrement due au créancier en
          cas de retard de paiement: 40€
        </Text>
      </View>
    </View>
  );
}
