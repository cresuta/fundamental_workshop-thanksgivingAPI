import { getGuests, useGuests } from "../form/FormDataProvider.js"
import { Guest } from "../guest/Guest.js";


const guestList = document.querySelector('.list-container')

export const GuestList = () => {
    getGuests()
    .then(() => {
        let guests = useGuests();
        let guestListHTML = "";
        guests.forEach((singleGuest) => {
            guestListHTML += Guest(singleGuest);
        })

        guestList.innerHTML = `
        ${guestListHTML}
        `
    })
}