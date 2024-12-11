import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    maxHeight: 36,
    position: "absolute",
    zIndex: 1,
    top: 34, // 64 original
  },
  content: {
    gap: 8,
    paddingHorizontal: 24,
  },
});
