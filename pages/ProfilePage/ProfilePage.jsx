import { Container } from '@chakra-ui/react'
import { ProfileHeader } from './ProfileHeader'
import { ProfileFooter } from './ProfileFooter'


export const ProfilePage = () => {
  return (
    <Container maxW={"full"}>
      <ProfileHeader />
      <ProfileFooter />

    </Container>
  )
}
