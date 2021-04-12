document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('en-US', {
        currency: 'CAD',
        style: 'currency'
    }).format(node.textContent)
})