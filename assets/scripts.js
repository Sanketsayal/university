const Uniname=document.getElementById('university_name')
const btn=document.getElementById('search-btn')
let local=localStorage.getItem('favs')||[]

btn.addEventListener('click',searchUnivesity)

async function searchUnivesity(){
    console.log('jsdohsgsg')
    let api=`http://universities.hipolabs.com/search?name=${Uniname.value}&country=India`
    let response=await fetch(api);
    let data=await response.json();
    const body=document.getElementById('body')
    console.log(data)
    let html;
    data.map((item)=>{
        const state=item["state-province"]
       html+= `<tr>
        <td>${item.name}</td>
        <td>${state}</td>
        <td>${item.country}</td>
        <td>${item.web_pages[0]}</td>
        <td><button onclick="savefac('${item.name}')">Favourite</button></td>
    </tr>`
    })
    body.innerHTML=html
}

function savefac(name){
    local.push(name)
    localStorage.setItem('favs',local)

    console.log(local)
}