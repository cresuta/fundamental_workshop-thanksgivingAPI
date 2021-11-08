export const Guest = (guest) => {
    return `
    <div class="card" style="width: 18rem;">
        <img src="${guest.imageUrl}" class="card-img-top" alt="${guest.name}">
        <div class="card-body">
            <h5 class="card-title">${guest.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Age: ${guest.age}</li>
            <li class="list-group-item">Favorite Dish: ${guest.favoriteDish}</li>
            <li class="list-group-item">Right Handed? ${guest.rightHanded}</li>
        </ul>
  </div>
    `
}