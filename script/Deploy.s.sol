// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";
import {Main} from "../src/main.sol";

contract DeployScript is Script {
    address constant SEPOLIA_V4_POOL_MANAGER = 0x8c4bcbe6b9ef47855f97e675296fa3f6fafa5f1a;
    address constant SEPOLIA_V4_POSITION_MANAGER = 0x1b1c77b606d13b09c84d1c7394b96b147bc03147;

    function run() external returns (Main) {
        vm.startBroadcast();
        Main main = new Main(SEPOLIA_V4_POOL_MANAGER, payable(SEPOLIA_V4_POSITION_MANAGER));
        vm.stopBroadcast();
        return main;
    }
}
