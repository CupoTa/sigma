import React, { useState } from 'react';
import { Tab, TabPanels, Tabs, TabPanel, TabList, useColorModeValue, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SigmaTab from './SigmaTab';

const SigmaTabsContainer = () => {
    const { t } = useTranslation()
    const [tabIndex, setTabIndex] = useState(0)
    const activeColor = useColorModeValue('blue.600', 'blue.200');
    const inactiveColor = useColorModeValue('gray.600', 'gray.300');

    const handleTabsChange = (index) => {
        setTabIndex(index)
        console.log(index)
    }

    return (
        <Tabs mt={"45px"} isFitted variant='enclosed' index={tabIndex} onChange={handleTabsChange} >
            <TabList
                overflowX="auto"
                overflowY="hidden"
                whiteSpace="nowrap"
                css={{
                    '&::-webkit-scrollbar': {
                        height: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: useColorModeValue('gray.100', 'gray.700'),
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: useColorModeValue('gray.300', 'gray.500'),
                        borderRadius: '2px',
                    },
                }}
            >
                <Box display="inline-flex" minW="100%">
                    <Tab className='sigma-tab' minW="fit-content">{t("azurite")}</Tab>
                    <Tab className='sigma-tab' minW="fit-content" isDisabled>{t("emerald")}</Tab>
                    <Tab className='sigma-tab' minW="fit-content" isDisabled>{t("sapphire")}</Tab>
                    <Tab className='sigma-tab' minW="fit-content" isDisabled>{t("ruby")}</Tab>
                    <Tab className='sigma-tab' minW="fit-content" isDisabled>{t("silver")}</Tab>
                    <Tab className='sigma-tab' minW="fit-content" isDisabled>{t("gold")}</Tab>
                </Box>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <SigmaTab sigma={tabIndex} />
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
                <TabPanel>
                    <p>four!</p>
                </TabPanel>
                <TabPanel>
                    <p>five!</p>
                </TabPanel>
                <TabPanel>
                    <p>six!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default SigmaTabsContainer;