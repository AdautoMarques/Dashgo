import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { Box, Button, Divider, Flex, HStack, Heading, SimpleGrid, VStack } from "@chakra-ui/react"
import Input from "@/components/Form/Input"

const UserCreate = () => {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6" >
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Heading size="lg" fontWeight="normal">Criar Usuario </Heading>
                   
                    <Divider my="6" borderColor="orange.500"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome completo"/>
                            <Input name="email" type="email" label="E-mail"/>    
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="password_confirmation" type="password" label="Confirmação da senha"/>    
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="green" >Salvar</Button>

                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>

    )
}

export default UserCreate