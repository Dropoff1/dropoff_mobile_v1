import DisplayCards from "@/components/Home/DisplayCards";
import HomeTopComponent from "@/components/Home/TopComponent";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <View className="pt-16 relative">
      <HomeTopComponent />

      <View className="mt-32 bg-white h-fit relative px-4 py-4">
        <Text className="mb-4 text-[16px]">Features</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="">
          <View className="flex flex-row flex-nowrap">
            <DisplayCards />
            <DisplayCards />
            <DisplayCards />
            <DisplayCards />
          </View>
        </ScrollView>
      </View>
      <View className="mt-8 bg-white h-fit relative px-4 py-4">
        <Text className="mb-4 text-[16px]">Hot Offers</Text>
        <ScrollView horizontal className="" showsHorizontalScrollIndicator={false}>
          <View className="flex flex-row flex-nowrap">
            <DisplayCards />
            <DisplayCards />
            <DisplayCards />
            <DisplayCards />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
