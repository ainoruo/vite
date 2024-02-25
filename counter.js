export function setupCounter(element) {

  const setCounter = (count) => {
    console.log('i am here');
  };
  element.addEventListener('click', () => setCounter());

};
