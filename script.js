function showGlebas(fazenda) {
    const glebasFazenda = document.getElementById('glebasFazenda');
    const mapaContainer = document.getElementById('mapaContainer');
    const quadrasContainer = document.getElementById('quadras');

    // Limpar conteúdo de glebas anteriores
    glebasFazenda.innerHTML = '';
    quadrasContainer.innerHTML = '';
    mapaContainer.style.display = 'none';

    let glebas;
    if (fazenda === 'fazenda1') {
        glebas = ['Gleba 1', 'Gleba 2', 'Gleba 3'];
    } else if (fazenda === 'fazenda2') {
        glebas = ['Gleba A', 'Gleba B', 'Gleba C'];
    } else if (fazenda === 'fazenda3') {
        glebas = ['Gleba X', 'Gleba Y', 'Gleba Z'];
    } else if (fazenda === 'fazenda4') {
        glebas = ['Gleba P', 'Gleba Q', 'Gleba R'];
    }

    glebas.forEach(gleba => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.innerText = gleba;
        button.onclick = function() { showQuadras(gleba); };
        glebasFazenda.appendChild(button);
    });
}

function showQuadras(gleba) {
    const quadrasContainer = document.getElementById('quadras');
    const mapaContainer = document.getElementById('mapaContainer');

    // Limpar conteúdo anterior de quadras
    quadrasContainer.innerHTML = '';

    let quadras;
    if (gleba === 'Gleba 1') {
        quadras = ['Quadra 1', 'Quadra 2'];
    } else if (gleba === 'Gleba 2') {
        quadras = ['Quadra 3', 'Quadra 4'];
    } else if (gleba === 'Gleba 3') {
        quadras = ['Quadra 5', 'Quadra 6'];
    }

    quadras.forEach(quadra => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-success');
        button.innerText = quadra;
        button.onclick = function() { showMapa(quadra); };
        quadrasContainer.appendChild(button);
    });

    // Exibir as quadras
    quadrasContainer.style.display = 'block';
}

function showMapa(quadra) {
    const mapaContainer = document.getElementById('mapaContainer');
    const quadrasContainer = document.getElementById('quadras');

    // Exibir mapa da quadra selecionada
    mapaContainer.style.display = 'block';
    quadrasContainer.style.display = 'none';

    // Aqui você pode adicionar código para mostrar o mapa específico da quadra
    // Por exemplo, adicionar alfinetes e as informações de cultivo
    alert('Exibindo mapa da ' + quadra); // Isso pode ser substituído por um mapa real
}
