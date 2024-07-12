import { Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Head from "expo-router/head";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColor } from "@/hooks/useColor";

export default function HomeScreen() {
  const { lightColor, darkColor, getNewColor } = useColor();

  return (
    <>
      <Head>
        <title>Expo web</title>
        <meta name="description" content="This is a websites with Expo." />
      </Head>
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
    </>
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
