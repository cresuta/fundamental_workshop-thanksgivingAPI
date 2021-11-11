import {saveGuest} from "../form/FormDataProvider.js"
import { GuestList } from "../guest/GuestList.js";

const guestForm = document.querySelector('.form-container');

document.querySelector("body").addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "submit-guest") {
    console.log('Submitted!')
    if (!document.querySelector('#name').value || !document.querySelector('#age').value || !document.querySelector('#favoriteDish').value ||
    !document.querySelector('#isRightHanded').value || !document.querySelector('#imageUrl').value) {
      alert('Please fill out the entire form.')
    } else {
      
      const newGuest = {
        name: document.querySelector("#name").value,
        age: parseInt(document.querySelector("#age").value),
        favoriteDish: document.querySelector("#favoriteDish").value,
        rightHanded: Boolean(document.querySelector("#isRightHanded").value),
        imageUrl: document.querySelector("#imageUrl").value
      }
  
        document.querySelector("#name").value = ""
        document.querySelector("#age").value = ""
        document.querySelector("#favoriteDish").value = ""
        document.querySelector("#isRightHanded").value = ""
        document.querySelector("#imageUrl").value = ""
  
        saveGuest(newGuest)
        .then(GuestList)    
    } 
  }
})


export const Form = () => {
    guestForm.innerHTML = `
    <h2>Thanksgiving Guest Submission</h2>
    <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter full name">
    </div>
    <div class="form-group">
      <label for="age">Age</label>
      <input type="number" class="form-control" id="age" placeholder="Enter age">
    </div>
    <div class="form-group">
    <label for="favoriteDish">Favorite Dish</label>
    <select class="form-select form-control" aria-label="Default select example" id="favoriteDish">
      <option selected>Select favorite dish...</option>
      <option value="Sweet Potatoes">Sweet Potatoes</option>
      <option value="Shaken Dirties">Shaken Dirties</option>
      <option value="Stuffing">Stuffing</option>
      <option value="Pumpkin Pie">Pumpkin Pie</option>
    </select>
    </div>
    <div class="form-group">
    <label for="isRightHanded">Dominant Hand</label>
    <select class="form-select form-control" aria-label="Default select example" id="isRightHanded">
      <option selected>Select dominant hand...</option>
      <option value="true">Right Hand</option>
      <option value="false">Left Hand</option>
    </select>
    </div>
    <div class="form-group">
      <label for="image">Image</label>
      <input type="text" class="form-control" id="imageUrl" placeholder="Copy/Paste Image Url">
    </div>
    <button type="submit" class="btn btn-primary" id="submit-guest">Submit</button>
    </form>
    `
}