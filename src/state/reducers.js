import { SELECT_DESELECT_CONTROLS, APPLY_CUSTOM_STATE, RESET_FORM } from "./actions";

export const formValues = (state = { radio: [], checkbox: [] }, action) => {
	const { type, payload } = action;

	switch (type) {
		case SELECT_DESELECT_CONTROLS : {
			const { type, value, checked } = payload;
			
			if (checked === true) {
				
				if(type === "radio"){
					state = { radio: [ value ], checkbox: state.checkbox};
				} else {
					state = { radio: state.radio, checkbox: [ value, ...state.checkbox ]};
				}
			
			} else {
			
				if(type === "radio"){
					let update = state.radio.filter(x => x !== value);
					state = { radio: update, checkbox: state.checkbox}
				} else {
					let update = state.checkbox.filter(x => x !== value);
					state = { radio: state.radio, checkbox: update}
				}	
			
			}
			return state;
		}
		
		case APPLY_CUSTOM_STATE : {

			const { customState } = payload;
			try {

				let stateFromUserInput = JSON.parse(customState);
				if (stateFromUserInput.radio && stateFromUserInput.checkbox) {
					state = { radio: stateFromUserInput.radio, checkbox: stateFromUserInput.checkbox }
				} else {
					alert("Please enter a valid state. [ MISSING_CONTROLS ]");
				}	
			
			} catch (e) {
				alert("Please enter a valid state [ INVALID_JSON ]");
			}

			return state;
		}

		case RESET_FORM : {
			state = { radio: [], checkbox: []};
			return state;
		}
		
		default : 
			return state;
	}
}