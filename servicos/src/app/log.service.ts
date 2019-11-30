import { Inject } from '@angular/core';

export class LogService {

	constructor(

		) { }
	log(msg: string) {
		console.log(`LOG: ${msg}`);
	}
}
