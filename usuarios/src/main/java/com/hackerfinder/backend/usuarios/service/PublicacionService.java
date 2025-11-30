package com.hackerfinder.backend.usuarios.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.hackerfinder.backend.usuarios.repository.PublicacionRepository;
import java.util.List;
import com.hackerfinder.backend.usuarios.model.Publicacion;

@Service
@Transactional
public class PublicacionService {
    @Autowired
    private PublicacionRepository publicacionRepository;

    public List<Publicacion> getAllPublicaciones() {
        return publicacionRepository.findAll();
    }

    public Publicacion findById(Long id) {
        return publicacionRepository.findById(id).orElse(null);
    }

    public List<Publicacion> findByIdUsuario(Long idUsuario) {
        return publicacionRepository.findByUsuario_IdUsuario(idUsuario);
    }

    public Publicacion savePublicacion(Publicacion publicacion) {
        return publicacionRepository.save(publicacion);
    }

    public void delete(Long id) {
        publicacionRepository.deleteById(id);
    }
}
