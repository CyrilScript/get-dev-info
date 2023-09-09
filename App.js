import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import "expo-dev-client";
import { useState } from "react";
import { Feather, Entypo } from "@expo/vector-icons";

export default function App() {
  const [deviceID, setdeviceID] = useState("");
  const getDeviceUniqueID = async () => {
    const res = await DeviceInfo.getUniqueId();
    setdeviceID(res);
    console.log(res);
  };
  getDeviceUniqueID();
  return (
    <View style={styles.container}>
      <Feather name="edit-2" size={14} color="black" />

      <Text>Unique ID: {deviceID}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
