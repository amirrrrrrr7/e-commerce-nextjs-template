import AES from 'crypto-js/aes';
import UTF8 from 'crypto-js/enc-utf8'

import {
	PROJECT_KEY
} from "../Secret/index";


// break the incoming hashed data with aes algorithm

export default function Encoder(data){
	let bytes;

	bytes = AES.decrypt(
		data,
		PROJECT_KEY,
	);
	return  bytes.toString(
		UTF8
	);
}