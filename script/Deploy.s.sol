// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";
import {Main} from "../src/main.sol";

contract DeployScript is Script {
    address constant SEPOLIA_V4_POOL_MANAGER = 0x8C4BcBE6b9eF47855f97E675296FA3F6fafa5F1A;
    address constant SEPOLIA_V4_POSITION_MANAGER = 0x1B1C77B606d13b09C84d1c7394B96b147bC03147;

    function run() external returns (Main) {
        vm.startBroadcast();
        Main main = new Main(SEPOLIA_V4_POOL_MANAGER, payable(SEPOLIA_V4_POSITION_MANAGER));
        vm.stopBroadcast();
        return main;
    }
}
