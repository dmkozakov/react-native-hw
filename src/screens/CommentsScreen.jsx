import React, { useState } from "react";
import { PALETTE } from "../assets/common/palette";
import {
  Text,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Keyboard,
  Image,
} from "react-native";
import { keyboardBehavior } from "../assets/common/keyboardBehavior";

import examplePost from "../assets/img/examplePost.jpg";
import user1 from "../assets/img/user1.jpg";
import user2 from "../assets/img/user2.jpg";
import { globalStyles } from "../assets/styles/styles";
import { ownerStyles } from "../assets/common/ownerStyles";
import { ActionBtn } from "../components/ActionBtn";

import { AntDesign } from "@expo/vector-icons";

function CommentsScreen() {
  const [owner, setOwner] = useState("me");

  onSendComment = () => {
    console.log("Comment sent");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.container}>
        <View>
          <Image style={styles.photo} source={examplePost} />

          <View style={styles.commentsBox}>
            <View style={[styles.commentCard]}>
              <Image source={user1} style={styles.userPhoto} />
              <View style={styles.userComment}>
                <Text style={[globalStyles.text, styles.commentText]}>
                  Really love your most recent photo. I’ve been trying to capture the same thing for
                  a few months and would love some tips!
                </Text>
                <Text style={styles.commentDate}>09 червня, 2020 | 08:40</Text>
              </View>
            </View>

            <View style={[styles.commentCard, owner && ownerStyles.card]}>
              <Image source={user2} style={styles.userPhoto} />
              <View style={[styles.userComment, owner && ownerStyles.comment]}>
                <Text style={[globalStyles.text, styles.commentText]}>
                  A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they
                  tend to get a bit sharper images.
                </Text>
                <Text style={[styles.commentDate, ownerStyles.date]}>09 червня, 2020 | 09:14</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <TextInput
            placeholder="Коментувати..."
            placeholderTextColor={PALETTE.secondaryColor}
            style={styles.input}
          />
          <ActionBtn style={styles.sendBtn} onPress={onSendComment}>
            <AntDesign name="arrowup" size={22} color={PALETTE.primaryBgColor} />
          </ActionBtn>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: PALETTE.primaryBgColor,
  },
  photo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: PALETTE.secondaryBgColor,
  },
  commentsBox: {
    gap: 24,
  },
  commentCard: {
    flexDirection: "row",
    gap: 16,
  },
  userPhoto: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  userComment: {
    flex: 1,
    gap: 8,
    padding: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: PALETTE.commentBg,
  },
  commentText: {
    fontSize: 13,
    lineHeight: 18,
  },
  commentDate: {
    fontSize: 10,
    alignSelf: "flex-end",
    color: PALETTE.secondaryColor,
  },
  input: {
    padding: 16,
    height: 50,
    fontSize: 16,
    fontFamily: "Roboto-500",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: PALETTE.borderColor,
    color: PALETTE.primaryTextColor,
    backgroundColor: PALETTE.secondaryBgColor,
  },
  sendBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: PALETTE.accentColor,
  },
  // photoIcon: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 50,
  //   width: 50,
  //   borderRadius: 30,
  //   backgroundColor: PALETTE.primaryBgColor,
  // },
  // photoText: {
  //   marginTop: 8,
  //   color: PALETTE.secondaryColor,
  // },
  // inputsBox: {
  //   gap: 16,
  // },

  // nameInput: {
  //   fontFamily: "Roboto-500",
  // },
  // locationInput: {
  //   paddingLeft: 28,
  // },
  // locationIcon: {
  //   position: "absolute",
  //   left: 0,
  //   bottom: 15,
  //   color: PALETTE.secondaryColor,
  // },
  // publishBtn: {
  //   width: "100%",
  //   textAlign: "center",
  //   padding: 16,
  //   borderRadius: 50,
  //   backgroundColor: PALETTE.accentColor,
  // },
  // publishBtnText: {
  //   textAlign: "center",
  //   color: PALETTE.primaryBgColor,
  // },
});

export default CommentsScreen;
