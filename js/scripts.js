const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517798/preview", rating: 3,comment:"awsome" },
    {id: 4, name:"Naruto Ramen", restaurant:"suzuki", image:"https://moringa.instructure.com/courses/967/files/517799/preview", rating:6, comment:"perfect"},
    {id:5, name:"kimichi ramen", restaurant:"biko", image:"https://moringa.instructure.com/courses/967/files/517797/preview", rating: 7, comment:"incredible"}
 ];
 
 function displayRamen(){
    const menu=document.getElementById("ramen-menu");
    menu.innerHTML= ``;
    ramens.forEach((ramen)=>{
         const images=document.createElement("img");
        images.src=ramen.image;
        images.alt=ramen.name;
        menu.appendChild(images)
        images.addEventListener('click',ramenDetailsDisplay)
        
      })
 }
 displayRamen()


 
 

