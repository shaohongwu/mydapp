<template>
<div id="dapp">
<p>{{ message }}</p>
<button v-on:click="start">start</button>
</div>

</template>



<script>
const Web3 = require('web3');
//const web3 = new Web3('http://localhost:8545');
export default {
	name: 'dapp',
	data(){return{
		message:'test'
	}},
	created: function(){
		const ethEnabled = () => {
			if (window.ethereum) {
				window.web3 = new Web3(window.ethereum);
				window.ethereum.enable();
				//web3 = window.web3
				return true;
			}
			return false;
		}
		if (!ethEnabled()) {
			alert("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!");
		}
	},
	methods:{
		start:function () {
			console.log(window.web3)
			console.log('111')
			const myContractAddress = '0xFd06a23A3240D2a50b4cFBd50806f3c2819266c8';
			const myAbi = [{"inputs":[],"name":"getInteger","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"}];
			const myContract = new window.web3.eth.Contract(myAbi, myContractAddress);
			myContract.methods.getInteger().call().then((jsonRpcResult) => {
				this.message = jsonRpcResult;
				console.log(this.message)
			});	
		}
	}
}
</script>