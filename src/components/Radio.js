import React from 'react';

const Radio = ({values, checked, onChange}) => {
	return (
		<>
		<div className="form-check">						
			<input 
				id={values.id} 
				className="form-check-input" 
				type="radio" 
				name={values.name}  
				value={values.value} 
				onChange={e => onChange(e)} 
				checked={checked.radio.includes(values.value)} 
			/>
						
			<label className="form-check-label" htmlFor={values.id}>
				{values.label}
			</label>
		</div>
		</>
	);
}
 
export default Radio;