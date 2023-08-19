# js_input_modal

A simple JavaScript function to display an input modal and collect user data.

## Usage

The `showModal` function can be used to display a modal for user input.

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


