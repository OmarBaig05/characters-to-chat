import { ethers } from 'ethers';

export async function requestTransaction(amount = 5) {
    try {
        // Check if MetaMask is installed
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);

            const signer = await provider.getSigner();

            // Hardhat address to send ETH to (replace with your desired address)
            const recipientAddress = import.meta.env.VITE_BOT_ADDRESS;

            const transaction = {
                to: recipientAddress,
                value: ethers.parseEther(amount.toString()),
            };

            // Send the transaction
            const tx = await signer.sendTransaction(transaction);

            // Wait for the transaction to be mined
            await tx.wait();
            return true;
        } else {
            alert("MetaMask is not installed.");
            return false;
        }
    } catch (error) {
        console.error("Transaction failed", error);
        alert("Transaction failed: " + error.message);
        return false;
    }
}