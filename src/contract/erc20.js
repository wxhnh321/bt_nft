// import ethers, { BigNumber, Contract } from 'ethers';
import { ethers, BigNumber, Contract } from 'ethers';
import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/abstract-provider';
import { formatUnits } from 'ethers/lib/utils';

class ERC20 {
    constructor(address, symbol, decimal = 18) {
        const nowProviders = new ethers.providers.Web3Provider(window.ethereum, config.chainId)
        this.signer = nowProviders.getSigner(0);
        this.contract = new Contract(address, ABI, this.signer);
        this.address = address;
        this.symbol = symbol;
        this.decimal = decimal;
    }
    connect(signerOrProvider= Signer | Provider) {
        this.contract = new Contract(this.address, ABI, signerOrProvider);
    }
    get estimateGas() {
        return this.contract.estimateGas;
    }
    balanceOf(account) {
        return this.contract.balanceOf(account)
    }
    totalSupply() {
      return this.contract.totalSupply()
    }
    transfer(recipient, amount) {
        return this.contract.transfer(recipient, amount)
    }
    allowance(owner, spender) {
      try {
        const result = this.contract.allowance(owner, spender);
        return result
      } catch (error) {
        
      }
        
    }
    approve(spender, amount) {
      return this.contract.approve(spender, amount);
    }
    async displayedBalanceOf(account) {
        const balance = await this.balanceOf(account);
        return formatUnits(balance, this.decimal);
    }
}

export default ERC20;

const ABI = [
    {
      name: 'Approval',
      type: 'event',
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
        { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: 'address', name: 'from', type: 'address' },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'sender', type: 'address' },
        { internalType: 'address', name: 'recipient', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];
