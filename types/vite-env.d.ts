/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_WS_SERVER: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
