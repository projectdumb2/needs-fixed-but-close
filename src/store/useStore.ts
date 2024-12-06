import { create } from 'zustand';
import { Unit, ProjectArea, LaborRate, MileageRate } from '../types';

interface Store {
  units: Unit[];
  laborRates: LaborRate[];
  mileageRates: MileageRate[];
  projects: ProjectArea[];
  monthlyIncomePerCustomer: number;
  addUnit: (unit: Unit) => void;
  updateUnit: (unit: Unit) => void;
  addLaborRate: (rate: LaborRate) => void;
  updateLaborRate: (rate: LaborRate) => void;
  addMileageRate: (rate: MileageRate) => void;
  updateMileageRate: (rate: MileageRate) => void;
  addProject: (project: ProjectArea) => void;
  updateProject: (project: ProjectArea) => void;
  setMonthlyIncomePerCustomer: (amount: number) => void;
}

export const useStore = create<Store>((set) => ({
  units: [],
  laborRates: [],
  mileageRates: [],
  projects: [],
  monthlyIncomePerCustomer: 0,
  addUnit: (unit) => set((state) => ({ units: [...state.units, unit] })),
  updateUnit: (unit) =>
    set((state) => ({
      units: state.units.map((u) => (u.id === unit.id ? unit : u)),
    })),
  addLaborRate: (rate) =>
    set((state) => ({ laborRates: [...state.laborRates, rate] })),
  updateLaborRate: (rate) =>
    set((state) => ({
      laborRates: state.laborRates.map((r) => (r.id === rate.id ? rate : r)),
    })),
  addMileageRate: (rate) =>
    set((state) => ({ mileageRates: [...state.mileageRates, rate] })),
  updateMileageRate: (rate) =>
    set((state) => ({
      mileageRates: state.mileageRates.map((r) => (r.id === rate.id ? rate : r)),
    })),
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
  updateProject: (project) =>
    set((state) => ({
      projects: state.projects.map((p) => (p.id === project.id ? project : p)),
    })),
  setMonthlyIncomePerCustomer: (amount) =>
    set({ monthlyIncomePerCustomer: amount }),
}));