const routes = {
    '/': log,
    '/login':log,
    '/reg':reg,
    '/main':main, 
    '/edit':edit
};

// const specRoutes ={
//     '/main':main, 
//     '/edit':edit
// };


const scripts = {
    '/':'login.js',
    '/login':'login.js',
    '/reg':'registration.js',
    '/main':'addList.js',
    '/edit':'addForm.js'
};



function getPathWithoutParams(pathname){    
    let startParamsIndex = pathname.indexOf('?');   
    if(startParamsIndex != -1)
        return pathname.slice(0, startParamsIndex);
    return pathname;
}

function addScript(pathname){
    var scriptSrc = scripts[pathname];
    var script = document.createElement('script');
    script.src = scriptSrc;
    content.appendChild(script);


}

async function addContent(pathname){
    // pathname = getPathWithoutParams(pathname);  
    // if(pathname in specRoutes && firebase.auth().currentUser == null){        
    //     alert('Сначала необходимо войти или зарегестрироваться');
    //     onNavigate('/login');
    //     return;
    // }

    if(pathname in routes){
        content.innerHTML = routes[pathname];       
        if(pathname in scripts)
            addScript(pathname);
    }   
}



const onNavigate = (pathname) =>{
    window.history.pushState(
        {},
        'Some text',
        window.location.origin + pathname);  
        // console.log(pathname);
        // console.log(window.location.origin);
    addContent(pathname);
}

window.onpopstate = () => {
    addContent(window.location.pathname);
}

const content = document.getElementById('contentchanger');

addContent(window.location.pathname);













// var temp;
// async function addContent(pathname){   
//     pathname = getPathWithoutParams(pathname);    
//     fetch(pathname)
//         .then(r => r.text())
//         .then(html => {
//             html = html
//                 .replace(/<html[^>]{0,}>/, '<p-html>')
//                 .replace(/<\/html>/, '<\/p-html>')
//                 .replace(/<head>/, '<p-head>')
//                 .replace(/<\/head>/, '</p-head>')
//                 .replace(/<body[^>]{0,}>/, '<p-body>')
//                 .replace(/<\/body>/, '</p-body>');
//             let doc = document.createElement('div')
//             temp = doc;
//             doc.innerHTML = html
//             document.title = doc.querySelector('p-head > title').text

//             for (let ch of doc.querySelector('p-head').children) {
//                 let tagName = ch.tagName.toLowerCase()
//                 let selector = `head ${tagName}`
//                 let el_new = document.createElement(tagName)
//                 if (tagName === 'link' || tagName === 'script') {
//                     if (tagName === 'script' && ch.getAttribute('src') === undefined)
//                         continue

//                     for (let attr of ch.attributes) {
//                         el_new.setAttribute(attr.name, attr.value)
//                         selector += `[${attr.name}="${attr.value}"]`
//                     }

//                     if (!document.querySelector(selector))
//                         document.head.appendChild(el_new)
//                 }

//             }

//             document.body.innerHTML = doc.querySelector('p-body').innerHTML;
            
//         })  
// }