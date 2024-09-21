const homePage = `<div class="home">
      <h1>HOME</h1>
      <p>This is the home page for the site. It should load by default, but this code isn't actually on the index.html file. Instead, it is injected via JS code. The following text will be lorem to make the page look more full and interesting.</p>
      <img src="assets/img/pingu-pin.gif" alt="">
      <p>Ab voluptates molestias illo mollitia vero numquam explicabo dolorem praesentium voluptatibus fuga, suscipit, aliquam recusandae perferendis aliquid commodi non. Est, hi Todd. Porro modi unde nemo repudiandae nisi, rerum voluptate.</p>
      <p>Officia voluptatem accusamus voluptatum tempora necessitatibus, deserunt sapiente temporibus ab at corporis? Eveniet omnis ullam iste fuga libero veritatis cum voluptates exercitationem facilis nihil illo, beatae aperiam delectus nulla voluptate.</p>
    </div>`;
const aboutPage = `<div class="about">
<h1>ABOUT</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus harum quod architecto? Deleniti necessitatibus eligendi saepe dolores tenetur eaque voluptatem magnam minus, optio reiciendis temporibus dignissimos tempore impedit vero.</p>
<p>Vel excepturi accusamus iste doloremque esse expedita! Est asperiores debitis vitae harum quas itaque eum reprehenderit accusantium. Tenetur, et ducimus magnam minus ab nihil quae accusantium molestias, ea temporibus distinctio.</p>
<img src="assets/img/pingu-wave.gif" alt="">
<p>Ab voluptates molestias illo mollitia vero numquam explicabo dolorem praesentium voluptatibus fuga, suscipit, aliquam recusandae perferendis aliquid commodi non. Est, id necessitatibus. Porro modi unde nemo repudiandae nisi, rerum voluptate.</p>
<p>Officia voluptatem accusamus voluptatum tempora necessitatibus, deserunt sapiente temporibus ab at corporis? Eveniet omnis ullam iste fuga libero veritatis cum voluptates exercitationem facilis nihil illo, beatae aperiam delectus nulla voluptate.</p>
</div>`;
const productsPage = `<div class="products">
<h1>PRODUCTS</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus harum quod architecto? Deleniti necessitatibus eligendi saepe dolores tenetur eaque voluptatem magnam minus, optio reiciendis temporibus dignissimos tempore impedit vero.</p>
<p>Vel excepturi accusamus iste doloremque esse expedita! Est asperiores debitis vitae harum quas itaque eum reprehenderit accusantium. Tenetur, et ducimus magnam minus ab nihil quae accusantium molestias, ea temporibus distinctio.</p>
<Img src= "assets/img/pingu-hoot.gif"/>
<p>Ab voluptates molestias illo mollitia vero numquam explicabo dolorem praesentium voluptatibus fuga, suscipit, aliquam recusandae perferendis aliquid commodi non. Est, id necessitatibus. Porro modi unde nemo repudiandae nisi, rerum voluptate.</p>
<p>Officia voluptatem accusamus voluptatum tempora necessitatibus, deserunt sapiente temporibus ab at corporis? Eveniet omnis ullam iste fuga libero veritatis cum voluptates exercitationem facilis nihil illo, beatae aperiam delectus nulla voluptate.</p>
</div>`;
const contactPage = `<div class="contact">
<h1>CONTACT</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus harum quod architecto? Deleniti necessitatibus eligendi saepe dolores tenetur eaque voluptatem magnam minus, optio reiciendis temporibus dignissimos tempore impedit vero.</p>
<img src="assets/img/pingu-walk.gif" alt="">
<p>Ab voluptates molestias illo mollitia vero numquam explicabo dolorem praesentium voluptatibus fuga, suscipit, aliquam recusandae perferendis aliquid commodi non. Est, id necessitatibus. Porro modi unde nemo repudiandae nisi, rerum voluptate.</p>
<p>Officia voluptatem accusamus voluptatum tempora necessitatibus, deserunt sapiente temporibus ab at corporis? Eveniet omnis ullam iste fuga libero veritatis cum voluptates exercitationem facilis nihil illo, beatae aperiam delectus nulla voluptate.</p>
</div>`;



export function changePage(pageName) {
  let pageVarName = pageName + "Page";
  console.log(pageName);
  $("#app").html(eval(pageVarName));
  //Eval will turn the string into a variable
}
