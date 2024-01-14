
import { Container,Box,Image } from '@chakra-ui/react';
import { PostHeader } from './PostHeader';
import { PostFooter } from './PostFooter';

export const Feed = (props) => {
  return (
    <Container maxW={"container.sm"} p={10}>
        <PostHeader name />
        <Box>
            <Image src={props.image}/>
        </Box>
        <PostFooter />
    </Container>
    
  )
}
