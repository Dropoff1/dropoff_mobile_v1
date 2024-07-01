import { View, Text, TextInput, Image, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

import { inputStyles } from "../../assets/styles/inputStyles";
import Button_Lg from "../../components/shared/Button";
import PrimaryInput from "../../components/shared/PrimaryInput";
import TermsOfServiceText from "../../components/shared/TermsofService";

const Dob = () => {
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
            router.replace('/auth/otp');
        }}
      >
        Back
      </Text>
      <Text className="text-[15px] my-8">What is your date of birth?</Text>
      <View className="flex flex-row gap-3 mb-8">
        <View className="w-[25%]">
          <Text className="text-xs text-[#6F6F6F] ml-1 ">Day</Text>
          <TextInput
            style={[
              inputStyles.inputContainer,
              { textAlign: "center", fontSize: 20 },
            ]}
            maxLength={2}
            selectionColor={"black"}
            className="border border-[#B1B1B1]"
          />
        </View>
        <View className="w-[25%]">
          <Text className="text-xs text-[#6F6F6F] ml-1">Month</Text>

          <TextInput
            style={[
              inputStyles.inputContainer,
              { textAlign: "center", fontSize: 20 },
            ]}
            maxLength={2}
            selectionColor={"black"}
            className="border border-[#B1B1B1]"
          />
        </View>
        <View className="w-[40%]">
          <Text className="text-xs text-[#6F6F6F] ml-1">Year</Text>
          <TextInput
            style={[
              inputStyles.inputContainer,
              { textAlign: "center", fontSize: 20 },
            ]}
            maxLength={4}
            selectionColor={"black"}
            className="border border-[#B1B1B1]"
          />
        </View>
      </View>

      <View className="absolute w-full bottom-20">
        <Button_Lg
          title={"Continue"}
          onPress={() => router.replace("/(tabs)")}
          regular={true}
        />
      </View>
    </View>
  );
};

export default Dob;
