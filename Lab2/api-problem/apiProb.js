let url;

async function fetchPosts() {
  url = "http://jsonplaceholder.typicode.com/posts";
  response = await fetch(url);
  data = await response.json();

  data.map((data) => {
    let check = wordCounter(data.title);
    if (check > 6) {
      console.log(data.title);
    }
  });
}

function wordCounter(str) {
  let arr = str.split(" ");
  return arr.filter((word) => word !== "").length;
}

fetchPosts();
