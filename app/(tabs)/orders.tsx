import VerticalStepIndicator from "@/components/orders/OrderIndicator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TextInput,
} from "react-native";

export default function Orders() {
  const [otp, setOtp] = useState(["4", "0", "2", "4"]);

  return (
    <View className="bg-white overflow-auto relative pt-16 px-[5%]">
      <View className="bg-white w-full h-full relative overflow-auto">
        <View className="flex flex-row items-center justify-between pb-0">
          <Text className="font-semibold text-[15px]">Order progress</Text>
          <View className="flex flex-row items-center">
            <Image
              source={require("../../assets/images/icons/call-icon.png")}
              className="w-[36px] h-[36px] mr-3"
              style={[{ resizeMode: "contain" }]}
              alt=""
            />
            <Image
              source={require("../../assets/images/icons/chat-icon.png")}
              className="w-[36px] h-[36px]"
              style={[{ resizeMode: "contain" }]}
              alt=""
            />
          </View>
        </View>

        {/* <View className=" w-full relative oveflow scroll"> */}
        <VerticalStepIndicator/>
        {/* </View> */}
        <View className="border-y border-[#E7E7E7] mt-3 py-4">
          <Text className="text-15">Order Code</Text>
          <View className="flex flex-row ">
            <View className="flex flex-row gap-4 mt-2 mb-6">
              {otp.map((digit, index) => (
                <Text
                  key={index}
                  style={[
                    // inputStyles.inputContainer,
                    { textAlign: "center", fontSize: 20 },
                  ]}
                  className="border px-7 py-4 border-[#b8b8b8]  rounded-lg"
                >
                  {digit}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <View className="py-4">
          <View className="flex flex-row justify-between py-2">
            <Text className="text-[#1E1E1E]">Sub total</Text>
            <Text className="text-black">NGN1,000</Text>
          </View>
          <View className="flex flex-row justify-between py-2">
            <Text className="text-[#1E1E1E]">Delivery fee</Text>
            <Text className="text-black">NGN100</Text>
          </View>
          <View className="flex flex-row justify-between py-2">
            <Text className="text-[#1E1E1E]">Service fee</Text>
            <Text className="text-black">NGN20</Text>
          </View>
          <View className="flex flex-row justify-between py-2">
            <Text className="text-[#1E1E1E] font-medium">Total</Text>
            <Text className="text-black font-medium">NGN1100</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
