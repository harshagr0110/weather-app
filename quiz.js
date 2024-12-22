const questions = [
    { question: "❄️ What do you call a snowman in summer? ☀️", choices: ["🌊 A puddle", "❄️ A snowball", "😅 A meltdown"], answer: "🌊 A puddle" },
    { question: "📡 Why did the weather report go to school? 🎓", choices: ["💡 To become a little brighter", "🎓 To get a degree", "☁️ To learn about clouds"], answer: "💡 To become a little brighter" },
    { question: "🌪️ What’s a tornado’s favorite game? 🎲", choices: ["🌀 Twister", "🏠 Monopoly", "♟️ Chess"], answer: "🌀 Twister" },
    { question: "☀️ Why did the sun go to school? 🎓", choices: ["💡 To get a little brighter", "🌍 To learn about planets", "👫 To meet friends"], answer: "💡 To get a little brighter" },
    { question: "🌩️ What does a cloud wear under his raincoat? 🌦️", choices: ["😆 Thunderwear", "☔ Raincoat", "🌂 Umbrella"], answer: "😆 Thunderwear" },
    { question: "🌧️ What do you call a rainy day without an umbrella? 🌂", choices: ["🚿 A shower", "🛁 A bath", "😱 A disaster"], answer: "😱 A disaster" },
    { question: "☁️ Why did the cloud bring a ladder to the bar? 🍸", choices: ["🥂 To reach the high spirits", "🛠️ To fix the roof", "🌞 To impress the sun"], answer: "🥂 To reach the high spirits" },
    { question: "☃️ What’s a snowman’s favorite breakfast? 🍳", choices: ["🍚 Frosted Flakes", "❄️ Ice Krispies", "🍞 Snow Toast"], answer: "🍚 Frosted Flakes" },
    { question: "🌪️ Why did the hurricane fail its math test? 📚", choices: ["📍 It couldn't find its center", "💨 It blew away the answers", "🌬️ It was too windy"], answer: "📍 It couldn't find its center" },
    { question: "☀️ What do you call a sunny day in England? 🇬🇧", choices: ["🌈 A miracle", "🧙‍♂️ A myth", "✈️ A vacation"], answer: "🌈 A miracle" },
    { question: "🌦️ Why did the weather report break up with the forecast? 💔", choices: ["🌩️ Too many storms", "🌥️ No clear skies", "🎭 Too unpredictable"], answer: "🎭 Too unpredictable" },
    { question: "🌪️ What do you call a tornado that plays football? 🏈", choices: ["🏆 A touchdown", "🌀 A whirlwind", "📜 A draft pick"], answer: "🏆 A touchdown" },
    { question: "❄️ Why did the snowflake go to therapy? 🛋️", choices: ["😩 It had a meltdown", "🌬️ It felt flakey", "💔 It was too cold-hearted"], answer: "😩 It had a meltdown" },
    { question: "⚡ What’s a thunderstorm’s favorite music? 🎶", choices: ["🎸 Heavy metal", "🎻 Classical", "🎷 Jazz"], answer: "🎸 Heavy metal" },
    { question: "☀️ Why did the sun apply for a job? 💼", choices: ["✨ It wanted to shine", "📈 It needed a raise", "🌅 It was tired of setting"], answer: "📈 It needed a raise" },
    { question: "🌫️ What do you call a foggy day in San Francisco? 🌁", choices: ["✅ Normal", "❓ A mystery", "🛌 A blanket"], answer: "✅ Normal" },
    { question: "💨 Why did the wind get a promotion? 🏅", choices: ["🏞️ It was outstanding in its field", "💨 It blew everyone away", "🍃 It was a breeze"], answer: "💨 It blew everyone away" },
    { question: "⚡ What do you call a lightning bolt’s favorite sport? 🏅", choices: ["🏃‍♂️ Flash racing", "🤺 Electric fencing", "🌩️ Storm chasing"], answer: "🤺 Electric fencing" },
    { question: "🌧️ Why did the raindrop fail art class? 🎨", choices: ["📏 It couldn't draw a straight line", "💧 It kept dripping", "😅 It was too wet"], answer: "📏 It couldn't draw a straight line" },
    { question: "❄️ What’s a blizzard’s favorite movie? 🎥", choices: ["❄️ Frozen", "🐘 Ice Age", "👸 Snow White"], answer: "❄️ Frozen" },
    { question: "🧭 Why did the weather vane go to school? 🎓", choices: ["📜 To get a degree", "🧭 To learn direction", "💡 To be a little brighter"], answer: "🧭 To learn direction" },
    { question: "☀️ What do you call a sunny day in Seattle? 🌦️", choices: ["🌈 A miracle", "🕒 A break", "🧙‍♀️ A myth"], answer: "🕒 A break" },
    { question: "🌨️ Why did the hailstorm get detention? ⏳", choices: ["💥 It was too disruptive", "⚡ It broke the rules", "😎 It was too cool"], answer: "⚡ It broke the rules" },
    { question: "🌈 What’s a rainbow’s favorite color? 🎨", choices: ["🌈 All of them", "🔴 Red", "🔵 Blue"], answer: "🌈 All of them" },
    { question: "❄️ Why did the snowflake get a job? 💼", choices: ["🥶 It wanted to flake out", "🍞 It needed the dough", "❄️ It wanted to chill"], answer: "🍞 It needed the dough" },
    { question: "📖 What do you call a cloud that likes to read? ☁️", choices: ["📚 A bookworm", "🌧️ A rain reader", "☁️ A cloud cover"], answer: "☁️ A cloud cover" },
    { question: "☃️ Why did the snowman call a meeting? 📋", choices: ["🧊 To break the ice", "🛋️ To chill out", "💖 To melt hearts"], answer: "🧊 To break the ice" },
    { question: "🌩️ What’s a thunderstorm’s favorite instrument? 🎵", choices: ["🥁 Drums", "🎸 Guitar", "🎹 Piano"], answer: "🥁 Drums" },
    { question: "💨 Why did the wind go to therapy? 🛋️", choices: ["😵‍💫 It was feeling blown away", "😤 It needed to vent", "😅 It was too breezy"], answer: "😤 It needed to vent" },
    { question: "🌧️ What do you call a rainy day in the desert? 🏜️", choices: ["🌈 A miracle", "🌊 A flood", "💭 A wet dream"], answer: "🌈 A miracle" },
    { question: "☃️ Why did the snowman join the band? 🎺", choices: ["🕺 He had cool moves", "🥁 He could play the ice drums", "❄️ He wanted to chill"], answer: "🥁 He could play the ice drums" }
];

