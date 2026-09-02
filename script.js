* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

:root {
    --primary: #087fbd;
    --primary-dark: #075985;
    --accent: #06b6d4;

    --dark: #082f49;
    --text: #334155;
    --muted: #64748b;

    --light: #f0f9ff;
    --white: #ffffff;

    --line: #dbeafe;

    --shadow:
        0 18px 50px rgba(8, 47, 73, 0.09);
}

body {
    margin: 0;

    background:
        linear-gradient(
            180deg,
            #f8fdff 0%,
            #f1f8fc 100%
        );

    color: var(--text);

    font-family:
        "Manrope",
        "Segoe UI",
        Arial,
        sans-serif;

    line-height: 1.7;
}

img {
    display: block;

    max-width: 100%;
}

a {
    color: inherit;
}

button {
    font: inherit;
}

.container {
    width:
        min(
            1100px,
            calc(100% - 40px)
        );

    margin: 0 auto;
}

.text-center {
    text-align: center;
}


/* HERO */

.hero {
    position: relative;

    min-height: 680px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 110px 20px 80px;

    text-align: center;

    color: white;

    background:
        linear-gradient(
            135deg,
            rgba(3, 37, 65, 0.92),
            rgba(8, 127, 189, 0.62)
        ),
        url("images/water.jpg")
        center / cover no-repeat;

    overflow: hidden;
}

.hero-content {
    position: relative;

    z-index: 2;

    max-width: 820px;
}

.nav {
    position: absolute;

    z-index: 5;

    top: 20px;
    left: 50%;

    transform: translateX(-50%);

    display: flex;

    align-items: center;
    justify-content: space-between;

    width:
        min(
            1100px,
            calc(100% - 40px)
        );
}

.logo {
    color: white;

    font-size: 1.05rem;
    font-weight: 800;

    text-decoration: none;
}

.nav-links {
    display: flex;

    gap: 24px;
}

.nav-links a {
    color: white;

    text-decoration: none;

    opacity: 0.9;

    font-size: 0.9rem;

    transition: 0.2s ease;
}

.nav-links a:hover {
    opacity: 1;

    transform: translateY(-2px);
}

.badge {
    display: inline-block;

    padding:
        7px 16px;

    border:
        1px solid
        rgba(255, 255, 255, 0.35);

    border-radius: 999px;

    background:
        rgba(255, 255, 255, 0.12);

    backdrop-filter: blur(10px);

    font-size: 0.85rem;
}

.hero h1 {
    margin:
        20px 0 16px;

    color: white;

    font-family:
        "Playfair Display",
        Georgia,
        serif;

    font-size:
        clamp(
            2.6rem,
            6vw,
            4.8rem
        );

    line-height: 1.08;
}

.hero p {
    max-width: 680px;

    margin:
        0 auto 32px;

    color:
        rgba(255, 255, 255, 0.9);

    font-size: 1.1rem;
}

.btn-main {
    display: inline-flex;

    align-items: center;

    gap: 10px;

    padding:
        13px 24px;

    border-radius: 999px;

    background: white;

    color: var(--primary-dark);

    text-decoration: none;

    font-weight: 800;

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.btn-main:hover {
    transform: translateY(-3px);

    box-shadow:
        0 16px 35px
        rgba(0, 0, 0, 0.2);
}

.scroll-hint {
    position: absolute;

    bottom: 22px;

    color: white;

    font-size: 0.75rem;

    letter-spacing: 0.12em;

    text-transform: uppercase;

    opacity: 0.7;
}


/* SECTION */

.section {
    padding: 76px 0;
}

.section-label {
    margin-bottom: 12px;

    color: var(--primary);

    font-size: 0.78rem;

    font-weight: 800;

    letter-spacing: 0.12em;

    text-transform: uppercase;
}

h2 {
    margin:
        0 0 22px;

    color: var(--dark);

    font-family:
        "Playfair Display",
        Georgia,
        serif;

    font-size:
        clamp(
            1.9rem,
            3vw,
            2.65rem
        );

    line-height: 1.2;
}

h3 {
    margin:
        0 0 9px;

    color: var(--dark);
}

p {
    margin:
        0 0 15px;
}

.card-box,
.quiz-container,
.warning-box,
.success-box {
    padding:
        42px;

    border-radius: 28px;

    background: white;

    box-shadow: var(--shadow);
}

.grid-2 {
    display: grid;

    grid-template-columns:
        minmax(0, 1fr)
        minmax(0, 1fr);

    gap: 52px;

    align-items: center;
}

.goals {
    padding: 25px;

    border:
        1px solid var(--line);

    border-radius: 18px;

    background: var(--light);
}

ul {
    margin: 0;

    padding-left: 22px;
}

li {
    margin:
        8px 0;
}


/* FEATURE */

.image-wrap {
    position: relative;

    height: 430px;

    overflow: hidden;

    border-radius: 28px;

    box-shadow: var(--shadow);

    background: #dff4fb;
}

.image-wrap img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}

