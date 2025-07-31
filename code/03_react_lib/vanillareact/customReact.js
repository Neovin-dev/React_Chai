function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visite google.'
    // this is what react basically returns end of the day (simulation)
    // whoever wants to use our library has to write it this way
}

const mainContainer = document.querySelector('#root');
// we have selected the element

// now we have to render the tag. we are trying to simulate how react will handle it the element we have returned in the App of function inside render see reactElement. react tries to build a tree. it will look ar the type and then props which can be used with it

// our custom render

customRender()