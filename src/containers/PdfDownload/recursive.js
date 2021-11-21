// const recursive = (childNodes) => {
//     const nodes = [];
//     for (let i = 0; i < childNodes.length; i++) {
//         const childNode = childNodes[i];
//         if (!(childNode instanceof HTMLElement)) {
//             continue;
//         }
//         const styledChildNode = document.getElementById(childNode.id);
//         if (styledChildNode) {
//             console.log(styledChildNode.cssRules)
//             const styles = getComputedStyle(styledChildNode);
//             console.log(styles, Object.keys(styles).length)
//             for (const key in styles) {
//                 if (isNaN(+key) && typeof styles[key] === 'string') {
//                     if (key === 'cssText') {
//                         break;
//                     }
//                     if (!childNode.style[key]) {
//                         if (key === 'webkitLogicalWidth' || key === 'inlineSize' || key === 'width' || key === 'height') {
//                             continue;
//                         }
//                         childNode.style[key] = styles[key];
//                     }
//                 }
//             }
//             if (childNode.childNodes.length) {
//                 for (const n of childNode.childNodes) {
//                     nodes.push(n)
//                 }
//             }
//         }
//     }

//     if (nodes.length) {
//         return recursive(nodes)
//     }
// }

