import { User } from '../types';

export const users: User[] = [
  {
    id: 'admin1',
    email: 'admin@example.com',
    password: 'admin123',
    name: 'System Administrator',
    role: 'admin',
    contact: '+1 (555) 000-0000',
    address: 'Admin Office, Medical Center'
  },
  {
    id: '1',
    email: 'doctor@example.com',
    password: 'doctor123',
    name: 'Dr. John Smith',
    role: 'doctor',
    age: 45,
    gender: 'male',
    dateOfBirth: '1978-03-20',
    contact: '+1 (555) 987-6543',
    address: '456 Medical Center Blvd, Healthcare City, HC 54321',
    specialization: 'Cardiology',
    licenseNumber: 'MD123456',
    experience: '15 years',
    education: 'MD from Harvard Medical School',
    department: 'Cardiology'
  },
  {
    id: '2',
    email: 'patient@example.com',
    password: 'patient123',
    name: 'Jane Doe',
    role: 'patient',
    age: 28,
    gender: 'female',
    dateOfBirth: '1995-06-15',
    contact: '+1 (555) 123-4567',
    address: '123 Health Street, Medical City, MC 12345',
    bloodGroup: 'O+',
    allergies: ['Penicillin', 'Peanuts', 'Latex'],
    surgeries: [
      {
        name: 'Appendectomy',
        date: '2020-03-15',
        hospital: 'City General Hospital'
      },
      {
        name: 'Tonsillectomy',
        date: '2018-07-22',
        hospital: 'Medical Center East'
      }
    ],
    prescriptions: [
      {
        medication: 'Amoxicillin',
        dosage: '500mg',
        frequency: 'Twice daily',
        prescribedDate: '2023-12-01',
        doctor: 'Dr. Sarah Johnson'
      },
      {
        medication: 'Loratadine',
        dosage: '10mg',
        frequency: 'Once daily',
        prescribedDate: '2023-11-15',
        doctor: 'Dr. John Smith'
      }
    ],
    insurance: {
      provider: 'HealthGuard Insurance',
      policyNumber: 'HG123456789',
      expiryDate: '2024-12-31',
      coverage: 'Comprehensive'
    },
    diseases: [
      {
        name: 'Asthma',
        diagnosedDate: '2015-05-10',
        status: 'Controlled'
      },
      {
        name: 'Seasonal Allergies',
        diagnosedDate: '2018-03-22',
        status: 'Ongoing'
      }
    ]
  }
];