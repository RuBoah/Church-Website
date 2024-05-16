'use client';
import React from 'react';
import Search from '@/app/ui/search';
import Datatable from '@/app/ui/datatable';
function Attendance() {
  const invoices = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      amount: 100.0,
      date: '2024-05-16',
      status: 'Paid',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      amount: 150.0,
      date: '2024-05-15',
      status: 'Pending',
    },
    // Add more invoices as needed
  ];
  return (
    <div>
      <h1 className="my-5">Member Records</h1>
      <Search placeholder="Search a member to log attendance..." />
      <Datatable invoices={invoices} />
      <h1 className="my-5">Attendance Records</h1>
      <Datatable invoices={invoices} />
    </div>
  );
}

export default Attendance;

// install axios
// TODO what data to show for attendace records
// TODO name, date, member_id, check_in, check_out, entered_by, service_id,service_name
// TODO get necessary fields to display from members
