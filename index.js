
const worksheet=document.querySelector(".worksheet")
const resolution=document.querySelector(".resolution")
let row=[]
let pixel=[]
let side=17
let r=0

renderWorksheet()

function renderWorksheet()
{
    for(let i=0;i<side;i++)
    {  
        pixel[i]=[]
        row[i]=document.createElement("div")
        worksheet.appendChild(row[i])
        row[i].classList.add("row")
        for(let j=0;j<side;j++)
        {
            pixel[i][j]=document.createElement("div")
            pixel[i][j].style.height=(500/side).toString()+"px"
            pixel[i][j].style.width=(500/side).toString()+"px"
            row[i].appendChild(pixel[i][j])
            pixel[i][j].classList.add("pixel")
            pixel[i][j].addEventListener("mouseover",function(e)
            {
                r=Number(e.target.style.background.slice(4,e.target.style.background.search(",")))-255/10
                if(!e.target.style.background)
                {
                    r=255-255/10
                }
                e.target.style.background="rgb("+r.toString()+","+r.toString()+","+r.toString()+")";
                console.log(r)
                console.log(e.target.style.background.slice(4,e.target.style.background.search(",")))
            })
        }
    }
}

resolution.addEventListener("click",function()
{
    if(row[0] !=undefined )
    {
        for(let i=0;i<side;i++)
        {
            for(let j=0;j<side;j++)
            {
                pixel[i][j].remove()
            }
        }
    }
    side=Number(prompt("Enter size of side"))
    while(side>=100 || side<=0)
    {
        side=Number(prompt("Enter size of side"))
    }
    renderWorksheet()
});