import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    
}

export const PaginationItem = ({ isCurrent = false, number }: PaginationItemProps) => {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                w="4"
                colorScheme="orange"
                disabled
                _disabled={{
                    bgColor: 'orange.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        );
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            w="4"
            colorScheme="orange"
            bg="gray.700"
            _hover={{
                bg: 'gray.500'
            }}
        >
            {number}
        </Button>
    )
}