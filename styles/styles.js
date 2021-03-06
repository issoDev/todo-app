import { Platform, StatusBar, StyleSheet } from 'react-native';
import { colors } from './colors';


export const styles = StyleSheet.create({
  // App.js StyleSheet
  appContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  // CustomButton.js StyleSheet
  customButton: {
    shadowColor: colors.blue,
    shadowOffset: { width:0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
    padding: 15,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  textCustomButton: {
    fontSize: 14,
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
  },
  textInput: {
    borderWidth: 2,
    height: 40,
    width: "65%",
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
    fontSize: 18.5,
    fontWeight: "bold",
    color: colors.blue
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.blue
  },

  // TodoListSection.js StyleSheet
  todoListcontainer: {
    padding: 15,
    backgroundColor: colors.white,
    borderLeftWidth: 4,
    borderColor: colors.whiteblue,
    marginHorizontal: 25, 
    marginBottom: 25,
    borderRadius: 5,
    shadowColor: colors.blue,
    shadowOffset: { width:0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5
  },
  todoItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoItemTextStyle: {
    fontSize: 18,
    color: colors.blue
  },
  todoItemRemove: {
    backgroundColor: colors.white,
    shadowColor: colors.blue,
    shadowOffset: { width:0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
    padding: 6,
    color: colors.blue,
    fontWeight: "600",
    fontSize: 17.5
  },

  // SearchSection.js StyleSheet
  searchInputContainer: {
    height: '10%',
    width: '100%',
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  searchInput: {
    borderWidth: 1.1,
    borderColor: colors.blue,
    height: 34,
    width: '55%',
    fontSize: 15,
    borderRadius: 5,
    padding: 5
  }
});