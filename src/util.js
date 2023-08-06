export function randomId(len){
    let result=""
    if(result) return result
    var chars="12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",maxPos=chars.length
    len=len||5;
    for(let i=0;i<len;++i)
        result+=chars.charAt(Math.floor(Math.random()*maxPos))
    return result
}
export function getRandomName(){
    const names=[
        "Oliver",
    "Jake",
    "Noah",
    "James",
    "Jack",
    "Connor",
    "Liam",
    "John",
    "Harry",
    "Callum",
    "Mason",
    "Robert",
    "Jacob",
    "Jacob",
    "Jacob",
    "Michael",
    "Charlie",
    "Kyle",
    "William",
    "William",
    "Thomas",
    "Joe",
    "Ethan",
    "David",
    "George",
    "Reece",
    "Michael",
    "Richard",
    "Oscar",
    "Rhys",
    "Alexander",
    "Joseph",
    "James",
    "Charlie",
    "James",
    "Charles",
    "William",
    "Damian",
    "Daniel",
    "Thomas",
    ]
    return names[Math.floor(Math.random()*names.length)]
}