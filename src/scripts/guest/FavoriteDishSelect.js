import { getGuests, useGuests } from "../form/FormDataProvider.js"
import { Guest } from "./Guest.js"

const filterFavoriteDishSelect = document.querySelector('.filter-dish');
const guestList = document.querySelector('.list-container');

export const FavoriteDishFilter = () => {
    filterFavoriteDishSelect.innerHTML = `
    <h2>Filter Guests By Favorite Dishes</h2>
    <select class="form-select" aria-label="Default select example" id="filterDish">
        <option selected>Favorite Dish?</option>
        <option value="Sweet Potatoes">Sweet Potatoes</option>
        <option value="Shaken Dirties">Shaken Dirties</option>
        <option value="Stuffing">Stuffing</option>
        <option value="Pumpkin Pie">Pumpkin Pie</option>
    </select>
    `
    document.querySelector('body').addEventListener("change", clickEvent => {
        if (clickEvent.target.id === "filterDish") {
            guestList.innerHTML = ""
            getGuests()
            .then(() => {
                let guests = useGuests();
                let guestListHTML = "";  
                guests.forEach((singleGuest) => {
                    if (singleGuest.favoriteDish === document.querySelector('#filterDish').value) {
                        guestListHTML += Guest(singleGuest); 
                        guestList.innerHTML = `
                            ${guestListHTML}
                        `
                    }
                })
            })
        }
    })
}    
    
