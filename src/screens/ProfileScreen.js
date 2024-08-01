import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Text } from "react-native-paper";
import SocMedButton from "../components/SocMedButton";
import ProjectCard from "../components/ProjectCard";
import { Image } from "../constants/image";
import { TextConst } from "../constants/text";
import { Data } from "../constants/data";

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Avatar.Image
        size={120}
        source={Image.photo_profile}
        style={styles.avatar}
      />
      <Text style={styles.name}>Hello Aulia! ✨</Text>
      <Text style={styles.description}>{TextConst.intro}</Text>
      <View style={styles.buttonContainer}>
        {Data.social_media.map((button, index) => (
          <SocMedButton
            key={index}
            icon={button.icon}
            url={button.url}
            label={button.label}
          />
        ))}
      </View>
      <Text style={styles.headerProjects}>{TextConst.project_header}</Text>
      {Data.projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 16,
    flexGrow: 1,
  },
  avatar: {
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "justify",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 400,
  },
  headerProjects: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 27,
    marginBottom: 5,
    width: "100%",
    textAlign: "left",
  },
});

export default ProfileScreen;
