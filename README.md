# FORM ENCODER DECODER (FED)

### Table of Contents

1. [Architecture](#architecture)
2. [Quick Overview](#quick-overview)
3. [Application State](#application-state)
4. [State Manipulation](#state-manipulation)
5. [Copying state](#copying-state)

## Architecture
![Application Architecture](https://i.ibb.co/wSHfMJd/Form-Encode-Decoder.jpg)

## Quick Overview
* The application is written in **Javascript's mordern ES6+ syntax** in a **modular** approach.
* All state related files can be found in *"src/state/"*
* All reusable components can be found in *"src/components/"*
* The application state is maintained using **REDUX**.
* For responsiveness, **BOOTSTRAP** framework has been used.
* A helper module (**UIhelper.js**) has been created for radio/checkbox values some extra functionality.

## Application State

State Variable |	Initial State|	Comments
------|-----|-----
formValues | { radio: [], checkbox: [] } | [REDUX] To maintain the selected state of form controls
userInput | "" | [STATE HOOK] To get the user defined state from input. 

* The App component is nested within the *Provider* which gives it access to the **STORE**.
* **ACTIONS, REDUCERS and STORE** are in *src/state* directory.
* **Connect()()** is a higher order function which takes the component as the second argument and connects the STATE and ACTIONS using *mapStateToProps()* and *mapDispatchToProps()* respectively. 

## State Manipulation

Action type |	Arguments |	Comment
------|-----|-----
SELECT_DESELECT_CONTROLS| type, value, checked | Triggered on selection and deselection of the radio and checkboxes, type enables to ditinguish between radio and checkbox, checked argument helps in adding/deleting values from state depending wheter it was selected/unselected
APPLY_CUSTOM_STATE| customState | Triggerd when the user defines the custom state and clicks on apply, the functions parses if the input is valid or not and accordingly sets the new state.
RESET_FORM | - | Triggered by *Reset form* button and empties the radio and checkbox array and updates the state.

## Copying state
* To copy state *Navigator WEB API* has been used.
* As it returns a promise async await has been used to see if the action is successful and a message is shown accordingly.