function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;
  let validationStar = document.forms["register"]["star"].value;
  let validationRating = document.forms["register"]["rating"].value;

  if (validationCod == "") {
    alert("ATENÇÃO! O 'Código' deve ser preenchido.");
    return false;
  }
  if (validationTitle == "") {
    alert("ATENÇÃO! O campo 'Título' deve ser preenchido.");
    return false;
  }
  if (validationDirector == "") {
    alert("ATENÇÃO! O campo 'Diretor' deve ser preenchido.");
    return false;
  }
  if (validationDate == "") {
    alert("ATENÇÃO! O campo 'Data' deve ser preenchido.");
    return false;
  }
  if (validationRadio == "") {
    alert("ATENÇÃO! O campo 'Gênero' deve ser selecionado.");
    return false;
  }
  if (validationStar == "") {
    alert("ATENÇÃO! O campo 'Ator/Atriz' deve ser preenchido.");
    return false;
  }
  if (validationRating == "") {
    alert("ATENÇÃO! O campo 'Nota ImdB' deve ser preenchido.");
    return false;
  }
  alert("A validação ocorreu de forma correta!");
}
function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let radio = document.forms["register"]["radio"].value;
  let star = document.forms["register"]["star"].value;
  let rating = document.forms["register"]["rating"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
    <th scope='row'>${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${radio}</td>
    <td>${star}</td>
    <td>${rating}</td>
      
        `;
}
