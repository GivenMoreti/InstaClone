import { Box, Flex, Avatar } from "@chakra-ui/react";
import { useState } from "react";

export const PostHeader = () => {
  const [isFollow, setIsFollow] = useState(true);
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      my={2}
      w={"full"}
    >
      <Flex cursor={"pointer"}>
        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
        <Box p={5} alignItems={"center"} cursor={"pointer"}>
          Jane Doe
        </Box>
        <Box alignItems={"center"} p={5} color={"gray"}>
          1w
        </Box>
      </Flex>

      {/* follow unfollow button */}
      <Box
        color={"blue.500"}
        onClick={() => setIsFollow(!isFollow)}
        cursor={"pointer"}
        _hover={{color:'white'}}
        transition={"0.5s ease-in-out"}
      >
        {isFollow ? "Unfollow" : "Follow"}
      </Box>
    </Flex>
  );
};
