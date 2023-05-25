import React, { useState } from 'react'
import { Radio, RadioGroup, Stack, Text, Flex, Box, Button, ButtonGroup, Image } from '@chakra-ui/react'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { GiAnticlockwiseRotation } from 'react-icons/gi'


function SellRegular({ onClose, price }) {

    const [value, setValue] = React.useState('1')

    return (
        <>
            <RadioGroup onChange={setValue} value={value} >
                <Stack direction='row' spacing='5rem' fontSize='1.5rem'>
                    <Radio value='1'>Intraday <span>MIS</span></Radio>
                    <Radio value='2'>Longterm <span>CNC</span></Radio>
                </Stack>
            </RadioGroup>

            <div className="input-container">
                <input type="number" id="numberInput" min="1" step="1"  value={1}/>
                <label htmlFor="numberInput" className='inputOne'>Qty.</label>
                <input type="number" id="numberInputTwo" min="0.05" step="0.05" value={price}/>
                <label htmlFor="numberInputTwo" className='inputTwo'>Price</label>
                <input type="number" id="numberInputThree" min="0" step="0.5" value='0' disabled="disabled" />
                <label htmlFor="numberInputThree" className='inputThree'>Trigger Price</label>
            </div>

            <Stack direction='row' spacing='14rem' mt='1rem'>
                <RadioGroup onChange={setValue} value={value} ml='18rem' colorScheme='orange'>
                    <Stack direction='row' spacing='1rem' fontSize='1.5rem'>
                        <Radio value='1'>Market</Radio>
                        <Radio value='2'>Limit</Radio>
                    </Stack>
                </RadioGroup>
                <RadioGroup onChange={setValue} value={value} ml='26rem' colorScheme='orange'>
                    <Stack direction='row' spacing='1rem' fontSize='1.5rem'>
                        <Radio value='1'>SL</Radio>
                        <Radio value='2'>SL-M</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>

            <Flex justifyContent='end' mt='1rem' fontSize='1.3rem' color='#4299E1'>
                <Text>More Options</Text>
                <i><MdKeyboardArrowDown size={20} color='#4299E1' /></i>
            </Flex>

            <Stack direction='row' mt='2rem' p='2rem 1rem' backgroundColor='blackAlpha.50' justifyContent='space-between'>
                <Flex gap='0.8rem' fontSize='1.3rem'>
                    <Flex gap='0.5rem' >
                        <Text>Margin</Text>
                        <Text color='blue.600' fontSize='1.3rem'>&#8377; 8,44,743.00</Text>
                    </Flex>
                    <Flex gap='0.5rem'>
                        <Text>Charges</Text>
                        <Text color='blue.600' fontSize='1.3rem'>&#8377; 1,005.14</Text>
                        <span><GiAnticlockwiseRotation /></span>
                    </Flex>
                </Flex>
                <ButtonGroup>
                    <Button variant='solid' colorScheme='orange' fontSize='1.5rem' width='6rem' height='3.5rem'>Buy</Button>
                    <Button variant='outline' colorScheme='gray' fontSize='1.5rem' bg='white' width='6rem' height='3.5rem' onClick={onClose}>Cancel</Button>
                </ButtonGroup>

            </Stack>
        </>
    )
}

export default SellRegular