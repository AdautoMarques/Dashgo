import { Header } from "@/components/Header"
import Pagination from "@/components/Pagination"
import { Sidebar } from "@/components/Sidebar"
import { theme } from "@chakra-ui/core"
import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"

const UserList = () => {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6" >
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <Flex mb="8" justify="space-between" align="center">
                        <Heading fontSize="lg" fontWeight="normal">Usuários</Heading>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="orange"
                            leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                        >Criar novo</Button>

                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" w="8">
                                    <Checkbox colorScheme="orange"/>       
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadasto</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                 <Checkbox colorScheme="orange"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Adauto Marques</Text>
                                        <Text fontSize="sm" color="gray.300">adautomarques937@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Julho, 2023</Td>
                                <Td>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="green"
                                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}>
                                    Editar
                                </Button> 
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>

    )
}

export default UserList