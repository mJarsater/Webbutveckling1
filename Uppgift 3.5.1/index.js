
// Hämtar alla boxar till en array
var boxes = Array.from(document.getElementsByClassName("box"));

// Loopar över boxarna och lägger till en eventlistner på varje
boxes.forEach(b => {
    var id = b.id;
    b.addEventListener('click', e => {
        // Eventlistner som lägger till ett state till history
        history.pushState({ id }, 'Titel', `./selected=${id}`)
        // Kallar på selectBox med rätt ID
        selectBox(id);
    });
});

// Funktion som togglar klassen för rätt box
function selectBox(id) {
    boxes.forEach(b => {
        // Toggla till selected om id matchar box.id
        b.classList.toggle('selected', b.id == id);
    });
}

/*  Denna används för att visa vilken som är iklickad om användare
    hoppar framåt och bakåt på sidan    */
// Lägger en eventlistner på window
window.addEventListener('popstate', e => {
    // Kollar om det finns något tillagt state för window
    if (e.state !== null)
        // Om det finns ett state så kalla på selectBox för rätt ID
        selectBox(e.state.id);
    else
        selectBox(null);
});