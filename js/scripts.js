const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/tonkotsu.jpeg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./images/ramen 1.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "./images/shoyu.jpeg", rating: 3,comment:"awsome" },
    {id: 4, name:"Naruto Ramen", restaurant:"suzuki", image:"./images/miso.jpeg", rating:6, comment:"perfect"},
    {id:5, name:"kimichi ramen", restaurant:"biko", image:"./images/kimchi.jpeg", rating: 7, comment:"incredible"}
 ]; 
 
function main(){
   displayRamen();
   addSubmitListener();
}
document.addEventListener("DOMContentLoaded",main())


 
 function displayRamen(){
    const menu=document.getElementById("ramen-menu");
    menu.innerHTML= ``;
    ramens.forEach((ramen)=>{
         const images=document.createElement("img");
         images.src=ramen.image;
         images.alt=ramen.name;
         images.addEventListener('click', () => handleClick(ramen))
        menu.appendChild(images)
        
      })
 }
 
function handleClick(ramen){
   const details=document.getElementById("ramen-detail")
   const images=document.createElement("img");
   images.src=ramen.image;
   images.alt=ramen.name;   

   const name=document.createElement("p");
   const restaurant=document.createElement("p");
   const rating=document.createElement("p");
   const comment=document.createElement("p");

   details.innerHTML = ""

   name.innerHTML=`name:${ramen.name}`;
   restaurant.innerHTML=`restaurant:${ramen.restaurant}`;
   rating.innerHTML=`rating:${ramen.rating}`;
   comment.innerHTML=`comment:${ramen.comment}`;

   details.appendChild(images);
   details.appendChild(name);
   details.appendChild(restaurant);
   details.appendChild(rating);
   details.appendChild(comment);
   
}
function addSubmitListener(){
   const button=document.getElementById("t62")
   button.addEventListener('click',(e)=>{
       e.preventDefault();
       submitDetails()})
}

function submitDetails(){
   const name_detail=document.getElementById("t1")
   const restaurant_detail=document.getElementById("t2")
   const image_detail=document.getElementById("t3")
   const rating_detail=document.getElementById("t4")
   const comment_detail=document.getElementById("t52")

   const name_value=name_detail .value;
   const restaurant_value=restaurant_detail.value;
   const image_value=image_detail.value;
   const rating_value=rating_detail.value;
   const comment_value=comment_detail.value;
   
   
   

   const newArray={
      id: ramens.length+1,
      name:name_value,
      restaurant: restaurant_value,
      image: image_value,
      rating: rating_value,
      comment: comment_value

   };

   ramens.push(newArray);

   displayRamen(ramens);
   document.querySelector("#ramen_form").reset();
    }