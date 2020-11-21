import { Platform, StatusBar, StyleSheet } from 'react-native';

const colors = {
  // App colors
  white: '#fffffe',
  blue: '#272343',
  yellow: '#ffd803',
  lightblue: '##bae8e8',
  whiteblue: '#e3f6f5',
}

export const styles = StyleSheet.create({
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
    fontSize: 13,
    textAlign: "center"
  },

  // InputSection.js StyleSheet
  inputContainer: {
    height: "20%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.whiteblue,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  textInput: {
    borderWidth: 2,
    height: 40,
    width: "55%",
    marginRight: 10,
    padding: 9,
    fontSize: 17,
    borderRadius: 5,
    backgroundColor: colors.white,
    borderColor: colors.blue
  },

  // Header.js StyleSheet
  headerContainer: {
    height: "8%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 19.5,
    fontWeight: "bold",
    color: colors.blue
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.blue
  },

  // TodoListSection.js StyleSheet
  
});