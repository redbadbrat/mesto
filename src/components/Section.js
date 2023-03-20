export default class Section {
    constructor({ /*items,*/ renderer }, containerSelector) {
        //this._items = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    //*звуки ластика по школьной доске*

    erase() {
        this._container.innerHTML = '';
    }

    addItem(element) {
        this._container.prepend(element);
    }

    addDefaultItem(element) {
        this._container.append(element);
    }    

    renderElements(elements) {
        this.erase;
        elements.forEach(item => {
            this._renderer(item);
        });
    }
}