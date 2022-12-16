import { ethers } from "ethers";
import React, {  useEffect,  useState } from 'react';
import fakeBaycAbi from './fakeBaycAbi.json'

const provider = new ethers.providers.Web3Provider(window.ethereum);

const contractAddress = '0x1dA89342716B14602664626CD3482b47D5C2005E';

const fakeBaycContract = new ethers.Contract(contractAddress, fakeBaycAbi['abi'], provider);



export default function FakeBaycActions() {



    // get contract name
    const [contractName, setContractName] = useState(null);
    useEffect(() => {
        fakeBaycContract.name().then(setContractName);
    }, [contractName]);



    // get total token number
    const [totalTokenNumber, setTotalTokenNumber] = useState(null);
    useEffect(() => {
        fakeBaycContract.totalSupply().then(setTotalTokenNumber);
    }, [totalTokenNumber]);



    if(!contractName || !totalTokenNumber ) return(<div>Loading...</div>)
    else{
            return(
                <div>
                    <div>
                    <h2>Fake BAYC</h2> 
                    <p>Name: {contractName}</p>
                    <p>Total token number : {totalTokenNumber.toString()}</p>
                    </div>
                </div>
            )
        }        
}