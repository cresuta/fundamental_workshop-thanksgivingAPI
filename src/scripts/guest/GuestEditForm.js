import { useGuests, updateGuest } from "../form/FormDataProvider.js";
import { GuestList } from "./GuestList.js";

const contentTarget = document.querySelector(".form-container");

document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("submitGuest")) {
        
      const editedGuest = {
            id: parseInt(clickEvent.target.id.split("-")[1]),
            name: document.querySelector('#name').value,
            age: parseInt(document.querySelector('#age').value),
            favoriteDish: document.querySelector('#favoriteDish').value,
            rightHanded : Boolean(document.querySelector('#isRightHanded').value),
            imageUrl: document.querySelector('#imageUrl').value
        }

        updateGuest(editedGuest)
        .then(GuestList)
    }
})

export const GuestEditForm = (guestId) => {
    // Give this component access to our application's notes state
    const allGuests = useGuests();

    // Find the note that we clicked on by its unique id
    const guestWeWantToEdit = allGuests.find(singleGuest=> singleGuest.id === guestId)

    contentTarget.innerHTML = `
    <h2>Edit Guest</h2>
    <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter full name" value="${guestWeWantToEdit.name}">
    </div>
    <div class="form-group">
      <label for="age">Age</label>
      <input type="number" class="form-control" id="age" placeholder="Enter age" value="${guestWeWantToEdit.age}">
    </div>
    <div class="form-group">
    <label for="favoriteDish">Favorite Dish</label>
    <select class="form-select form-control" aria-label="Default select example" id="favoriteDish">
      <option selected>Select favorite dish...</option>
      <option value="${guestWeWantToEdit.favoriteDish}">Sweet Potatoes</option>
      <option value="${guestWeWantToEdit.favoriteDish}">Shaken Dirties</option>
      <option value="${guestWeWantToEdit.favoriteDish}">Stuffing</option>
      <option value="${guestWeWantToEdit.favoriteDish}">Pumpkin Pie</option>
    </select>
    </div>
    <div class="form-group">
    <label for="isRightHanded">Dominant Hand</label>
    <select class="form-select form-control" aria-label="Default select example" id="isRightHanded">
      <option selected>Select dominant hand...</option>
      <option value="${guestWeWantToEdit.rightHanded}">Right Hand</option>
      <option value="${guestWeWantToEdit.rightHanded}">Left Hand</option>
    </select>
    </div>
    <div class="form-group">
      <label for="image">Image</label>
      <input type="text" class="form-control" id="imageUrl" placeholder="Copy/Paste Image Url" value="${guestWeWantToEdit.imageUrl}">
    </div>
    <button type="submit" class="btn btn-primary" id="submitGuest-${guestId}">Submit</button>
    </form>
    `
}