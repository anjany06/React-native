import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1, // Ensures the view takes up the full screen
        justifyContent: "center", // Centers content vertically ( y-axis)
        alignItems: "center", // Centers content horizontally ( x-axis)
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        hello world
      </Text>

      <Link href="/about">about</Link>
    </View>
  );
};
export default Index;
