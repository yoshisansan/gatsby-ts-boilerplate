import { ChakraProvider } from '@chakra-ui/react'
import { chakraGlobalTheme } from 'components/util/chakraGlobalSettings'
import Layout from 'components/ui/template/Layout'
// 3. Pass the `theme` prop to the `ChakraProvider`
export const wrapPageElement = ({ element, props }) => {
  return (
  <ChakraProvider theme={chakraGlobalTheme}>
    <Layout {...props}>{element}</Layout>
  </ChakraProvider>
  );
};
