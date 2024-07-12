import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Dimensions,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import Button_Lg from "../shared/Button";
import TermsOfServiceText from "../shared/TermsofService";
import { useRouter } from "expo-router";

export default function OnboardScreen1() {
  const [activeTab, setActiveTab] = useState(0);
  const [fill, setFill] = useState(0);
  const router = useRouter();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const circularProgressRef = useRef(null);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  useEffect(() => {
    let timeoutId:any;

    const startAnimation = async () => {
      if (activeTab === 0 && circularProgressRef.current) {
        circularProgressRef.current &&
          circularProgressRef.current.animate(100, 10000, Easing.quad);

        timeoutId = setTimeout(() => {
          handleTabChange(1);
        }, 10000);
      }
    };

    startAnimation();

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [activeTab]);

  return (
    <View className="mt-16 px-[5%]">
      <View className="flex w-full flex-row justify-between relative">
        {activeTab === 1 ? (
          <TouchableOpacity
            onPress={() => {
              handleTabChange(0);
            }}
          >
            <Text className="w-fit text-lg font-medium">Back</Text>
          </TouchableOpacity>
        ) : (
          <View className="flex flex-row w-full justify-end">
            <Text
              className="w-fit text-lg text-end font-medium"
              onPress={() => {
                router.push("/auth/register");
              }}
            >
              Skip
            </Text>
          </View>
        )}
      </View>

      {/* <View className="h-[100vh]">
        <Carousel
          loop
          width={width}
          height={height}
          autoPlay={false}
          data={[...new Array(2).keys()]}
          scrollAnimationDuration={3000}
          // style={{height: 500}}
          renderItem={({ index }) => (
            <View className="h-[100vh]">
              {index === 0 ? (
                // First item
                <View className="h-[100vh]">
                  <View className="mb-0 pb-0 h-1/2 mt-4">
                    <Image
                      source={require("../../assets/images/bike.png")}
                      style={{ resizeMode: "contain" }}
                      className="w-[80%] h-full mx-auto mb-0 block"
                    />
                  </View>
                  <Text className="text-2xl text-center font-semibold mt-0 w-[226px] mx-auto">
                    Get your errands ran on time
                  </Text>
                  <View className="flex flex-row justify-center items-center mx-auto mt-8">
                    <View className="block mr-2 h-[10px] w-[10px] rounded-full bg-slate-900" />
                    <View className="block h-[10px] w-[10px] rounded-full bg-slate-200" />
                  </View>
                  <View className="absolute bottom-36 w-full">
                    <Pressable
                      onPress={() => {
                        handleTabChange(1);
                      }}
                      className="w-[60px] h-[60px] rounded-full bg-black mx-auto flex flex-row items-center justify-center"
                    >
                      <Ionicons
                        name="chevron-forward-outline"
                        style={{ color: "white", fontSize: 30, margin: "auto" }}
                      />
                    </Pressable>
                  </View>
                </View>
              ) : (
                // Second item
                <View className={"relative h-[100vh]"}>
                  <View className="absolute top-0 bottom-0 my-0 w-full">
                    <Image
                      source={require("../../assets/images/image.png")}
                      style={[{ resizeMode: "contain" }]}
                      className="w-[80%] max-w-[400px]  mx-auto mb-0 -mt-4"
                    />

                    <Text className="text-2xl text-center font-semibold -mt-12 w-[226px] mx-auto">
                      Get items from your favorite local stores
                    </Text>
                    <View className="flex flex-row justify-center items-center mx-auto mt-[32px]">
                      <View className="block mr-2 h-[10px] w-[10px] rounded-full bg-slate-200" />
                      <View className="block h-[10px] w-[10px] rounded-full bg-slate-900" />
                    </View>
                  </View>
                  <View className="mt-8 absolute bottom-20 w-full">
                    <Button_Lg
                      title="Get Started"
                      regular={true}
                      onPress={() => {
                        router.replace("/auth/register");
                      }}
                    />
                    <TermsOfServiceText />
                  </View>
                </View>
              )}
            </View>
          )}
        />
      </View> */}

      {/* Onbaord component 1 */}
      <View className={activeTab === 0 ? " h-[100vh]" : "hidden"}>
        <View className="mb-0 pb-0 h-1/2 mt-4">
          <Image
            source={require("../../assets/images/bike.png")}
            style={[{ resizeMode: "contain" }]}
            className="w-[80%] h-full mx-auto mb-0  block"
          />
        </View>

        <Text className="text-2xl text-center font-semibold mt-0 w-[226px] mx-auto">
          Get your errands ran on time
        </Text>
        <View className="flex flex-row justify-center items-center mx-auto mt-8">
          <View className="block mr-2 h-[10px] w-[10px] rounded-full bg-slate-900" />
          <View className="block h-[10px] w-[10px] rounded-full bg-slate-200" />
        </View>
        <View className="absolute bottom-36 w-full">
          <View className="mx-auto">
            <AnimatedCircularProgress
              ref={circularProgressRef}
              duration={10000}
              size={80}
              width={10}
              fill={fill}
              tintColor="#00A651"
              backgroundColor="white"
              style={{ transform: [{ rotate: "90deg" }] }}
            >
              {(fill) => (
                <Pressable
                  onPress={() => {
                    handleTabChange(1);
                  }}
                  className="w-[60px] h-[60px] rounded-full bg-black mx-auto flex flex-row items-center justify-center -rotate-90"
                >
                  <Ionicons
                    name="chevron-forward-outline"
                    style={[{ color: "white", fontSize: 30, margin: "auto" }]}
                    className=""
                  />
                </Pressable>
              )}
            </AnimatedCircularProgress>
          </View>
        </View>
      </View>

      {/* Onboard component 2 */}
      <View className={activeTab === 1 ? "relative h-[100vh]" : "hidden"}>
        <View className="absolute top-0 bottom-0 my-0 w-full">
          <Image
            source={require("../../assets/images/image.png")}
            style={[{ resizeMode: "contain" }]}
            className="w-[80%] max-w-[400px]  mx-auto mb-0 -mt-4"
          />

          <Text className="text-2xl text-center font-semibold -mt-12 w-[226px] mx-auto">
            Get items from your favorite local stores
          </Text>
          <View className="flex flex-row justify-center items-center mx-auto mt-[32px]">
            <View className="block mr-2 h-[10px] w-[10px] rounded-full bg-slate-200" />
            <View className="block h-[10px] w-[10px] rounded-full bg-slate-900" />
          </View>
        </View>
        <View className="mt-8 absolute bottom-20 w-full">
          <Button_Lg
            title="Get Started"
            regular={true}
            onPress={() => {
              router.push("/auth/register");
            }}
          />
          <TermsOfServiceText />
        </View>
      </View>
    </View>
  );
}

//
