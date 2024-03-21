'use client'
import 'flowbite-react';
import React from 'react';
import ButtonComponent from "@/components/ButtonComponent";
import PositionComponent from "@/components/PositionComponent";
import WarehouseComponent from "@/components/WarehouseComponent";
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="mainDiv">
        <NavBar/>
        <PositionComponent />
        <div className="flex flex-column space-x-32">
          <ButtonComponent />
          <WarehouseComponent />
        </div>
      </div>
    </main>
  );
}
