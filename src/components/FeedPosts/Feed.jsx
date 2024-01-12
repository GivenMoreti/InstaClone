
import { Container,Box,Image } from '@chakra-ui/react';
import { PostHeader } from './PostHeader';
import { PostFooter } from './PostFooter';

export const Feed = () => {
  return (
    <Container maxW={"container.sm"} p={10}>
        <PostHeader />
        <Box>
            <Image src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'/>
        </Box>
        <PostFooter />
    </Container>
    
  )
}
