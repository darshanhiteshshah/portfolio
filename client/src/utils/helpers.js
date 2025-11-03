// Email Validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone Validation
export const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

// URL Validation
export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

// Form Validation
export const validateForm = (formData, rules) => {
  const errors = {};

  Object.keys(rules).forEach(field => {
    const rule = rules[field];
    const value = formData[field];

    if (rule.required && !value?.trim()) {
      errors[field] = `${field} is required`;
    }

    if (rule.minLength && value?.length < rule.minLength) {
      errors[field] = `${field} must be at least ${rule.minLength} characters`;
    }

    if (rule.maxLength && value?.length > rule.maxLength) {
      errors[field] = `${field} must not exceed ${rule.maxLength} characters`;
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      errors[field] = rule.errorMessage || `${field} is invalid`;
    }

    if (rule.custom) {
      const customError = rule.custom(value);
      if (customError) {
        errors[field] = customError;
      }
    }
  });

  return errors;
};

// Format Date
export const formatDate = (date, format = 'DD/MM/YYYY') => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year);
};

// Calculate Years of Experience
export const calculateYearsOfExperience = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();
  let years = today.getFullYear() - start.getFullYear();
  const monthDiff = today.getMonth() - start.getMonth();

  if (monthDiff < 0) {
    years--;
  }

  return years;
};

// Truncate Text
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Capitalize String
export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

// Format Number with Commas
export const formatNumber = (num) => {
  return num.toLocaleString('en-IN');
};

// Debounce Function
export const debounce = (func, delay = 500) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle Function
export const throttle = (func, delay = 500) => {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

// Copy to Clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
};

// Get Query Parameters
export const getQueryParams = (url = window.location.href) => {
  const params = {};
  const searchParams = new URLSearchParams(url.split('?')[1]);

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params;
};

// Smooth Scroll to Element
export const smoothScroll = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

// Get Contrast Color (for text on background)
export const getContrastColor = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? '#000000' : '#FFFFFF';
};

// Format File Size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

// Check if Mobile Device
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

// Get Device Type
export const getDeviceType = () => {
  if (typeof window === 'undefined') return 'desktop';

  const width = window.innerWidth;
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Sleep/Delay Function
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Generate Random ID
export const generateRandomId = (prefix = '') => {
  return prefix + Math.random().toString(36).substr(2, 9);
};

// Check if Array is Empty
export const isArrayEmpty = (arr) => {
  return !Array.isArray(arr) || arr.length === 0;
};

// Deep Clone Object
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Merge Objects
export const mergeObjects = (target, source) => {
  return { ...target, ...source };
};

// Filter by Property
export const filterByProperty = (array, property, value) => {
  return array.filter(item => item[property] === value);
};

// Sort by Property
export const sortByProperty = (array, property, order = 'asc') => {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) return order === 'asc' ? -1 : 1;
    if (a[property] > b[property]) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

// Group Array by Property
export const groupByProperty = (array, property) => {
  return array.reduce((grouped, item) => {
    const key = item[property];
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
    return grouped;
  }, {});
};
