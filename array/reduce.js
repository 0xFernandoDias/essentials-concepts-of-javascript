const students = [
    {name: 'Fernando', note: 7.3, scholarshipHolder: false },
    {name: 'Carlos', note: 9.2, scholarshipHolder: true },
    {name: 'Neuza', note: 9.0, scholarshipHolder: false },
    {name: 'Thiago', note: 8.7, scholarshipHolder: true }    
]

console.log(students.map(a => a.note))

const result = students.map(a => a.note).reduce(function(caretaker, current) {
    console.log(caretaker, current)
    return caretaker + current
}, 0)

console.log(result)