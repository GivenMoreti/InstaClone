import {
  Box,
  Button,
  Image,
  Input,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Box border={"0.1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        {/* logo */}
        <Image src="./OceanBottomText.png" boxSize="150px" objectFit="cover" />
        <Input placeholder="email" type="email" fontSize={14} />
        <Input placeholder="password" type="password" fontSize={14} />

        {!isLogin ? (
          <Input placeholder="confirm password" type="password" fontSize={14} />
        ) : null}
        <Button width={"full"} colorScheme="gray" variant="outline">
          {isLogin ? "Login" : "Sign up"}
        </Button>
        {/* -----OR---- */}
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          my={4}
          gap={1}
          w={"full"}
        >
          <Box flex={2} h={"1px"} bg={"gray.400"} />
          <Text mx={1} color={"white"}>
            OR
          </Text>
          <Box flex={2} h={"1px"} bg={"gray.400"} />
        </Flex>
        <Flex lignItems={"center"} justifyContent={"center"}>
          <Image src="./google.png" w={5} alt="google logo" />
          <Text mx={2} color={"blue.500"} cursor={"pointer"}>
            Sign in with google
          </Text>
        </Flex>
        {/* sign up if you dont have account */}

        <Flex lignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have account?" : "already have account"}
          </Box>
          <Box
            mx={2}
            fontSize={14}
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign up" : "login"}
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};
