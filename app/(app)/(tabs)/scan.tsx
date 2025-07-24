import { uploadInvoice } from "@/api/upload";
import CameraFrame from "@/components/CameraFrame";
import { useScanStore } from "@/store/scanStore";
import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ScanScreen() {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [loading, setLoading] = useState(false);
  const { setImageUri } = useScanStore();

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      handleImage(photo.uri);
    }
  };

  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      handleImage(result.assets[0].uri);
    }
  };

  const handleImage = async (uri: string) => {
    setImageUri(uri);
    try {
      setLoading(true);
      const result = await uploadInvoice(uri);
      console.log("Scan result:", result);
      Alert.alert("Factuur Gelezen", JSON.stringify(result, null, 2));
    } catch (error) {
      console.error("Error processing image:", error);
      Alert.alert("Fout", "Er ging iets mis bij het verwerken.");
    } finally {
      setLoading(false);
    }
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center mb-4">
          We need your permission to show the camera
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          className="bg-purple-600 px-6 py-3 rounded-lg"
        >
          <Text className="text-white font-semibold">Grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black">
      <CameraView style={{ flex: 1 }} facing="back" ref={cameraRef}>
        <CameraFrame />
      </CameraView>
      <View className="absolute bottom-10 w-full flex-row justify-center gap-6 px-6">
        <TouchableOpacity
          onPress={pickFromGallery}
          className="bg-white px-5 py-3 rounded-xl"
        >
          <Ionicons name="image-outline" size={24} color="#8B5CF6" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={takePhoto}
          className="bg-purple-600 px-8 py-3 rounded-xl"
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-semibold text-lg">Scan</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
