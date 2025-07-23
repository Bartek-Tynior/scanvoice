import { Tabs } from "expo-router";
import { TabBarIcon } from "../../../components/TabBarIcon";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#8B5CF6", // Purple-500
                headerShown: false,
                tabBarStyle: {
                    // Remove paddingBottom and paddingTop here
                    backgroundColor: "#ffffff",
                    borderTopWidth: 1,
                    borderTopColor: "#E5E7EB",
                    height: 90, // Increased height for safe area
                },
                tabBarItemStyle: {
                    // Optional: add vertical padding to tab items
                    paddingVertical: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                // Use nativewind className for tabBarStyle if supported
                // If not, keep using the style object above
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="scan"
                options={{
                    title: "Scan Invoice",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "camera" : "camera-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "time" : "time-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "settings" : "settings-outline"}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
