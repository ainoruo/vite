export function showJoke(element) {

    //fetch funktio
async function getJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) throw new Error('Huono haku!');

        const data = await response.json();
        document.querySelector('.show_joke').innerHTML = data.value;
    } catch (error) {
        console.error('Error:', error);
    }
}
    
    
console.log(element);
element.addEventListener('click', () => getJoke());
}
