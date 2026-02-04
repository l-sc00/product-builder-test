
class LottoNumbers extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set numbers(numbers) {
        const style = `
            .lotto-number {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: var(--secondary-color);
                color: var(--white-color);
                font-size: 24px;
                font-weight: bold;
                margin: 0 5px;
            }
        `;

        const numbersHTML = numbers.map(number => `<div class="lotto-number">${number}</div>`).join('');
        this.shadowRoot.innerHTML = `<style>${style}</style>${numbersHTML}`;
    }
}

customElements.define('lotto-numbers', LottoNumbers);

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersEl = document.querySelector('lotto-numbers');
const historyList = document.getElementById('history-list');

const history = [];

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    lottoNumbersEl.numbers = sortedNumbers;
    history.push(sortedNumbers);
    updateHistory();
}

function updateHistory() {
    historyList.innerHTML = '';
    history.forEach(numbers => {
        const listItem = document.createElement('li');
        listItem.textContent = numbers.join(', ');
        historyList.appendChild(listItem);
    });
}

generateBtn.addEventListener('click', generateNumbers);

// Initial generation
generateNumbers();
