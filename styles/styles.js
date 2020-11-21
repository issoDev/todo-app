import { Platform, StatusBar } from 'react-native';

const colors = {
  // App colors
  white: '#fffffe',
  blue: '#272343',
  yellow: '#ffd803',
  lightblue: '##bae8e8',
  whiteblue: '#e3f6f5',
}

export const styles = {
  // App.js StyleSheet
  appContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  // CustomButton.js StyleSheet
  customButton: {
    padding: 15,
    backgroundColor: colors.yellow,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  textCustomButton: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: colors.blue
  },

  // InputSection.js StyleSheet
  inputContainer: {
    height: "25%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  textInput: {
    borderBottomWidth: 2,
    height: 40,
    width: "50%",
    marginRight: 15,
    padding: 5,
    fontSize: 19
  }
}