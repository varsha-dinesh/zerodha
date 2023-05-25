import React, { useState, useEffect } from 'react'
import {
    Button, Flex, Text, Radio, RadioGroup, Stack, Box, Switch, Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator,
    Tooltip, useBreakpointValue
} from '@chakra-ui/react'
import { AiOutlineInfoCircle, AiOutlinePlus } from 'react-icons/ai'
import Modal from 'react-modal';
import { HiOutlineTag } from 'react-icons/hi'

import Regular from './Regular';

function Buy({ price }) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [value, setValue] = React.useState('1');
    const isVisible = useBreakpointValue({ base: false, lg: true });


    useEffect(() => {
        Modal.setAppElement(document.getElementById("root"));
    }, [])

    const customStyles = {
        overlay: {
            backgroundColor: 'trasparent',
            zIndex: '30',
        }
    };

    const openModal = () => {
        setModalIsOpen(true)
        // closeDrawer();
    }


    return (
        <>
            {isVisible ?
                <Tooltip label='Buy(B)' fontSize='1.3rem' placement='top' p='1rem' hasArrow='true' borderRadius='5px'>
                    <Button colorScheme='blue' px='1.3rem' onClick={() => setModalIsOpen(true)}>B</Button>
                </Tooltip> :
                <Flex colorScheme='gray' px='1.3rem' onClick={openModal} width='100%' mb='2rem' borderBottom='1px solid #eee' py='1rem'>
                    <i><AiOutlinePlus size={18} color='black'/></i>
                    <Text fontSize='1.5rem' pl='0.8rem'>Buy</Text>
                </Flex>}
            <Modal
                isOpen={modalIsOpen}
                className='modal'
                style={customStyles}
                contentLabel='buy'
            >
                <Flex justifyContent='space-between' bg='#4184f3' p='1.5rem'>
                    <Box fontSize='1.5rem' color='white'>
                        <Text mb='1rem'>Buy PageInd * 20 Qty</Text>
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
                            <Regular onClose={() => setModalIsOpen(false)} price={price}/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Modal>

        </>
    )
}

export default Buy