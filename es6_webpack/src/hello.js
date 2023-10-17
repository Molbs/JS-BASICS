export const hello = 'Hello';
export const world = 'World';
export default (content = 'hello there') =>{
    const newDiv = document.createElement('div')
    newDiv.textContent = content;
    return newDiv;
}
