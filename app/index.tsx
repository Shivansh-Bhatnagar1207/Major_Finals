import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView className="h-full bg-bgnd">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center px-4">
          <Image
            source={require("../assets/images/fitness.png")}
            className="w-full h-[84px] mt-10"
            resizeMode="cover"
          />
        </View>
        <View className="relative mt-24 w-36 mx-auto">
          <Text className="text-3xl  font-bold text-center">
            Lets Do it with <Text className="text-accent">Our App</Text>
          </Text>
          <TouchableOpacity
            className="my-10 w-36 mx-auto bg-accent p-5 rounded-lg"
            onPress={() => {
              router.push("/SignIn");
            }}
          >
            <Text className="font-bold text-center text-lg text-white">
              Lets Begin
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
