var answers = [
    'Cuddle 🤗',
    'Kiss 💋',
    '😳🥵😳😏',
    'Massage 😘',
    'Movie 😎',
    'Play games 🥳',
    'City coffee ☕',
    'Park visit 🌄',
    'Cook food 👩‍🍳',
    'Marry 💍',
    'Watch GMM 🔥',
    'Cozy pub 🍷',
    'Fancy restaurant 🍔',
    'Hug 🤗',
    'Museum 🏰',
    'Tivoli 🎢'
];

var answer = document.getElementById('answer');
answer.innerHTML = answers[Math.floor(Math.random() * answers.length)];