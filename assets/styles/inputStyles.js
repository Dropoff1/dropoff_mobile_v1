import { StyleSheet } from 'react-native';

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

export { inputStyles }