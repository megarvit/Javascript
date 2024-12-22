fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json()) //getting data as json file
.then(data => console.log(data));


fetch('https://www.google.com')
.then(res => res.text()) //getting data as text file
.then(data => console.log(data));

// async/wait - syntax sugar for promises : built on top of promises 

async function fetchData(){
    let res = await fetch('https://www.google.com');
    let data = res.text(); 
    console.log(data);
}
