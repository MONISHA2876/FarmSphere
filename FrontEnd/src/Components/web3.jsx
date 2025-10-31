import { ethers } from "ethers";

// ✅ Get provider and signer (Ethers v6 syntax)
const getProviderAndSigner = async () => {
  if (!window.ethereum) {
    throw new Error("Please install MetaMask!");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []); // Request wallet access
  const signer = await provider.getSigner();
  return { provider, signer };
};

// ✅ Your contract details
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

const abi = [
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "SlotDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "capacity",
        type: "uint256",
      },
    ],
    name: "SlotRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
      {
        indexed: false,
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
    ],
    name: "SlotUpdated",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "slotId", type: "uint256" }],
    name: "deactivateSlot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "farmerSlots",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "farmer", type: "address" }],
    name: "getFarmerSlots",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextSlotId",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "capacity", type: "uint256" }],
    name: "registerStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "storageSlots",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "capacity", type: "uint256" },
      { internalType: "uint256", name: "available", type: "uint256" },
      { internalType: "bool", name: "isActive", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "slotId", type: "uint256" },
      { internalType: "uint256", name: "newAvailable", type: "uint256" },
    ],
    name: "updateAvailability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// ✅ Get contract instance
const getContract = async () => {
  const { signer } = await getProviderAndSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};

// ✅ Register storage slot
export const registerStorage = async (capacity) => {
  try {
    console.log("🔹 Initializing storage registration...");
    const contract = await getContract();
    const tx = await contract.registerStorage(capacity, { gasLimit: 300000 });
    console.log("🔄 Waiting for transaction confirmation...");
    await tx.wait();
    console.log("✅ Storage slot registered! Tx hash:", tx.hash);
  } catch (error) {
    console.error("❌ Error registering storage:", error.message || error);
    throw error;
  }
};

// ✅ Update availability
export const updateAvailability = async (slotId, available) => {
  try {
    console.log(`🔹 Updating Slot ID ${slotId} → Availability: ${available}`);
    const contract = await getContract();
    const tx = await contract.updateAvailability(slotId, available, {
      gasLimit: 300000,
    });
    console.log("🔄 Waiting for confirmation...");
    await tx.wait();
    console.log("✅ Availability updated! Tx hash:", tx.hash);
  } catch (error) {
    console.error("❌ Error updating availability:", error.message || error);
    throw error;
  }
};

// ✅ Get farmer's storage slots
export const getFarmerSlots = async () => {
  try {
    const { signer } = await getProviderAndSigner();
    const address = await signer.getAddress();
    console.log("🔹 Fetching slots for:", address);

    const contract = await getContract();
    const slots = await contract.getFarmerSlots(address);
    console.log(
      "📦 Your Storage Slots:",
      slots.map((s) => s.toString())
    );
    return slots.map((s) => s.toString());
  } catch (error) {
    console.error("❌ Error fetching storage slots:", error.message || error);
    throw error;
  }
};
