import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  omponents: {
    Radio: {
      parts: ['label'],
      baseStyle: {
        label: {
          fontSize: '2rem',
        },
      },
    },
  },
 
})

export default theme