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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
}