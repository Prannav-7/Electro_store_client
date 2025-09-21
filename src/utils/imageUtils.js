// Image utility functions
// src/utils/imageUtils.js
import { imagePaths } from './imagePaths';

// Use environment variable for API URL or fallback to production server
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://electro-store-server-8m0d.onrender.com/api';

// Function to get the correct image URL
export const getImageUrl = (imageId) => {
  console.log('getImageUrl called with:', imageId);
  
  if (!imageId) {
    console.log('No imageId provided, returning default');
    return `${API_BASE_URL.replace('/api', '')}/images/products/default-product.svg`;
  }

  // If it's already a full URL, return as is
  if (imageId.startsWith('http://') || imageId.startsWith('https://')) {
    console.log('Full URL detected:', imageId);
    return imageId;
  }
  
  // If it starts with /uploads, it's an uploaded file
  if (imageId.startsWith('/uploads/')) {
    const serverUrl = `${API_BASE_URL.replace('/api', '')}${imageId}`;
    console.log('Uploaded file URL:', serverUrl);
    return serverUrl;
  }
  
  // Check if it's one of our predefined images
  const predefinedPath = imagePaths[imageId];
  if (predefinedPath) {
    const serverUrl = `${API_BASE_URL.replace('/api', '')}${predefinedPath}`;
    console.log('Predefined image URL:', serverUrl);
    return serverUrl;
  }
  
  // For custom images or unknown formats, try to construct path
  if (imageId.includes('.')) {
    // It's likely a filename
    const serverUrl = `${API_BASE_URL.replace('/api', '')}/images/products/${imageId}`;
    console.log('Filename-based URL:', serverUrl);
    return serverUrl;
  }
  
  // Default case - use the imageId as part of path
  const serverUrl = `${API_BASE_URL.replace('/api', '')}/images/${imageId}.svg`;
  console.log('Default constructed URL:', serverUrl);
  return serverUrl;
};

/**
 * Get the full image URL for a product
 * @param {string} imageUrl - The relative image URL from the database
 * @returns {string} - The full image URL
 */
export const getImageUrl = (imageUrl) => {
  if (!imageUrl) {
    return `${API_BASE_URL}/images/default-product.svg`;
  }
  
  // If it's already a full URL, return as is
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  
  // If it starts with /, prepend the base URL
  if (imageUrl.startsWith('/')) {
    return `${API_BASE_URL}${imageUrl}`;
  }
  
  // Otherwise, assume it's a relative path and add the base URL and leading slash
  return `${API_BASE_URL}/${imageUrl}`;
};

/**
 * Get the default image URL for error fallback
 * @returns {string} - The default image URL
 */
export const getDefaultImageUrl = () => {
  return `${API_BASE_URL}/images/default-product.svg`;
};

export default {
  getImageUrl,
  getDefaultImageUrl
};
