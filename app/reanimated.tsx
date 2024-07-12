import { Pressable } from "react-native";
import { Link } from "expo-router";
import Head from "expo-router/head";

import { ThemedText } from "@/components/ThemedText";
import { AnimatedThemedView } from "@/components/AnimatedThemedView";
import { useColor } from "@/hooks/useColor";
import { styles } from "./index";

export default function ReanimatedScreen() {
  const { lightColor, darkColor, getNewColor } = useColor();

  return (
    <>
      <Head>
        <title>Expo web with Reanimated</title>
        <meta
          name="description"
          content="This is a websites with Expo and Reanimated."
        />
      </Head>
      <Pressable style={styles.container} onPress={getNewColor}>
        <AnimatedThemedView
          style={styles.inner}
          lightColor={lightColor}
          darkColor={darkColor}
        >
          <ThemedText type="title">Hello there! 👋</ThemedText>
          <Link href="/" style={styles.link}>
            <ThemedText type="link">Go to home screen!</ThemedText>
          </Link>
        </AnimatedThemedView>
      </Pressable>
    </>
  );
}
