async function getDetails(){
    showLoader();
    try{    
        let url ="https://reqs.in/api/users";
        const res = await fetch(url);
        if(res.status >= 200 && res.status<400){
            const resData = await res.json(); 
            const users = resData.data;
            getUsers(users);
            return;
        }
        throw new Error(res.statusText);   
    }
    catch(e){
        console.log(e);
    }finally{
        hideLoader();
    }
}

function getUsers(users){
    const container = document.getElementById('users');
    let linodes = users.map((item)=>{
        const li = createItem(item);
        return li;
    });
    container.append(...linodes);
}

function createItem(item){
    const {first_name,last_name}= item;
    const li = document.createElement("li");
    li.innerText =`${first_name} ${last_name}`;
    return li;
}
function showLoader(){
    const load = document.getElementById('loader')
    load.style.display ='block';
}

function hideLoader(){
    const load = document.getElementById('loader')
    load.style.display ='none';
}
getDetails();