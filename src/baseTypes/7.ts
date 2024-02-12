/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
// Визначення enum для днів тижня
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// Функція isWeekend, яка приймає день тижня і повертає boolean значення
function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
}

// Приклад виклику функції
const today = DaysOfWeek.Friday;
const result = isWeekend(today);
console.log(result); // false
