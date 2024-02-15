import { StyleSheet, Text, View } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  footer: {
    fontSize: 8,
    fontWeight: "medium",
    padding: 2,
    marginBottom: 3,
  },
  line: {
    marginBottom: 3,
  },
});

export default function Footer() {
  function getTodaysDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <View style={styles.footer}>
      <View style={styles.line}>
        <Text>
          {getTodaysDate()} - Facture N∞ 458965 - 93B006 - ETABLISSEMENT B-MOTO
          - GOLFE DU BENGALE
        </Text>
      </View>
      <View style={styles.line}>
        <Text>
          Produits réservés aux terrains privés ou concours tuning, interdit sur
          la voie publique. Voir nos conditions générales au verso.
        </Text>
      </View>
      <View>
        <Text>
          P2R PROCONCEPT 2 ROUES - SAS au Capital de: 150 000 Euros - Siren :
          503 218 562 RCS NANTES - APE: 4649Z - N° de TVA Intracommunautaire :
          FR78503218562
        </Text>
      </View>
    </View>
  );
}
