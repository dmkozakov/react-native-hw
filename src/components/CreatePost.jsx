import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";

import { CameraBox } from "./CameraBox";
import { PhotoBox } from "./PhotoBox";

import { Feather } from "@expo/vector-icons";

import { globalStyles } from "../assets/styles/styles";
import { ActionBtn } from "./ActionBtn";
import { PALETTE } from "../assets/common/palette";

import { useNavigation } from "@react-navigation/core";

export function CreatePost() {
  const navigation = useNavigation();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(null);

  const publishActive = photo && location && description;
  const deleteActive = photo || location || description;
  const disabled = !publishActive;

  onCameraPress = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhoto(uri);
      await MediaLibrary.createAssetAsync(uri);
    }
  };

  onEditPhotoPress = () => {
    setPhoto(null);
  };

  onPublishBtnPress = () => {
    navigation.navigate("PostsScreen");

    setDescription("");
    setLocation("");
    setPhoto(null);

    return console.log({ photo, description, location });
  };

  onDelete = () => {
    setDescription("");
    setLocation("");
    setPhoto(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.createPostBox}>
        <View>
          {!photo ? (
            <CameraBox onPhoto={setPhoto} />
          ) : (
            <PhotoBox photoUri={photo} onPress={onEditPhotoPress} />
          )}
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
          onPress={onPublishBtnPress}
          disabled={disabled}
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
        style={[styles.deleteBtn, deleteActive && styles.deleteBtnActive]}
        onPress={onDelete}
      >
        <Feather
          name="trash-2"
          size={24}
          color={deleteActive ? PALETTE.primaryBgColor : PALETTE.secondaryColor}
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
