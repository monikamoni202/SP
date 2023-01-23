import { lazy } from 'react';

// Login
export const Login = lazy(() => import('./Login/Login'));

// Dashboard
export const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

export const Hello = 20;
