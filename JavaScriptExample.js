// Arrow function
const add = (a, b) => a + b;
let sum = add(2, 5);
console.log (`Arrow functio add: ${sum}`);

const calculatePrice = (price, tax) => {
    let total = price + (price * tax);
    return total;
}
console.log (calculatePrice(100, 0.15));

const numbers = [1, 2, 3, 4, 5 ];
const doubleArrow = numbers.map(num => num * 2);
console.log(doubleArrow);

// DESTRUCTURING
const names = ["Nimal", "Amal", "Kamal"];
const [first, second] = names;
console.log("Array distructuring : ", first, second);

const car = {
    brand: "BMW",
    wheels: 4
}
const {brand, wheels} = car;
console.log("Object destructuring : ", brand, wheels);

// SPREAD OPERATOR
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log("Merged Arrays : ", merged);

const obj1 = {a:1};
const obj2 = {b:2};
const combined = {...obj1, ...obj2};
console.log("Merged objects : ", combined); 

//PROMISES
const myPromise = new Promise((resolve, reject)=>{
    const myNumber = Math.random()
    console.log(myNumber);
    if(myNumber > 0.5){
        resolve("more than 0.5")
    } else {
        reject("les than 0.5")
    }
});
console.log(myPromise);
myPromise.then((res)=>{
      console.log(res);
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log ("all done")
});  


//ASYNC / AWAIT
function getUser() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id: 1, name: "Nimesha" });
      }, 1000);
    });
  }
  
  function getPosts(userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { id: 101, title: "Learning JS", userId },
          { id: 102, title: "Async/Await is cool", userId }
        ]);
      }, 1500); 
    });
  }
  
  async function showUserAndPosts() {
    try {
      console.log("Fetching user...");
      const user = await getUser();   
      console.log("User:", user);
  
      console.log("Fetching posts...");
      const posts = await getPosts(user.id); 
      console.log("Posts:", posts);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  showUserAndPosts();
  
//ARRAY METHODS
const nums = [1, 2, 3, 4, 5];

// map
const doubled = nums.map(n => n * 2);
console.log("Map (doubled):", doubled);

// filter
const evens = nums.filter(n => n % 2 === 0);
console.log("Filter (evens):", evens);

// reduce
const total = nums.reduce((acc, n) => acc + n, 0);
console.log("Reduce (total):", total); 





