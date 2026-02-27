const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const normalizePath = (path) => {
  if (!path) return '';
  return path.startsWith('/') ? path : `/${path}`;
};

export const apiUrl = (path) => `${API_BASE_URL}${normalizePath(path)}`;

export const uploadUrl = (path) => `${API_BASE_URL}${normalizePath(path)}`;
