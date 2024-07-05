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
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 10,
            marginBottom: 20,
            // flex:1,
            display: "grid",
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "95%",
            height: 300,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              paddingVertical: 12,
              fontSize: 28,
              color: "white",
            }}
          >
            my G are you ready for the best view
          </Text>
          <Text
            style={{
              paddingVertical: 5,
              paddingHorizontal: 14,
              color: "white",
            }}
          >
            Click next to contuine
          </Text>
          <Button title="next" />
        </View>
      </ImageBackground>
    </View>
  );
}
