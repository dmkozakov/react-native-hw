import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { PALETTE } from "../assets/common/palette";
import { globalStyles } from "../assets/styles/styles";
import CameraBtnIcon from "./CameraBtnIcon";

export function CameraBox({ photoUri, isLoading, onCameraPress, onEditPhotoPress, cameraRef }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();

        setHasPermission(status === "granted");
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        {!photoUri ? (
          <Camera style={styles.photoBox} ratio="4:3" ref={cameraRef}>
            <CameraBtnIcon onPress={onCameraPress} isLoading={isLoading} photo={photoUri} />
          </Camera>
        ) : (
          <>
            <Image source={{ uri: photoUri }} style={styles.photo} />
            <CameraBtnIcon onPress={onEditPhotoPress} isLoading={isLoading} photo={photoUri} />
          </>
        )}
      </View>
      <Text style={[globalStyles.text, styles.photoText]}>
        {!photoUri ? "Завантажте фото" : "Редагувати фото"}
      </Text>
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
