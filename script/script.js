let toDoList = [
  {
      image: "../images/Walking-dog.jpg",
      title: "Take the dog for a walk",
      details: "Go to Prater Hundezone - Don't forget water and treats!",
      priority: "0",
      deadline: "10.06.2024"
  }, {
      image: "../images/Gym.jpg",
      title: "Go to the Gym",
      details: "Run:30 mins - Biceps - UpperBack - LowerBack",
      priority: "0",
      deadline: "10.06.2024"
  }, {
      image: "../images/Doctor.jpg",
      title: "Doctor Appointment",
      details: "Tell Ms. Hudson that you finally managed to grow hair by pure concentration",
      priority: "0",
      deadline: "10.06.2024"
  }, {
      image: "../images/Meditate.jpg",
      title: "Meditate",
      details: "Calm your mind, think about all the positive aspects of your life...",
      priority: "0",
      deadline: "10.06.2024"
  }, {
      image: "../images/C.jpg",
      title: "Learn C++",
      details: "Because everyone needs some bitter moments in life to appreciate little things",
      priority: "0",
      deadline: "10.06.2024"
  }, {
      image: "../images/AuntGrace.jpg",
      title: "Visit Aunt Grace",
      details: "She said she is making Pumpkin Pie, you'd better not miss it! and call your cousin",
      priority: "0",
      deadline: "10.06.2024"
  }, {
      image: "../images/Coding.jpg",
      title: "Practice Coding for 12 Hours",
      details: "Monday: 3hrs - Tuesday: 3hrs - Wed: 2hrs - Thur: 2hrs - Fri:2hrs",
      priority: "0",
      deadline: "10.06.2024"
  }, {
      image: "../images/Grocery.jpg",
      title: "Go Grocery-shopping",
      details: "Potatoes, Carrots, Onions, Broccoli, Yoghurt, Milk, Cheese",
      priority: "0",
      deadline: "10.06.2024"
  }, {
      image: "../images/Football.jpg",
      title: "Go to Football Training",
      details: "Bring: Shoes, drinks, Couscous Salad, towel - Call Jonathan ",
      priority: 0,
      deadline: "10.06.2024"
  }
];

let completedItems= [];

