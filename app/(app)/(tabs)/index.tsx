import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-purple-600 mb-4">Home</Text>
      <Text className="text-gray-600 text-center px-6">
        Welcome to ScanVoice! Use the tabs below to navigate between different
        features.
      </Text>
    </View>
  );
}
