import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native';

type PrimaryInputProps = {
  label?: string;
  type?: string;
  value?: string;
  onchangeText?: (text: string) => void;
  placeholder?: string;
};

const PrimaryInput = ({label, type, value, onchangeText, placeholder}: PrimaryInputProps) => {
  return (
    <View >
      {/* <Text style={{marginBottom: 4}}>{label}</Text> */}
      <View style={[inputStyles.inputContainer, inputStyles.inputLg]} className="flex flex-row items-center">
        <Text className="mr-2">+234</Text>
      <TextInput
        style={inputStyles.inputMain}
        onChangeText={onchangeText}
        value={value}
        placeholder={placeholder}
        selectionColor={"black"}
        // inputMode=[]
      />
      </View>
    </View>
  )
}

export default PrimaryInput


const inputStyles = StyleSheet.create({

  inputContainer: {
    backgroundColor: "rgba(222, 222, 222, 0.6)",
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom:12,
    paddingLeft: 10,
    paddingRight: 10,
    
  },

  inputLg:{
    width: "100%"
  },
  inputMain:{
    // fontFamily: "Poppins_reg",
    color: "#121212"
  },
  inputLabel:{
    // fontFamily: "Poppins_reg",
    fontSize: 15,
    lineHeight: 22.5
  }

});
