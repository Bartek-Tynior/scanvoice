import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const settingsOptions = [
    {
      id: 1,
      title: "Profile",
      icon: "person-outline",
      description: "Manage your account",
    },
    {
      id: 2,
      title: "Notifications",
      icon: "notifications-outline",
      description: "Configure notifications",
    },
    {
      id: 3,
      title: "Language",
      icon: "language-outline",
      description: "Change app language",
    },
    {
      id: 4,
      title: "Export Data",
      icon: "download-outline",
      description: "Export your invoices",
    },
    {
      id: 5,
      title: "Privacy",
      icon: "shield-outline",
      description: "Privacy settings",
    },
    {
      id: 6,
      title: "About",
      icon: "information-circle-outline",
      description: "About ScanVoice",
    },
  ];

  return (
    <View className="flex-1 bg-white">
      <View className="pt-12 pb-6 px-6 bg-purple-600">
        <Text className="text-2xl font-bold text-white">Settings</Text>
        <Text className="text-purple-100 mt-1">Customize your experience</Text>
      </View>

      <ScrollView className="flex-1">
        <View className="py-4">
          {settingsOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              className="flex-row items-center px-6 py-4 border-b border-gray-100"
            >
              <View className="bg-purple-100 p-2 rounded-lg mr-4">
                <Ionicons name={option.icon as any} size={20} color="#8B5CF6" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">
                  {option.title}
                </Text>
                <Text className="text-gray-500 text-sm">
                  {option.description}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
