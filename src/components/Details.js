import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Box } from '@chakra-ui/react'

import Orders from './Orders'

function Details() {
    return (
        <Tabs size='lg' variant='line' backgroundColor='white'>
            <Box >
                <TabList>
                    <Tab _selected={{ color: '#ff5722' }} fontSize='1.5rem' pr='1rem'>Orders</Tab>
                    <Tab _selected={{ color: '#ff5722' }} fontSize='1.5rem' pr='1rem'>GTT</Tab>
                    <Tab _selected={{ color: '#ff5722' }} fontSize='1.5rem' pr='1rem'>Baskets</Tab>
                    <Tab _selected={{ color: '#ff5722' }} fontSize='1.5rem' pr='1rem'>SIP</Tab>
                    <Tab _selected={{ color: '#ff5722' }} fontSize='1.5rem' pr='1rem'>Alerts</Tab>
                    <Tab _selected={{ color: '#ff5722' }} fontSize='1.5rem' pr='1rem'>IPO</Tab>
                    <Tab _selected={{ color: '#ff5722' }} fontSize='1.5rem' pr='1rem'>Auctions</Tab>
                </TabList>
            </Box>
            <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="orange.500"
                borderRadius="1px"
            />

            <TabPanels>
                <TabPanel>
                    <Orders />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Details