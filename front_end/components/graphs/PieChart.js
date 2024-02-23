import { Text, View } from "react-native";
import { PieChart as WPieChart } from "react-native-gifted-charts";
import React from "react";

const PieChart = (props) => {
  return (
    <View className="flex border-2">
      <WPieChart
        showText
        textColor="black"
        radius={85}
        textSize={10}
        focusOnPress
        textAnchor="middle"
        showTextBackground={false}
        textBackgroundRadius={20}
        textBackgroundColor="#ccc"
        strokeWidth={1}
        strokeColor="#333"
        innerCircleBorderWidth={2}
        innerCircleBorderColor="#333"
        data={props.data}
      />
      <View className="p-2">
        <View className="flex-row justify-around">
          <Text>Initial:</Text>
          <Text>1000$</Text>
        </View>
        <View className="flex-row justify-around">
          <Text>Balance:</Text>
          <Text>1000$</Text>
        </View>
      </View>
    </View>
  );
};

export default PieChart;
