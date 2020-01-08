
import * as ReactRedux from 'react-redux';

import { iActionType, Translation, INIT_TRANSLATIONS, Dictionary, iData } from '../../models/models';
export const STATE_KEY = 'app';

export interface AppProps extends ReactRedux.DispatchProp<any> {
	appState: AppState;
	loadData: (e) => iActionType;
	getDeeplinkEl: (e) => iActionType;
}

export enum WINDOW_VIEWS {
	SPLASH,
	CONTENT
}

export interface AppState {
	locale: Translation;
	data: Dictionary<iData>;
	deeplinkHtml: string;
}
export const AppInitState: AppState = {
	locale: INIT_TRANSLATIONS,
	data: null,
	deeplinkHtml: null,
}

export interface inAppState {
}

export const inAppInitialState: inAppState = {
}
