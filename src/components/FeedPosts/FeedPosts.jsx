import { Container,Flex, Image,Box } from '@chakra-ui/react'
import { Feed } from './Feed'

export const FeedPosts = () => {
  return (
    <Container maxW={"container.md"} py={10}>
        <Feed />
        <Feed />
        <Feed />
        <Feed />


    </Container>
    
  )
}
