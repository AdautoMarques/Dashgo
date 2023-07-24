import { Flex, Button, Stack,  } from "@chakra-ui/react"
import Input from "@/components/Form/Input"

const Home = () =>{

  return(
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="forms" w="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">  
        <Stack spacing={4}>
          <Input type="email" name="email" label="E-mail"/>
          <Input type="password" name="password" label="Senha"/>
          
          <Button type="submit" mt={6} colorScheme="orange" size="lg">Entrar</Button>
        </Stack>
      </Flex>
    </Flex>

  )
}

export default Home