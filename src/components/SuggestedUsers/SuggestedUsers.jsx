import { Container } from "@chakra-ui/react";
import { User } from "./User";

export const SuggestedUsers = () => {
  return (
    <Container maxW={"container.sm"} py={10}>
      <User />
    </Container>
  )
}
