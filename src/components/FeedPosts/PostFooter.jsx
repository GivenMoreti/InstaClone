import { Box, Flex,Text } from "@chakra-ui/react";
import { useState } from "react";

export const PostFooter = () => {
    const[liked,setLiked] = useState(true);
    const[likes,setLikes] = useState(50);
    
    const handleLike = ()=>{
        if(liked){
            setLiked(true);
            setLikes(likes- 1);
        }else{
            setLiked(false)
            setLikes(likes + 1)
        }
        
    }
  return (
    <>
        <Flex>
            <Box cursor={"pointer"}  >
                {/* like unlike button */}
               <Text onClick={handleLike}> {liked? (<span class="material-icons md-18">home</span>):(<span class="material-icons md-18 bg-red">home</span>)}</Text>
                <Text>{likes}</Text>
            </Box>

        </Flex>
    </>
  )
}
