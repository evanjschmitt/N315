import * as $ from "jquery";

function addPetListener() {
  $(".view").on("click", (e) => {
    const petId = e.currentTarget.id;
    // console.log("Button Clicked:", petId);
    const petIdNumber = petId.replace("pet-", "");
    // console.log("Pet ID Number:", petIdNumber);
    $.getJSON("data/data.json", (data) => {
      let pet = data.Pets[petIdNumber];
      // console.log(pet);
      let petString = `
        <div class="pet">
        <div class="petImg">
                <img src="assets/${pet.imgUrl}" alt="${pet.desc}"/>>
            </div>
            <div class="petInfo">
             <p>Name: ${pet.petName}</p>
                <p>Species: ${pet.breed}</p>
                <p>Age: ${pet.age}</p>
                <p>${pet.desc}</p>
            </div>  
        </div>`;
      $(".petView").html(petString);
    });
  });
}

export function getData() {
  $.getJSON("data/data.json", function (data) {
    console.log(data);
    {
      let pets = data.Pets;
      $.each(pets, (idx, pet) => {
        let petString = `
        <div class="pet">
        <div class="petImg">
                <img src="assets/${pet.imgUrl}" alt="${pet.desc}"/>>
            </div>
            <div class="petInfo">
             <p>Name: ${pet.petName}</p>
                <p>${pet.desc}</p>
                <span id="pet-${pet.id}" class="view">View ${pet.petName}</span>
            </div>
            
        </div>`;
        $(".pets").append(petString);
      });
    }
    addPetListener();
  }).fail(function () {
    alert("error");
  });
}
