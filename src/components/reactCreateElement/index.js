import { createElement } from 'react';

export default function createDiv() {
    return createElement('div', { className: 'hello'}, `Hello World`);
};
