document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('en-US', {
        currency: 'CAD',
        style: 'currency'
    }).format(node.textContent)
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
                  console.log(card)
              })
        }
    })
}