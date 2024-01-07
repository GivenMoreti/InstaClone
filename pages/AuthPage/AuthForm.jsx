import { Box, Image, Input, VStack } from "@chakra-ui/react";
import React,{useState} from "react";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);





  return (
    <Box border={"1 px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        {/* logo */}
        <Image src="./BottomOcean.png" />
        <Input placeholder="email" type="email" fontSize={14} />
        <Input placeholder="password" type="password" fontSize={14} />
      
      {!isLogin?(
        <Input placeholder="confirm password" type="password" fontSize={14} />
      ): null}
      
      </VStack>
    </Box>
  );
};
