  const data = [{
        name: "Janvi",
        city: "Hyderabad",
        age: 25
    }, {
        name: "Mohan",
        city: "Pune",
        age: 30
    }, {
        name: "Shyam",
        city: "Hyderabad",
        age: 21
    }, {
        name: "Madhav",
        city: "Mumbai",
        age: 25
    }, {
        name: "Tabish",
        city: "Basmat",
        age: 27
    }, {
        name: "Ayan",
        city: "pune",
        age: 27
    }, {
        name: "Ahad",
        city: "Basmat",
        age: 27
    }, {
        name: "Rahul",
        city: "mumbai",
        age: 27
    }, {
        name: "Anshara",
        city: "karnataka",
        age: 27
    }, {
        name: "Tabish",
        city: "Basmat",
        age: 27
    },
];

    const mainDiv= document.getElementById("main");

    const generateComponent=(curr)=>{
     const divcomp = document.createElement("div");
     divcomp.setAttribute("class","comp");
     const title = document.createElement("h3");
     title.innerText= curr.name;

     const city =document.createElement("h3");
     city.innerText= curr.city;

     const age = document.createElement("h3");
     age.innerText= curr.age;

     divcomp.appendChild(title);
     divcomp.appendChild(city);
     divcomp.appendChild(age);

     mainDiv.appendChild(divcomp);
    }

    data.forEach((item)=>{
     generateComponent(item)
    })