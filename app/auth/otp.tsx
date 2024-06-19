import { View, Text, TextInput, Image, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

import { inputStyles } from "../../assets/styles/inputStyles";
import Button_Lg from "../../components/shared/Button";
import PrimaryInput from "../../components/shared/PrimaryInput";
import TermsOfServiceText from "../../components/shared/TermsofService";

const OTP = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputs: any = [];
  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
    if (value && index === newOtp.length - 1) {
      router.replace("/");
    }
  };

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
        Kindly input the 6-digit code sent to the phone number +234 701 241 7877
      </Text>
      <View className="flex flex-row gap-2 mb-8">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              inputStyles.inputContainer,
              { width: 44, textAlign: "center", fontSize: 20 },
            ]}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleOtpChange(value, index)}
            value={digit}
            ref={(input) => {
              inputs[index] = input;
            }}
            selectionColor={"black"}
          />
        ))}
      </View>

      <TouchableHighlight
        style={[inputStyles.inputContainer]}
        activeOpacity={0.9}
        className="w-[130px] text-[#515151]"
      >
        <Text className="text-[10px]">I didn’t receive a code </Text>
      </TouchableHighlight>
      <View className="absolute w-full bottom-20">
        <Button_Lg
          title={"Continue"}
          onPress={() => router.replace("/auth/dob")}
          regular={true}
        />
      </View>
    </View>
  );
};

export default OTP;
