const userInformation = document.getElementById("userInformation")
const APIURL = "https://api.github.com";
const search = document.getElementById("search");
const input = document.getElementById("input");

input.addEventListener("keyup", (e) => {
  if (e.code === 'Enter') {
    getUser();
    userInformation.style.display = "block"
  }
})

// Search user on GitHub
search.addEventListener('click', () => {
  getUser();
  userInformation.style.display = "block"
})

async function getUser() {
  const response = await fetch(`${APIURL}/users/${input.value}`);
  const json = await response.json();
  console.log(json)
  console.log(json.login);
let bio = json.bio;
if (bio === null) {
  bio = `No Bio available for ${json.name}`
}
console.log(bio);

let navUserName = `
<svg fill="#CDD9E5" height="34" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
<path
    d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
</path>
</svg>
<div>
<h1 class="font-medium text-[#CDD9E5]">${json.name}</h1>
</div>
`
document.getElementById("navUserName").innerHTML = navUserName;
let location = json.location
if (location == null){
  location = `<p class="text-sm text-[#F1F1F1] inline-block">Not provided</p>`
}
  let profile = `
  <div >
  <img width="180" src="${json.avatar_url}" alt="">
</div>
<div >
  <h1 >${json.name}</h1>
  <p >@${json.login}</p>
  <h1 >${bio}</h1>

  <p >Location:- ${location}</p>
</div>`;
  let box = document.getElementById("box").innerHTML = profile

  let profileInfo = `
  <div >
  <div>
      <h1 >Repositories</h1>
      <h1 >${json.public_repos}</h1>
  </div>
</div>


<div >
  <div>
      <h1 >Followers</h1>
      <h1 >${json.followers}</h1>
  </div>
</div>

<div >
  <div>
      <h1 >Following</h1>
      <h1 >${json.following}</h1>
  </div>
</div>
  `
  document.getElementById("userInfo").innerHTML = profileInfo
}
