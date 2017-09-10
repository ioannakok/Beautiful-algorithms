export interface OnInteract {
	
	onPlay(): void 
	onPause(): void
	onRestart(): void 
	onSlow(): void
	onNormal(): void
	onFast(): void
}