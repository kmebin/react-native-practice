import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

type MealItemProps = {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  onPress: () => void;
};

function MealItem({ title, imageUrl, duration, complexity, affordability, onPress }: MealItemProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.innerContainer, pressed && styles.pressed]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{duration}m</Text>
          <Text style={styles.description}>{complexity.toUpperCase()}</Text>
          <Text style={styles.description}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  pressed: {
    opacity: Platform.OS === "ios" ? 0.75 : 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  description: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
