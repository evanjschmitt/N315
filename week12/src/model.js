import * as $ from "jquery";

export function getData() {
  $.getJSON("data/data.json", function (data) {
    console.log(data);
    {
      let pets = data.Pets;
      $.each(pets, (idx, pet) => {
        let petString = `<div class="petImg">
                <img src="assets/${pet.imgUrl}" alt="${pet.desc}"/>>
            </div>
                <p>${pet.petName}</p>
                <p>${pet.breed}</p>
                <p>${pet.age}</p>
                <p>${pet.desc}</p>`;
        $(".pets").append(petString);
      });
    }
  }).fail(function () {
    alert("error");
  });
}
