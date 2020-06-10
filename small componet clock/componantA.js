const inputTemplate = document.createElement('template');
inputTemplate.innerHTML = document.getElementById('changes-template').innerHTML;

class inputClock extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(inputTemplate.content.cloneNode(true));

        this.shadowRoot.querySelector('label').innerText = 'Change Clock header';
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
           document.querySelector('h3').innerText = 'gggggg';
           console.log(document)
        });
    };
};

window.customElements.define('input-clock',inputClock);


const template = document.createElement('template');
template.innerHTML =`
    <div>
        <h3 id="h"></h3>
        <p></p>
    </div>
`;
console.log(new Date().toLocaleString());

class Clock extends HTMLElement {

    t = new Date().toLocaleDateString();
    constructor(){
        super();
        
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.shadowRoot.querySelector('h3').innerText = 'Clock';
        this.shadowRoot.querySelector('p').innerText = this.t;
        setInterval(() => this.shadowRoot.querySelector('p').innerText = new Date().toLocaleString(), 1000);
    };
};

window.customElements.define('my-clock',Clock);