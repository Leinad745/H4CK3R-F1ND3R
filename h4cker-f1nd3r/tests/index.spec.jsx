import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from '../src/components/navbar';
import { Index } from '../src/index'
import '@testing-library/jest-dom'

//MOCKS
vi.mock('../src/assets/img_index2.png', () => ({
    default: 'logo_indx.png'
}));

vi.mock('../src/assets/teamwork.png', () => ({
    default: 'teamwork_test.png'
}));

vi.mock('../src/assets/ranking.png', () => ({
    default: 'rank_test.png'
}));

vi.mock('../src/assets/skills.png', () => ({
    default: 'skill_test.png'
}));

//funcion espia
const mockNavigate = vi.fn();
 
//Mocks de importaciones
vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

vi.mock('bootstrap/dist/css/bootstrap.min.css', () => ({}));
vi.mock('bootstrap/dist/js/bootstrap.bundle.min.js', () => ({}));

describe('Index', () => {
    let usuario = userEvent.setup();

    beforeEach(() => {
        vi.clearAllMocks();
        render(<Index />);
});

it('Textos', () => {
    expect(screen.getByText(/BUSCA COMPAÑEROS PARA CTFs Y HACKATHONS SIN TEMOR!/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Conéctate con otros Hackers/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Sin experiencia\? No hay problema!/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Compite en nuestro ranking!/i })).toBeInTheDocument();
});

it('Imagenes', () => {
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src','logo_indx.png');

    expect(screen.getByAltText('Equipo hacker')).toBeInTheDocument();
    expect(screen.getByAltText('Aprendizaje')).toBeInTheDocument();
    expect(screen.getByAltText('Ranking')).toBeInTheDocument();

    expect(screen.getByAltText('Equipo hacker')).toHaveAttribute('src', 'teamwork_test.png');
    expect(screen.getByAltText('Aprendizaje')).toHaveAttribute('src', 'skill_test.png');
    expect(screen.getByAltText('Ranking')).toHaveAttribute('src', 'rank_test.png');

});

it('Boton login', async () => {
    const loginBoton = screen.getByRole('button', { name: /Iniciar Sesión/i });
    await usuario.click(loginBoton);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/login')    
});

it('Boton registro', async () => {
    const registroBoton = screen.getByRole('button', { name: /Registrate!/i});
    await usuario.click(registroBoton);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/register');
})

});