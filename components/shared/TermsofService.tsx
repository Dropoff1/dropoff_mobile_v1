import { View, Text, StyleSheet, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";

const TermsOfServiceText = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    // Add event listeners for keyboard show and hide
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    // Clean up listeners when the component is unmounted
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View className="text-center mt-4">
      {!isKeyboardVisible && (
        <View className="">
          <Text style={styles.textMain} className="text-center">
          By continuing you agree to Dropoff’s{" "}
            <Text style={styles.textLink}>terms of use</Text> and {" "}
            <Text style={styles.textLink}>privacy policy.</Text> 
          </Text>
        </View>
      )}
    </View>
  );
};

export default TermsOfServiceText;

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
  },
  textMain: {
    width: "85%",
    maxWidth: 330,
    marginLeft: "auto",
    marginRight: "auto",
    color: "#6D6D6D",
    fontSize: 12,
    lineHeight: 15,
  },
  textLink: {
    color: "#00A651",
    textDecorationLine: "underline",
    fontWeight: "400",
  },
});