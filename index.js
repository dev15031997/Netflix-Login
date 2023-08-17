const users=['Dev','Doc','Pro']

const memberDiv=document.querySelector('.memberDiv')
const addIcon=document.querySelector('.addIcon')

const userIcons=()=>
{
    users.reverse()              //to reverse the order of display
    users.map((curElm)=>
    {
        memberDiv.insertAdjacentElement('afterbegin ',`<button class="btn"><span>${curElm}</span></button>`);
    })
}

addIcon.addEventListener('click',function()
{
    let userName=prompt("Enter your Name")

    if(userName!=null && !users.includes('userName'))
    {
        users.push(userName)
        memberDiv.insertAdjacentHTML('afterbegin',`<button class="btn"><span>${userName}</span></button>`);
    }
    else
    {
        prompt("user allReady Exists")
    }
})


userIcons()