// // SPDX-License-Identifier: MIT
// pragma solidity 0.8.24;

// // DESTINATION BLOCKCHAIN

// /// @notice Application contracts that intend to receive messages from 
// /// the router should implement this interface.
// interface IAny2EVMMessageReceiver {
//     /// @notice Router calls this to deliver a message
//     /// @param message CCIP Message
//     /// @dev Note ensure you check that msg.sender is the Router
//     function ccipReceive(Client.Any2EVMMessage calldata message) external;
// }