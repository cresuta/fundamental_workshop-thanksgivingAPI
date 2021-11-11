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
        </ul>
        <div class="card-body">
            <a href="#" class="btn btn-primary">Photo Gallery</a>
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
            </ul>
            <div class="card-body">
                <a href="#" class="btn btn-primary">Photo Gallery</a>
            </div>
        </div>
        `    
    }
    
}