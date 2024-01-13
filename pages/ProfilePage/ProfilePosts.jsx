import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'

export const ProfilePosts = () => {

  const[isLoading,setIsLoading] = useState(true);
  
  return (
    <Grid templateColumns={{sm:"repeat(1,1fr)",md:"repeat(3,1fr)"}}
    gap={1}
    columnGap={1}
    >
      {isLoading && [0,1,2,3,4,5].map((_,index)=>(
        <VStack key={index} alignItems={"flex-start"} gap={4}>
          <Skeleton w={"full"}>
              <Box h={"300px"}>
                contents wrapped
              </Box>
          </Skeleton>
        </VStack>
      ))}


    </Grid>
  )
}