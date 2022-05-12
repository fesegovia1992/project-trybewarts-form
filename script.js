const btnHeader = document.getElementById('btn-submit-header');

btnHeader.addEventListener('click', () => {
  const emailHeader = document.getElementById('input-email-header');
  const senhaHeader = document.getElementById('input-password-header');
  if (emailHeader.value !== 'tryber@teste.com' && senhaHeader.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const checkInfo = document.getElementById('agreement');

checkInfo.addEventListener('click', () => {
  const btnSubmitForm = document.getElementById('submit-btn');
  if (checkInfo.checked) {
    btnSubmitForm.removeAttribute('disabled');
  }
});
