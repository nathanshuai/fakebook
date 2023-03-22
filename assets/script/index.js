'use strict';


function displayFileName() {
    const input = document.getElementById("image");
    const fileName = input.files[0].name;
    document.getElementById("file-name").innerHTML = fileName;
}

class User {
    #id;
    #name;
    #userName;
    #email;
  
    constructor(id, name, userName, email) {
      this.#id = id;
      this.#name = name;
      this.#userName = userName;
      this.#email = email;
    }
  
    get id() {
      return this.#id;
    }
  
    get name() {
      return this.#name;
    }
  
    get userName() {
      return this.#userName;
    }
  
    get email() {
      return this.#email;
    }

    getInfo() {
        return `User account information:\nID: ${this.#id}\nName: ${this.#name}\nUsername: ${this.#userName}\nEmail: ${this.#email}`;
    }
  }
  
class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;
  
    constructor(id, name, userName, email, pages, groups, canMonetize) {
      super(id, name, userName, email);
      this.#pages = pages;
      this.#groups = groups;
      this.#canMonetize = canMonetize;
    }
  
    get pages() {
      return this.#pages;
    }
  
    get groups() {
      return this.#groups;
    }
  
    getCanMonetize() {
        if(this.getCanMonetize) return 'Yes';
      return 'No';
    }

    getInfo() {
        return `${super.getInfo()}\nSubscriber account information:\nPages: ${this.#pages}\n
        Groups: ${this.#groups}\nCan Monetize: ${this.getCanMonetize()}`;
    }
}

const subscriber = new Subscriber(
    1234, // id
    'Nathan', // name
    'nathanshuai', // username
    'nathanshuai@example.com', // email
    ['Page 1', 'Page 2', 'Page 3'], // pages
    ['MITT', 'Winnipeg'], // groups
    true // canMonetize
);

// Get the button and modal container elements
const accountBtn = document.querySelector('.img');
const modalContainer = document.getElementById('modal-container');

// Add click event listener to the button
accountBtn.addEventListener('click', () => {
  // Call the getInfo() method to retrieve user account information
  const userInfo = subscriber.getInfo();
  // Populate the content of the modal with the retrieved information
  const userID = document.getElementById('id');
  const userName = document.getElementById('username');
  const userEmail = document.getElementById('email');
  const userGroups = document.getElementById('groups');
  const userCanMonetize = document.getElementById('can Monetize');
  userID.textContent = `ID: ${subscriber.id}`;
  userName.textContent = `Username: ${subscriber.userName}`;
  userEmail.textContent = `Email: ${subscriber.email}`;
  userGroups.textContent = `Groups: ${subscriber.groups}`;
  userCanMonetize.textContent = `Can monetize: ${subscriber.getCanMonetize()}`;

  // Display the modal
  modalContainer.style.visibility = 'visible'; 
});

// Function to add a new post
function addPost() {
    // Get the post text and image
    const postText = document.getElementById('myTextarea').value;
    const postImage = document.getElementById('image').files[0];
  
    // Create a new post object
    const post = {
        text: postText,
        image: null,
        date: new Date()
    };
      
    if (postImage) {
        post.image = URL.createObjectURL(postImage);
    }
  
    // Add the post to the list
    const postList = document.getElementById('posts');
    const newPost = document.createElement('li');
    newPost.classList.add('post');
    let postImageSelected = '';
    if (postImage) {
        postImageSelected = `<img class="post-image" src="${post.image}">`;
    } else {
        postImageSelected = '';
    }
    newPost.innerHTML = `
      <div class="post-header">
        <img src="./assets/image/My image.png">
        <h3>${subscriber.name}</h3>
        <p class="post-date">${post.date.toString().substring(3, 15)}</p>
      </div>
      <p class="post-text">${postText}</p>
      ${postImageSelected}
    `;
    postList.insertBefore(newPost, postList.firstChild);

    // Clear the input fields
    document.getElementById('myTextarea').value = '';
    document.getElementById('image').value = '';
    document.getElementById("file-name").innerHTML = '';
}  






