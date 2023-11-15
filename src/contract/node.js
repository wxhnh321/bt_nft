import { BigNumber, Contract, ethers, Overrides } from 'ethers';
import cfg from './abiConfig'
import {config} from '@/config/index'
import { formatEther, parseEther } from 'ethers/lib/utils';

class Node {
    constructor() {
        const newProvider = new ethers.providers.Web3Provider(window.ethereum, config.chainId)
        this.provider = newProvider
        this.signer = newProvider.getSigner(0);
        this.stakeContract = new Contract(cfg['stake'].address, cfg['stake'].abi, this.signer);
    }
    gasOptions(gas) {
        const multiplied = Math.floor(gas.toNumber() * 1.2);
        // console.log(`⛽️ Gas multiplied: ${gas} -> ${multiplied}`);
        return {
          gasLimit: BigNumber.from(multiplied),
        };
    }
    // 注册成为候选节点
    async addStake(address, value) {
        const gas = await this.stakeContract.estimateGas.addStake(address, {value});
        return await this.stakeContract.addStake(address, {value, gasLimit: this.gasOptions(gas).gasLimit})
    }
    // // 赎回节点质押本金
    // async withdrawPledge(account) {
    //     const gas = await this.stakeContract.estimateGas.withdrawPledge(account);
    //     return await this.stakeContract.withdrawPledge(account, this.gasOptions(gas))
    // }
    // 候选节点申请退出
    async exitStaking(address) {
        const gas = await this.stakeContract.estimateGas.exitStaking(address);
        return await this.stakeContract.exitStaking(address, this.gasOptions(gas))
    }
    // 用户向候选节点进行投票
    async addDelegation(address, value) {
        return await this.stakeContract.addDelegation(address, {value})
    }
    // 取消投票
    async exitDelegation(address) {
        const gas = await this.stakeContract.estimateGas.exitDelegation(address);
        return await this.stakeContract.exitDelegation(address, this.gasOptions(gas))
    }
    // 赎回候选节点收益
    async validatorClaimAny(address) {
        const gas = await this.stakeContract.estimateGas.validatorClaimAny(address);
        return await this.stakeContract.validatorClaimAny(address, this.gasOptions(gas))
    }
    // 赎回投票收益
    async delegatorClaimAny(address) {
        const gas = await this.stakeContract.estimateGas.delegatorClaimAny(address);
        return await this.stakeContract.delegatorClaimAny(address, this.gasOptions(gas))
    }
}

export default Node
