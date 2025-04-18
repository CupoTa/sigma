import { HStack, Image, Box } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    return (
        <HStack justifyContent={"space-between"} alignItems={"center"}  justifyItems={"center"} width={"100%"} >
            <Box display={"flex"} justifyContent={"center"} gap={{base: 0, sm: 2}} flexDirection={{base: "column", sm: "row"}}>
                <Image
                    mt={{base: 0, sm: "-10px"}}
                    src="images/logo.jpg"
                    boxSize={{base: '40px', sm: "50px"}}
                    objectFit='cover' />

                <Box mt={1} fontWeight={700} fontSize={{base: 12, sm: 20}}>SIGMA ROOM</Box>
            </Box>
            {/* <ConnectButton /> */}
            <LanguageSwitcher/>
        </HStack>
    );
};

export default Header;