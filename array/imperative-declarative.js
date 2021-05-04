const students = [
    {name: 'Joao', note: 7.9},
    {name: 'Maria', note: 9.2}
]

// imperative
let total1 = 0
for (let i = 0; i < students.length; i++) {
    total1 += students[i].note
}
console.log(total1 / students.length)

// declarative
const getNote = student => student.note
const sum = (total1, current) => total1 + current
const total2 = students.map(getNote).reduce(sum)
console.log(total2 / students.length)