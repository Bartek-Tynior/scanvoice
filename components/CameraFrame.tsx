import { View } from "react-native";

export default function CameraFrame() {
  return (
    <View
      style={{
        position: "absolute",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 8,
        width: "80%",
        height: "50%",
        top: "25%",
        left: "10%",
        zIndex: 10,
      }}
    />
  );
}
