const user1 = ['abul', 'babul', 'kabul'];
const user2 = ['ibrahim', 'rahim', 'karim'];
console.log(...user1 , 'and', ...user2);

const fruits = {
    name : 'banana',
    price : 100,
    quantity : 3,
    dec : 'i love banana'
}

const finalFruits = {...fruits}
console.log(finalFruits);