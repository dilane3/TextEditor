// this is the place where we should create all logic

const tableButton = [...document.querySelectorAll("button")];
const result = document.querySelector(".result");
const submit = document.querySelector(".submit");
const messageContent = document.querySelector(".editor-body");


// la gestion des evenements sur les composants du DOM

tableButton.forEach(button => {
  button.addEventListener('click', function() {
    let idName = button.id;

    commande(idName);
  });
})

submit.addEventListener('click', function() {
  const message = messageContent.innerHTML;

  result.innerHTML = message;
});


// la definition des fonctions

function commande(name) {
  switch (name) {
    case 'bold':
      document.execCommand(name, false, null);
      break;

    case 'italic':
      document.execCommand(name, false, null);
      break;

    case 'underline':
      document.execCommand(name, false, null);
      break;

    case 'link':
      let link = prompt("donner le lien");

      if (link !== '') {
        document.execCommand("createLink", false, link);
      } else {
        alert("donner un lien valide");
      }
      break;

    default: break;
  }
}
