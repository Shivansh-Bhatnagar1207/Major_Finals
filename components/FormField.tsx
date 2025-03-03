import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Switch } from "react-native";

type props = {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: any;
};
const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  ...props
}: props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <Text style={{ padding: 10, fontWeight: "bold" }}>{title}:</Text>
      <View
        className={`border w-full h-14 items-center flex-row rounded-xl`}
        style={{
          display: "flex",
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingInline: 10,
          height: 50,
          borderRadius: 20,
        }}
      >
        <TextInput
          className="text-base w-full h-10 "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChange={handleChangeText}
          secureTextEntry={title === "password" && !showPassword}
        />
      </View>
      {title === "password" && (
        <>
          <View
            className="flex-row items-center justify-between"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <Text className="text-sm text-gray-700">Show Password</Text>
            <Switch
              value={showPassword}
              onValueChange={(value) => setShowPassword(value)}
              thumbColor={showPassword ? "#FFB74D" : "#D1D5DB"}
              trackColor={{ false: "#D1D5DB", true: "#FFB74D" }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default FormField;
