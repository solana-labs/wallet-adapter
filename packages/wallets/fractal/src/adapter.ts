import { WalletName } from '@solana/wallet-adapter-base';
import { BaseFractalWalletAdapter, FractalWalletAdapterConfig } from './base';

export const FractalWalletName = 'Fractal' as WalletName<'Fractal'>;

// const WALLET_BASE_URL = 'https://fractal.is/wallet-popup';
export const WALLET_BASE_URL = 'http://localhost:3000/wallet-popup';

export class FractalWalletAdapter extends BaseFractalWalletAdapter {
    name = FractalWalletName;
    url = WALLET_BASE_URL;
    icon =
        'data:image/jpeg;base64, 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';

    constructor({ provider = WALLET_BASE_URL, ...config }: FractalWalletAdapterConfig = {}) {
        super({ provider, ...config });
    }
}
