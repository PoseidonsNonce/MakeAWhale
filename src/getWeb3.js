import Web3 from "web3";

const getWeb3 = async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        return(web3);
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        return(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
       return(null);
      }
}

export default getWeb3;
