import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function ScanScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="items-center mb-8">
        <Ionicons name="camera" size={80} color="#8B5CF6" />
        <Text className="text-2xl font-bold text-purple-600 mt-4 mb-2">
          Scan Invoice
        </Text>
        <Text className="text-gray-600 text-center px-6">
          Take a photo of your invoice to extract and process the information.
        </Text>
      </View>

      <TouchableOpacity className="bg-purple-600 px-8 py-4 rounded-lg">
        <Text className="text-white font-semibold text-lg">Start Scanning</Text>
      </TouchableOpacity>
    </View>
  );
}
