import { TYPES } from './Actions';
import { <%= uCamelCName %>State, <%= uCamelCName %>InitState } from './StateAndProps';
import * as _ from 'lodash';

export function Reducer(state = <%= uCamelCName %>InitState, action): any {
	switch (action.type) {
		
		default:
			return state;
	}

}


