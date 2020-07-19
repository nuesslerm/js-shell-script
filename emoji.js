const emoji = require('node-emoji');
const randEmoji = require('random-emoji');

// const { character, name, ...rest } = randEmoji.random({ count: 1 });
const [{ name: randEmojiStr }] = randEmoji.random({ count: 1 });

// console.log(randEmojiStr);

const emojiLog = emoji.get(`:${randEmojiStr}:`);

console.log(`Here is the ${randEmojiStr.split(':')} emoji: ${emojiLog}`);
