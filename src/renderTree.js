    /* eslint-disable no-restricted-syntax */
    /* eslint-disable import/prefer-default-export */
    /* eslint-disable no-console */
    /* eslint-disable no-restricted-syntax */

export function renderTree(object) {
    let ul = document.createElement('ul')
    
    function render (obj, dom) {
      let newUl = document.createElement('ul')
      for(let key in obj) {
        if(!Array.isArray(obj[key])) {
          let li = document.createElement('li')
          li.innerHTML = obj[key]
          dom.append(li)
        } else if (Array.isArray(obj[key]) && obj[key].length > 0) {
          obj[key].forEach((item) => {
            render(item, newUl)
          })
        }
      }
      dom.append(newUl)
    }
    render(object, ul)
    document.body.append(ul)
  }