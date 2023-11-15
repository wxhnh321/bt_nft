
import {config} from '@/config/index'

// DEV
const configurations = {
    'CUBE': {
        address: '0x0000000000000000000000000000000000000000'
    },
    //
    'stake': {
        abi: require('./stake.json'),
        address: config.stakeContract
    },
  }
  
export default  configurations