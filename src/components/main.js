import React from 'react'
import { Box } from '@chakra-ui/react'

import Search from './Search'
import Details from './Details'

function main() {


    return (
        <Box pos='relative' maxWidth='1366px' margin='0 auto' backgroundColor='white' h='calc(100vh - 7rem)'>
            <Box w={{base: '100%', lg: '35%'}} float='left' borderRight={{base: 'none', lg: '1px solid #eee'}} h='100%'>
                <Search />
            </Box>
           <Box w={{base: 'none', lg: '65%'}} float='right' display={{base: 'none', lg: 'block'}}>
                <Details />
            </Box>
        </Box>
    )
}

export default main