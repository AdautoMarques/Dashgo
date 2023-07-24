import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinklProps extends ChakraLinkProps{
    icon: ElementType;
    children: string;
}

export const NavLink = ({icon, children, ...rest}: NavLinklProps) => {
    return (
        <Link display="flex" textAlign="center" color="orange.500" py="1" {...rest}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium" >{children}</Text>
        </Link>
    );
}