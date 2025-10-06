function limpiarCampos() {
  document.getElementById("nombreCompleto").value = "";
  document.getElementById("nombreUsuario").value = "";
  document.getElementById("correoElectronico").value = "";
  document.getElementById("password").value = "";
  document.getElementById("passwordConfirm").value = "";
  document.getElementById("terminosCheckbox").checked = false;
}

// registro de usuarios
console.log("login.js loaded");
function regDatosUsuario() {
  let nombreCompleto = document.getElementById("nombreCompleto").value;
  let nombreUsuario = document.getElementById("nombreUsuario").value;
  let correoElectronico = document.getElementById("correoElectronico").value;
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("passwordConfirm").value;

  if (
      correoElectronico === "" ||
      nombreCompleto === "" ||
      password === "" ||
      passwordConfirm === "" ||
      nombreUsuario === ""
    ) {
      alert("Todos los campos deben ser llenados");
      return;
  }

  // Validar formato de correo electrónico
  if (!correoElectronico.includes("@") || !correoElectronico.includes(".")) {
    alert("Debes ingresar un correo electrónico válido (debe contener @ y .)");
    return;
  }

  let existeUsuario = false;
  let usuarios = [];
  try {
    const usuariosStorage = localStorage.getItem("usuarios");
    if (usuariosStorage && usuariosStorage !== "null") {
      usuarios = JSON.parse(usuariosStorage);
    }
  } catch (error) {
    console.error("Error al obtener usuarios de localStorage:", error);
    usuarios = [];
  }

  for (let i = 0; i < usuarios.length; i = i + 1) {
    if (usuarios[i].correoElectronico === correoElectronico) {
      existeUsuario = true;
      alert("El correo ya está registrado");
      return;
    }
  }

  if (existeUsuario === false) {
     if (password !== passwordConfirm) {
      alert("Las contraseñas no coinciden");
      return;
    } else if (!document.getElementById("terminosCheckbox").checked) {
      alert("Debes aceptar los términos y condiciones");
      return;
    } else {
      let nuevoUsuario = {
        nombreCompleto: nombreCompleto,
        nombreUsuario: nombreUsuario,
        correoElectronico: correoElectronico,
        password: password,
        nivel: "",
        edad: ""
      };

      
      usuarios.push(nuevoUsuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      alert("Registro exitoso");
      limpiarCampos();
      window.location.href = "preprueba.html"; // Rellena luego con la página a la que quieres redirigir
    }
  }

  console.log("El usuario", nombreUsuario, "ha sido registrado exitosamente.");
}

// login de usuarios

function loginUsuario() {
  let correoElectronicoLogin = document.getElementById(
    "correoElectronicoLogin"
  ).value;
  let passwordLogin = document.getElementById("passwordLogin").value;

  if (correoElectronicoLogin === "" || passwordLogin === "") {
    alert("Todos los campos deben ser llenados");
    return;
  } else if (!correoElectronicoLogin.includes("@") || !correoElectronicoLogin.includes(".")) {
    alert("Debes ingresar un correo electrónico válido (debe contener @ y .)");
    return;
  } else if (correoElectronicoLogin.length < 3 || passwordLogin.length < 3) {
    alert("Los campos deben tener al menos 3 caracteres");
  } else {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioEncontrado = false;

    for (let i = 0; i < usuarios.length; i = i + 1) {
      if (
        usuarios[i].correoElectronico === correoElectronicoLogin &&
        usuarios[i].password === passwordLogin
      ) {
        usuarioEncontrado = true;
        break;
      }
    }

    if (usuarioEncontrado) {
      alert("Login exitoso");
      window.location.href = "Perfil.html";
            limpiarCampos();
    } else {
      alert("Credenciales incorrectas");
    }
  }
}

function recuperarContraseña() {
  let correoElectronicoRecuperar = document.getElementById(
    "correoElectronicoRecuperar").value;

    if (correoElectronicoRecuperar === "") {
      alert("Debes ingresar tu correo electrónico");
      return;
    } else if (!correoElectronicoRecuperar.includes("@") || !correoElectronicoRecuperar.includes(".")) {
      alert("Debes ingresar un correo electrónico válido (debe contener @ y .)");
      return;
    } else {
      alert("Se ha enviado un correo de recuperación a " + correoElectronicoRecuperar);
    }
}