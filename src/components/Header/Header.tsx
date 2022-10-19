import {
  Text,
  Spacer,
  Flex,
  Image,
  Box,
  Center,
Container
 } from "@chakra-ui/react";

 import logo from '../../images/logo_dio.svg';

export const Header  = () => {
  return(
      <Flex p='1rem' marginBottom='1rem'  backgroundColor='purple' borderRadius='25px'>     
        <Center>
          <Text fontSize='3xl' fontStyle='bold'>Dio Bank</Text>
        </Center>
        <Spacer />
        <Center w='20vw'>
          <Image src={logo} />
        </Center>
      </Flex>
  )
}
