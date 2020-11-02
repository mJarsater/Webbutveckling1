var boxes = Array.from(document.getElementsByClassName("box"));

function selectBox(id) {
    boxes.forEach(b => {
        b.classList.toggle('selected', b.id == id);
    });
}

boxes.forEach(b => {
    var id = b.id;
    b.addEventListener('click', e => {
        history.pushState({ id }, 'Titel', `./selected=${id}`)
        selectBox(id);
    });
});

window.addEventListener('popstate', e => {
    if (e.state !== null)
        selectBox(e.state.id);
    else
        selectBox(null);
});