import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Image } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { globalStyles } from "../assets/styles/styles";
import { ActionBtn } from "./ActionBtn";
import { PALETTE } from "../assets/common/palette";

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

export function CreatePost() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(null);

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

  const publishActive = location && description;

  onDelete = () => {
    setDescription("");
    setLocation("");
  };

  onCameraPress = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      const result = await FileSystem.getContentUriAsync(uri);
      console.log(result);
      setPhoto(result);
      await MediaLibrary.createAssetAsync(uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.createPostBox}>
        <View>
          <Camera style={styles.photoBox} ref={setCameraRef}>
            <TouchableOpacity onPress={onCameraPress}>
              <View style={styles.photoIcon}>
                <FontAwesome name="camera" size={24} color={PALETTE.secondaryColor} />
              </View>
            </TouchableOpacity>
          </Camera>
          {photo && <Image source={photo} width={200} height={200} backgroundColor="red" />}
          {/* {console.log(photo)} */}
          <Text style={[globalStyles.text, styles.photoText]}>Завантажте фото</Text>
        </View>

        <View style={styles.inputsBox}>
          <TextInput
            style={[globalStyles.text, styles.input, description && styles.nameInput]}
            placeholder="Назва..."
            placeholderTextColor={PALETTE.secondaryColor}
            underlineColorAndroid={PALETTE.borderColor}
            value={description}
            onChangeText={setDescription}
          />
          <View>
            <TextInput
              style={[globalStyles.text, styles.input, styles.locationInput]}
              placeholder="Місцевість..."
              placeholderTextColor={PALETTE.secondaryColor}
              underlineColorAndroid={PALETTE.borderColor}
              value={location}
              onChangeText={setLocation}
            />
            <Feather
              style={styles.locationIcon}
              name="map-pin"
              size={24}
              color={PALETTE.secondaryColor}
            />
          </View>
        </View>

        <ActionBtn
          style={[styles.publishBtn, publishActive && styles.publishBtnActive]}
          onPress={() => {
            console.log("Hello");
          }}
        >
          <Text
            style={[
              globalStyles.text,
              styles.publishBtnText,
              publishActive && styles.publishBtnTextActive,
            ]}
            active={publishActive}
          >
            Опублікувати
          </Text>
        </ActionBtn>
      </View>

      <TouchableOpacity
        style={[styles.deleteBtn, publishActive && styles.deleteBtnActive]}
        onPress={onDelete}
      >
        <Feather
          name="trash-2"
          size={24}
          color={publishActive ? PALETTE.primaryBgColor : PALETTE.secondaryColor}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  createPostBox: {
    gap: 32,
  },
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
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: PALETTE.primaryBgColor,
  },
  photoText: {
    marginTop: 8,
    color: PALETTE.secondaryColor,
  },
  inputsBox: {
    gap: 16,
  },
  input: {
    height: 50,
    paddingVertical: 15,
    paddingLeft: 4,
    color: PALETTE.primaryTextColor,
  },
  nameInput: {
    fontFamily: "Roboto-500",
  },
  locationInput: {
    paddingLeft: 28,
  },
  locationIcon: {
    position: "absolute",
    left: 0,
    bottom: 15,
    color: PALETTE.secondaryColor,
  },
  publishBtn: {
    width: "100%",
    textAlign: "center",
    padding: 16,
    borderRadius: 50,
    backgroundColor: PALETTE.secondaryBgColor,
  },
  publishBtnActive: {
    backgroundColor: PALETTE.accentColor,
  },
  publishBtnText: {
    textAlign: "center",
    color: PALETTE.secondaryColor,
  },
  publishBtnTextActive: {
    color: PALETTE.primaryBgColor,
  },
  deleteBtn: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: PALETTE.secondaryBgColor,
  },
  deleteBtnActive: {
    backgroundColor: PALETTE.accentColor,
  },
});
