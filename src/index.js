import * as dragScrollPlugin from './library/dragScrollPlugin';

export default dragScrollPlugin;

function setup () {
    var div = document.createElement('div');
    var attrvalue = '';
    [{attr: 'background-color', value: 'blue'}, {attr: 'line-height', value: '30px'}, {attr: 'height', value: '30px'}].forEach(callback);
    function callback(item) {
        attrvalue += `${item.attr}: ${item.value};`;
    }
    div.setAttribute('style', attrvalue);
    var app = document.getElementById('app');
    div.innerHTML = 'hello dingzhengxi';
    app.appendChild(div);
}
setup()
