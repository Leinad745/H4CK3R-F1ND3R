import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";

export default function Ranking() {
    const [hackers, setHackers] = useState([]);

    useEffect(() => {
        const hackersData = [
            {
                id: 1,
                username: "Blackhat_Master",
                points: 15000,
                level: "Expert",
                challenges_completed: 120
            },
            {
                id: 2,
                username: "CyberNinja",
                points: 12000,
                level: "Advanced",
                challenges_completed: 95
            },
            {
                id: 3,
                username: "CodeBreaker",
                points: 10000,
                level: "Advanced",
                challenges_completed: 85
            },
            {
                id: 4,
                username: "SecurityPro",
                points: 8000,
                level: "Intermediate",
                challenges_completed: 65
            },
            {
                id: 5,
                username: "WhiteHat_Hero",
                points: 7500,
                level: "Intermediate",
                challenges_completed: 60
            },
            {
                id: 6,
                username: "ByteBuster",
                points: 7000,
                level: "Intermediate",
                challenges_completed: 55
            },
            {
                id: 7,
                username: "CryptoKing",
                points: 6800,
                level: "Intermediate",
                challenges_completed: 52
            },
            {
                id: 8,
                username: "NetworkNinja",
                points: 6500,
                level: "Intermediate",
                challenges_completed: 48
            },
            {
                id: 9,
                username: "BinaryBoss",
                points: 6200,
                level: "Beginner",
                challenges_completed: 45
            },
            {
                id: 10,
                username: "ScriptSorcerer",
                points: 5800,
                level: "Beginner",
                challenges_completed: 42
            },
            {
                id: 11,
                username: "HackHunter",
                points: 5500,
                level: "Beginner",
                challenges_completed: 40
            },
            {
                id: 12,
                username: "DataDragon",
                points: 5200,
                level: "Beginner",
                challenges_completed: 38
            },
            {
                id: 13,
                username: "ShellShock",
                points: 4900,
                level: "Beginner",
                challenges_completed: 35
            },
            {
                id: 14,
                username: "RootRaider",
                points: 4600,
                level: "Beginner",
                challenges_completed: 32
            },
            {
                id: 15,
                username: "ZeroDayZen",
                points: 4300,
                level: "Beginner",
                challenges_completed: 30
            }
        ];

        setHackers(hackersData);
    }, []);

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
                            <tr key={hacker.id}>
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