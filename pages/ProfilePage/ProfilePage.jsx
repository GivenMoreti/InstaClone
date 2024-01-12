import { Container } from '@chakra-ui/react'
import { ProfileHeader } from './ProfileHeader'
import { ProfileTabs } from './ProfileTabs'

export const ProfilePage = () => {
  return (
    <Container maxW={"full"}>
      <ProfileHeader />
      <ProfileTabs />


    </Container>
  )
}
