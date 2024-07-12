import { View, Text, TextInput, Image, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { inputStyles } from "../../assets/styles/inputStyles";
import Button_Lg from "../../components/shared/Button";
import Octicons from '@expo/vector-icons/Octicons';

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();


  return (
    <View className="mt-16 mx-[5%] flex flex-col relative h-full">
      <Text
        className="w-fit text-lg"
        onPress={() => {
          router.back();
        }}
      >
        Back
      </Text>
      <Text className="text-[15px] text-[#6F6F6F] my-8">
        Change your password
      </Text>
      <View className="flex mb-8">
      <View style={[inputStyles.inputContainer, inputStyles.inputLg]} className="flex flex-row items-center">
        <Octicons name="lock" size={24} style={{marginTop:"auto", marginBottom:"auto", marginRight:10}} color="#ABABAB" />
      <TextInput
        style={inputStyles.inputMain}
        // onChangeText={onchangeText}
        // value={value}
        placeholder="New password"
        placeholderTextColor={"#ABABAB"}
        selectionColor={"black"}
      />
      </View>

      <View style={[inputStyles.inputContainer, inputStyles.inputLg]} className="flex flex-row items-center mt-8">
        <Octicons name="lock" size={24} style={{marginTop:"auto", marginBottom:"auto", marginRight:10}} color="#ABABAB" />
      <TextInput
        style={inputStyles.inputMain}
        // onChangeText={onchangeText}
        // value={value}
        placeholder="Confirm password"
        placeholderTextColor={"#ABABAB"}
        selectionColor={"black"}
      />
      </View>
      </View>

      <View className="absolute w-full bottom-20">
        <Button_Lg
          title={"Confirm Change"}
          onPress={() => router.replace("/(tabs)/profile")}
          regular={true}
        />
      </View>
    </View>
  );
};

export default ChangePassword;
