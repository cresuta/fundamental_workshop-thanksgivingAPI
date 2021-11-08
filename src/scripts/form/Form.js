import {saveGuest} from "../form/FormDataProvider.js"
import { GuestList } from "../guest/GuestList.js";

const guestForm = document.querySelector('.form-container');

document.querySelector("body").addEventListener("click", clickEvent => {
  if(clickEvent.target.id = "submit") {
    if (!document.querySelector('#name').value || !document.querySelector('#age').value || !document.querySelector('#favoriteDish').value ||
    !document.querySelector('#isRightHanded').value || !document.querySelector('#imageUrl').value) {
      alert('Please fill out the entire form.')
    } else {
      
      const newGuest = {
        name: document.querySelector("#name").value,
        age: document.querySelector("#age").value,
        favoriteDish: document.querySelector("#favoriteDish").value,
        rightHanded: document.querySelector("#isRightHanded").value,
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
    <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter full name">
    </div>
    <div class="form-group">
      <label for="age">Age</label>
      <input type="text" class="form-control" id="age" placeholder="Enter age">
    </div>
    <select class="form-select" aria-label="Default select example" id="favoriteDish">
      <option selected>Favorite Dish?</option>
      <option value="sweet-potatoes">Sweet Potatoes</option>
      <option value="shaken-dirties">Shaken Dirties</option>
      <option value="stuffing">Stuffing</option>
      <option value="pumpkin-pie">Pumpkin Pie</option>
    </select>
    <select class="form-select" aria-label="Default select example" id="isRightHanded">
      <option selected>Are you right handed?</option>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
    <div class="form-group">
      <label for="image">Your Image</label>
      <input type="file" class="form-control-file" id="imageUrl">
    </div>
    <button type="submit" class="btn btn-primary" id="submit">Submit</button>
    </form>
    `
}