
// Define three example functions, but one of them contains asynchronous code
function first() {
    console.log(1)
  }
  
  function second() {
    setTimeout(() => {
      console.log(2)
    }, 0)
  }
  
  function third() {
    console.log(3)
  }
  