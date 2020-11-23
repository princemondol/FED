import React from 'react';

const Checkbox = ({values, checked, onChange}) => {
	return (
		<>
			<div className="form-check">	
				<input 
					id={values.id} 
					className="form-check-input" 
					type="checkbox" 
					value={values.value} 
					onChange={e => onChange(e)}  
					checked={checked.checkbox.includes(values.value)}
				/>
							
				<label className="form-check-label mb-0" htmlFor={values.id}>
					{values.label}
				</label>
			</div>
		</>
	);
}
 
export default Checkbox;