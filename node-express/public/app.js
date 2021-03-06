const toCurrency = price => {
    return new Intl.NumberFormat('en-US', {
        currency: 'CAD',
        style: 'currency'
    }).format(price)
}

document.querySelectorAll('.price').forEach(node => {
    node.textContent = toCurrency(node.textContent)
})

const $cart = document.querySelector('#cart')

if ($cart) {
    $cart.addEventListener('click', event => {
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id
            console.log(id)

            fetch('/card/remove/' + id, {
                method: 'delete'
            }).then(res => res.json())
              .then(card => {
                if (card.courses.length) {
                    const html = card.courses.map(c => {
                        return `
                        <tr>
                            <td>${c.title}</td>
                            <td>${c.count}</td>
                            <td>
                                <button class="btn btn-small js-remove" data-id="${c.id}">Delete</button>
                            </td>
                        </tr>
                        `
                    }).join('')
                    $cart.querySelector('tbody').innerHTML = html
                    $cart.querySelector('.price').textContent = toCurrency(card.price)
                } else {
                    $cart.innerHTML = '<p>Cart is Empty</p>'
                }
              })
        }
    })
}