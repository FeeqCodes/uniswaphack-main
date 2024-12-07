// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.26;

// import {Script} from "forge-std/Script.sol";
// import {PoolManager} from "v4-core/PoolManager.sol";
// import {PoolKey} from "v4-core/types/PoolKey.sol";
// import {Hooks} from "v4-core/libraries/Hooks.sol";
// import {HookMiner} from "../test/HookMiner.sol";
// import {BasicHook} from "../src/BasicHook.sol";
// import "forge-std/console.sol";

// contract HookMiningSample is Script {
//     // Address of PoolManager deployed on Sepolia
//     PoolManager manager =
//         PoolManager(0xCa6DBBe730e31fDaACaA096821199EEED5AD84aE);

//     function setUp() public {
// 		// Set up the hook flags you wish to enable
//         uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG);

// 		// Find an address + salt using HookMiner that meets our flags criteria
//         address CREATE2_DEPLOYER = 0x4e59b44847b379578588920cA78FbF26c0B4956C;
//         (address hookAddress, bytes32 salt) = HookMiner.find(
//             CREATE2_DEPLOYER,
//             flags,
//             type(BasicHook).creationCode,
//             abi.encode(address(manager))
//         );

// 		// Deploy our hook contract with the given `salt` value
//         vm.startBroadcast();
//         BasicHook hook = new BasicHook{salt: salt}(manager);
// 		// Ensure it got deployed to our pre-computed address
//         require(address(hook) == hookAddress, "hook address mismatch");
//         vm.stopBroadcast();
//     }

//     function run() public {
//         console.log("Hello");
//     }
// }