.image-placeholder {
    display: none;

    position: absolute;

    inset: 0;

    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            135deg,
            #dff6ff,
            #e8f8ff
        );

    color: var(--primary-dark);

    font-weight: 800;
}

.image-error + .image-placeholder {
    display: flex;
}


/* FACTS */

.fact-grid {
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 12px;

    margin-top: 28px;
}

.fact {
    padding: 17px;

    border:
        1px solid var(--line);

    border-radius: 16px;

    background: #ffffff;
}

.fact strong {
    display: block;

    color: var(--primary-dark);
}

.fact span {
    display: block;

    margin-top: 4px;

    color: var(--muted);

    font-size: 0.82rem;

    line-height: 1.45;
}


/* MOLECULE */

.molecule-card {
    min-height: 350px;

    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 35px;

    border:
        1px solid var(--line);

    border-radius: 28px;

    background:
        radial-gradient(
            circle,
            #e0f7ff,
            #f0f9ff 65%
        );

    text-align: center;
}

.molecule {
    position: relative;

    width: 250px;
    height: 180px;
}

.atom {
    position: absolute;

    z-index: 2;

    width: 76px;
    height: 76px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    color: white;

    font-size: 1.45rem;

    font-weight: 800;

    box-shadow:
        0 10px 25px
        rgba(8, 47, 73, 0.15);
}

.oxygen {
    left: 87px;
    top: 54px;

    background: #0f766e;
}

.hydrogen {
    width: 58px;
    height: 58px;

    font-size: 1.1rem;

    background: #0284c7;
}

.h1 {
    left: 24px;
    top: 9px;
}

.h2 {
    right: 20px;
    top: 9px;
}

.bond {
    position: absolute;

    z-index: 1;

    width: 70px;
    height: 8px;

    top: 77px;

    border-radius: 10px;

    background: #94a3b8;

    transform-origin: left center;
}

.b1 {
    left: 73px;

    transform:
        rotate(31deg);
}

.b2 {
    left: 137px;

    transform:
        rotate(-31deg);
}

.formula {
    color: var(--dark);

    font-size: 2.4rem;

    font-weight: 800;
}


/* TABLE */

.table-responsive {
    overflow-x: auto;

    border-radius: 20px;

    box-shadow: var(--shadow);
}

table {
    width: 100%;

    min-width: 720px;

    border-collapse: collapse;

    background: white;
}

th,
td {
    padding:
        19px 20px;

    border-bottom:
        1px solid #e2e8f0;

    text-align: left;

    vertical-align: top;
}

th {
    background: var(--primary-dark);

    color: white;
}

tbody tr:hover {
    background: #f8fdff;
}


/* CARDS */

.cards-grid {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 22px;

    align-items: stretch;
}

.card {
    min-width: 0;

    overflow: hidden;

    display: flex;

    flex-direction: column;

    border-radius: 22px;

    background: white;

    box-shadow: var(--shadow);

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.card:hover {
    transform: translateY(-5px);

    box-shadow:
        0 25px 60px
        rgba(8, 47, 73, 0.13);
}


/*
    ВАЖНО:
    Теперь у всех трёх изображений
    одинаковая фиксированная высота.
*/

.card-image {
    position: relative;

    width: 100%;
    height: 250px;

    flex: 0 0 250px;

    overflow: hidden;

    background: #e0f2fe;
}

.card-image::before {
    content: "";

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.02),
            rgba(0, 0, 0, 0.08)
        );

    z-index: 1;

    pointer-events: none;
}

.card-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    object-position: center;

    transition:
        transform 0.45s ease;
}

.card:hover .card-image img {
    transform: scale(1.04);
}

.card-body {
    min-height: 225px;

    padding: 25px;
}

.card-number {
    display: block;

    margin-bottom: 8px;

    color: var(--primary);

    font-size: 0.75rem;

    font-weight: 800;
}

.card-body p {
    margin-bottom: 0;

    color: var(--muted);

    font-size: 0.9rem;
}


/* NATURE */

.nature-points {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 20px;

    margin-bottom: 30px;
}

.nature-points > div {
    display: flex;

    gap: 14px;
}

.nature-points > div > span {
    flex-shrink: 0;

    font-size: 1.7rem;
}

.nature-points strong {
    color: var(--dark);
}

.nature-points p {
    color: var(--muted);

    font-size: 0.88rem;
}

.water-cycle {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 10px;

    padding: 24px;

    border-radius: 20px;

    background: var(--light);
}

.cycle-step {
    flex: 1;

    padding: 15px;

    text-align: center;
}

.cycle-step span {
    display: block;

    font-size: 1.7rem;
}

.cycle-step b,
.cycle-step small {
    display: block;
}

.cycle-step small {
    color: var(--muted);
}

.water-cycle i {
    color: var(--accent);

    font-size: 1.5rem;

    font-style: normal;
}


