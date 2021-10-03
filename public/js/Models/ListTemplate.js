class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    // Render method
    render(item, heading, pos) {
        // Creating required elements
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        // Writing data in elements
        h4.innerText = heading;
        p.innerText = item.format();
        li.append(h4, p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
export default ListTemplate;
