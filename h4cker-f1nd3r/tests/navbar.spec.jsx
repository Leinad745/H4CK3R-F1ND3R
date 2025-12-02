import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../src/components/navbar';
import Perfil from '../src/perfil'
import '@testing-library/jest-dom'

//MOCKS

vi.mock('../src/assets/logo_new.png', () => ({
    default: 'logo_test.png',
}));

vi.mock('../src/perfil', () => ({
    default: vi.fn(),
}));

describe('Navbar', () => {
    
    let usuario = userEvent.setup();

    //limpia los mocks antes de las pruebas
    beforeEach(() => {
        vi.clearAllMocks();

        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
    });

    //Render de logo y link

    let ln = 'link'

    it('Logo y link render', () => {
        const logoLink = screen.getByRole(ln, { name: /logo/i});
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute('href', '/');

        const logoImg = screen.getByAltText('Logo');
        expect(logoImg).toBeInTheDocument();
        expect(logoImg).toHaveAttribute('src', 'logo_test.png');
    });

    //Enlaces
    it('Enlaces Navbar', () => {
        expect(screen.getByRole(ln, { name: /perfil/i })).toBeInTheDocument();
        expect(screen.getByRole(ln, { name: /equipo/i })).toBeInTheDocument();
        expect(screen.getByRole(ln, { name: /calendario/i })).toBeInTheDocument();
    });

    //atributos
    it('Atributos href', () => {
        expect(screen.getByRole(ln, { name: /perfil/i })).toHaveAttribute('href', '/perfil');
        expect(screen.getByRole(ln, { name: /equipo/i })).toHaveAttribute('href', '/equipo');
        expect(screen.getByRole(ln, { name: /calendario/i })).toHaveAttribute('href', '/calendario');
    });


    //interaccion de usuario
    it('funcion Perfil', async () => {
        const profBoton = screen.getByRole('button', { name: /perfil/i });
        await usuario.click(profBoton)

        expect(Perfil).toHaveBeenCalledTimes(1);
    });
    
    it('toggler en moviles', () => {
        const menuHamburguesaMovil = screen.getByLabelText('Toggle navigation');
        expect(menuHamburguesaMovil).toBeInTheDocument();

        expect(menuHamburguesaMovil).toHaveAttribute('data-bs-target', '#navbarTogglerDemo03');
    });
});