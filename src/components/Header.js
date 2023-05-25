import React from 'react'
import { Box, Flex, Text, Image, Avatar, Divider, Icon, useBreakpointValue } from '@chakra-ui/react'
import { BsBell, BsBookmark } from 'react-icons/bs'
import { AiOutlinePayCircle } from 'react-icons/ai'
import { BiBookAlt, BiBriefcaseAlt, BiBox } from 'react-icons/bi'
import { CgNotes } from 'react-icons/cg'

function Header() {

    const isVisible = useBreakpointValue({ base: false, lg: true });

    return (
        <header className='header'>
            <Flex
                flexDirection='row'
                margin='0 auto'
                maxWidth='1366px'
                fontFamily='Open Sans, sans-serif'
                justifyContent='space-between'
            >
                {isVisible ?
                    <Flex fontSize='1.5rem' width='35%' >
                        <Flex gap='0.7rem' p='2rem 0'>
                            <Text fontWeight='600'>NIFTY 50</Text>
                            <Text color='green.500' fontWeight='600'>18398.85</Text>
                            <span pr='0.7rem' fontSize='md' className='number'>84.05(0.46%)</span>
                        </Flex>
                        <Flex gap='0.7rem' pos='relative' p='2rem 0'>
                            <Text fontWeight='600'>NIFTY BANK</Text>
                            <Text color='green.500' fontWeight='600'>18398.85</Text>
                            <span className='number'>84.05(0.46%)</span>
                        </Flex>
                    </Flex> :
                    <Flex p='2rem' gap='2rem'>
                        <i><BsBookmark size={20} color='#ff5722'/></i>
                        <i><AiOutlinePayCircle size={20} color='RGBA(0, 0, 0, 0.64)'/></i>
                        <i><BiBookAlt size={20} color='RGBA(0, 0, 0, 0.64)'/></i>
                        <i><BiBriefcaseAlt size={20} color='RGBA(0, 0, 0, 0.64)'/></i>
                        <i><BiBox size={20} color='RGBA(0, 0, 0, 0.64)'/></i>
                        <i><CgNotes size={20} color='RGBA(0, 0, 0, 0.64)'/></i>

                    </Flex>
                }
                <div className='border'></div>
                <Flex fontSize='1.5rem' justifyContent={{ base: 'end', lg: 'space-between' }} p='2rem 0' w='65%' pr={{base: '2rem', lg: 'none'}}>
                    {isVisible && <Box><Image src='/kite-logo.svg' height='2rem' /></Box>}
                    <Flex gap='3rem' >
                        {isVisible && <Text>Dashboard</Text>}
                        {isVisible && <Text color='#ff5722'>Orders</Text>}
                        {isVisible && <Text>Holdings</Text>}
                        {isVisible && <Text>Positions</Text>}
                        {isVisible && <Text>Funds</Text>}
                        {isVisible && <Text>Apps</Text>}
                        <Icon as={BsBell} mt='.8rem' />
                        <Box>
                            <Avatar name='Kshigaki Kisame' src='https://bit.ly/broken-link' bg='purple.50' color='black' />
                            <span id='user'>JSF022</span>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </header>
    )
}

export default Header