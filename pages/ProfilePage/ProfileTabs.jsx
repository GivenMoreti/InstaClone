import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      textTransform={"uppercase"}
      fontWeight={"bold"}
      borderTop={"0.2px solid gray"} //go be removed
    >
      <Flex alignItems={"center"}>
        <Box fontSize={20}>
          <Text>Posts</Text>
        </Box>
      </Flex>

      <Flex gap={4} alignItems={"center"}>
        <Box fontSize={20}>
          <Text>saved</Text>
        </Box>
      </Flex>

      <Flex gap={4} alignItems={"center"}>
        <Box fontSize={20}>
          <Text>likes</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
