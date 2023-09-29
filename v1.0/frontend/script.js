// Get all menu items
const menuItems = document.querySelectorAll('#menu li');

// Define a function to load content based on a menu item click
function activeMenuButton(contentId) {

  // Remove the "active" class from all menu items
  menuItems.forEach((item) => {
    item.querySelector('a').classList.remove('active');
  });

  // Add the "active" class to the clicked menu item
  const clickedMenuItem = document.querySelector(`a[href="#${contentId}"]`);
  clickedMenuItem.classList.add('active');
}

// Get the content area
const contentArea = document.getElementById('content');

// Define a function to load content based on a menu item click
function loadContent(contentId, htmlContent) {
  // Clear the previous content
  contentArea.innerHTML = '';

  // Set the "active" class based on the clicked menu item
  activeMenuButton(contentId);

  // Change the URL hash to reflect the current content
  window.location.hash = contentId;

  // Render the HTML content into the content area
  contentArea.innerHTML = htmlContent;
}

// Add a click event listener to each menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    // Prevent the default behavior of anchor tags (e.g., following the href)
    event.preventDefault();

    // Get the href attribute of the clicked menu item
    const href = menuItem.querySelector('a').getAttribute('href').substring(1); // Remove the '#' symbol

    // Handle different menu item clicks
    if (href === 'gallery') {
      loadContent(href, galleryHTML()); // Use the galleryHTML function for gallery
    } else if (href === 'edit') {
      loadContent(href, editGalleryHTML());
    } else if (href === 'bin') {
      loadContent(href, binGalleryHTML());
    }
  });
});

//Duplán töltbe
// Handle page load or reload
// window.addEventListener('load', () => {
//   // Get the current hash value
//   const currentHash = window.location.hash.substring(1);

//   // Load the corresponding content based on the hash
//   if (currentHash === 'gallery') {
//     loadContent(currentHash, galleryHTML());
//   } else if (currentHash === 'edit') {
//     loadContent(currentHash, editGalleryHTML());
//   } else if (currentHash === 'bin') {
//     loadContent(currentHash, binGalleryHTML());
//   } 
//   else {
//     // Handle other hash values or set a default action
//   }
// });

//TODO URL
// window.addEventListener('load', () => {
//   // Get the current hash value
//   const currentHash = window.location.hash.substring(1);

//   // Load the corresponding content based on the hash
//   if (currentHash === 'gallery') {
//     loadContent(currentHash, galleryHTML());
//   } else if (currentHash === 'edit') {
//     loadContent(currentHash, editGalleryHTML());
//   } else if (currentHash === 'bin') {
//     loadContent(currentHash, binGalleryHTML());
//   } 
//   else {
//     // Handle other hash values or set a default action
//   }
// });

// Function to generate HTML content for the gallery
function galleryHTML() {
  return `
  
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="img_5terre.jpg">
        <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
  
  
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="img_forest.jpg">
        <img src="img_forest.jpg" alt="Forest" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
  
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="img_lights.jpg">
        <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>
  
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="img_mountains.jpg">
        <img src="img_mountains.jpg" alt="Mountains" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
  </div>

  <div>
    <input type="file" id="fileInput" accept="image/*">
    <button onclick="loadAddPicture()">Add Picture</button>
  </div>
  <div id="imageContainer">
    <!-- Selected image will be displayed here -->
  </div>
  `;
}

function editGalleryHTML() {
  return `
    <div class="responsive">
      <div class="gallery">
        <a target="_blank" href="img_5terre.jpg">
            <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div>
      <div class="center">
        <button class="changeButton">Edit</button>
      </div>
      <div class="center">
        <button class="changeButton">Delete</button>
      </div>
    </div>


  <div class="responsive">
    <div class="gallery">
        <a target="_blank" href="img_forest.jpg">
            <img src="img_forest.jpg" alt="Forest" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>
    <div>
        <div class="center">
            <button class="changeButton">Edit</button>
        </div>
        <div class="center">
            <button class="changeButton">Delete</button>
        </div>
    </div>
  </div>

  <div class="responsive">
    <div class="gallery">
        <a target="_blank" href="img_lights.jpg">
            <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>
    <div>
        <div class="center">
            <button class="changeButton">Edit</button>
        </div>
        <div class="center">
            <button class="changeButton">Delete</button>
        </div>
    </div>
  </div>

  <div class="responsive">
    <div class="gallery">
        <a target="_blank" href="img_mountains.jpg">
            <img src="img_mountains.jpg" alt="Mountains" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
    </div>
    <div>
        <div class="center">
            <button class="changeButton">Edit</button>
        </div>
        <div class="center">
            <button class="changeButton">Delete</button>
        </div>
    </div>
  </div>
  `;
}

//TODO
function creatorsHTML(){

}

function binGalleryHTML(){
  return `
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="img_5terre.jpg">
          <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
    </div>
    <div class="center">
      <button class="changeButton">Restore</button>
    </div>
    <div class="center">
      <button class="changeButton">Delete permanently</button>
    </div>
  </div>


<div class="responsive">
  <div class="gallery">
      <a target="_blank" href="img_forest.jpg">
          <img src="img_forest.jpg" alt="Forest" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
  </div>
  <div>
      <div class="center">
          <button class="changeButton">Restore</button>
      </div>
      <div class="center">
          <button class="changeButton">Delete permanently</button>
      </div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <a target="_blank" href="img_lights.jpg">
          <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
  </div>
  <div>
      <div class="center">
          <button class="changeButton">Restore</button>
      </div>
      <div class="center">
          <button class="changeButton">Delete permanently</button>
      </div>
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <a target="_blank" href="img_mountains.jpg">
          <img src="img_mountains.jpg" alt="Mountains" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
  </div>
  <div>
      <div class="center">
          <button class="changeButton">Restore</button>
      </div>
      <div class="center">
          <button class="changeButton">Delete permanently</button>
      </div>
  </div>
</div>
`;
}

function editPicture(){
  return `
  <div class="responsive">
  <div class="gallery">
      <a target="_blank" href="img_mountains.jpg">
          <img src="img_mountains.jpg" alt="Mountains" width="600" height="400">
      </a>
      <div class="desc">Add a description of the image here</div>
  </div>
  <div>
      <div class="center">
          <button class="changeButton">Restore</button>
      </div>
      <div class="center">
          <button class="changeButton">Delete permanently</button>
      </div>
  </div>
</div>
  `;
}

loadContent("gallery", galleryHTML());
