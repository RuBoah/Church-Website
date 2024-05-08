'use client';
import React from 'react';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';

function Attendance() {
  return (
    <div>
      <h1 className="my-5">Attendance</h1>
      <Search placeholder="Search members..." />

      <table />
    </div>
  );
}

export default Attendance;
