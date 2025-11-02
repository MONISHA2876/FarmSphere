import { ethers } from "ethers";

// Flow EVM testnet configuration
const FLOW_EVM_RPC = "https://evm.testnet.flow.com";
const contractAddress = "0x69f6c17972A00d397702d316894720f0D0c7202F";

// ABI remains the same as it's part of the contract interface
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "SlotDeactivated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
    inputs: [
      {
        internalType: "uint256",
        name: "slotId",
        type: "uint256",
      },
    ],
    name: "deactivateSlot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "farmerSlots",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "farmer",
        type: "address",
      },
    ],
    name: "getFarmerSlots",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextSlotId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "capacity",
        type: "uint256",
      },
    ],
    name: "registerStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "storageSlots",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "capacity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "available",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slotId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newAvailable",
        type: "uint256",
      },
    ],
    name: "updateAvailability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// Provider and Contract setup
let provider;
let contract;
let signer;

const setupEthers = async () => {
  // Check if MetaMask is installed
  if (typeof window.ethereum === "undefined") {
    throw new Error("Please install MetaMask to use this application");
  }

  // Request account access
  await window.ethereum.request({ method: "eth_requestAccounts" });

  // Create provider and signer
  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, signer);

  return { provider, signer, contract };
};

export const registerStorage = async (capacity) => {
  try {
    console.log("Starting storage registration with capacity:", capacity);
    await setupEthers();

    // Get current fee data (includes maxFeePerGas and maxPriorityFeePerGas for EIP-1559)
    const feeData = await provider.getFeeData();
    console.log("Current fee data:", {
      maxFeePerGas: feeData.maxFeePerGas?.toString(),
      maxPriorityFeePerGas: feeData.maxPriorityFeePerGas?.toString(),
      gasPrice: feeData.gasPrice?.toString(),
    });

    // Prepare the transaction
    const tx = await contract.registerStorage(capacity);

    console.log("Transaction sent:", tx.hash);
    console.log("Waiting for confirmation...");

    // Wait for confirmation and get receipt
    const receipt = await tx.wait();
    console.log("Transaction confirmed in block:", receipt.blockNumber);
    console.log("Transaction receipt:", receipt);

    return receipt;
  } catch (error) {
    console.error("Register Storage Error:", error);
    throw error;
  }
};

export const updateAvailability = async (slotId, available) => {
  try {
    await setupEthers();
    const tx = await contract.updateAvailability(slotId, available);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Update Availability Error:", error);
    throw error;
  }
};

export const getFarmerSlots = async () => {
  try {
    await setupEthers();
    const userAddress = await signer.getAddress();
    console.log("Getting slots for address:", userAddress);

    // First get the slot IDs
    const slotIds = await contract.getFarmerSlots(userAddress);
    console.log("Retrieved slot IDs:", slotIds);

    // Then get details for each slot ID
    const detailedSlots = await Promise.all(
      slotIds.map(async (slotId) => {
        console.log("Fetching details for slot ID:", slotId.toString());
        const slotDetails = await contract.storageSlots(slotId);
        return {
          id: slotId.toString(),
          capacity: slotDetails.capacity.toString(),
          available: slotDetails.available.toString(),
          isActive: slotDetails.isActive,
        };
      })
    );

    console.log("Retrieved detailed slots:", detailedSlots);
    return detailedSlots;
  } catch (error) {
    console.error("Get Farmer Slots Error:", error);
    throw error;
  }
};

export const deactivateSlot = async (slotId) => {
  try {
    await setupEthers();
    const tx = await contract.deactivateSlot(slotId);
    await tx.wait();
    return tx;
  } catch (error) {
    console.error("Deactivate Slot Error:", error);
    throw error;
  }
};
