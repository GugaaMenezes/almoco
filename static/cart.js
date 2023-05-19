function addCart() {
    const username = document.getElementById("username").value;
    const equipe = document.getElementById("equipe").value;
    const horaentrega = document.getElementById("horaentrega").value;
    const restaurante = document.getElementById("restaurante").value;
    const prato = document.getElementById("prato").value;
    const informacao = document.getElementById("informacao").value;



    var now = new Date();
    var horaEnvio = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    var data = {
        username: username,
        equipe: equipe,
        horaentrega: horaentrega,
        horapedido: horaEnvio,
        restaurante: restaurante,
        prato: prato,
        informacao: informacao,
    };

    console.log(data);

    fetch('/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (response.ok) {
                alert('Pedido adicionado ao Carrinho!');
                cartForm.reset();
                window.location.reload();
            } else {
                console.error('Erro ao enviar os dados:', response.status);
                alert('Erro ao adiconar o pedido');
            }
        })
        .catch(error => {
            console.error('Erro de conexão:', error);
            alert('Erro de conexão. Por favor, tente novamente mais tarde.');
        });

};


function deleteItem(orderId) {

    fetch('/deleteitem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: orderId }),
    })
        .then(response => response.json())
        .then(data => {
            alert("Removido com sucesso!")
            console.log(data);
            window.location.reload();
        })
        .catch(error => {
            console.error(error);
            window.location.reload();
        });
}

function updateDeliveryTime(pedidoNumero) {
    var currentTime = document.getElementById("entregueas").value;

    var data = {
        pedidonumero: pedidoNumero,
        entregueas: currentTime
    };

    console.log(data);

    fetch('/updatefooddelivery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                alert('Pedido entregue!');
                window.location.reload();
            } else {
                console.error('Erro ao atualizar a hora de entrega:', response.statusText);
                window.location.reload();
            }
        })
        .catch(error => {
            console.error('Erro de rede ao atualizar a hora de entrega:', error);
        });
}










const dishes = {
    'Boali': [
        { 'name': 'Salada Hoje eu Começo o Dia', 'description': 'Alface americana, frango desfiado, ricota temperada, cebola roxa, cenoura, ovos de codorna, maçã crocante com açaí e molho mostarda e mel.' },
        { 'name': 'Salada Ave Cesar', 'description': 'Mix de verdes, frango desfiado, parmesão, croutons integrais e molho caesar' },
        { 'name': 'Salada Oriental Low Carb', 'description': 'Macarrão bifum (sem glúten), atum desfiado, tomate, cenoura, espinafre, brócolis, pepino, amendoim, cebola crocante, mix de chia e linhaça e molho asiático com gergelim.' },
        { 'name': 'Risoto Funghi com Carne Desfiada', 'description': 'Mix de arroz pérola e arroz cateto, carne desfiada, queijo muçarela, parmesão e molho de funghi.' },
        { 'name': 'Risoto Limão Siciliano com frango desfiado', 'description': 'Mix de arroz pérola e arroz cateto, frango desfiado, muçarela, parmesão e molho de limão siciliano' },
        { 'name': 'Wraps Frango Picante', 'description': 'Frango desfiado, ovos de codorna, tomate, parmesão, croutons integrais e molho chipotle' },
        { 'name': 'Wraps Árabe com Faláfel', 'description': 'Faláfel (bolinhos feitos com grão de bico), cebola roxa, tomate, pepino, hortelã e molho árabe. Escolha na versão quente (com NotMayo) ou fresco (com mix de verdes). VEGANO' }
    ],
    'Villa': [
        { 'name': 'Massa Penne al Ragú', 'description': 'Penne rigate envolvido ao molho de queijo com ervas, coberto com Ragú de carne moída do Villa ao molho "Marchand de Vin", finalizado com pimenta do reino e parmesão' },
        { 'name': 'Massa Spaguettini com camarões ao gorgonzola', 'description': 'Camarões puxados no azeite, alho e ervas com spaghettini, molho de gorgonzaola, passas-brancas ao vinho branco, parmesão e rúcula' },
        { 'name': 'Risoto Risotto de Pato Gratin', 'description': 'Arroz Arbóreo com lascas de pato conflitado, funghi, shitake e champigon de Parias, ervas frescas, gratinado com queijo Minas e redução de vinho licoroso' },
        { 'name': 'Risoto Risotto de camarões Maria Bonita', 'description': 'Rosotto com camarões puxados no azeite, alho e ervas frescas, pasta de abóbora, brócolis e parmesão, finalizado com azeite de laranja e amêndoas laminadas' },
        { 'name': 'Carne Bombom de Alcatra La Grega', 'description': 'Alcatra servida em fatias ao molho "Marchand de Vin", arroz à grega e batatas fritas "canoa"' },
        { 'name': 'Carne Filé de Frango Tradição', 'description': 'Filé de Peito de Frango ao molho "marchand de Vin", purê de batatas e arroz de brócolis' },
        { 'name': 'Peixe Tilápia Ricota', 'description': 'Filé de Tilápia grelhado, creme de rocota com castanhas e erva, arroz saleado com legumes ao molho agridoce oriental e gergelim torrado' },
        { 'name': 'Salada Tilápia Marrocos', 'description': 'Filé de Tilápia grelhado, shitakes, molho oriental e palha de alho-poró, salada de couscous marroquino temperado com limão e azeite, alface americana, pepino, cebola roxa, cenoura e tomate' },
        { 'name': 'Salada Caesar do Villa com Frango', 'description': 'filé de peito de frango em tiras, tirinhas de salame crocante, alface americana, aioli de leite, queijo parmesão e croutons' }
    ]
};

function updateDishes() {
    const restaurant = document.getElementById('restaurante').value;
    const dishSelect = document.getElementById('prato');
    dishSelect.innerHTML = '';
    for (const dish of dishes[restaurant]) {
        const option = document.createElement('option');
        option.value = dish.name;
        option.textContent = dish.name;
        dishSelect.appendChild(option);
    }
    updateDescription();
}

function updateDescription() {
    const restaurant = document.getElementById('restaurante').value;
    const dishName = document.getElementById('prato').value;
    const description = dishes[restaurant].find(dish => dish.name === dishName).description;
    document.getElementById('description').value = description;
}


