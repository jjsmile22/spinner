// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1000);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 2000);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 3000);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 4000);

let spinner = '\r|\r/\r-\r\\\r|'
intervalTime = 50
let typewriter = function printer(string) {
for (const char of string) {
   
  setTimeout(() => {
  
    process.stdout.write(char);
  
  }, intervalTime) // <= 1s delay to make it noticeable. Can dial it down later.
  intervalTime = intervalTime + 1000;

}

setTimeout(() => {process.stdout.write('\n')}, intervalTime+50);
}

typewriter(spinner);