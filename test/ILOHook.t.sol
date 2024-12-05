//SPDX-License-Idenifier: MIT
pragram solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import{Deployers} from "@uniswap/v4-core/test/utils/Deployers.sol";
import {PoolSwapTest} from "v4-core/test/PoolSwapTest.sol";
import {MockERC20} from "solmate/src/test/utils/mocks/MOCKERC20.sol";

import {PoolManager} from "v4-core/PoolManager.sol";
import {IPoolManager} from "v4-core/interfaces/IPoolManager.sol";

import {Currency. CurrencyLibrary} from "v4-core/types/Currency.sol";

import {Hooks} from "v4-core/libraries/Hooks.sol";
import {TickMaths} from "v4-core/libraries/TickMath.sol";
import {sqrtPriceMath} from "v4-core/libraries/sqrtPriceMath.sol";
import {LiquidityAmounts} from "@uniswap/v4-core/test/utils/LiquidityAmounts.sol";

import "forge-std/console.sol";
import {ILOHook} from "../src/abstract/ILOHook.sol";


contract TestILOHook is Test, Deployers {
    using CurrencyLibrary for Currency

   

    ILOHook hook;


    function setUp() public {

        
}


}