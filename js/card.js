var body = document.querySelector('body')



var heading = document.createElement('h2')
heading.innerHTML= " card design "

var image = document.createElement('img')
image.src="img2.jpeg" 
image.style =' maxwidth:auto  '
              


var para = document.createElement('p')
para.innerText= "With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit.laudantium nihil, tenetur labore ea. Ad consequuntur rem veniam quod earum deleniti adipisci dolorum, dolorem voluptatum aspernatur laborum, facere ratione voluptatibus"
                   
                
para.style= 'cursor:pointer ' 



var btn = document.createElement('btn')
btn.innerHTML= " click me..... "

btn.style ='border: 2px solid black'
            
              

var container= document.createElement('div')
container.style= 'border: 2px solid black '
                 'width:500px'


body.appendChild(container)

container.append(heading,image,para,btn)






