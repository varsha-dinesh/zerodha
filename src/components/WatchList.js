import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { FiAlignCenter, FiTrendingUp } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { HiDotsHorizontal, } from 'react-icons/hi'
import { AiOutlineSetting } from 'react-icons/ai'
import {
    Flex, Text, Icon, useBreakpointValue, Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react'

import Buy from './Buy'
import Sell from './Sell'

function WatchList({ code, name, price, priceDifference, percentageDifference, colorCode }) {

    const [show, setShow] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isVisible = useBreakpointValue({ base: false, lg: true });


    const handleOpenDrawer = () => {
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    const handleClick = () => { }


    return (
        <>
            <Flex
                justifyContent='space-between'
                p='1rem'
                borderTop='1px solid #eee'
                borderBottom='1px solid #eee'
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                _hover={{ backgroundColor: 'RGBA(0, 0, 0, 0.06)' }}
                zIndex='1'
                onClick={isVisible ? handleClick : handleOpenDrawer}
            >


                <Text textTransform='uppercase' fontSize='1.2rem' color={colorCode === 'green' ? '#4caf50' : 'red.400'}>{name}</Text>
                <Flex gap='1rem' fontSize='1.2rem'>
                    <span style={{ color: '#9b9b9b' }}>{priceDifference}</span>
                    <Flex>
                        <span style={{ color: 'RGBA(0, 0, 0, 0.64)' }}> {percentageDifference}%</span>
                        {colorCode === 'green' ? 
                        <Icon as={MdKeyboardArrowUp} boxSize={9} transform='translateY(-2px)' color={colorCode === 'green' ? '#4caf50' : 'red.400'}/> :
                        <Icon as={MdKeyboardArrowDown} boxSize={9} transform='translateY(-2px)' color={colorCode === 'green' ? '#4caf50' : 'red.400'}/>}

                    </Flex>
                    <span className={colorCode === 'green' ? 'green' : 'red'}>{price}</span>
                </Flex>

                {show && isVisible &&
                    <Flex gap='1rem' position='absolute' zIndex='100' left={{ lg: '14rem', xl: '19rem', '2xl': '21rem' }} >
                        <Buy price={price}/>
                        <Sell price={price}/>
                        <i className='icon'><FiAlignCenter size={13} color='RGBA(0, 0, 0, 0.48)' /></i>
                        <i className='icon'><FiTrendingUp size={13} color='RGBA(0, 0, 0, 0.48)' /></i>
                        <i className='icon'><RiDeleteBin6Line size={13} color='RGBA(0, 0, 0, 0.48)' /></i>
                        <i className='icon'><HiDotsHorizontal size={13} color='RGBA(0, 0, 0, 0.48)' /></i>
                    </Flex>}
                <Drawer
                    isOpen={isDrawerOpen}
                    placement='bottom'
                    onClose={handleCloseDrawer}
                    mb='1rem'

                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerBody textAlign='start'>
                            <Buy closeDrawer={handleCloseDrawer} price={price}/>
                            <Sell price={price}/>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
            <Flex
                position='fixed'
                bottom='0'
                borderTop='1px solid #CBD5E0'
                w={{ base: '100%', lg: '35%', '2xl': '26%' }}
                overflow='hidden'
                justifyContent='space-between'>
                <Flex>
                    <Text p='2rem' fontSize='1.5rem' borderRight='1px solid #CBD5E0' color='#ff5722'>1</Text>
                    <Text p='2rem' fontSize='1.5rem' borderRight='1px solid #CBD5E0' color='blackAlpha.200'>2</Text>
                    <Text p='2rem' fontSize='1.5rem' borderRight='1px solid #CBD5E0' color='blackAlpha.200'>3</Text>
                    <Text p='2rem' fontSize='1.5rem' borderRight='1px solid #CBD5E0' color='blackAlpha.200'>4</Text>
                    <Text p='2rem' fontSize='1.5rem' borderRight='1px solid #CBD5E0' color='blackAlpha.200'>5</Text>
                    <Text p='2rem' fontSize='1.5rem' borderRight='1px solid #CBD5E0' color='blackAlpha.200'>6</Text>
                    <Text p='2rem' fontSize='1.5rem' borderRight='1px solid #CBD5E0' color='blackAlpha.200'>7</Text>
                </Flex>
                <i className='setting'>
                    <AiOutlineSetting size={20} />
                </i>

            </Flex>

        </>
    )
}

export default WatchList