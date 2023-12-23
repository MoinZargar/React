function customReactAdd(mainContainer,customReact){
    const element=document.createElement(customReact.type);
    element.setAttribute('href',customReact.props.href)
    element.setAttribute('target',customReact.props.target)
    element.innerHTML=customReact.children
    mainContainer.appendChild(element)

}
const mainContainer=document.getElementById("root")
const customReact={
    type:'a',
    props:{
        href:"https://kashirdictionary.com",
        target:"_blank"
    },
    children:"Click me"
}
customReactAdd(mainContainer,customReact)