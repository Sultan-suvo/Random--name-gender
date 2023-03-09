const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = (user) => {
    const genderTag = document.getElementById("gender");
    
    console.log(user.results[0].gender)
    genderTag.innerText = user.results[0].gender;
   

    const nameTag = document.getElementById("name")
    nameTag.innerText =user.results[0].name.title + ' ' + user.results[0].name.last + ' ' + user.results[0].name.last+ 
    console.log(user.results[0].name.last)

}

loadUser();