function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
}

function displayQuestions() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = ''; // Clear previous content

    const randomQuestions = getRandomQuestions();
    randomQuestions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'card mb-4 shadow-sm'; 

        const questionCardBody = document.createElement('div');
        questionCardBody.className = 'card-body p-2'; 

        const questionTitle = document.createElement('h6'); 
        questionTitle.className = 'card-title mb-2'; 
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionCardBody.appendChild(questionTitle);

        q.choices.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'form-check';

            const optionInput = document.createElement('input');
            optionInput.className = 'form-check-input';
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.id = `question${index}choice${i}`;
            optionInput.value = option;
            optionElement.appendChild(optionInput);

            const optionLabel = document.createElement('label');
            optionLabel.className = 'form-check-label';
            optionLabel.htmlFor = `question${index}choice${i}`;
            optionLabel.textContent = option;
            optionElement.appendChild(optionLabel);

            questionCardBody.appendChild(optionElement);
        });

        questionCard.appendChild(questionCardBody);
        quizContainer.appendChild(questionCard);
    });

    const submitButton = document.createElement('button');
    submitButton.className = 'btn btn-primary btn-submit';
    submitButton.innerText = 'Submit';
    submitButton.onclick = () => checkAnswers(randomQuestions);
    quizContainer.appendChild(submitButton);
}





function checkAnswers(questions) {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    alert(`You scored ${score} out of 5!`);
}

// Add event listener to the start button
document.getElementById('startQuizBtn').addEventListener('click', displayQuestions);

// Initialize the quiz container when the page loads
document.addEventListener('DOMContentLoaded', displayQuestions);
