
const guestForm = document.querySelector('.form-container');


export const Form = () => {
    guestForm.innerHTML = `
    <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="" placeholder="Enter full name">
    </div>
    <div class="form-group">
      <label for="age">Age</label>
      <input type="text" class="form-control" id="" placeholder="Enter age">
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Favorite Dish</option>
      <option value="sweet-potatoes">Sweet Potatoes</option>
      <option value="shaken-dirties">Shaken Dirties</option>
      <option value="stuffing">Stuffing</option>
      <option value="pumpkin-pie">Pumpkin Pie</option>
    </select>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="" id="" value="left-handed">
      <label class="form-check-label" for="left-handed">Left-Handed</label>
    </div>
    <div class="form-check form-check-inline">
     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="right-handed">
     <label class="form-check-label" for="right-handed">Right-Handed</label>
    </div>
    <div class="form-group">
      <label for="image">Your Image</label>
      <input type="file" class="form-control-file" id="">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
}