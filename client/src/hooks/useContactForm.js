import { useState, useCallback } from 'react';
import { validateEmail, validateForm } from '../utils/helpers';

export const useContactForm = (onSuccess) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  // Validate form
  const validateFormData = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  }, [formData]);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate
    const newErrors = validateFormData();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus({ type: 'error', message: 'Please fix the errors above' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Simulate API call or use actual API
      // For now, we'll use mailto
      const mailtoLink = `mailto:darshanhiteshshah@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.name} (${formData.email})`;
      
      // Trigger email client
      window.location.href = mailtoLink;

      setSubmitStatus({ type: 'success', message: 'Message sent successfully! 🎉' });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Call success callback
      onSuccess?.();

      // Clear status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateFormData, onSuccess]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setSubmitStatus(null);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
    setFormData
  };
};

// Hook for form field validation
export const useFormField = (initialValue = '', validator = null) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = useCallback((newValue) => {
    setValue(newValue);
    if (validator) {
      const validationError = validator(newValue);
      setError(validationError || '');
    }
  }, [validator]);

  const handleBlur = useCallback(() => {
    setIsTouched(true);
    if (validator) {
      const validationError = validator(value);
      setError(validationError || '');
    }
  }, [value, validator]);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError('');
    setIsTouched(false);
  }, [initialValue]);

  return {
    value,
    error,
    isTouched,
    handleChange,
    handleBlur,
    reset,
    setValue
  };
};
