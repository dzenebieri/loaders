import { loaders } from './loaders/loaders.js'

const _loaders = [...loaders];

const _main = document.getElementById('main');

_loaders.forEach((_loader, i) => {
    _main.appendChild(loadFUN(i));
})

function loadFUN(i) {
    let loader = _loaders[i];

    let loadEl = document.createElement('div');
    loadEl.setAttribute('class', 'load');
    loadEl.setAttribute('data-index', (i + 1));
    let shadowRoot = loadEl.attachShadow({ mode: 'open' });

    let loaderEl = document.createElement('span');
    loaderEl.setAttribute('class', 'loader');
    loaderEl.innerHTML = loader.content || null;
    shadowRoot.appendChild(loaderEl);

    let loaderStyles = document.createElement('style');
    loaderStyles.type = 'text/css';
    loaderStyles.innerHTML = loader.css;
    shadowRoot.appendChild(loaderStyles);

    return loadEl
}

document.querySelectorAll('#main .load').forEach(el => {
    el.addEventListener('click', (e) => {
        let index = parseInt(e.target.dataset.index);
        let show = document.querySelector('.show');

        show.replaceChildren(loadFUN((index - 1)));

        show.dataset.index = index;

        document.querySelector('#cssCodeID').textContent = _loaders[index - 1].css;
        document.querySelector('#htmlCodeID').textContent = `<span class="loader"></span>`;

        document.querySelector('body').classList.add('showCS')
        document.querySelector('.codeShow').classList.add('showCode')
    })
})

document.querySelector('.XBNCS').addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('showCS')
    document.querySelector('.codeShow').classList.remove('showCode');
});

document.querySelector('.codeShow').addEventListener('click', (e) => {
    if (e.target.className === "codeShow showCode") {
        document.querySelector('body').classList.remove('showCS')
        document.querySelector('.codeShow').classList.remove('showCode');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('body').classList.remove('showCS')
        document.querySelector('.codeShow').classList.remove('showCode');
    }
});

// Copy to clipboard
document.querySelectorAll('.copy').forEach(copyBN => {
    copyBN.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        selectText(id);
        document.execCommand("copy");
        e.target.textContent = 'Copied';

        setTimeout(() => e.target.textContent = 'Copy', 1000);
    })
});

function selectText(txtID) {
    if (document.selection) {
        let range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(txtID));
        range.select();
    } else if (window.getSelection) {
        let range = document.createRange();
        range.selectNode(document.getElementById(txtID));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
