document.addEventListener("DOMContentLoaded", () => {
    // Плавное появление элементов при прокрутке.
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    elements.forEach(el => observer.observe(el));

    const quizData = [
        { question: "Какова химическая формула воды?", options: ["CO₂", "H₂O", "H₂O₂", "O₂"], correct: 1 },
        { question: "Почему лёд плавает на поверхности воды?", options: ["Он тяжелее воды", "У него выше температура", "Его плотность меньше плотности жидкой воды", "Он не содержит кислорода"], correct: 2 },
        { question: "Какое свойство воды помогает охлаждать организм при потоотделении?", options: ["Высокая теплота испарения", "Прозрачность", "Плотность", "Когезия"], correct: 0 },
        { question: "Как вода участвует в жизни растений?", options: ["Только окрашивает листья", "Участвует в фотосинтезе и переносе минеральных веществ", "Полностью заменяет минеральные соли", "Останавливает транспирацию"], correct: 1 },
        { question: "Что может произойти при избытке питательных веществ в водоёме?", options: ["Эвтрофикация и снижение содержания кислорода", "Увеличение прозрачности воды", "Полное исчезновение водорослей", "Остановка круговорота воды"], correct: 0 }
    ];

    let currentQ = 0;
    let score = 0;
    let answered = false;

    const titleEl = document.getElementById("q-title");
    const optionsEl = document.getElementById("q-options");
    const feedbackEl = document.getElementById("q-feedback");
    const countEl = document.getElementById("q-count");
    const scoreEl = document.getElementById("score");
    const progressEl = document.getElementById("progress");
    const resultEl = document.getElementById("quiz-result");

    function loadQuiz() {
        answered = false;
        feedbackEl.textContent = "";
        feedbackEl.className = "feedback";
        optionsEl.innerHTML = "";
        resultEl.hidden = true;
        const current = quizData[currentQ];

        countEl.textContent = `Вопрос ${currentQ + 1} из ${quizData.length}`;
        titleEl.textContent = current.question;
        scoreEl.textContent = `${score} / ${quizData.length}`;
        progressEl.style.width = `${(currentQ / quizData.length) * 100}%`;

        current.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "quiz-btn";
            button.type = "button";
            button.textContent = option;
            button.addEventListener("click", () => answerQuestion(index, button));
            optionsEl.appendChild(button);
        });
    }

    function answerQuestion(index, selectedButton) {
        if (answered) return;
        answered = true;

        const buttons = [...optionsEl.querySelectorAll(".quiz-btn")];
        buttons.forEach(button => button.disabled = true);

        if (index === quizData[currentQ].correct) {
            score++;
            selectedButton.classList.add("correct");
            feedbackEl.textContent = "✓ Правильно! Отличный ответ.";
            feedbackEl.classList.add("success");
        } else {
            selectedButton.classList.add("incorrect");
            buttons[quizData[currentQ].correct].classList.add("correct");
            feedbackEl.textContent = "✕ Не совсем. Правильный вариант отмечен зелёным.";
            feedbackEl.classList.add("error");
        }

        scoreEl.textContent = `${score} / ${quizData.length}`;
        progressEl.style.width = `${((currentQ + 1) / quizData.length) * 100}%`;

        setTimeout(() => {
            currentQ++;
            if (currentQ < quizData.length) {
                loadQuiz();
            } else {
                showResult();
            }
        }, 1400);
    }

    function showResult() {
        optionsEl.innerHTML = "";
        countEl.textContent = "Тест завершён";
        titleEl.textContent = "";
        feedbackEl.textContent = "";
        resultEl.hidden = false;

        let message;
        if (score === quizData.length) message = "Отлично! Вы отлично разбираетесь в теме.";
        else if (score >= 3) message = "Хороший результат! Ещё немного — и будет отлично.";
        else message = "Неплохое начало! Повторите материал и попробуйте ещё раз.";

        resultEl.innerHTML = `<strong>${score} из ${quizData.length}</strong><span>${message}</span><button type="button" id="restart-btn" class="btn-restart">Пройти ещё раз</button>`;
        document.getElementById("restart-btn").addEventListener("click", () => {
            currentQ = 0;
            score = 0;
            loadQuiz();
        });
    }

    loadQuiz();
});
