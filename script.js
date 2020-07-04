document.getElementById('like').addEventListener("click",(event)=>{
    document.getElementById("li").src="images/liked.JPG";
})

document.getElementById('like1').addEventListener("click",(event)=>{
    document.getElementById("li1").src="/images/liked.jpg";
})

document.getElementById('like2').addEventListener("click",(event)=>{
    document.getElementById("li2").src="/images/liked.jpg";
})


document.getElementById("comment").addEventListener("click",()=>{
    var i=document.createElement("input")
    i.setAttribute("type","text");
    i.setAttribute("placeholder","comment");
    i.setAttribute("id","c");
    var b=document.createElement("input")
    b.type="submit";
    b.value="post";
    b.setAttribute("onclick","add()");
    var d=document.createElement("div");
    d.appendChild(i);
    d.appendChild(b);
    document.getElementById("add").appendChild(d);
})


function add(){
    var c=document.getElementById("c").value;
    var p=document.createElement("p");
    p.innerHTML=c;
    var d=document.createElement("div").appendChild(p);
    document.getElementById("com").appendChild(d);
    document.getElementById("add").style.visibility="hidden";
}

