interface Player {
    name:string,
    salary: number,
    club: string,
    wife?: string,
    previousClubs?: string[]
}
const messy: Player = {
    name: 'sakib',
    salary: 20000,
    club: 'bangladesh',
    wife: 'komola'
}
const ronaldo: Player = {
    name: 'rakib',
    salary: 2000,
    club: 'india'
}

interface Employee {
    name: string,
    designation: string,
    salary: number
    age: number
}

interface Developer extends Employee{
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'Zukerberg',
    salary: 1100,
    age: 31,
    designation: 'Facebooker',
    language: 'js',
    codeEditor: 'VS Code',
    typingSpeed: 65
}