/* ECOLOGY */

.warning-box {
    border:
        1px solid #fee2e2;

    border-left:
        6px solid #ef4444;

    background: #fffafa;
}

.success-box {
    border:
        1px solid #d1fae5;

    border-left:
        6px solid #10b981;

    background: #f5fffa;
}

.problem-grid {
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 14px;

    margin-top: 25px;
}

.problem-grid > div {
    padding: 20px;

    border:
        1px solid #fee2e2;

    border-radius: 16px;

    background: white;
}

.problem-grid p {
    margin-top: 5px;

    font-size: 0.88rem;
}

.check-list {
    display: grid;

    gap: 12px;
}

.check-list div {
    padding:
        15px 18px;

    border-radius: 14px;

    background: white;

    font-weight: 600;
}


/* QUIZ */

.quiz-container {
    scroll-margin-top: 20px;
}

.quiz-header {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    gap: 20px;
}

.quiz-header p {
    color: var(--muted);
}

.score-badge {
    white-space: nowrap;

    padding:
        9px 15px;

    border:
        1px solid var(--line);

    border-radius: 999px;

    background: var(--light);

    color: var(--primary-dark);

    font-weight: 800;
}

.progress {
    height: 8px;

    margin:
        8px 0 28px;

    overflow: hidden;

    border-radius: 99px;

    background: #e2e8f0;
}

.progress span {
    display: block;

    width: 0;
    height: 100%;

    border-radius: inherit;

    background:
        linear-gradient(
            90deg,
            var(--primary),
            var(--accent)
        );

    transition:
        width 0.35s ease;
}

.question-count {
    color: var(--muted);

    font-size: 0.85rem;

    font-weight: 700;
}

.options-grid {
    display: grid;

    gap: 11px;

    margin-top: 22px;
}

.quiz-btn {
    width: 100%;

    padding:
        15px 17px;

    border:
        2px solid #dbeafe;

    border-radius: 14px;

    background: #f8fdff;

    color: var(--dark);

    cursor: pointer;

    text-align: left;

    font-weight: 600;

    transition: 0.2s ease;
}

.quiz-btn:hover:not(:disabled) {
    transform: translateX(3px);

    border-color: var(--primary);

    background: #e0f7ff;
}

.quiz-btn:disabled {
    cursor: default;
}

.quiz-btn.correct {
    background: #ecfdf5;

    border-color: #10b981;

    color: #166534;
}

.quiz-btn.incorrect {
    background: #fff1f2;

    border-color: #ef4444;

    color: #991b1b;
}

.feedback {
    min-height: 27px;

    margin-top: 14px;

    font-weight: 800;
}

.feedback.success {
    color: #166534;
}

.feedback.error {
    color: #991b1b;
}

.quiz-result {
    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 12px;

    padding: 30px;

    border-radius: 20px;

    background: var(--light);

    text-align: center;
}

.quiz-result strong {
    color: var(--primary-dark);

    font-size: 2.8rem;

    line-height: 1;
}

.btn-restart {
    padding:
        12px 22px;

    border: 0;

    border-radius: 999px;

    background: var(--primary);

    color: white;

    cursor: pointer;

    font-weight: 800;
}

.btn-restart:hover {
    background: var(--primary-dark);
}


/* ANIMATION */

.fade-in {
    opacity: 0;

    transform: translateY(22px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.fade-in.appear {
    opacity: 1;

    transform: translateY(0);
}


/* FOOTER */

footer {
    margin-top: 30px;

    padding:
        42px 20px;

    background: var(--dark);

    color: white;

    text-align: center;
}

footer p {
    margin: 3px;

    opacity: 0.8;
}

footer p:first-child {
    opacity: 1;
}

footer a {
    display: inline-block;

    margin-top: 15px;

    color: #bae6fd;

    font-weight: 700;

    text-decoration: none;
}


/* TABLET */

@media (max-width: 850px) {

    .nav-links {
        display: none;
    }

    .grid-2 {
        grid-template-columns: 1fr;
    }

    .cards-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }

    .nature-points {
        grid-template-columns: 1fr;
    }

    .water-cycle {
        flex-direction: column;
    }

    .water-cycle i {
        transform: rotate(90deg);
    }

}


/* MOBILE */

@media (max-width: 600px) {

    .container {
        width:
            calc(100% - 28px);
    }

    .hero {
        min-height: 600px;
    }

    .hero h1 {
        font-size: 2.45rem;
    }

    .section {
        padding: 52px 0;
    }

    .card-box,
    .quiz-container,
    .warning-box,
    .success-box {
        padding:
            27px 21px;
    }

    .fact-grid,
    .problem-grid,
    .cards-grid {
        grid-template-columns: 1fr;
    }

    .image-wrap {
        height: 260px;
    }

    .card-image {
        height: 230px;

        flex-basis: 230px;
    }

    .quiz-header {
        flex-direction: column;
    }

}
