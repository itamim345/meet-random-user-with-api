let getFriend = () => {
    fetch('https://randomuser.me/api/')
    .then (resp => resp.json())
    .then(data => displayFriend(data.results))
}

let displayFriend = friend =>{
    let friends = document.getElementById('friends');
    friends.innerHTML = `<div class="friend"> 
                        <img src="${friend[0].picture.large}"> <h3>Name:- ${friend[0].name.first} ${friend[0].name.last}</h3> 
                        <h4>Phone:- ${friend[0].phone}</h4> <h5>Email:- ${friend[0].email}</h5> <h5>Gender:- ${friend[0].gender.toUpperCase()}</h5> </div>`
}