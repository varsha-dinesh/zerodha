import React from 'react'
import { Image, Text, Button, Flex, Center } from '@chakra-ui/react'

function Orders() {
    return (
        <Flex flexDirection='column' justifyContent='center' mt='5rem' >
            <Image src='/orderbook.svg' height='10rem' />
            <Text textAlign='center' fontSize='1.5rem' mb='2rem' color='gray.500'>You haven't placed any orders today</Text>
            <Button colorScheme='blue' w='15rem' fontSize='1.5rem' p='2rem' margin='auto'>Get Started</Button>
            <Center margin='2rem'>
                <Image src='/console.svg' h='2rem'/>
                <Text ml='0.5rem' fontSize='1.5rem' color='blue.500'>View history</Text>
            </Center>
        </Flex>
    )
}

export default Orders