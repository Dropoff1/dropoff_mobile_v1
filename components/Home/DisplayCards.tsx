import { Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function DisplayCards() {
  return (
    <View className="w-[250px] flex flex-col px-2">
      <Image
        source={require("../../assets/images/DisplayImage.png")}
        style={[{ resizeMode: "contain" }]}
        className="w-full h-[113px] rounded-md"
        alt=""
      />
      <View>
        <View className="mt-2 flex flex-row items-center">
          <Image
            source={require("../../assets/images/icons/dropoff logo-sm.png")}
            className="w-[20px] h-[20px]"
            style={[{ resizeMode: "contain" }]}
            alt=""
          />
          <Text className="text-[#7d7d7d] font-medium ml-[2px]">
            Mrs Lawal Stores
          </Text>
        </View>
        <View className="flex flex-row gap-3 pt-[4px]">
          <Text className="text-[#959595] text-xs">
            20ft. • 20mins • Snacks
          </Text>
          {/* <Text className="text-[#959595] text-xs">20ft</Text>
            <Text className="text-[#959595] text-xs">20ft</Text> */}
        </View>
      </View>
    </View>
  );
}
