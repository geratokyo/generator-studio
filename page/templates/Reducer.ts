import { TYPES } from './Actions';
import * as _ from 'lodash';


export const  <%= uCamelCName %>InitState = {}

export function Reducer(state =  <%= uCamelCName %>InitState, action): any {
	switch (action.type) {
		
		default:
			return state;
	}

}


