import { Container,Flex, Image,Box } from '@chakra-ui/react'
import React from 'react';
import { FeedPosts } from '../../src/components/FeedPosts/FeedPosts';
import { SuggestedUsers } from '../../src/components/SuggestedUsers/SuggestedUsers';

export const HomePage = () => {
  return (
    <div>
      <Container maxW={"container.lg"}>
        <Flex gap={20} >
          <Box flex={2} py={10}>
            <FeedPosts/>
          </Box>
          <Box flex={3} mr={20} display={{base:"none",lg:"block"}} maxW={"300px"} border={"0.2px solid gray"} p={5}>
            <SuggestedUsers />
          </Box>
            
         
        </Flex>
      </Container>
    </div>
  )
}
