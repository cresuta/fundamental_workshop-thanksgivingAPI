import { useGuests } from "../form/FormDataProvider.js"

export const ModalPhotoGallery = (guestId) => {
    const allGuests = useGuests();

    // Find the note that we clicked on by its unique id
    const guestWeWantToEdit = allGuests.find(singleGuest=> singleGuest.id === guestId)

    contentTarget.innerHTML = `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">${guestWeWantToEdit.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    `
}