function vacationBooksList(thisBook, forHour, daysForBook) {
  /* 1.	Брой страници в текущата книга – цяло число в интервала [1…1000]
2.	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
3.	Броят на дните, за които трябва да прочете книгата – цяло число в интервала 
*/
  let timeForBook = thisBook / forHour;
  let bookTime = timeForBook / daysForBook;
  console.log(bookTime);
}
vacationBooksList(212, 20, 2);
