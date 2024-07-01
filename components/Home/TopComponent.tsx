import { Image, ScrollView, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeTopComponent() {
  return (
    <View className="bg-white absolute w-full pt-16 pb-4 mb-8">
      <View className="text-center flex flex-row justify-center items-center mb-4">
        <Ionicons name="location-outline" size={20} color="black" />
        <Text> B3 Mokuru Moewe</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mx-4">
        <View className="flex flex-row flex-nowrap overflow-x-scroll mx-auto justify-center mt-8 gap-4">
        <Image source={require("../../assets/images/Ellipse.png")} className="w-[47px] h-[47px]" width={20} alt="" />
        <Image source={require("../../assets/images/Ellipse.png")} className="w-[47px] h-[47px]" width={20} alt="" />
        <Image source={require("../../assets/images/Ellipse.png")} className="w-[47px] h-[47px]" width={20} alt="" />
        <Image source={require("../../assets/images/Ellipse.png")} className="w-[47px] h-[47px]" width={20} alt="" />
        <Image source={require("../../assets/images/Ellipse.png")} className="w-[47px] h-[47px]" width={20} alt="" />
        <Image source={require("../../assets/images/Ellipse.png")} className="w-[47px] h-[47px]" width={20} alt="" />
        </View>
      </ScrollView>
    </View>
  );
}
