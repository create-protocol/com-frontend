"use client";

// import WalletModal from "@/components/modals/WalletModal";
import "../public/styles/style.css";
import "swiper/css";
import "../utlis/i18n";
// import "swiper/css/pagination";
import "tippy.js/dist/tippy.css";
import "react-modal-video/css/modal-video.css";
// import BuyModal from "@/components/modals/BuyModal";
// import BidModal from "@/components/modals/BidModal";
// import PropertiesModal from "@/components/modals/PropertiesModal";
// import LevelsModal from "@/components/modals/LevelsModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModeChanger from "@/components/common/ModeChanger";
if (typeof window !== "undefined") {
  // Import the script only on the client side
  import("bootstrap/dist/js/bootstrap.esm").then((module) => {
    // Module is imported, you can access any exported functionality if
  });
}

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "COM",
  projectId: "da4d656687b6cf5ac567d474ea10f0f5",
  chains: [sepolia],
  // ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        itemScope
        itemType="http://schema.org/WebPage"
        className={
          "overflow-x-hidden font-body text-jacarta-500 bg-[#000]/5 dark:bg-[#000]/90"
        }
      >
        <ToastContainer />
        <ModeChanger />
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>{children}</RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
        {/*<WalletModal />*/}
        {/*<BuyModal />*/}
        {/*<BidModal />*/}
        {/*<PropertiesModal />*/}
        {/*<LevelsModal />*/}
      </body>
    </html>
  );
}
