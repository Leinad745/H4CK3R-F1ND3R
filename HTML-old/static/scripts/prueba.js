function submitQuiz() {
    const respuestasCorrectas = {
        q1: "rce",
        q2: "five",
        q3: "hydra",
        q4: "all",
        q5: "mm",
        q6: "fw",
        q7: "bsd",
        q8: "sudo",
        q9: "aws",
        q10: "todos"
    };
    
    let contadorCorrectas = 0;
    let totalPreguntas = 0;
    const respuestasUsuario = {};
    let todasRespondidas = true;
    
    for (let i = 1; i <= 10; i = i + 1) {
        const idPregunta = `q${i}`;
        const valor = document.getElementById(idPregunta).value;

        if (valor === "") {
            alert(`Por favor responde la pregunta ${i}`);
            todasRespondidas = false;
            break;
        }

        respuestasUsuario[idPregunta] = valor;

        if (respuestasCorrectas[idPregunta] !== null) {
            totalPreguntas = totalPreguntas + 1;
            if (valor === respuestasCorrectas[idPregunta]) {
                contadorCorrectas = contadorCorrectas + 1;
            }
        }
    }
    if (todasRespondidas) {
        let nivel = "";

        if (contadorCorrectas <= 2) {
            nivel = "pr1nc1p14nt3";
            mensaje = "Tu nivel es Pr1nc1p14nt3. No te desanimes, la práctica hace al maestro. Sigue aprendiendo y mejorando tus habilidades en ciberseguridad.";
            imagen = "static/img/novato.png";
        } else if (contadorCorrectas <= 5) {
            nivel = "Scr1pt-K1dd13";
            mensaje = "Tu nivel es Scr1pt-K1dd13. Tienes un buen conocimiento básico, pero aún hay mucho por aprender.";
            imagen = "static/img/script_kiddie.png";
        } else if (contadorCorrectas <= 8) {
            nivel = "R3d-T34m3r";
            mensaje = "Tu nivel es R3d-T34m3r. Estás en el camino correcto para convertirte en un experto en ciberseguridad. Sigue así.";
            imagen = "static/img/red_teamer.png";
        } else {
            nivel = "Fl4g-Hunt3r";
            mensaje = "¡Felicidades! Tu nivel es Fl4g-Hunt3r. Eres un experto en ciberseguridad.";
            imagen = "static/img/flag_hunter.png";
        }

        const usuariosStr = localStorage.getItem('usuarios');
        if (usuariosStr) {
            const usuarios = JSON.parse(usuariosStr);
            if (usuarios.length > 0) {
                usuarios[usuarios.length - 1].nivel = nivel;
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
            }
        }

        const overlay = document.getElementById("overlay");
        overlay.style.display = "flex";
        overlay.innerHTML = `
            <h1>Tu nivel es: ${nivel}</h1>
            <p>${mensaje}</p>
            <img src="${imagen}" alt="${nivel}">
            <a href="Perfil.html" class="btn">Ir a mi Perfil</a>
        `;
    
    }}