let gusers = [];
getdata();
async function getdata() {
    try {
        let response = await fetch('../data/users.json');
        let users = await response.json();
        setTable(users);
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

function setTable(users) {
    gusers = users;
    let table = document.getElementById('users');
    table.innerHTML = '';
    for (const user of users) {
        let urow = document.createElement('tr');
        let inner = `
      
        <td>${user.Name}</td>
        <td>${user.Address}</td>
        <td>${user.Phone}</td>
        <td><button onclick="edit(${user.id})">Edit</button></td>
  
        `; 
        urow.innerHTML = inner;
        table.appendChild(urow);
    }
}
function getUserById(id) {
   
    for (const user of gusers) {
        if (user.id === id) {
            return user;
        }
    }
    return null; 
}
function AddUser(user) {
   
    user.id = gusers.length + 1;
    gusers.push(user);
    setTable(gusers);

}
function updateData(updateduser) {
    for (const user of gusers) {
        if (user.id === updateduser.id) {
            user.Name = updateduser.Name;
            user.Address = updateduser.Address;
            user.Phone = updateduser.Phone;
        }
    }
    setTable(gusers);
}
async function add() {
    try {
        let user = await showModal();
        AddUser(user);
        }catch (error){
            console.error(error.message);
        }  
}
async function edit(user_id) {
   
    try {
    let updateduser = await showModal(getUserById(user_id));
    updateData(updateduser);
    }catch (error){
        console.error(error.message);
    }
}