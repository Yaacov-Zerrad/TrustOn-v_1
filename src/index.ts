import { OnTransactionHandler } from '@metamask/snap-types';



export const onTransaction: OnTransactionHandler = async ({ transaction, chainId, }) => {
  /*  
  The problem is to call an external API and return the value in the { status } variable
  To call the API with the address of the smart contract, you can use: url + { tansaction.to }
  */


  let status = "To change..."

  // Object returner has Metamask and display in TRUSTON tab
  const insights = {
    "Recognize": status,
    "transaction to:":
    transaction.to,
    transaction,
    chainId,
  };
  return { insights };
};
  

