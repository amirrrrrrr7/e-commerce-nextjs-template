import AES from 'crypto-js/aes';

import {
	PROJECT_KEY
} from "../Secret/index";

// hash the incoming data with aes algorithm

export default function Encoder(data){
	return AES.encrypt(
		data, PROJECT_KEY
	);
}
