import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import {ProfilePost} from './ProfilePost';


export const ProfilePosts = () => {

  const[isLoading,setIsLoading] = useState(false);
  
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

      {/* if not loading */}
      {
        !isLoading && (
          <>
            <ProfilePost img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
          </>
        )
      }


    </Grid>
  )
}