function renderToDoList(toDoList) {
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = '';

 
  for (let val of toDoList) {
      resultDiv.innerHTML += `
  <div>
    <div class="container shad mb-4 border rounded border-black border-opacity-10 ">
    <div class="d-flex align-items-center">
      <p class="my-2 badge text-bg-info" style="--bs-bg-opacity: .5;">Task</p>
      <p class="flex-grow-1 my-2"> &nbsp; </p>
      
        <i class="fa-regular fa-bookmark my-2 px-3 bmark"></i
      >
      <i class="fa-solid fa-ellipsis-vertical my-2"></i
      >
      </div>
      <div class="card border-0" style="min-width: 100%">
        <img class="card-img-top border rounded border-dark-subtle p-1" src="${val.image}" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title text-center">${val.title}</h5>
          <p class="card-text text-center">${val.details}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fa-solid fa-triangle-exclamation btnpriority"></i> Priority level: <span class=" text-white px-1 rounded background bg-success priority-level">
            ${val.priority} </span>
          </li>
          <li class="list-group-item">
            <i class="fa-regular fa-calendar-days"></i> Deadline: 
            ${val.deadline} 
          </li>
        </ul>
        <div class="card-body d-flex justify-content-end">
          <button type="button" class="btn btn-danger me-2 btndelete">
            <i class="fa-solid fa-trash-can"></i> Delete
          </button>
          <button type="button" class="btn btn-success btndone">
            <i class="fa-regular fa-circle-check"></i> Done
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
}

let itemsNumber = toDoList.length;
document.getElementsByClassName("not")[0].innerHTML = `${itemsNumber}`;


if(itemsNumber <= 3) {
  document.getElementsByClassName("not")[0].classList.add("bg-success");
  document.getElementsByClassName("not")[0].classList.remove("bg-warning", "bg-danger");
}
else if(itemsNumber <= 6) {
      document.getElementsByClassName("not")[0].classList.add("bg-warning");
      document.getElementsByClassName("not")[0].classList.remove("bg-success", "bg-danger");
}
else if(itemsNumber <= 9) {
          document.getElementsByClassName("not")[0].classList.add("bg-danger");
          document.getElementsByClassName("not")[0].classList.remove("bg-warning", "bg-success");

}

let btnprior = document.querySelectorAll(".btnpriority");
btnprior.forEach((element, index) => {
  element.addEventListener("click", function() {
      if (toDoList[index].priority < 5) {
          toDoList[index].priority++;
      } else {
          toDoList[index].priority = 0;
      }
      
      document.querySelectorAll(".priority-level")[index].innerText = toDoList[index].priority;

      if (toDoList[index].priority <= 1) {
          document.getElementsByClassName("background")[index].classList.add("bg-success");
          document.getElementsByClassName("background")[index].classList.remove("bg-warning", "bg-danger");
      } else if (toDoList[index].priority <= 3) {
          document.getElementsByClassName("background")[index].classList.add("bg-warning");
          document.getElementsByClassName("background")[index].classList.remove("bg-success", "bg-danger");
      } else {
          document.getElementsByClassName("background")[index].classList.add("bg-danger");
          document.getElementsByClassName("background")[index].classList.remove("bg-success", "bg-warning");
      }
  });
});

let deleteButtons = document.querySelectorAll(".btndelete");
deleteButtons.forEach((element, i) => {
    element.addEventListener("click", function() {
        toDoList.splice(i, 1); 
        renderToDoList(toDoList);
    });
});
  

  let doneButtons = document.querySelectorAll(".btndone");

  doneButtons.forEach((element, i) => {
      element.addEventListener("click", function() {
          let completedItem = toDoList.splice(i, 1)[0];
          completedItems.push(completedItem);
          document.getElementById("completed").innerHTML += `
              <div>
                  <div class="container shad mb-4 border rounded border-black border-opacity-10">
                      <div class="d-flex align-items-center">
                          <p class="my-2 badge text-bg-info" style="--bs-bg-opacity: .5;">Task</p>
                          <p class="flex-grow-1 my-2"> &nbsp; </p>
                          <i class="fa-regular fa-bookmark my-2 px-3"></i>
                          <i class="fa-solid fa-ellipsis-vertical my-2"></i>
                      </div>
                      <div class="card opacity-25 border-0" style="min-width: 100%">
                          <img class="card-img-top border rounded border-dark-subtle p-1" src="${completedItem.image}" alt="Card image cap" />
                          <div class="card-body">
                              <h5 class="card-title text-center">${completedItem.title}</h5>
                              <p class="card-text text-center">${completedItem.details}</p>
                          </div>
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item">
                                  <i class="fa-solid fa-triangle-exclamation btnpriority" disabled></i> Priority level: <span class=" text-white px-1 rounded background bg-success priority-level">${completedItem.priority}</span>
                              </li>
                              <li class="list-group-item">
                                  <i class="fa-regular fa-calendar-days"></i> Deadline: ${completedItem.deadline}
                              </li>
                          </ul>
                          <div class="card-body d-flex justify-content-end">
                              <button type="button" class="btn btn-danger me-2 btndelete" disabled>
                                  <i class="fa-solid fa-trash-can"></i> Delete
                              </button>
                              <button type="button" class="btn btn-success btndone" disabled>
                                  <i class="fa-regular fa-circle-check"></i> Done
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          renderToDoList(toDoList);
      });
  });
};


renderToDoList(toDoList);
document.querySelector('.sort').addEventListener("click", function() {
  toDoList.sort((a, b) => a.priority - b.priority);
  renderToDoList(toDoList);
});

//This doesn't work anymore if I use "delete" or "done" buttons, I couldn't think of why or what I could do...
let bmarkbtn = document.querySelectorAll(".bmark");
bmarkbtn.forEach((element, index) => {
  element.addEventListener("click", function() {
    if (element.classList.contains("fa-regular")) {
      element.classList.remove("fa-regular");
      element.classList.add("fa-solid");
    } else {
      element.classList.remove("fa-solid");
      element.classList.add("fa-regular");
    }
  })
})






