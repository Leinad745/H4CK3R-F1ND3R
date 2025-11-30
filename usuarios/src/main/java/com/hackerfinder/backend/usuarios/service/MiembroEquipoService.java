package com.hackerfinder.backend.usuarios.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import com.hackerfinder.backend.usuarios.repository.MiembroEquipoRepository;
import java.util.List;
import com.hackerfinder.backend.usuarios.model.MiembroEquipo;

@Service
@Transactional
public class MiembroEquipoService {
    @Autowired
    private MiembroEquipoRepository miembroEquipoRepository;

    public List<MiembroEquipo> getAllMiembrosEquipo() {
        return miembroEquipoRepository.findAll();
    }

    public MiembroEquipo findById(Long id) {
        return miembroEquipoRepository.findById(id).orElse(null);
    }

    public MiembroEquipo saveMiembroEquipo(MiembroEquipo miembroEquipo) {
        return miembroEquipoRepository.save(miembroEquipo);
    }

    public void delete(Long id) {
        miembroEquipoRepository.deleteById(id);
    }

    public List<MiembroEquipo> findByIdEquipo(Long idEquipo) {
        return miembroEquipoRepository.findByEquipoIdEquipo(idEquipo);
    }

    public List<MiembroEquipo> findByUsuario(Long idUsuario) {
        return miembroEquipoRepository.findByUsuarioIdUsuario(idUsuario);
    }
}