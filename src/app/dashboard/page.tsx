"use client";
import React, { useState } from 'react';
import { Camera, AlertCircle, CheckCircle2, Moon, Sun } from 'lucide-react';

export default function DiarioPage() {
  // Simulación de algunas de tus cámaras (como las de SA HOUSE o NVR CACHITAMBO )
  const [camaras, setCamaras] = useState([
    { id: 1, nombre: "CAM 1. Ingreso principal", estado: "OK" },
    { id: 2, nombre: "CAM 2. Garaje", estado: "FALLA" },
    { id: 3, nombre: "Pasillo Impresoras", estado: "OK" },
    { id: 4, nombre: "Nivel -120 Tasa Bombeo", estado: "OFFLINE" },
  ]);

  return (
    <div className="p-8 min-h-screen bg-celeste-suave">
      {/* Encabezado Estilo Jujutsu */}
      <header className="flex justify-between items-center mb-10 bg-marino p-6 rounded-2xl shadow-lg text-white">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tighter">FORM-CAM: REVISIÓN DIARIA</h1>
          <p className="text-blue-300">Regional Potosí - NVR CACHITAMBO</p>
        </div>
        <div className="flex gap-4">
            <button className="bg-azul-jujutsu px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
                Marcar Todo OK
            </button>
        </div>
      </header>

      {/* Rejilla de Cámaras (Aquí entrarían las 200) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {camaras.map((cam) => (
          <div 
            key={cam.id}
            className={`p-6 rounded-xl border-2 transition-all shadow-md ${
              cam.estado === 'OK' 
              ? 'bg-white border-azul-jujutsu text-azul-jujutsu' 
              : 'bg-vacio-purpura border-destello-rojo text-white'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <Camera size={24} className={cam.estado === 'OK' ? 'text-azul-jujutsu' : 'text-destello-rojo'} />
              {cam.estado === 'OK' ? <CheckCircle2 /> : <AlertCircle className="animate-pulse" />}
            </div>
            <h3 className="font-bold text-lg mb-2">{cam.nombre}</h3>
            <span className={`text-xs font-black uppercase px-2 py-1 rounded ${
              cam.estado === 'OK' ? 'bg-celeste-suave' : 'bg-destello-rojo'
            }`}>
              {cam.estado}
            </span>
          </div>
        ))}
      </div>

      {/* Botón Flotante para Reporte Nocturno */}
      <button className="fixed bottom-8 right-8 bg-destello-rojo p-4 rounded-full text-white shadow-2xl hover:rotate-12 transition-all">
        <Moon size={32} />
      </button>
    </div>
  );
}