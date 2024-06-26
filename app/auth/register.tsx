import { View, Text, TextInput, Image, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import { inputStyles } from "../../assets/styles/inputStyles";
import Button_Lg from "../../components/shared/Button";
import PrimaryInput from "../../components/shared/PrimaryInput";
import TermsOfServiceText from "../../components/shared/TermsofService";

const Register = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

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
    <View className="mt-16 mx-[5%] flex flex-col relative h-full">
      <View className="mb-16 mt-8 mx-auto ">
        <Image source={require("../../assets/images/logo-lg.png")} />
      </View>

      <View className=" flex flex-row items-center  mb-4 mx-auto ">
        {/* <DropdownComponent  /> */}

        <View
          className="w-[20%] h-[50px] flex flex-row p-2  mr-4"
          style={inputStyles.inputContainer}
        >
          <Image
            source={require("../../assets/images/flags/ng.png")}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>

        <View className="w-9/12">
          <PrimaryInput placeholder={"Phone number"} value={""} type="text" />
        </View>
      </View>

      <View className="flex flex-row items-center justify-center mb-4">
        {/* <View style={{ flex: 1, height: 1, backgroundColor: "#121212" }} /> */}
        <View>
          <Text className="text-gray-600">or</Text>
        </View>
        {/* <View style={{ flex: 1, height: 1, backgroundColor: "#121212" }} /> */}
      </View>

      <View className="">
        <View
          className="flex flex-row justify-center items-center mb-6"
          style={inputStyles.inputContainer}
        >
          <Image
            source={require("../../assets/images/icons/googleIcon.png")}
            style={{ marginRight: 8 }}
            width={21}
            height={21}
          />
          <Text style={{ fontSize: 15 }}>Continue with Google</Text>
        </View>

        <View
          className="flex flex-row justify-center items-center"
          style={inputStyles.inputContainer}
        >
          <Image
            source={require("../../assets/images/icons/appleIcon.png")}
            style={{ marginRight: 8 }}
            width={21}
            height={21}
          />
          <Text style={{ fontSize: 15 }}>Continue with Apple</Text>
        </View>
      </View>
      <Text className="text-center mt-4 text-[#6D6D6D]">
        Already a user? <Text className="text-[#00A651]">Login</Text>
      </Text>

      <View className="absolute bottom-20 w-full">
        {!isKeyboardVisible && (
          <Button_Lg
            title={"Continue"}
            onPress={() => router.replace("/auth/otp")}
            regular={true}
          />
        )}

        <TermsOfServiceText />
      </View>
    </View>
  );
};

export default Register;
