import { ethers } from "ethers";

// Get provider and signer helper function
const getProviderAndSigner = async () => {
  if (!window.ethereum) {
    throw new Error("Please install MetaMask!");
  }
  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  return { provider, signer };
};

const contractAddress = "0x1406E4b10DEb8feA28BF50bd4F66DdABF7d9A5F5";
const abi = [
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "quantity", type: "uint256" },
      { internalType: "uint256", name: "price", type: "uint256" },
    ],
    name: "listCrop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "cropId", type: "uint256" }],
    name: "buyCrop",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "cropId", type: "uint256" }],
    name: "getCrop",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bool", name: "", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const listCrop = async (name, quantity, price) => {
  try {
    const { signer } = await getProviderAndSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.listCrop(name, quantity, price, {
      gasLimit: 300000,
    });
    await tx.wait();
    console.log("✅ Crop listed for sale!", tx.hash);
  } catch (error) {
    if (error.message.includes("revert")) {
      console.error("❌ Transaction Reverted: ", error.message);
    } else {
      console.error("❌ Error listing crop:", error);
    }
    throw error;
  }
};

export const buyCrop = async (cropId, price) => {
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods
      .buyCrop(cropId)
      .send({ from: accounts[0], value: price });
    console.log("✅ Crop purchased!");
  } catch (error) {
    console.error("❌ Error buying crop:", error);
  }
};

export const getCrop = async (cropId) => {
  try {
    const crop = await contract.methods.getCrop(cropId).call();
    return crop;
  } catch (error) {
    console.error("❌ Error fetching crop:", error);
  }
};
