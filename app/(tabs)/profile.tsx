import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import Toggle from "react-native-toggle-element";
import { useState } from "react";

export default function Profile() {
  const [isDropper, setIsDropper] = useState(false);

  return (
    <View className="bg-white pt-16 h-full px-[5%]">
      <View className="flex flex-row justify-between pb-4 border-[#E7E7E7] border-b">
        <View className="flex flex-row items-center">
          <Image
            source={require("../../assets/images/profile.png")}
            className="w-[60px] h-[60px]"
            style={[{ resizeMode: "contain" }]}
            alt=""
          />
          <View className="ml-3">
            <Text className="text-[15px] font-normal">Mary Edugong</Text>
            <Text className="text-[12px] font-light text-[#B1B1B1]">
              Mryedugong@gmail.com
            </Text>
          </View>
        </View>
      </View>
      <View className="border-b border-[#E7E7E7] pb-6">
        <View className="flex flex-row justify-between items-center mt-6">
          <Text className="text-[12px] font-normal text-[#8B8B8B]">
            Wallet Balance
          </Text>
          <TouchableOpacity className=" flex flex-row items-center justify-center text-[#7D7D7D] font-light text-[10px] border border-[#333333] py-1 px-3 rounded-[5px]">
            <Text className="mr-1">History</Text>
            <MaterialIcons name="arrow-forward-ios" size={8} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row">
          <Text className="text-[25px] text-[#8B8B8B] font-semibold mr-1">
            NGN
          </Text>
          <Text className="text-[25px] font-semibold">{"20,000"}</Text>
        </View>

        <TouchableOpacity className=" w-full bg-[#00A651] py-3 rounded-[10px] mt-6">
          <Text className="mr-1 text-center text-white">Top Up Balance</Text>
        </TouchableOpacity>
      </View>
      {!isDropper ? (
        <Pressable className=" border-b border-[#E7E7E7] pb-6" 
        onPress={()=>{
          setIsDropper(true)
        }}
        >
          <ImageBackground
            source={require("../../assets/images/buttonBackground.png")}
            style={[{ height: 61, gap: 12 }]}
            imageStyle={{ borderRadius: 12 }}
            className="mx-auto flex flex-row items-center w-full mt-8 rounded-xl p-2"
          >
            <View
              style={[
                {
                  backgroundColor: "#FFF44F",
                  borderRadius: 10,
                  width: 45,
                  height: 45,
                  marginLeft: 6,
                },
              ]}
              className="my-auto flex flex-row relative items-center rounded-xl"
            >
              <Image
                source={require("../../assets/images/icons/dropoff logo-sm.png")}
                resizeMode="contain"
                width={40}
                height={40}
                className="absolute top-0 bottom-0 w-[45px] h-[45px]"
              />
            </View>
            <Text className="text-white font-semibold">Become a dropper</Text>
          </ImageBackground>
        </Pressable>
      ) : (
        <Pressable className="flex flex-row justify-between pb-6 mt-6 border-b border-[#E7E7E7]">
          <Text className="font-normal">Switch to Dropper</Text>
          {/* <MaterialIcons name="arrow-forward-ios" size={14} color="black" /> */}
          <Toggle
            thumbButton={{
              width: 20,
              height: 20,
              radius: 10,
              borderWidth: 1,
            }}
            thumbStyle={{
              backgroundColor: "#E7E7E7",
              shadowColor: "black",
              borderColor: "EEEEEE",
              shadowOffset: { width: 4, height: 4 },
            }}
            trackBarStyle={{}}
            trackBar={{
              height: 15,
              width: 35,
              activeBackgroundColor: "#00A651",
              inActiveBackgroundColor: "#ABABAB",
            }}
          />
        </Pressable>
      )}

      <Pressable
        className="flex flex-row justify-between pb-6 mt-6 border-b border-[#E7E7E7]"
        onPress={() => {
          router.push("/auth/change-password");
        }}
      >
        <Text className="font-normal">Change Password</Text>
        <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
      </Pressable>

      <Pressable className="flex flex-row justify-between pb-6 mt-6 border-b border-[#E7E7E7]">
        <Text className="font-normal">Support & Feedback</Text>
        <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
      </Pressable>

      <Pressable
        className="flex flex-row items-center pb-6 mt-6"
        onPress={() => {
          router.push("/auth/register");
        }}
      >
        <FontAwesome6 name="arrow-right-from-bracket" size={16} color="red" />
        <Text className="font-normal ml-2" style={{ color: "red" }}>
          Logout
        </Text>
      </Pressable>
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
