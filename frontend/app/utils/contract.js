import { createPublicClient, createWalletClient, http, custom } from "viem";
import { sepolia } from "viem/chains";
import mainABI from "../abi/main.json";



const CONTRACT_ADDRESS = "0x8C5eF1336c0Cf744Dcf8C07084B0A713766732C6";

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export const launchToken = async (launchData) => {
    console.log(launchData);
    
  if (!window.ethereum) {
    throw new Error("MetaMask is required");
  }

  const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom(window.ethereum),
  });

  try {
    await walletClient.switchChain({ id: sepolia.id });
  } catch (switchError) {
    if (switchError.code === 4902) {
      await walletClient.addChain({ chain: sepolia });
      await walletClient.switchChain({ id: sepolia.id });
    }
  }

  const [account] = await walletClient.requestAddresses();

  const data = await walletClient.writeContract({
    address: CONTRACT_ADDRESS,
    abi: mainABI,
    functionName: "launchToken",
    args: [launchData],
    account,
  });

  // Wait for transaction confirmation
  const receipt = await publicClient.waitForTransactionReceipt({ hash: data });
  console.log("Transaction receipt:", receipt);

  return data;
};
