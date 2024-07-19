import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import StepIndicator from "react-native-step-indicator";
import dummyData from "../../dummy-data/orders";

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: "#00A651",
  separatorFinishedColor: "#00A651",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#00A651",
  stepIndicatorUnFinishedColor: "#aaaaaa",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#121212",
  labelSize: 15,
  currentStepLabelColor: "#121212",
};

export default function VerticalStepIndicator() {
  const [currentPage, setCurrentPage] = React.useState<number>(2);
  const viewabilityConfig = React.useRef({
    itemVisiblePercentThreshold: 40,
  }).current;

  const onViewableItemsChanged = React.useCallback(
    ({ viewableItems }: { viewableItems: any }) => {
      const visibleItemsCount = viewableItems.length;
      if (visibleItemsCount !== 0) {
        setCurrentPage(viewableItems[visibleItemsCount - 1].index);
      }
    },
    []
  );

  return (
    <View style={styles.container} className="h-[400] w-full">
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={4}
          direction="vertical"
          currentPosition={currentPage}
          renderStepIndicator={() => {
            return <Text></Text>;
          }}
          labels={dummyData.data.map((item) => item.title)}
          renderLabel={({ position }) => {
            return (
              <View>
                <View className="">
                  <Text className={`text-[14px] mb-1 `}>
                    {dummyData.data[position].title}
                  </Text>
                  <Text className={`text-[12px] `}>
                    {dummyData.data[position].body}
                  </Text>
                  
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    marginTop: 12,
    height: "200%",
  },
  stepIndicator: {
    marginVertical: 5,
    // paddingHorizontal: 20,

  },
});
