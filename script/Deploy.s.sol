// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";
import {Main} from "../src/main.sol";




contract DeployScript is Script {
    // Define Uniswap V4 addresses for different networks
    address constant SEPOLIA_V4_POOL_MANAGER = 0x64255ed21366DB43d89736EE48928b890A84E2Cb;
    address constant GOERLI_V4_POOL_MANAGER = 0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b;
    


    function run() external returns (Main) {
        vm.startBroadcast();
        // Use the appropriate address based on your target network
        Main main = new Main(SEPOLIA_V4_POOL_MANAGER, payable(SEPOLIA_V4_POOL_MANAGER));
        vm.stopBroadcast();

        return main;
    }
}
