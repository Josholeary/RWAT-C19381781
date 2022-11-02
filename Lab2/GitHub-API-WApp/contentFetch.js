const userUrl = "https://api.github.com/users/";
let reposUrl = "/repos";
let gistsUrl = "/gists";
let username;
let uData;
let rData;
let gData;

function search() {
  username = document.getElementById("username").value;
  uUrl = userUrl + username;
  rUrl = uUrl + reposUrl;
  gUrl = uUrl + gistsUrl;
  contentFetch(uUrl, rUrl, gUrl);
  document.getElementById("greeting").style.display = "none";
  document.getElementById("profHead").style.visibility = "visible";
  document.getElementById("repHead").style.visibility = "visible";
  document.getElementById("profileTable").style.display = "inline-block";
}

async function contentFetch(uUrl, rUrl, gUrl) {
  const uResponse = await fetch(uUrl);
  uData = await uResponse.json();

  const rResponse = await fetch(rUrl);
  rData = await rResponse.json();

  const gResponse = await fetch(gUrl);
  gData = await gResponse.json();

  render(uData, rData, gData);
}

function render(uData, rData, gData) {
  document.getElementById("name").innerHTML = uData.name;
  document.getElementById("profilePic").src = uData.avatar_url;
  document.getElementById("location").innerHTML = " " + uData.location;
  document.getElementById("email").innerHTML = uData.email; //email is unavailable as it is private data on the API
  document.getElementById("gists").innerHTML = gData.length;
  document.getElementById("uname").innerHTML = uData.login;
  let table = document.getElementById("repoTable");
  for (let i in rData) {
    let row = table.insertRow(i);
    let cell = row.insertCell(0);
    cell.innerHTML = `<h2> ${rData[i].name} </h2> <br> <p> ${rData[i].description} </p>`;
  }
}
