import React from 'react';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'doctor' | 'patient' | 'admin';
  age?: number;
  gender?: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  contact?: string;
  address?: string;
  bloodGroup?: string;
  specialization?: string;
  licenseNumber?: string;
  experience?: string;
  education?: string;
  department?: string;
  allergies?: string[];
  surgeries?: Array<{
    name: string;
    date: string;
    hospital: string;
  }>;
  prescriptions?: Array<{
    medication: string;
    dosage: string;
    frequency: string;
    prescribedDate: string;
    doctor: string;
  }>;
  insurance?: {
    provider: string;
    policyNumber: string;
    expiryDate: string;
    coverage: string;
  };
  diseases?: Array<{
    name: string;
    diagnosedDate: string;
    status: string;
  }>;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}