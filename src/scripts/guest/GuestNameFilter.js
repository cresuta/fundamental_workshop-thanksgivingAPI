import { getGuests, useGuests } from "../form/FormDataProvider.js"
import { Guest } from "./Guest.js"

const filterGuestNameSearch = document.querySelector('.filter-name');
const guestList = document.querySelector('.list-container');

export const FilterGuestName = () => {
    filterGuestNameSearch.innerHTML = `
    <h4>Search Guest By Name</h4>
    <input class="form-control mr-sm-2" type="search" placeholder="Guest Name" aria-label="Search" id="filterName">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" id="submit-filterName">Search</button>
    ` 

    document.querySelector('body').addEventListener("click",clickEvent => {
        if (clickEvent.target.id === "submit-filterName") {
            guestList.innerHTML = ""
            getGuests()
            .then(() => {
                let guests = useGuests();
                let guestListHTML = "";  
                guests.forEach((singleGuest) => {
                    if (singleGuest.name === document.querySelector('#filterName').value) {
                        guestListHTML += Guest(singleGuest); 
                        guestList.innerHTML = `
                            ${guestListHTML}
                        `
                    }
                })
                document.querySelector("#filterName").value = ""
            })
        }
    })
}