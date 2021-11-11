import { deleteGuest } from "../form/FormDataProvider.js";
import {GuestEditForm} from "./GuestEditForm.js"

// Click listener for delete button
document.querySelector('.list-container').addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteGuest")) {
        const idToDelete = +clickEvent.target.id.split("-")[1];
        deleteGuest(idToDelete)
        .then(NoteList)
    }
})

// Click listener for edit button
document.querySelector('.list-container').addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("editGuest")) {
        const idToEdit = +clickEvent.target.id.split("-")[1];
        GuestEditForm(idToEdit)
    }
})

// Click listener for photo gallery button (modal popup)
document.querySelector('.list-container').addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("photoGallery")) {
        const idToShowPhotoGallery = +clickEvent.target.id.split("-")[1];
        ModalPhotoGallery(idToShowPhotoGallery)
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
            <button type="button data-toggle="modal" class="btn btn-primary" id="photoGallery-${guest.id}">Photo Gallery</button>
        </ul>
        <div class="card-body">
            <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteGuest-${guest.id}" onClick="document.querySelector('.form-container').scrollIntoView()">
            <i class="bi bi-trash"></i>Remove Guest</button>
            <button type="submit" class="btn btn-light btn-outline-dark guest-btn" id="editGuest-${guest.id}" onClick="document.querySelector('.form-container').scrollIntoView()">
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
                <button type="button data-toggle="modal" class="btn btn-primary" id="photoGallery-${guest.id}">Photo Gallery</button>
            </ul>
            <div class="card-body">
                <button type="submit" class="btn btn-light btn-outline-dark note-btn" id="deleteGuest-${guest.id}" onClick="document.querySelector('.form-container').scrollIntoView()">
                <i class="bi bi-trash"></i>Remove Guest</button>
                <button type="submit" class="btn btn-light btn-outline-dark guest-btn" id="editGuest-${guest.id}" onClick="document.querySelector('.form-container').scrollIntoView()">
                <i class="bi bi-pencil-square"></i>Edit Guest</button>  
            </div>
        </div>
        `    
    }
    
}