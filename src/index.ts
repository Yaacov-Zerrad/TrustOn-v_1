import { OnTransactionHandler } from '@metamask/snap-types';



export const onTransaction: OnTransactionHandler = async ({ transaction, chainId, }) => {

  //let address = transaction.to
  let address = "0x7b69c4f2acf77300025e49dbdbb65b068b2fda7d"

 return ( async()=> {
  
  const response = await fetch('https://coral-app-v2f78.ondigitalocean.app/api/extension?address='+ address);
  //the response have to be converted to json type file, so it can be used
  const data = await response.json();
  const status = data.trustonCertified 
  // Object returner has Metamask and display in TRUSTON tab
  const insights = {
    "Recognize": status,
    "transaction to:":
    transaction.to,
    transaction,
    chainId,
  };
  return { insights };})()
};
  

