type BloodType = 'A' | 'B' | 'O' | 'AB';
interface User {
  name: string,
  age: number,
  bloodType: BloodType,
}
let user = (name: string, age: number, bloodType: BloodType): User => {
  return ({ 
    name, age, bloodType,
  });
};