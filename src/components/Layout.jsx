import React from "react";
import { Box, Flex, Container, Text } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {

    const containerSize = 'container.lg'

    return (
        <Flex direction="column" background={"#000"} height={"100%"} >
            <Box
                as="header"
                color="white"
                backdropFilter="blur(20px)"
                position="sticky"
                top={0}
                py={4}
                zIndex="sticky"
                background={"rgba(0, 0, 0, .1);"}
                width={"100%"}
                borderBottom={"1px solid"}
                borderBottomColor={"rgba(255, 255, 255, .5);"}
            >
                <Container maxW={containerSize} className="header">
                    <Header />
                </Container>
            </Box>

            {/* Основной контент */}
            <Box
                overflowY="auto"
                py={4}
                display={"flex"}
                height={"100%"}
            >
                <Container
                    maxW={containerSize}>{children}</Container>
            </Box>

            {/* Footer */}
            <Box
                as="footer"
                color="white"
                py={4}
                backdropFilter="blur(20px)"
                position="sticky"
                bottom={0}
                zIndex="sticky"
                background={"rgba(255, 255, 255, .1);"}
                borderTop={"1px solid"}
                borderTopColor={"rgba(255, 255, 255, .5);"}
            >
                <Container maxW={containerSize} className="footer">
                    <Footer />
                </Container>
            </Box>
        </Flex>
    );
};

export default Layout;