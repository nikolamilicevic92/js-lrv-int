// 1. What will be logged in the console after calling user.displayName()
const user = {
    name: 'John',
    displayName: () => {
      console.log(this.name)
    }
  }
  
  // 2. What will be the value of number after calling increment(number)
  function increment(num) {
    num++
  }
  const number = 1
  increment(number)
  
  // 3. Write a function that generates a random number between 1 and 10.
  // Then write a Promise that resolves after 2 seconds if that number is even
  // or after 3 seconds if that number is odd
  
  // 4. Will equalityCheck variable be true or false
  const equalityCheck = 3 == '3'
  
  // 5. Write JS code that creates a button inside the body. Clicking
  // the button should open alert with message 'Button clicked'

  // 6. Explain the following relationships in Laravel and the database
  // structure behind them:
  // a. Belongs to
  // b. Has one
  // c. Has many
  // d. Belongs to many

  // 7. Explain soft delete in Laravel

  // 8. What are transactions in MySQL and how can we use them in Laravel

  // 9. What is the difference between an 'index' and 'foreign key'

  // 10. Given the following database tables:
  //
  // users: id, name, email, company_id
  // companies: id, name
  //
  // Write an SQL query that selects all users whose company name starts with 'Software'
  const query = ''

  // 11. Write GIT commands that create a new branch 'bugfix/users', add all changes
  // and push to remote