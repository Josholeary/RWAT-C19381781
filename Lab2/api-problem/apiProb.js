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

  let bodyData;
  data.map((data) => {
    bodyData += JSON.stringify(data.body);
  });
  let frequency = frequencyMap(bodyData);
  console.log(frequency);
}

function wordCounter(str) {
  let arr = str.split(" ");
  return arr.filter((word) => word !== "").length;
}

function frequencyMap(str) {
  let freqMap = str.split(" ").map((i, j) => {
    return {
      Word: i,
      Frequency: str.split(" ").filter((j) => j === i).length,
    };
  });
  let freqArr = Array.from(new Set(freqMap.map(JSON.stringify)));
  return freqArr;
}

fetchPosts();
