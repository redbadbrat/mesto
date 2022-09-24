//открыть/закрыть форму

function openNameEditForm() {
    document.getElementById("formPopup").style.display = "block";
  }
  
function closeNameEditForm() {
    document.getElementById("formPopup").style.display = "none";
  }

//подставить имеющееся значение в инпут

document.getElementById('inputName').value = document.getElementById('hName').textContent;
document.getElementById('inputStatus').value = document.getElementById('pStatus').textContent;

//заменить содержимое в элементах профиля на инпуты

function placeInputs() {
  let name = document.getElementById('inputName').value;
  console.log(name);
  let status = document.getElementById('inputStatus').value;
  console.log(status);
  document.getElementById('hName').textContent = name;
  document.getElementById('pStatus').textContent = status;
  closeNameEditForm();
}

//клик-клик

submitButton.addEventListener('click', placeInputs);