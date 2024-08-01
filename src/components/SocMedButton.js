import { StyleSheet, Linking } from "react-native";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SocMedButton = ({ icon, url, label }) => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <Button
      icon={() => (
        <MaterialCommunityIcons name={icon} size={24} color="white" />
      )}
      mode="contained"
      style={styles.button}
      onPress={() => handlePress(url)}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: "#DE3163",
  },
});

export default SocMedButton;
