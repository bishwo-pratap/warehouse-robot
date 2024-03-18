'use client'
import React from 'react';
import ButtonComponent from "@/components/ButtonComponent";
import PositionComponent from "@/components/PositionComponent";
import WarehouseComponent from "@/components/WarehouseComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="mainDiv">
        <h1 className="text-3xl font-bold mb-4">Warehouse Robot</h1>
        <PositionComponent />
        <div className="flex flex-column">
          <ButtonComponent />
          <WarehouseComponent />
        </div>
      </div>
    </main>
  );
}
