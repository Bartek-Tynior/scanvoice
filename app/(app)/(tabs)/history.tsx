import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function HistoryScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="pt-12 pb-6 px-6 bg-purple-600">
        <Text className="text-2xl font-bold text-white">History</Text>
        <Text className="text-purple-100 mt-1">View your scanned invoices</Text>
      </View>

      <ScrollView className="flex-1 px-6">
        <View className="py-8 items-center">
          <Ionicons name="document-text-outline" size={64} color="#9CA3AF" />
          <Text className="text-lg font-semibold text-gray-600 mt-4">
            No invoices yet
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            Your scanned invoices will appear here
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
