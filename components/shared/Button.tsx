/* eslint-disable react/prop-types */
import { Text } from "react-native";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";

const Button_Lg = ({ onPress, title, regular }: { onPress?: () => void; title: string; regular?: boolean }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.appButtonContainer}
      activeOpacity={0.9}
    >
      {regular ? (
        <Text style={[styles.appButtonText]}>{title}</Text>
      ) : (
        <View className={`flex flex-row justify-between items-center pr-8 pl-16`}>
          <Text style={[styles.appButtonText]}>{title}</Text>
          {/* <Image
            source={require("../../assets/icons/Forward.png")}
            style={styles.buttonImage}
          /> */}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button_Lg;

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    //elevation: 2,
    backgroundColor: "#121212",
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 13,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
    textTransform: "capitalize",
    // fontFamily: "Poppins_light",
    fontWeight: "600",
    lineHeight: 22.5,
  },

  buttonImage: {
    width: 17,
    height: 18,
  },
});