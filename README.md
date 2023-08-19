# js_input_modal

A simple JavaScript function to display an input modal and collect user data.

## Usage

The `showModal` function can be used to display a modal for user input.
![image](https://github.com/CHUM-s-slolutions/js_input_modal/assets/42345198/8f9f0388-74e5-4bfe-9da0-c9e90675e924)

### `showModal()`

```javascript
try {
    let user = await showModal();
    console.log(user);
} catch (error) {
    console.error(error.message);
}
```
Calling this function will append a modal to the document root and return a Promise that resolves with the user object after submission. If the modal is closed without submitting, an error is thrown.

![image](https://github.com/CHUM-s-slolutions/js_input_modal/assets/42345198/8304eb2a-2b5a-4ee8-8b11-838c30c7fae2)

### `showModal(user)`

```javascript
try {
    let updatedUser = await showModal(user);
    console.log(updatedUser);
} catch (error) {
    console.error(error.message);
}
```
Calling this function with a user object will append a modal with pre-filled data and return a Promise that resolves with the updated user data after submission. If the modal is closed without submitting, an error is thrown.


