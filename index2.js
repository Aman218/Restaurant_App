
async function getData() {
    let response = await fetch('https://dummyjson.com/carts/1');

     let data= await response.json();

     console.log(data);
}
getData();