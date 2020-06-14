
const container = document.querySelector("#container");
let num = 20;
let body = document.querySelector("body");
let heading = document.querySelector("h1");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");
let width = container.offsetWidth;
let height = container.offsetHeight;
let reset = document.getElementById("reset");
let basic = document.getElementById("basic");
let pro = document.getElementById("pro");
let nyan = document.getElementById("nyan");
let mode = "basic";

//Initialize the grid with 20x20 squares;

newGrid(num);

//event listener for reset button

reset.addEventListener("click",function(){
    num = prompt("Enter the size of the grid (2 to 100)");
    if((num<101)&&(num>1))
    {
        console.log("su")
        newGrid(num);
    }
    else{
        alert("Invalid Input");
    }
});

//event listeners for mode buttons
basic.addEventListener("click",function(){
    mode = "basic";
    basic.classList.add("selected");
    pro.classList.remove("selected");
    nyan.classList.remove("selected");
    body.style.backgroundImage = "url('http://www.pngmart.com/files/11/Derp-Face-Meme-PNG-Image.png')"
    heading.classList.remove("nyanh1");

    
})

pro.addEventListener("click",function(){
    mode = "pro";
    basic.classList.remove("selected");
    pro.classList.add("selected");
    nyan.classList.remove("selected");
    body.style.backgroundImage = "url('https://i.kym-cdn.com/photos/images/newsfeed/000/294/417/d81.png')"
    heading.classList.remove("nyanh1");

})

nyan.addEventListener("click",function(){
    mode = "nyan";
    basic.classList.remove("selected");
    pro.classList.remove("selected");
    nyan.classList.add("selected");
    body.style.backgroundImage = "url('https://thumbs.gfycat.com/EnormousSereneCassowary.webp')";
    heading.classList.add("nyanh1");
})


//functions to create grid

function makeRows(number){
    for(i=0; i<number;i++){
        let row = document.createElement('div');
        container.appendChild(row).className="row";
    }
}

function makeCells(number){
    for(i=0; i<rows.length;i++){
        for(j=0;j<number;j++){
            let cell = document.createElement("div");
            rows[j].appendChild(cell).className = "cell";
            cell.style.width = (width - (number*2))/number + "px";
            cell.style.height = cell.style.width;    
            }
        }   
}
//function used to fill the squares on hover according to mode selected
function draw(){
    
    for (i=0; i<cells.length;i++)
        {
            cells[i].addEventListener('mouseover', function(){
                if(mode=="basic"){
                    this.style.background = "rgba(0, 0, 0, 1)";  
                }
                else if(mode=="pro"){
                    if (this.style.backgroundColor !== "rgb(0, 0, 0)"){
                        let shade = this.style.background;
                        let newShade = increment(shade);
                        this.style.background = newShade;
                    }
                }
                else if(mode=="nyan"){
                    this.style.background = colorGen();
                        }
        
                 
        } );      
    }
}



//Function to reset grid
function newGrid(num){
    for (i=0;i<cells.length;i++)
    {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
           }
    }
   
    makeRows(num);
    makeCells(num);
    draw();

}

//Function for pro mode ie increasing shade of black by 20% on every hover

function increment(shade){
    if(shade==""){
        shade = "rgba(0, 0, 0, 0)"
    }
    let current = shade.split(', ');
    current[3] = parseFloat(current[3]);
    current[3] += 0.2;
    let darker = current.join(', ');
    darker = darker + ")";
    return darker;

}
//function used in nyan mode. Randomize color on every square hovered
function colorGen(){
    let ranColor = "rgb( " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
    return ranColor;
}

