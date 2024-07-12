import { Pressable, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColor } from "@/hooks/useColor";
import { Link } from "expo-router";

export default function HomeScreen() {
  const { lightColor, darkColor, getNewColor } = useColor();

  return (
    <Pressable style={styles.container} onPress={getNewColor}>
      <ThemedView
        style={styles.inner}
        lightColor={lightColor}
        darkColor={darkColor}
      >
        <ThemedText type="title">Hello there! 👋</ThemedText>
        <Link href="/reanimated" style={styles.link}>
          <ThemedText type="link">Go to animated screen!</ThemedText>
        </Link>
      </ThemedView>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    position: "absolute",
    bottom: 30,
  },
});
