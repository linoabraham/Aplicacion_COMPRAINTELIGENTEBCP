// CronogramaTable.js
"use client"

import React, { useState, useEffect } from 'react';


const colors = ["#ffffff", "#ffffff", "#ffffff", "#ffffff"]; // Colores para los bordes

const CronogramaTable = ({ cronogramas, van, tir }) => {
    const [borderColor, setBorderColor] = useState(colors[0]);

    useEffect(() => {
        let currentColorIndex = 0;
        const intervalId = setInterval(() => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            setBorderColor(colors[currentColorIndex]);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>Cronograma</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="value-box">
                    <div className="value-title">VAN</div>
                    <div className="value">{van !== undefined ? van : 'N/A'}</div>
                </div>
                <div className="value-box">
                    <div className="value-title">TIR</div>
                    <div className="value">{tir !== undefined ? tir : 'N/A'} %  </div>
                </div>
            </div>

            {cronogramas.map((cronograma, index) => (
                <div key={index}>
                    <h3>Cronograma {index + 1}</h3>
                    <table style={{ borderColor: borderColor, borderCollapse: 'collapse' }}>
                        <thead>
                        <tr>
                            <th style={{ borderColor: borderColor }}>N° cuota</th>
                            <th style={{ borderColor: borderColor }}>Deuda</th>
                            <th style={{ borderColor: borderColor }}>Amortización</th>
                            <th style={{ borderColor: borderColor }}>Interés</th>
                            <th style={{ borderColor: borderColor }}>Cuota</th>
                            <th style={{ borderColor: borderColor }}>Seguro Veh</th>
                            <th style={{ borderColor: borderColor }}>Total a pagar</th>
                            <th style={{ borderColor: borderColor }}>Saldo</th>
                            <th style={{ borderColor: borderColor }}>Flujos</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cronograma.map((cuota, cuotaIndex) => (
                            <tr key={cuotaIndex}>
                                <td style={{ borderColor: borderColor }}>{cuota.numeroCuota}</td>
                                <td style={{ borderColor: borderColor }}>{cuota.deuda}</td>
                                <td style={{ borderColor: borderColor }}>{cuota.amortización}</td>
                                <td style={{ borderColor: borderColor }}>{cuota.interes}</td>
                                <td style={{ borderColor: borderColor }}>{cuota.cuota}</td>
                                <td style={{ borderColor: borderColor }}>{cuota.seguroVeh}</td>
                                <td style={{ borderColor: borderColor }}>{cuota.totalPagar}</td>
                                <td style={{ borderColor: borderColor }}>{cuota.saldo}</td>
                                <td style={{ borderColor: borderColor }}>{cuota.flujo}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default CronogramaTable;
