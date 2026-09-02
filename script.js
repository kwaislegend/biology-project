document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       АНИМАЦИЯ ПОЯВЛЕНИЯ
    ========================= */

    const fadeElements =
        document.querySelectorAll(".fade-in");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, obs) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "appear"
                            );

                            obs.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.1
                }
            );


        fadeElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        fadeElements.forEach((element) => {
            element.classList.add("appear");
        });

    }


    /* =========================
       ВИКТОРИНА
    ========================= */

    const questions = [

        {
            question:
                "Какова химическая формула воды?",

            options: [
                "CO₂",
                "H₂O",
                "O₂",
                "NaCl"
            ],

            correct: 1
        },

        {
            question:
                "Почему лёд плавает на поверхности воды?",

            options: [
                "Лёд тяжелее воды",
                "Лёд теплее воды",
                "Плотность льда меньше плотности жидкой воды",
                "Лёд не содержит кислорода"
            ],

            correct: 2
        },

        {
            question:
                "Какое свойство воды помогает охлаждать организм при потоотделении?",

            options: [
                "Высокая теплота испарения",
                "Прозрачность",
                "Плотность",
                "Когезия"
            ],

            correct: 0
        },

        {
            question:
                "Как вода участвует в жизни растений?",

            options: [
                "Только окрашивает листья",
                "Участвует в фотосинтезе и переносе веществ",
                "Полностью заменяет минеральные соли",
                "Полностью останавливает транспирацию"
            ],

            correct: 1
        },

        {
            question:
                "Что может произойти при избытке питательных веществ в водоёме?",

            options: [
                "Эвтрофикация и снижение содержания кислорода",
                "Полное исчезновение водорослей",
                "Остановка круговорота воды",
                "Увеличение солёности океана"
            ],

            correct: 0
        }

    ];


    let current = 0;
    let score = 0;
    let answered = false;


    const qTitle =
        document.getElementById("q-title");

    const qCount =
        document.getElementById("q-count");

    const qOptions =
        document.getElementById("q-options");

    const feedback =
        document.getElementById("q-feedback");

    const scoreElement =
        document.getElementById("score");

    const progress =
        document.getElementById("progress");

    const result =
        document.getElementById("quiz-result");


    /* =========================
       ЗАГРУЗКА ВОПРОСА
    ========================= */

    function loadQuestion() {

        answered = false;

        const question =
            questions[current];


        qCount.textContent =
            `Вопрос ${current + 1} из ${questions.length}`;

        qTitle.textContent =
            question.question;

        qOptions.innerHTML = "";

        feedback.textContent = "";

        feedback.className =
            "feedback";

        scoreElement.textContent =
            `${score} / ${questions.length}`;

        progress.style.width =
            `${(current / questions.length) * 100}%`;

        result.hidden = true;


        question.options.forEach(
            (option, index) => {

                const button =
                    document.createElement("button");

                button.type = "button";

                button.className =
                    "quiz-btn";

                button.textContent =
                    option;


                button.addEventListener(
                    "click",
                    () => {

                        answer(
                            index,
                            button
                        );

                    }
                );


                qOptions.appendChild(
                    button
                );

            }
        );

    }


    /* =========================
       ПРОВЕРКА ОТВЕТА
    ========================= */

    function answer(
        selected,
        selectedButton
    ) {

        if (answered) {
            return;
        }

        answered = true;


        const question =
            questions[current];


        const buttons =
            [
                ...qOptions.querySelectorAll(
                    ".quiz-btn"
                )
            ];


        buttons.forEach(
            (button) => {
                button.disabled = true;
            }
        );


        if (
            selected ===
            question.correct
        ) {

            score++;

            selectedButton.classList.add(
                "correct"
            );

            feedback.textContent =
                "✓ Правильно!";

            feedback.classList.add(
                "success"
            );

        } else {

            selectedButton.classList.add(
                "incorrect"
            );

            buttons[
                question.correct
            ].classList.add(
                "correct"
            );

            feedback.textContent =
                "✕ Неправильно. Правильный ответ отмечен зелёным.";

            feedback.classList.add(
                "error"
            );

        }


        scoreElement.textContent =
            `${score} / ${questions.length}`;


        progress.style.width =
            `${((current + 1) / questions.length) * 100}%`;


        setTimeout(() => {

            current++;


            if (
                current <
                questions.length
            ) {

                loadQuestion();

            } else {

                showResult();

            }

        }, 1300);

    }


    /* =========================
       РЕЗУЛЬТАТ
    ========================= */

    function showResult() {

        qOptions.innerHTML = "";

        qCount.textContent =
            "Тест завершён";

        qTitle.textContent = "";

        feedback.textContent = "";

        result.hidden = false;


        let message;


        if (
            score === questions.length
        ) {

            message =
                "Отличный результат! Вы прекрасно знаете тему.";

        } else if (
            score >= 3
        ) {

            message =
                "Хороший результат! Материал усвоен.";

        } else {

            message =
                "Попробуйте ещё раз после повторения материала.";

        }


        result.innerHTML = `

            <strong>
                ${score} из ${questions.length}
            </strong>

            <span>
                ${message}
            </span>

            <button
                type="button"
                class="btn-restart"
                id="restart"
            >
                Пройти тест снова
            </button>

        `;


        document
            .getElementById("restart")
            .addEventListener(
                "click",
                () => {

                    current = 0;

                    score = 0;

                    loadQuestion();

                }
            );

    }


    /* =========================
       СТАРТ
    ========================= */

    loadQuestion();

});