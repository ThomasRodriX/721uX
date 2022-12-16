import { ethers } from "ethers";
import React, { useEffect, useState } from 'react';


const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

export default function ChainInfo() {

    const [network, setNetwork] = useState(null);
    useEffect(() => {
        provider.getNetwork().then(setNetwork);
    }, [network]);

    const [blockNumber, setBlockNumber] = useState(null);
    useEffect(() => {
        provider.getBlockNumber().then(setBlockNumber);
    }, [blockNumber]);

    const [address, setAddress] = useState(null);
    useEffect(() => {
        signer.getAddress().then(setAddress);
    }, [address]);

    try{
        if (network.name === "sepolia") {
            return (
                <div>
                    <h1>Chain Info</h1>
                    <p>ChainId = {network['chainId']}</p>
                    <p>Last block number: {blockNumber}</p>
                    <p>User address: {address}</p>
                </div>
            );
        } else {
            return( 
                <div>
                    <h1>Chain Info</h1>
                    <p>Connect to the Sepolia network with metamask and refresh the page.</p>
                </div>
            )
        }
    } catch (error) {
        console.error(error)
            return (
            <div>
                <p>An error occured</p>
            </div>          
        )
    } 
  }