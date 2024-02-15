import { Image, StyleSheet, View } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  imageContainer: {
    marginLeft: -6,
    gap: 2,
    width: "100%",
  },
  image: {
    width: 155,
    height: "auto",
    marginBottom: 2,
    transformOrigin: "center",
    transition: "transform 0.3s",
    overflow: "hidden",
  },
});

// Create Document Component
const Logo = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image src={"/public/assets/B_Moto.png"} style={styles.image} />
    </View>
  </View>
);

export default Logo;
