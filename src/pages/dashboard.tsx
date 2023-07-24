import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react"
import dynamic from "next/dynamic"

const Chart = dynamic(() =>import('react-apexcharts'), {
    ssr: false,
})
const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],     
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
       axisBorder: {
        color: theme.colors.orange
       },
       axisTicks: {
        color: theme.colors.orange
       },
       categories: [
        '2022-03-18T09:00:00.000z',
        '2022-03-19T09:00:00.000z',
        '2022-03-20T09:00:00.000z',
        '2022-03-21T09:00:00.000z',
        '2022-03-22T09:00:00.000z',
        '2022-03-23T09:00:00.000z',
        '2022-03-24T09:00:00.000z'
        ],
    }
};

const series = [
    {name: 'series1', data: [30,21,145,121,9,27,68]}
];


const Dashboard = () => {
    return(


        <Flex direction="column" h="100vh" >
            <Header />
            <Flex 
            w="100%"
            my="6"
            maxW={1480}
            mx="auto"
            px="6">
            <Sidebar />

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" textAlign="start">
                <Box
                p="8"
                bg="gray.800"
                borderRadius={8}
                pb="4">
                   
                    <Text fontSize="lg" mb="4" color="gray.400">Inscrito da semana</Text>
                    <Chart options={options} series={series} type="area" height={160} />
                </Box>
                <Box
                p="8"
                bg="gray.800"
                borderRadius={8}
                pb="4">
                    <Text fontSize="lg" mb="4"color="gray.400">Taxa de abertura</Text>
                    <Chart options={options} series={series} type="area" height={160} />

                </Box>
            </SimpleGrid>

            </Flex>
        </Flex>

    )
}

export default Dashboard