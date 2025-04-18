import { Box, Button, Heading, HStack, VStack, useClipboard, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const SigmaTab = ({ sigma }) => {

    const { t } = useTranslation()
    const { onCopy, value, setValue, hasCopied } = useClipboard('')

    const [referralLink, setReferralLink] = useState("https://referalka")

    useEffect(() => {
        setValue("https://referalka")
        if (hasCopied) {
            setReferralLink("Ссылка скопирована!")
        } else {
            setReferralLink("https://referalka")
        }
    }, [hasCopied])


    return (
        <Box as={"div"}>
            <Heading as='h4' size='md' textAlign={"center"} mb={5} mt={10} textTransform={"uppercase"}>
                Sigma "{t("azurite")}"
            </Heading>
            <Box as={"div"} textAlign={"center"} mb={10}>
                <Box as="div" mb={5}>
                    <Box className='bonus-wrapper'>
                        <Box>Бонус Капитанов </Box>
                        <Box>3.756 BNB</Box>
                        <Box className='timer'>12:27</Box>
                        <Box>Для участия вам нужно пригласить еще 1 реферала</Box>
                    </Box>
                </Box>
                <Button colorScheme='teal' disabled>Открыть Sigma</Button>

                <Flex mt={5} justifyContent={"center"}>
                    <Button onClick={onCopy}>{referralLink}</Button>
                </Flex>

            </Box>
            <VStack gap={4} w={"100%"}>
                <HStack gap={4}>
                    <Box as={"div"} className='sigma-node sigma-captain'
                        width={{ base: "70px", sm: "80px" }}
                        height={{ base: "70px", sm: "80px" }}
                    >Вы</Box>
                </HStack>
                <HStack gap={16}>
                    <Box as={"div"} className='sigma-node fill'
                        width={{ base: "70px", sm: "80px" }}
                        height={{ base: "70px", sm: "80px" }}
                    >1</Box>
                    <Box as={"div"} className='sigma-node fill'
                        width={{ base: "70px", sm: "80px" }}
                        height={{ base: "70px", sm: "80px" }}
                    >2</Box>
                </HStack>
                <HStack gap={4}>
                    <Box as={"div"} className='sigma-node empty'
                        width={{ base: "70px", sm: "80px" }}
                        height={{ base: "70px", sm: "80px" }}
                    >0</Box>
                    <Box as={"div"} className='sigma-node fill'
                        width={{ base: "70px", sm: "80px" }}
                        height={{ base: "70px", sm: "80px" }}
                    >4</Box>
                    <Box as={"div"} className='sigma-node empty'
                        width={{ base: "70px", sm: "80px" }}
                        height={{ base: "70px", sm: "80px" }}
                    >0</Box>
                    <Box as={"div"} className='sigma-node fill'
                        width={{ base: "70px", sm: "80px" }}
                        height={{ base: "70px", sm: "80px" }}
                    >6</Box>
                </HStack>
            </VStack>
            <HStack gap={15} mt={25} flexDirection={{ base: "column", sm: "row" }}>
                <VStack width={"100%"} className='card'>
                    <Box as={"h6"}>Инфо об активности</Box>
                    <HStack gap={4}>
                        <Box>Sigma закрыто</Box><Box>1</Box>
                    </HStack>
                    <HStack gap={4}>
                        <Box>Друзей приглашено</Box><Box>8</Box>
                    </HStack>
                    <HStack gap={4}>
                        <Box>Бонусов закрыто</Box><Box>4</Box>
                    </HStack>
                </VStack>
                <VStack width={"100%"} className='card'>
                    <Box as={"h6"}>Инфо о заработке</Box>
                    <HStack gap={4}>
                        <Box>Получено Sigma</Box><Box>1 BNB</Box>
                    </HStack>
                    <HStack gap={4}>
                        <Box>Получено за друзей</Box><Box>1 BNB</Box>
                    </HStack>
                    <HStack gap={4}>
                        <Box>Получено с бонусов</Box><Box>1</Box>
                    </HStack>
                </VStack>
            </HStack>

        </Box>
    );
};

export default SigmaTab;