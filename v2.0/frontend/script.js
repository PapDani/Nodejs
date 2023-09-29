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
    } else if (href === 'creators') {
      loadContent(href, creatorsHTML());
    }
  });
});

//dropdown button
document.querySelector('.dropbtn').addEventListener('click', function() {
  const dropdownContent = document.querySelector('.dropdown-content');
  // Toggle the display of the dropdown content
  if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
  } else {
      dropdownContent.style.display = 'block';
  }
});

// Close the dropdown when the user clicks outside of it
window.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown.contains(event.target)) {
      const dropdownContent = document.querySelector('.dropdown-content');
      dropdownContent.style.display = 'none';
  }
});

// Function to generate HTML content for the gallery
function galleryHTML() {
  return `

  <h2 style="text-align:center">Gallery</h2>
  
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="">
        <img src="" alt="First picture" width="600" height="400">
      </a>
      <div class="desc">Image Title</div>
      <div class="desc">Image description</div>
    </div>
  </div>
  
  
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="">
        <img src="" alt="Second Picture" width="600" height="400">
      </a>
      <div class="desc">Image Title</div>
      <div class="desc">Image description</div>
    </div>
  </div>
  
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="">
        <img src="" alt="Third Picture" width="600" height="400">
      </a>
      <div class="desc">Image Title</div>
      <div class="desc">Image description</div>
    </div>
  </div>
  
  <div class="responsive">
    <div class="gallery">
      <a target="_blank" href="">
        <img src="" alt="Fourth Picture" width="600" height="400">
      </a>
      <div class="desc">Image Title</div>
      <div class="desc">Image description</div>
    </div>
  </div>


  <div id="addPicture">
    <input type="file" id="fileInput" accept="image/*">
    <button onclick="loadAddPicture()">Add Picture</button>
    <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
        </div>
    </div>
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
  return `
  <h2 style="text-align:center">Creators</h2>

  <div class="card">
    <img src="" alt="Profile picture" style="width:100%">
    <h1>Name</h1>
    <p>Email</p>
    <p>Number of pictures</p>
    <p><button class="profileButton">Edit</button></p>
  </div>
  `;
}

function editCreatorHTML(){
  return `

  `;
}

function editPictureHTML(){
  return `

  `;
}

loadContent("gallery", galleryHTML());
