// https://www.codecademy.com/courses/introduction-to-javascript/projects/mini-linter

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

/* convert story into an array. .split separates the story string by the space character (' ') 
and stores each word as an element of the array. */
let storyWords = story.split(' ');
// console.log(storyWords);

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// wordcount
let count = 0;
storyWords.forEach(word => {
    count++;
})
console.log(count);

// remove unnecessaryWord
storyWords = storyWords.filter(word => {
    return word !== unnecessaryWord;
});

// check for and replace misspelledWord
storyWords = storyWords.map(word => {
    if (word === misspelledWord) {
        return 'beautiful';
    } else {
        return word;
    }
})

/* same as above's if .. else as ternary operator
storyWords = storyWords.map(word => {
    return word === misspelledWord ? 'beautiful'
    : word;
}) 
*/

// check and replace badWord
let badWordIndex = storyWords.findIndex(word => {
    return word === badWord;
})
console.log(badWordIndex);

storyWords[badWordIndex] = 'really'; 

// check for words longer than 10 letters -> false = there is a word longer than 10
let lengthCheck = storyWords.every(word => {
    return word.length <= 10;
})
console.log(lengthCheck);

// check which word has more than 10 letters
storyWords.forEach((word) => {
    word.length > 10 && console.log(word);
})

// convert the array back into a story again
console.log(storyWords.join(' '));