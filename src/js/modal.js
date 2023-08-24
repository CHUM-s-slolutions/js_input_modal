function displayModal( user = 'null') {
        let id = "js_modal";
   
        let name = "";
        let address = "";
        let phone = "";
        let uid = '';
        if (user !== 'null') {
            name = user.Name != 'undefined' ? user.Name : "";
            address = user.Address != 'undefined' ? user.Address : "";
            phone = user.Phone != 'undefined' ? user.Phone : "";
            uid = user.id != 'undefined' ? user.id : null;
        }
        const modal = document.getElementById(id);
        const modalClose = document.getElementById("modalClose");
        const modalSubmit = document.getElementById("modalSubmit");
        const nameInput = document.getElementById("name");
        const addressInput = document.getElementById("address");
        const phoneInput = document.getElementById("phone");

        return new Promise((resolve, reject) => {
            modal.style.display = "block";
            try {
                nameInput.value = name;
                addressInput.value = address;
                phoneInput.value = phone;
            } catch (error) {
                reject(new Error(error))
            }
            modalSubmit.addEventListener("click", () => {
                const name = nameInput.value;
                const address = addressInput.value;
                const phone = phoneInput.value;
                const userData = { id: uid, Name: name, Address: address, Phone: phone };

                modal.style.display = "none";
                resolve(userData);
            });

            modalClose.addEventListener("click", () => {
                modal.style.display = "none";
                reject(new Error("Modal closed without submitting."));
            });
        });
    
}
function showModal(user = 'null', modal_id = "user_modal") {
    let name = "";
    let address = "";
    let phone = "";
    let uid = '';
    if (user !== 'null') {
        name = user.Name != 'undefined' ? user.Name : "";
        address = user.Address != 'undefined' ? user.Address : "";
        phone = user.Phone != 'undefined' ? user.Phone : "";
        uid = user.id != 'undefined' ? user.id : null;
    }
    let modal = document.createElement('div');
    modal.id = modal_id;
    modal.classList.add('modal');
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const closeSpan = document.createElement("span");
    closeSpan.classList.add("close");
    closeSpan.id = "modalClose";
    closeSpan.innerHTML = "&times;";
    modalContent.appendChild(closeSpan);

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name:";
    modalContent.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.value = name;
    modalContent.appendChild(nameInput);

    const addressLabel = document.createElement("label");
    addressLabel.setAttribute("for", "address");
    addressLabel.textContent = "Address:";
    modalContent.appendChild(addressLabel);

    const addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.id = "address";
    addressInput.value = address;
    modalContent.appendChild(addressInput);

    const phoneLabel = document.createElement("label");
    phoneLabel.setAttribute("for", "phone");
    phoneLabel.textContent = "Phone:";
    modalContent.appendChild(phoneLabel);

    const phoneInput = document.createElement("input");
    phoneInput.type = "text";
    phoneInput.id = "phone";
    phoneInput.value = phone;
    modalContent.appendChild(phoneInput);

    const submitButton = document.createElement("button");
    submitButton.id = "modalSubmit";
    submitButton.textContent = "Submit";
    modalContent.appendChild(submitButton);

    modal.appendChild(modalContent);

    return new Promise((resolve, reject) => {
        document.body.appendChild(modal);

        modalSubmit.addEventListener("click", () => {
            const name = nameInput.value;
            const address = addressInput.value;
            const phone = phoneInput.value;
            const userData = { id: uid, Name: name, Address: address, Phone: phone };

            modal.remove();
            resolve(userData);
        });

        modalClose.addEventListener("click", () => {
            modal.remove();
            reject(new Error("Modal closed without submitting."));
        });
    });

}