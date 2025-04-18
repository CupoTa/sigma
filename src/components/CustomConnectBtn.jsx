import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button, Hide, Show } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const CustomConnectBtn = () => {
    const { t, i18n } = useTranslation();

    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button
                                        onClick={openConnectModal} type="button">
                                        {t("connect wallet")}
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button onClick={openChainModal} type="button" variant="gradient" colorScheme='teal'>
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <Button
                                        colorScheme='teal'
                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 12, height: 12 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </Button>
                                    <Button
                                        colorScheme='teal'
                                        onClick={openAccountModal} type="button">
                                        {account.displayName}
                                        <Show above='sm'> {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                        </Show>
                                    </Button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export default CustomConnectBtn;