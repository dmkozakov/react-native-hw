import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { PALETTE } from "../assets/common/palette";
import { globalStyles } from "../assets/styles/styles";

export function CameraBox({ onPhoto }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  onCameraPress = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      onPhoto(uri);
      await MediaLibrary.createAssetAsync(uri);
    }
  };
  return (
    <View>
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        <Camera style={styles.photoBox} ratio="4:3" ref={setCameraRef}>
          <TouchableOpacity onPress={onCameraPress}>
            <View style={styles.photoIcon}>
              <FontAwesome name="camera" size={24} color={PALETTE.secondaryColor} />
            </View>
          </TouchableOpacity>
        </Camera>
      </View>
      <Text style={[globalStyles.text, styles.photoText]}>Завантажте фото</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  photoBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    backgroundColor: PALETTE.secondaryBgColor,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: PALETTE.borderColor,
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  photoIcon: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: PALETTE.primaryBgColor,
  },
  photoText: {
    marginTop: 8,
    color: PALETTE.secondaryColor,
  },
});
