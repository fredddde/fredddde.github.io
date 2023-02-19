var answers = [
    'Cuddle 🤗',
    'Kiss 💋',
    '😳🥵😳😏',
    'Massage 😘',
    'Watch a movie 😎',
    'Play games 🥳',
    'City coffee ☕',
    'Visit a park 👨‍🚀',
    'Cook yummy food 👩‍🍳',
    'Marry 💍',
    'Watch GMM 🔥'
];

var answer = document.getElementById('answer');
answer.innerHTML = answers[Math.floor(Math.random() * answers.length)];