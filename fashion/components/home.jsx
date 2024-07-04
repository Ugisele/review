import { Button, Image, ImageBackground, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={{
          // height: "100%",
          // width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ 
            paddingVertical: 12, 
            fontSize:28,
            color: "white" }}
        >
          my G are you ready for the best view
        </Text>
        <Text 
         style={{ 
          paddingVertical: 2, 
          paddingHorizontal: 14, 
          color: "white" }}>
          Click next to contuine
        </Text>
        <Button title="next"/>
      </ImageBackground>
    </View>
  );
}