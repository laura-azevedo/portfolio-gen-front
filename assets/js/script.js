formulario.addEventListener('submit', function(event) {
    event.preventDefault();
  
    let erro = false;
  
    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');

    if (campoNome.value.length < 3) {
      txtNome.innerHTML = 'O Nome deve ter, no mínimo, 3 caracteres.';
      erro = true;
    } else {
      txtNome.innerHTML = '';
    }
  
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if (!validator.isEmail(campoEmail.value)) {
      txtEmail.innerHTML = 'Digite um e-mail válido.';
      erro = true;
    } else {
      txtEmail.innerHTML = '';
    }
  
    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
    
    if (campoSubject.value.length < 5) {
      txtSubject.innerHTML = 'O Assunto deve ter, no minimo, 5 caracteres.';
      erro = true;
    } else {
      txtSubject.innerHTML = '';
    }
  
    const campoMessage = document.querySelector('#message');
  
    if (erro) {
      return;
    }
  
    window.alert("Formulário Enviado com Sucesso!");
  
    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMessage.value = '';
  });
  