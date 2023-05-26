import React from 'react'
import {
     Flex, Text, Radio, RadioGroup, Stack, Box, Switch, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator,
    
} from '@chakra-ui/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { HiOutlineTag } from 'react-icons/hi'

import Regular from './Regular';

function BuyOrder({ price, closeDrawer, name, }) {

    const [value, setValue] = React.useState('1');

    return (
        <Box overflow='hidden'>
            <Flex justifyContent='space-between' bg='#4184f3' p='1.5rem'>
                <Box fontSize='1.5rem' color='white'>
                    <Text mb='1rem'>Buy {name} * 20 Qty</Text>
                    <RadioGroup onChange={setValue} value={value} fontSize='1rem'>
                        <Stack direction='row'>
                            <Radio value='1' fontSize='2rem'>BSE: Rs. 42,275</Radio>
                            <Radio value='2' fontSize='2rem'>NSE: Rs. 42,275</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
                <Flex gap='0.8rem'>
                    <Switch size='md' />
                    <i><AiOutlineInfoCircle size={13} color='white' /></i>
                </Flex>
            </Flex>
            <Tabs size='lg' variant='line'>
                <TabList>
                    <Tab _selected={{ color: '#4299E1' }} fontSize='1rem' pr='1.2rem'>Regular</Tab>
                    <Tab _selected={{ color: '#4299E1' }} fontSize='1rem' pr='1.2rem'>Cover</Tab>
                    <Tab _selected={{ color: '#4299E1' }} fontSize='1rem' pr='1.2rem'>AMO</Tab>
                    <Tab _selected={{ color: '#4299E1' }} fontSize='1rem' pr='1.2rem'>Iceberg</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <Flex position='relative' top='-2.5rem' left='90%'>
                    <i><HiOutlineTag color='#4299E1' size={15} /></i>
                    <Text fontSize='1rem' color='#4299E1'>Tags</Text>

                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Regular onClose={closeDrawer} price={price} />
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </Box>
    )
}

export default BuyOrder