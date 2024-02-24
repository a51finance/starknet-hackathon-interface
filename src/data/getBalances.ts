import { StarknetChainId } from 'l0k_swap-sdk'
import { Abi, Contract, uint256, Uint256 } from 'starknet5'
import l0k_pair_abi from '../constants/abis/l0k_pair_abi.json'
import { getRpcProvider } from '../utils/getRpcProvider'

export default async function getBalances(account: string, pairAddress: string, chainId: StarknetChainId): Promise<string | undefined> {
  const contract = new Contract(l0k_pair_abi as Abi, pairAddress, getRpcProvider(chainId, { default: true }))
  try {
    const data = (await contract.call('balanceOf', [account])) as { balance: Uint256 }

    if (data?.balance) {
      return uint256.uint256ToBN(data.balance).toString()
    }

    return undefined
  } catch (error) {
    return undefined
  }
}
