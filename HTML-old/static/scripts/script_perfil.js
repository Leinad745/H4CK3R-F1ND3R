function mostrarPerfil() {
    const usuariosStr = localStorage.getItem('usuarios');
    let usuario = null;

    if (usuariosStr) {
        const usuarios = JSON.parse(usuariosStr);
        usuario = usuarios[usuarios.length - 1]; // Último usuario registrado
    }

    console.log('Usuario encontrado:', usuario);
    
    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    setText('nombre', usuario?.nombreCompleto || 'Juan Pérez');
    setText('ciudad', usuario?.ciudad || 'Madrid');
    setText('edad', usuario?.edad || '30');
    setText('email', usuario?.correoElectronico || 'juanperez@example.com');
    setText('nombreUsuario', usuario?.nombreUsuario || 'usuario');
    setText('nivelUsuario', usuario?.nivel || 'Sin nivel');
    setText('nivelUsuario', usuario?.nivel || 'Full Stack Developer');
}

function guardarPerfil() {
    const usuariosStr = localStorage.getItem('usuarios');
    if (usuariosStr) {
        const usuarios = JSON.parse(usuariosStr);
        if (usuarios.length > 0) {
            // Actualizar el último usuario
            const ultimoUsuario = usuarios[usuarios.length - 1];
            ultimoUsuario.nombreCompleto = document.getElementById('nombreModal').value || ultimoUsuario.nombreCompleto;
            ultimoUsuario.correoElectronico = document.getElementById('emailModal').value || ultimoUsuario.correoElectronico;
            ultimoUsuario.ciudad = document.getElementById('ciudadModal').value || 'Madrid';
            ultimoUsuario.edad = document.getElementById('edadModal').value || '30';
            
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
    }

    mostrarPerfil();

    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
    alert('Perfil guardado correctamente.');
}

function rellenarModal() {
    const usuariosStr = localStorage.getItem('usuarios');
    let usuario = null;

    if (usuariosStr) {
        const usuarios = JSON.parse(usuariosStr);
        usuario = usuarios[usuarios.length - 1];
    }

    if (usuario) {
        document.getElementById('nombreModal').value = usuario.nombreCompleto || '';
        document.getElementById('emailModal').value = usuario.correoElectronico || '';
        document.getElementById('ciudadModal').value = usuario.ciudad || '';
        document.getElementById('edadModal').value = usuario.edad || '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarPerfil();

    const modalElement = document.getElementById('exampleModal');
    modalElement.addEventListener('show.bs.modal', rellenarModal);

    document.getElementById('guardarPerfilBtn').addEventListener('click', guardarPerfil);
});

// Función para cargar desde localStorage (opcional)
function cargarDesdeLocalStorage() {
    if (localStorage.getItem('perfilUsuario')) {
        const datosGuardados = JSON.parse(localStorage.getItem('perfilUsuario'));
        Object.assign(usuario, datosGuardados);
        cargarPerfil();
    }
}

// Función para guardar en localStorage (opcional)
function guardarEnLocalStorage() {
    localStorage.setItem('perfilUsuario', JSON.stringify(usuario));
}

// Modificar la función guardarCambiosPerfil para que también guarde en localStorage
const originalGuardarCambiosPerfil = guardarCambiosPerfil;
guardarCambiosPerfil = function(event) {
    originalGuardarCambiosPerfil(event);
    guardarEnLocalStorage();
};
