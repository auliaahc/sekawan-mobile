import { Text, Card } from "react-native-paper";
import { StyleSheet } from "react-native";

const ProjectCard = ({ title, description, image }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={image} style={styles.cardCover} />
      <Card.Content style={styles.cardContent}>
        <Text variant="titleMedium">{title}</Text>
        <Text variant="bodySmall">{description}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 400,
    marginVertical: 16,
  },
  cardCover: {
    height: 150,
  },
  cardContent: {
    paddingTop: 10,
  },
});

export default ProjectCard;
