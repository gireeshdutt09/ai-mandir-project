import React, { createContext, useContext, useState, useEffect } from 'react';
import { BookingReservation } from '../types/temple';

interface BookingContextType {
  bookings: BookingReservation[];
  createBooking: (reservation: Omit<BookingReservation, 'id' | 'bookingRef' | 'status' | 'createdAt'>) => BookingReservation;
  activePass: BookingReservation | null;
  setActivePass: (pass: BookingReservation | null) => void;
  cancelBooking: (id: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<BookingReservation[]>(() => {
    try {
      const saved = localStorage.getItem('kashi_trust_bookings');
      if (saved) return JSON.parse(saved);
      // Sample initial booking receipt
      return [
        {
          id: 'bkg-101',
          bookingType: 'sugam',
          templeId: 'kashi-vishwanath',
          templeName: 'Shri Kashi Vishwanath Temple',
          devoteeName: 'Ananya Sharma',
          phone: '+91 98765 43210',
          email: 'ananya@example.com',
          date: '2026-11-05',
          slotOrItem: 'Morning Slot (06:00 AM - 08:00 AM)',
          numberOfPersons: 2,
          amount: 600,
          bookingRef: 'SKVT-2026-SD-8821',
          status: 'Confirmed',
          createdAt: '2026-11-01'
        }
      ];
    } catch {
      return [];
    }
  });

  const [activePass, setActivePass] = useState<BookingReservation | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('kashi_trust_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to save bookings', e);
    }
  }, [bookings]);

  const createBooking = (reservationData: Omit<BookingReservation, 'id' | 'bookingRef' | 'status' | 'createdAt'>): BookingReservation => {
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const prefix = reservationData.bookingType === 'sugam' ? 'SKVT-SD' : reservationData.bookingType === 'aarti' ? 'SKVT-AR' : 'SKVT-PR';
    const newBooking: BookingReservation = {
      ...reservationData,
      id: `bkg-${Date.now()}`,
      bookingRef: `${prefix}-2026-${randomHex}`,
      status: 'Confirmed',
      createdAt: new Date().toISOString().split('T')[0]
    };

    setBookings(prev => [newBooking, ...prev]);
    setActivePass(newBooking);
    return newBooking;
  };

  const cancelBooking = (id: string) => {
    setBookings(prev => prev.filter(b => b.id !== id));
    if (activePass?.id === id) setActivePass(null);
  };

  return (
    <BookingContext.Provider value={{ bookings, createBooking, activePass, setActivePass, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
