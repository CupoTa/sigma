import { useState } from 'react'
import { RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit';

import { useTranslation } from 'react-i18next';
import { Image } from '@chakra-ui/react';
import Layout from './components/Layout';
import CustomConnectBtn from './components/CustomConnectBtn';
import SigmaTabsContainer from './components/SigmaTabsContainer';

function App() {
  const { i18n, t } = useTranslation();
  const CustomAvatar = () => {
    return (

      <Image
        mt={{ base: 0, sm: "-10px" }}
        src="images/logo.jpg"
        boxSize={{ base: '100%', sm: "100%" }}
        objectFit='cover' />

    )
  }
  return (
    <RainbowKitProvider locale={i18n.language} avatar={CustomAvatar} theme={midnightTheme()}>
      <Layout >
        <CustomConnectBtn />
        <SigmaTabsContainer/>
      </Layout>
    </RainbowKitProvider>
  )
}

export default App
