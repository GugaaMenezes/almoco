function logout() {
    alert("Você foi desconectado")
}


function addCart() {
    fetch('/cart', { method: 'POST' }) // Substitua "/cart" pela rota desejada em seu aplicativo Flask
        .then(response => {
            if (response.ok) {
                alert("Adicionado ao carrinho");
                console.log("Adicionado ao carrinho");
            } else {
                throw new Error('Falha ao adicionar ao carrinho');
            }
        })
        .catch(error => {
            // Lida com erros
            console.error('Erro:', error);
        });
}

