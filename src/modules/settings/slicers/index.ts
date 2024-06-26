import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// State
interface ConfigState {
	autoHide?: boolean
	colorLock?: boolean
	cameraId?: string
	language?: string
	notifyOnQuotaMet?: boolean
	notifyOnQuotaMetDuration?: number
	notifyOnWaveFinished?: boolean
	notifyOnWaveFinishedDuration?: number
	reduced?: boolean
	server?: string
	simulation?: boolean
	speed?: number
	status?: boolean
}

const initialState: ConfigState = {
}

// Slice
const configSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		setAutoHide(state, action: PayloadAction<boolean>) {
			state.autoHide = action.payload
		},
		setColorLock(state, action: PayloadAction<boolean | undefined>) {
			state.colorLock = action.payload
		},
		setCameraId(state, action: PayloadAction<string | undefined>) {
			state.cameraId = action.payload
		},
		setLanguage(state, action: PayloadAction<string>) {
			state.language = action.payload
		},
		setNotifyOnQuotaMet(state, action: PayloadAction<boolean | undefined>) {
			state.notifyOnQuotaMet = action.payload
		},
		setNotifyOnQuotaMetDuration(state, action: PayloadAction<number | undefined>) {
			state.notifyOnQuotaMetDuration = action.payload
		},
		setNotifyOnWaveFinished(state, action: PayloadAction<boolean | undefined>) {
			state.notifyOnWaveFinished = action.payload
		},
		setNotifyOnWaveFinishedDuration(state, action: PayloadAction<number | undefined>) {
			state.notifyOnWaveFinishedDuration = action.payload
		},
		setReduced(state, action: PayloadAction<boolean | undefined>) {
			state.reduced = action.payload
		},
		setServer(state, action: PayloadAction<string | undefined>) {
			const server = action.payload
			if (server && server != import.meta.env.VITE_WS_SERVER) {
				state.server = server
			} else {
				delete state.server
			}
		},
		setSimulation(state, action: PayloadAction<boolean | undefined>) {
			state.simulation = action.payload
		},
		setSpeed(state, action: PayloadAction<number | undefined>) {
			state.speed = action.payload
		},
		setStatus(state, action: PayloadAction<boolean | undefined>) {
			state.status = action.payload
		},
	},
})

// Persist
const persistConfig: PersistConfig<ConfigState> = {
	storage,
	key: 'conf',
}

const persistConfigReducer = persistReducer(persistConfig, configSlice.reducer)

export const {
	setAutoHide,
	setColorLock,
	setCameraId,
	setLanguage,
	setNotifyOnQuotaMet,
	setNotifyOnQuotaMetDuration,
	setNotifyOnWaveFinished,
	setNotifyOnWaveFinishedDuration,
	setReduced,
	setServer,
	setSimulation,
	setSpeed,
	setStatus,
} = configSlice.actions
export default persistConfigReducer
