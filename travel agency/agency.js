class TravelAgency {
    costumers = []; //Costumer Objectes
    Traveles = [];  //Travel Objectes
    API = {
        addCostumer : (id, name) => this.costumers.push({id : new Costumer(id, name)}),
        addTravel : (id, destination) => this.Traveles.push({id : new Travel(id, destination)}),

    };
};

class Costumer {
    id;
    name;
    travels = [];
    debt;
    constructor(id, name){
        this.id = id;
        this.name = name;
    };
};

class Travel {
    id;
    startDate;
    duration;
    partecipation = [];
    cost;
    destination;
    constructor(id, destination) {
        this.id = id;
        this.destination = destination;
    };
};

const template = document.createElement('template');
template.innerHTML = `
<div>
    <h3></h3>
    <div class="info">            
        <p><slot name="id" /></p>
        <p><slot name="debt" /></p>
    </div>
    <button id="toggle-info">Hide Info</button>
</div>`;