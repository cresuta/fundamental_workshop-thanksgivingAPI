import {GuestEditForm} from "./GuestEditForm.js"

// Click listener for delete button
// document.querySelector('.list-container').addEventListener("click", clickEvent => {
//     if(clickEvent.target.id.startsWith("deleteNote")) {
//         const idToDelete = clickEvent.target.id.split("-")[1];
//         deleteNote(idToDelete)
//         .then(NoteList)
//     }
// })

// Click listener for edit button
document.querySelector('.list-container').addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("editGuest")) {
        const idToEdit = +clickEvent.target.id.split("-")[1];
        GuestEditForm(idToEdit)
    }
})

export const Guest = (guest) => {
    if (guest.rightHanded) {
        return `
    <div class="card">
        <img src="${guest.imageUrl}" style="width: 10rem; height: 10rem" class="card-img-top" alt="${guest.name}">
        <div class="card-body">
            <h5 class="card-title">${guest.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${guest.age} yrs old</li>
            <li class="list-group-item">${guest.favoriteDish}</li>
            <li class="list-group-item">Right Handed</li>
            <a href="#" class="btn btn-primary">Photo Gallery</a>
        </ul>
        <div class="card-body">
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteGuest-${guest.id}">
            <i class="bi bi-trash"></i>Remove Guest</button>
            <button type="submit" class="btn btn-light btn-outline-dark guest-btn" id="editGuest-${guest.id}">
            <i class="bi bi-pencil-square"></i>Edit Guest</button>
        </div>
    </div>
    `    
    } else {
        return `
        <div class="card">
            <img src="${guest.imageUrl}" style="width: 10rem; height: 10rem" class="card-img-top" alt="${guest.name}">
            <div class="card-body">
                <h5 class="card-title">${guest.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${guest.age} yrs old</li>
                <li class="list-group-item">${guest.favoriteDish}</li>
                <li class="list-group-item">Left Handed</li>
                <a href="#" class="btn btn-primary">Photo Gallery</a>
            </ul>
            <div class="card-body">
                <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteGuest-${guest.id}">
                <i class="bi bi-trash"></i>Remove Guest</button>
                <button type="submit" class="btn btn-light btn-outline-dark guest-btn" id="editGuest-${guest.id}">
                <i class="bi bi-pencil-square"></i>Edit Guest</button>  
            </div>
        </div>
        `    
    }
    
}