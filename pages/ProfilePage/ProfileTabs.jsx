import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      textTransform={"uppercase"}
      fontWeight={"bold"}
      borderTop={"0.2px solid gray"}   //go be removed
    >
      <Flex >
        <Box fontSize={20}>
          <Text>
            <span class="material-icons md-18">grid</span>
          </Text>
          <Text>Posts</Text>
        </Box>
      </Flex>

      <Flex gap={4}>
        <Box fontSize={20}>
          <Text>
            <span class="material-icons md-18">love</span>
          </Text>
          <Text>saved</Text>
        </Box>
      </Flex>

      <Flex gap={4}>
        <Box fontSize={20}>
          <Text>
            <span class="material-icons md-18">love</span>
          </Text>
          <Text>likes</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
