import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { Link, router } from "expo-router";
import auth from "@react-native-firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/Firebase";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    const { email, password } = form;

    // Validation
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Sign in the user
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;

      Alert.alert("Success", `Welcome back, ${user.email}!`);
      router.replace("/");
    } catch (error: any) {
      console.error(error);
      let errorMessage = "Failed to sign in. Please try again.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password.";
      }
      Alert.alert("Error", errorMessage);
    } finally {
      setForm({ email: "", password: "" });
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-bgnd h-full">
      <ScrollView>
        <View className="w-full h-full justify-center min-h-[85vh] px-4 my-6 ">
          <Image
            source={require("@/assets/images/fitness.png")}
            className="w-full h-[84px]"
            resizeMode="cover"
          />
          <Text className="font-bold  text-2xl mt-10 text-center">
            Log into Fitness App
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            placeholder={"JohnDoe@gmail.com"}
            otherStyle={"mt-5"}
          />
          <FormField
            title="password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            keyboardType="email-address"
            placeholder={"************"}
            otherStyle={"mt-5"}
          />
          <TouchableOpacity
            onPress={submit}
            activeOpacity={0.7}
            disabled={isSubmitting}
            className="mt-20 bg-accent rounded-xl min-h-[52px] items-center justify-center"
          >
            {isSubmitting ? (
              <Text className="font-semibold text-2xl text-white">
                Signing in...
              </Text>
            ) : (
              <Text className="font-semibold text-2xl text-white">Sign In</Text>
            )}
          </TouchableOpacity>
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-500 font-bold">
              do not have an account?
            </Text>
            <Link href={"/SignUp"} className="text-lg text-orange-400">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
