let icon = document.querySelector('.icon')
let ul = document.querySelector('ul')

icon.addEventListener('click', () => {
    ul.classList.toggle("showData")
    console.log(ul);
})

let crd = document.querySelectorAll('.crd')
let itemPage = document.querySelector('.itemPage')
let container = document.querySelector('.container')
let itemImg = document.querySelector('#itemImg')
let buybtn = document.getElementById('buyBtn')
let commentPage = document.querySelector('.commentPage')
let rCard = document.querySelectorAll('.rCard')
let userImg = document.querySelector('#userImg')




rCard.forEach(function(value){
    value.addEventListener('click', function(){
        commentPage.style.display = "flex";
        container.style.display = "none";

        let imgsrc = value.firstElementChild.src;
        userImg.src = imgsrc;
    })
    
})

crd.forEach(function (curValue) {
    curValue.addEventListener('click', function () {
        itemPage.style.display = "flex";
        container.style.display = "none"

        let imgsrc = curValue.firstElementChild.src;
        itemImg.src = imgsrc;

        
        

        buybtn.addEventListener('click', function() {
            document.querySelector('.buyPage').style.display = "block";
            document.querySelector('.buyText').innerHTML = `<h3>Enter Details</h3>
            <input type="text" placeholder="enter your name" id="name"> <br>
            <input type="text" placeholder="enter your Address" id="address"> <br>
            <input type="text" placeholder="enter your Mobile number" id="num"> <br>
            <h3>Payment Option</h3>
            <select>
                <option value="Google-Pay">Google-Pay</option>
                <option value="Phone-Pay">Phone-Pay</option>
                <option value="Bharat-Pay">Bharat-Pay</option>
                <option value="Cash-On-Delivery">Cash-On-Delivery</option>
            </select><br>`


            let buyText = document.querySelector('.buyText')

            let button = document.createElement("button");
            button.innerText = "Submit";
            buyText.appendChild(button)

            button.addEventListener('click', function () {
                let name = document.getElementById("name");

                if (name.value == "" && address.value == "" && num.value == "") {
                    alert("Please enter your details")
                }
                else {
                    alert("Your Response Recorded")
                }
            })


            let cross = document.querySelector('.cross');
            cross.addEventListener('click', function () {
                document.querySelector('.buyPage').style.display = "none";
            })
        })


    });
})

let home = document.querySelector('#mains')
let shop = document.querySelector('#shops')
let review = document.querySelector('#reviews')
let blog = document.querySelector('#blog')
let contact = document.querySelector('#contacts')

shop.addEventListener('click', ()=>{
    shop.style.color = "rgb(4, 244, 244)";
    review.style.color = "white";
    blog.style.color = "white";
    contact.style.color = "white";
})

review.addEventListener('click', ()=>{
    review.style.color = "rgb(4, 244, 244)";
    shop.style.color = "white";
    blog.style.color = "white";
    contact.style.color = "white";
})
blog.addEventListener('click', ()=>{
    blog.style.color = "rgb(4, 244, 244)";
    review.style.color = "white";
    shop.style.color = "white";
    contact.style.color = "white";
})
contact.addEventListener('click', ()=>{
    contact.style.color = "rgb(4, 244, 244)";
    review.style.color = "white";
    blog.style.color = "white";
    shop.style.color = "white";
})

const connect = () =>{
    let name = document.getElementById('name')
    let number = document.getElementById('number')
    if(name.value === "" && number.value === ""){
        alert("Please Fill The Data")
    }
    else{
        alert("You Are Connected With Us")
    }
    
}

