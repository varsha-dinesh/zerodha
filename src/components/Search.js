import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Box, Input, InputGroup, InputLeftElement, Flex, Text } from '@chakra-ui/react'

import Stocks from '../stocks.json'
import WatchList from './WatchList'


function Search() {

  const [stockItem, setStockItem] = useState(Stocks)


  return (
    <>
      <Flex p='1rem'>
        <InputGroup border='none'>
          <InputLeftElement
            pointerEvents='none'
            color='#9b9b9b'
            fontSize='1.2rem'
            transform='translateY(7px)'
            pr='1rem'>
            <BsSearch />
          </InputLeftElement>
          <Input
            type='text'
            placeholder='Search eg: infy bse, nifty fut, nifty weekly, gold mcx'
            fontSize='1.5rem'
            border='none'
            outline='none'
            _placeholder={{ color: '#9b9b9b' }}
            py='2rem'
            focusBorderColor='transparent' />
        </InputGroup>
        <Text p='1.3rem' fontSize='1.5rem' color='blackAlpha.500'>{stockItem.length}/50</Text>
      </Flex>

      {stockItem.map((stock) => {

        const priceDifference = parseFloat(stock.price - stock.previous)

        const calculatePercentage = (partialValue, totalValue) => {
          return (partialValue / totalValue) * 100;
        };

        const percentageDifference = parseFloat(calculatePercentage(priceDifference, stock.previous))

        const colorCode = stock.previous > stock.price ? 'red' : 'green'

        return (
          <WatchList
            key={stock.code}
            name={stock.name}
            price={stock.price}
            priceDifference={priceDifference.toFixed(2)}
            percentageDifference={percentageDifference.toFixed(2)}
            colorCode={colorCode}
          />

        )
      })}
    </>
  )
}

export default Search