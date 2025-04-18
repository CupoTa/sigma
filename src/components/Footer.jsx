import React from 'react';
import { HStack, Link, Icon, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    return (
        <HStack justifyContent={"center"} width={"100%"} h={"40px"}>
            <Heading as={"h6"} size={"sm"}>
            SIGMA ROOMS @2025
            </Heading>
            
        </HStack>
    );
};

export default Footer;