import {
  getStudentInfo as getInfo,
  getSum,
} from './functions/student.functions'
import { IStudent } from './types/student.types'

const students: IStudent[] = []

students.push({
  name: 'Pavel',
  numberOfSkippedHWs: 2,
})

students.push({
  name: 'Viktorya',
  numberOfSkippedHWs: 0,
})

students.forEach((student) => console.log(getInfo(student)))

console.log(getSum(1, 2))

// const name = 'Anatoly'
// let name = "Anatoly"
// let name = `Anatoly`;
