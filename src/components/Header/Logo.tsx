import { Text } from "@chakra-ui/react"

export const Logo = () => {
    return(
        <Text 
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        >
            Dashgo
            <Text as="span" ml="1" color="orange">.</Text>
       </Text> 
    );
}