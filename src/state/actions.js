export const SELECT_DESELECT_CONTROLS = 'SELECT_DESELECT_CONTROLS';
export const APPLY_CUSTOM_STATE = 'APPLY_CUSTOM_STATE';
export const RESET_FORM = 'RESET_FORM';

export const selectDeselectControls = (type, value, checked) => ({
	type : SELECT_DESELECT_CONTROLS,
	payload : { type, value, checked }
})

export const applyCustomState = customState => ({
	type : APPLY_CUSTOM_STATE,
	payload : { customState }
})

export const resetForm = () => ({
	type : RESET_FORM
})

