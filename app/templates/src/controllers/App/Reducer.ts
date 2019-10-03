import { TYPES } from './Actions';
import { AppInitState } from './StateAndProps';

export function Reducer(state = AppInitState, action): any {
	switch (action.type) {
		case TYPES.DATA_LOADED:
			state.locale = action.data.locale;
			state.data = action.data.data
            return { ...state };

		default:
			return state;
	}
}
