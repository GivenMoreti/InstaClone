import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export const ProfilePost = () => {
  return (
    <GridItem
      cursor={"pointer"}
      overflow={"hidden"}
      border={"1px solid"}
      position={"relative"}
      borderColor={"whiteAlpha.300"}
      aspectRatio={1 / 1}
    >
      <Flex
        opacity={0}
        _hover={{ opacity: 1 }}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={"blackAlpha.700"}
        transition={"all 0.3s ease"}
        zIndex={1}
        justifyContent={"center"}
      >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>

            </Flex>
            <Flex></Flex>
          </Flex>


      </Flex>
    </GridItem>
  );
};
