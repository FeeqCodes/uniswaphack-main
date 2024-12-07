// SPDX-License-Identifier: MIT


// pragma solidity 0.8.26;

// import {BaseHook} from "v4-periphery/src/base/hooks/BaseHook.sol";
// import {ERC20} from "solmate/src/tokens/ERC20.sol";

// import {CurrencyLibrary, Currency} from "v4-core/types/Currency.sol";
// pragma solidity ^0.8.24;

// import {BaseHook} from "v4-periphery/src/base/hooks/BaseHook.sol";

// import {Hooks} from "v4-core/src/libraries/Hooks.sol";
// import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
// import {PoolKey} from "v4-core/src/types/PoolKey.sol";
// import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
// import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
// import {BeforeSwapDelta, BeforeSwapDeltaLibrary} from "v4-core/src/types/BeforeSwapDelta.sol";
// import {PoolKey} from "v4-core/types/PoolKey.sol";
// import {BalanceDeltaLibrary, BalanceDelta} from "v4-core/types/BalanceDelta.sol";
// import {IPoolManager} from "v4-core/interfaces/IPoolManger.sol";
// import {Hooks} from "v4-core/libraries/Hooks.sol";

// contract ILOHook is BaseHook, ERC20 {
//     // Use CurrencyLibrary and BalanceDeltaLibrary to add some helper functions over the Currency and BalanceDelta data types

//     using CurrencyLibrary for Currency;
//     using BalanceDeltaLibrary for BalanceDelta;

//     // Initialize BaseHook and ERC20
//     constructor(
//         IPoolManager _manager,
//         string memory _name,
//         string memory _symbol
//     ) BaseHook(_manager) ERC20(_name, _symbol, 18) {}


//     // Set up hook permissions to return `true` for the two hook functions we are using

//     function getHookPermissions() public pure override returns(Hooks.Permissions memory) {
//         return Hooks.Permissions({
//             beforeInitialize: true,
//             afterInitialize: false,
//             beforeAddLiquidity: true,
//             beforeRemoveLiquidity: true,
//             afterAddLiquidity: false,
//             afterRemoveLiquidity: false,
//             beforeSwap: false,
//             afterswap: false,
//             beforeDonate: false,
//             afterDonate: false,
//             beforeSwapReturnDelta: false,
//             afterSwapReturnDelta: false,
//             afterAddLiquidityReturnDelta: false,
//             afterRemoveLiquidityReturnDelta: false
//         });
//     }

 
//     function beforeInitialize(address sender, PoolKey calldata key, uint160 sqrtPriceX96) external returns (bytes4){
//         // 
//     }


//     function beforeSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata, bytes calldata) external override returns(bytes4, BeforeSwapDelta, uint24){
//         // Code

//         return (BaseHook.beforeSwap.selector,  BeforeSwapDeltaLibrary.ZERO_DELTA, 0);
//     }


//     function beforeAddLiquidity(
//         address,
//         PoolKey calldata key,
//         IPoolManager. ModifyLiquidityParams calldata,
//         bytes calldata
//     ) external override returns(bytes4){
//         // Code
//         return BaseHook.beforeAddLiquidity.selector;
//     }

     
//     function beforeRemoveLiquidity(
//         address,
//         PoolKey calldata key,
//         IPoolManager.ModifyLiquidityParams calldata,
//         bytes calldata
//     ) external override returns (bytes4) {
//         // Code
//         return BaseHook.beforeRemoveLiquidity.selector;
//     }
// }