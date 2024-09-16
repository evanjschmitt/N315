const homePage = `<div class="home">
      <h1>HOME</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus harum quod architecto? Deleniti necessitatibus eligendi saepe dolores tenetur eaque voluptatem magnam minus, optio reiciendis temporibus dignissimos tempore impedit vero.</p>
      <p>Vel excepturi accusamus iste doloremque esse expedita! Est asperiores debitis vitae harum quas itaque eum reprehenderit accusantium. Tenetur, et ducimus magnam minus ab nihil quae accusantium molestias, ea temporibus distinctio.</p>
      <p>Ab voluptates molestias illo mollitia vero numquam explicabo dolorem praesentium voluptatibus fuga, suscipit, aliquam recusandae perferendis aliquid commodi non. Est, id necessitatibus. Porro modi unde nemo repudiandae nisi, rerum voluptate.</p>
      <p>Officia voluptatem accusamus voluptatum tempora necessitatibus, deserunt sapiente temporibus ab at corporis? Eveniet omnis ullam iste fuga libero veritatis cum voluptates exercitationem facilis nihil illo, beatae aperiam delectus nulla voluptate.</p>
    </div>`;
const contactPage = `<div class="contact">
<h1>CONTACT</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus harum quod architecto? Deleniti necessitatibus eligendi saepe dolores tenetur eaque voluptatem magnam minus, optio reiciendis temporibus dignissimos tempore impedit vero.</p>
<p>Vel excepturi accusamus iste doloremque esse expedita! Est asperiores debitis vitae harum quas itaque eum reprehenderit accusantium. Tenetur, et ducimus magnam minus ab nihil quae accusantium molestias, ea temporibus distinctio.</p>
<p>Ab voluptates molestias illo mollitia vero numquam explicabo dolorem praesentium voluptatibus fuga, suscipit, aliquam recusandae perferendis aliquid commodi non. Est, id necessitatibus. Porro modi unde nemo repudiandae nisi, rerum voluptate.</p>
<p>Officia voluptatem accusamus voluptatum tempora necessitatibus, deserunt sapiente temporibus ab at corporis? Eveniet omnis ullam iste fuga libero veritatis cum voluptates exercitationem facilis nihil illo, beatae aperiam delectus nulla voluptate.</p>
</div>`;
const aboutPage = `<div class="about">
<h1>ABOUT</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus harum quod architecto? Deleniti necessitatibus eligendi saepe dolores tenetur eaque voluptatem magnam minus, optio reiciendis temporibus dignissimos tempore impedit vero.</p>
<p>Vel excepturi accusamus iste doloremque esse expedita! Est asperiores debitis vitae harum quas itaque eum reprehenderit accusantium. Tenetur, et ducimus magnam minus ab nihil quae accusantium molestias, ea temporibus distinctio.</p>
<p>Ab voluptates molestias illo mollitia vero numquam explicabo dolorem praesentium voluptatibus fuga, suscipit, aliquam recusandae perferendis aliquid commodi non. Est, id necessitatibus. Porro modi unde nemo repudiandae nisi, rerum voluptate.</p>
<p>Officia voluptatem accusamus voluptatum tempora necessitatibus, deserunt sapiente temporibus ab at corporis? Eveniet omnis ullam iste fuga libero veritatis cum voluptates exercitationem facilis nihil illo, beatae aperiam delectus nulla voluptate.</p>
</div>`;
const productsPage = `<div class="products">
<h1>PRODUCTS</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus harum quod architecto? Deleniti necessitatibus eligendi saepe dolores tenetur eaque voluptatem magnam minus, optio reiciendis temporibus dignissimos tempore impedit vero.</p>
<p>Vel excepturi accusamus iste doloremque esse expedita! Est asperiores debitis vitae harum quas itaque eum reprehenderit accusantium. Tenetur, et ducimus magnam minus ab nihil quae accusantium molestias, ea temporibus distinctio.</p>
<p>Ab voluptates molestias illo mollitia vero numquam explicabo dolorem praesentium voluptatibus fuga, suscipit, aliquam recusandae perferendis aliquid commodi non. Est, id necessitatibus. Porro modi unde nemo repudiandae nisi, rerum voluptate.</p>
<p>Officia voluptatem accusamus voluptatum tempora necessitatibus, deserunt sapiente temporibus ab at corporis? Eveniet omnis ullam iste fuga libero veritatis cum voluptates exercitationem facilis nihil illo, beatae aperiam delectus nulla voluptate.</p>
</div>`;

export function changePage(pageName) {
  let pageVarName = pageName + "Page";
  console.log(pageName);
  $("#app").html(eval(pageVarName));
  //Eval will turn the string into a variable
}

const fname = "Todd";
export { fname };
const lName = "Shelton";

export function getName() {
  return lName;
}

export function getAllNames() {
  let names = ["todd", "terry", "thomas", "tim"];
  // console.log(names);

  //For Each Loop
  //   names.forEach((name) => {
  //     console.log(name);
  //   });

  //For Loop
  //   for (let i = 0; i < names.length; i++) {
  //     const name = names[i];
  //     console.log(name);
  //   }

  //Jquery
  $.each(names, (idx, name) => {
    console.log(`index #${idx} | name: ${name}`);
    $("#app").append(`<p>index #${idx} | name: ${name}</p>`);
  });
}
