import { type ViewProps } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { useThemeColor } from "@/hooks/useThemeColor";

export type AnimatedThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function AnimatedThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: AnimatedThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const animatedStyle = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(backgroundColor, { duration: 500 }),
    }),
    [backgroundColor]
  );

  return <Animated.View style={[animatedStyle, style]} {...otherProps} />;
}
