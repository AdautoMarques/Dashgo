import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export const Profile = ({showProfileData = true}: ProfileProps) => {
    return(
        <Flex  align="center">
        {showProfileData && (
            <Box mr="4" textAlign="right">
            <Text color="orange">Adauto Marques </Text>
            <Text color="gray.300"fontSize="small">adautomarques937@gmail.com</Text>
        </Box>
        )}
    <Avatar size="md" name="Adauto Marques" src="https://github.com/AdautoMarques.png"/>
    </Flex>
    );
}