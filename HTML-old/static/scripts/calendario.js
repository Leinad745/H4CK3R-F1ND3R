function Calendario() {
    console.log('Cargando datos de prueba directamente...');
    cargarDatosPrueba();
}

// Función para cargar datos de prueba
function cargarDatosPrueba() {
    const cargando = document.getElementById('cargando');
    const error = document.getElementById('error');
    const tabla = document.getElementById('ctfTable');
    const tbody = document.getElementById('ctfTableBody');

    console.log('Cargando datos de prueba...');

    // Datos de prueba - Algunos no son reales
    const ctfsPrueba = [
        {
            "title": "UofTCTF 2025",
            "start": "2025-01-11T00:00:00+00:00",
            "finish": "2025-01-13T00:00:00+00:00",
            "duration": {"hours": 0, "days": 2},
            "logo": "https://ctftime.org//media/events/uoftctf_logo_3000_black.png",
            "format": "Jeopardy",
            "participants": 141,
            "weight": 23.90,
            "restrictions": "Open",
            "url": "https://ctf.uoftctf.org/",
            "ctftime_url": "https://ctftime.org/event/2570/"
        },
        {
            "title": "Dreamhack CTF Season 7 Round #1 (Div. 1)",
            "start": "2025-01-11T00:00:00+00:00",
            "finish": "2025-01-11T15:00:00+00:00",
            "duration": {"hours": 15, "days": 0},
            "logo": "https://ctftime.org//media/events/cover01.jpg",
            "format": "Jeopardy",
            "participants": 50,
            "weight": 0,
            "restrictions": "Individual",
            "url": "https://dreamhack.io/ctf/655",
            "ctftime_url": "https://ctftime.org/event/2621/"
        },
        {
            "title": "SUCTF 2025",
            "start": "2025-01-11T01:00:00+00:00",
            "finish": "2025-01-13T01:00:00+00:00",
            "duration": {"hours": 0, "days": 2},
            "logo": null,
            "format": "Jeopardy",
            "participants": 0,
            "weight": 24.80,
            "restrictions": "Open",
            "url": "https://suctf2025.xctf.org.cn/",
            "ctftime_url": "https://ctftime.org/event/2620/"
        },
        {
            "title": "Cyber League 2025 - Major",
            "start": "2025-01-11T02:00:00+00:00",
            "finish": "2025-01-12T02:00:00+00:00",
            "duration": {"hours": 0, "days": 1},
            "logo": null,
            "format": "Jeopardy",
            "participants": 62,
            "weight": 0.00,
            "restrictions": "Open",
            "url": "https://ctfd.cyberleague.com",
            "ctftime_url": "https://ctftime.org/event/2530/"
        },
        {
            "title": "New Year CTF 2025",
            "start": "2025-01-12T17:00:00+00:00",
            "finish": "2025-01-14T17:00:00+00:00",
            "duration": {"hours": 0, "days": 2},
            "logo": "https://ctftime.org//media/events/NY2025.jpg",
            "format": "Jeopardy",
            "participants": 200,
            "weight": 23.13,
            "restrictions": "Open",
            "url": "http://ctf-spcs.mf.grsu.by/",
            "ctftime_url": "https://ctftime.org/event/2582/"
        }
    ];

    // Oculta elementos al cargar datos
    if (cargando) cargando.style.display = 'none';
    if (error) error.classList.add('d-none');
    
    // Limpiar tabla
    if (tbody) tbody.innerHTML = '';

    // Rellenar tabla con datos de prueba
    ctfsPrueba.forEach(ctf => {

        const row = document.createElement('tr');
        
        const fechaInicio = new Date(ctf.start).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const fechaFin = new Date(ctf.finish).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Formatear duración del CTF
        let duracion = '';
        if (ctf.duration.days > 0) duracion += `${ctf.duration.days}d `;
        if (ctf.duration.hours > 0) duracion += `${ctf.duration.hours}h`;
        if (!duracion) duracion = 'No especificada';


        // Construir filas
        row.innerHTML = `
            <td>
                ${ctf.logo ? 
                    `<img src="${ctf.logo}" alt="Logo" class="img-thumbnail" style="width: 50px; height: 50px; object-fit: cover;">` : 
                    '<div class="bg-secondary text-white d-flex align-items-center justify-content-center" style="width: 50px; height: 50px; border-radius: 4px;">CTF</div>'
                }
            </td>
            <td>
                <strong>${ctf.title}</strong>
                <br>
                <small class="text-muted" style="color: #6c757d;">Weight: ${ctf.weight}</small>
            </td>
            <td>${fechaInicio}</td>
            <td>${fechaFin}</td>
            <td><span class="badge bg-info">${duracion}</span></td>
            <td><span class="badge bg-success">${ctf.format}</span></td>
            <td>
                <span class="badge bg-secondary">${ctf.participants}</span>
                <br>
                <small class="text-muted">${ctf.restrictions}</small>
            </td>
            <td>
                <div class="btn-group-vertical" role="group">
                    <a href="${ctf.url}" target="_blank" class="btn btn-sm btn-outline-success mb-1">Participar</a>
                    <a href="${ctf.ctftime_url}" target="_blank" class="btn btn-sm btn-outline-info">CTFTime</a>
                </div>
            </td>
        `;
        
        // agregar filas a las tablas
        tbody.appendChild(row);
    });

    // Mostrar tabla
    if (tabla) tabla.style.display = 'table';
    
    console.log('Datos de prueba cargados exitosamente');
}

// Cargar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, iniciando calendario...');
    Calendario();
});