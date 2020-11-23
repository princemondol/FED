import React, { useState } from 'react';
import { connect } from 'react-redux';
import { formControls, copyState } from '../UIhelper';
import { selectDeselectControls, applyCustomState, resetForm } from '../state/actions';
import Radio from './Radio';
import Checkbox from './Checkbox';


const Form = ({formValue = { radio: [], checkbox: [] }, updateState, applyState, reset}) => {
	
	const [userInput, setUserInput] =  useState("");

	return (
		<>
			<div className="col-md-4 col-8 offset-2 offset-md-4 bg-white rounded p-4 mt-5 shadow-sm">

				<input 
					type="text" 
					className="form-control mb-2" 
					onChange={e => setUserInput(e.target.value)}
					placeholder="Custom state"
				/>

				<button 
					className="btn btn-success" 
					onClick={() => copyState(formValue)}>
						Copy State
				</button>
				
				<button 
					className="btn btn-danger ml-2" 
					onClick={() => applyState(userInput)}>
					Apply State
				</button>

				<div className="my-2"></div>

				{formControls.map((control,i) => (
					control.type === "radio" ? 

						<Radio 
							key={i}	
							values={control} 
							checked={formValue} 
							onChange={updateState}
						/>
					: 
						<Checkbox 
							key={i} 
							values={control} 
							checked={formValue} 
							onChange={updateState} 
						/>
					
				))}	

				<button 
					className="mt-2 btn btn-info" 
					onClick={() => reset()}>
					Reset Form
				</button>

			</div>
		</>
	);
}

const mapStateToProps = state => ({
	formValue: state.formValues,
})

const mapDispatchToProps = dispatch => ({
	updateState: event => { 
		dispatch(selectDeselectControls(event.target.type, event.target.value, event.target.checked))
	},
	applyState: userDefinedState => {
		dispatch(applyCustomState(userDefinedState))
	},
	reset: () => {
		dispatch(resetForm())
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);