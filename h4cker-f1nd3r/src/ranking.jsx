import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Ranking() {
    const [hackers, setHackers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const hackersData = [
            {
            id: "blackhat_master",
            username: "Blackhat_Master",
            points: 15000,
            level: "Fl4g-Hunt3r",
            challenges_completed: 120
            },
            {
            id: "cyberninja",
            username: "CyberNinja",
            points: 12000,
            level: "Fl4g-Hunt3r",
            challenges_completed: 95
            },
            {
            id: "codebreaker",
            username: "CodeBreaker",
            points: 10000,
            level: "R3d-T34m3r",
            challenges_completed: 85
            },
            {
            id: "securitypro",
            username: "SecurityPro",
            points: 8000,
            level: "R3d-T34m3r",
            challenges_completed: 65
            },
            {
            id: "whitehat_hero",
            username: "WhiteHat_Hero",
            points: 7500,
            level: "R3d-T34m3r",
            challenges_completed: 60
            },
            {
            id: "bytebuster",
            username: "ByteBuster",
            points: 7000,
            level: "Scr1pt-K1dd13",
            challenges_completed: 55
            },
            {
            id: "cryptoking",
            username: "CryptoKing",
            points: 6800,
            level: "Scr1pt-K1dd13",
            challenges_completed: 52
            },
            {
            id: "networkninja",
            username: "NetworkNinja",
            points: 6500,
            level: "Scr1pt-K1dd13",
            challenges_completed: 48
            },
            {
            id: "binaryboss",
            username: "BinaryBoss",
            points: 6200,
            level: "Scr1pt-K1dd13",
            challenges_completed: 45
            },
            {
            id: "scriptsorcerer",
            username: "ScriptSorcerer",
            points: 5800,
            level: "pr1nc1p14nt3",
            challenges_completed: 42
            },
            {
            id: "hackhunter",
            username: "HackHunter",
            points: 5500,
            level: "pr1nc1p14nt3",
            challenges_completed: 40
            },
            {
            id: "datadragon",
            username: "DataDragon",
            points: 5200,
            level: "pr1nc1p14nt3",
            challenges_completed: 38
            },
            {
            id: "shellshock",
            username: "ShellShock",
            points: 4900,
            level: "pr1nc1p14nt3",
            challenges_completed: 35
            },
            {
            id: "rootraider",
            username: "RootRaider",
            points: 4600,
            level: "pr1nc1p14nt3",
            challenges_completed: 32
            },
            {
            id: "zerodayzen",
            username: "ZeroDayZen",
            points: 4300,
            level: "pr1nc1p14nt3",
            challenges_completed: 30
            }
        ];

        setHackers(hackersData);
    }, []);

    const verPerfil = (usuarioId) => {
        navigate(`/perfil/${usuarioId}`)
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Ranking de Hackers</h1>
            <div className="table-responsive">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Posición</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Puntos</th>
                            <th scope="col">Nivel</th>
                            <th scope="col">Retos Completados</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hackers.map((hacker, index) => (
                            <tr key={hacker.id}
                                onClick={() => verPerfil(hacker.id)}
                                style={{ cursor: 'pointer'}}>
                                <td>{index + 1}</td>
                                <td>{hacker.username}</td>
                                <td>{hacker.points.toLocaleString()}</td>
                                <td>{hacker.level}</td>
                                <td>{hacker.challenges_completed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}