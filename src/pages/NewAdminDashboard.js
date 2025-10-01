import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AdminIndicator from '../components/AdminIndicator';
import SalesDashboard from '../components/SalesDashboard';
import ProfessionalSalesAnalytics from '../components/ProfessionalSalesAnalytics';
import CustomerOrders from '../components/CustomerOrders';
import { useAdmin } from '../hooks/useAdmin';
import api from '../api';
import './ProfessionalAdmin.css';

const NewAdminDashboard = () => {
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [activeTab, setActiveTab] = useState('analytics');
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalValue: 0,
    lowStock: 0,
    outOfStock: 0
  });

  const categories = [
    'Electrical Goods',
    'Hardware & Tools', 
    'Wiring & Cables',
    'Switches & Sockets',
    'Lighting Solutions',
    'Fans & Ventilation',
    'Electrical Motors',
    'Safety Equipment'
  ];

  // Redirect if not admin
  useEffect(() => {
    if (!isAdmin) {
      navigate('/');
      return;
    }
    fetchProducts();
  }, [isAdmin, navigate]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/products');
      if (response.data?.data) {
        setProducts(response.data.data);
        calculateStats(response.data.data);
      } else if (response.data?.products) {
        setProducts(response.data.products);
        calculateStats(response.data.products);
      } else if (Array.isArray(response.data)) {
        setProducts(response.data);
        calculateStats(response.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Failed to fetch products. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (productsData) => {
    const totalProducts = productsData.length;
    const totalValue = productsData.reduce((sum, product) => sum + (product.price * product.stock), 0);
    const lowStock = productsData.filter(product => product.stock > 0 && product.stock <= 10).length;
    const outOfStock = productsData.filter(product => product.stock === 0).length;

    setStats({
      totalProducts,
      totalValue,
      lowStock,
      outOfStock
    });
  };

  const handleDeleteProduct = async (productId, productName) => {
    const confirmMessage = `Are you sure you want to delete "${productName}"?\\n\\nType "DELETE" to confirm:`;
    const userInput = window.prompt(confirmMessage);
    
    if (userInput !== 'DELETE') {
      if (userInput !== null) {
        alert('Product deletion cancelled. You must type "DELETE" exactly to confirm.');
      }
      return;
    }

    try {
      const response = await api.delete(`/products/${productId}`);
      if (response.data?.success) {
        const updatedProducts = products.filter(product => product._id !== productId);
        setProducts(updatedProducts);
        calculateStats(updatedProducts);
        alert(`✅ Product "${productName}" deleted successfully!`);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert(`❌ Failed to delete product: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleUpdateProduct = async (productId, updatedData) => {
    try {
      const response = await api.put(`/products/${productId}`, updatedData);
      if (response.data?.success || response.data?._id) {
        const updatedProducts = products.map(product => 
          product._id === productId ? { ...product, ...updatedData } : product
        );
        setProducts(updatedProducts);
        setEditingProduct(null);
        calculateStats(updatedProducts);
        alert(`✅ Product updated successfully!`);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert(`❌ Failed to update product: ${error.response?.data?.message || error.message}`);
    }
  };

  // Professional notification system
  const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 24px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      animation: slideIn 0.3s ease-out;
      ${type === 'success' ? 'background: linear-gradient(135deg, #10b981, #059669);' : 
        type === 'error' ? 'background: linear-gradient(135deg, #ef4444, #dc2626);' : 
        'background: linear-gradient(135deg, #3b82f6, #2563eb);'}
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="professional-admin-dashboard">
      {/* Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'var(--dark-gradient)',
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `
            radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(245, 87, 108, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(0, 242, 254, 0.1) 0%, transparent 50%)
          `,
          animation: 'backgroundFloat 20s ease-in-out infinite'
        }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        
        {/* Professional Admin Header */}
        <div className="admin-header">
          <h1 className="admin-title">⚡ Admin Dashboard</h1>
          <p className="admin-subtitle">Jaimaaruthi Electrical & Hardware Store Management</p>
        </div>
        
        <div className="admin-container">
          {/* Professional Navigation */}
          <div className="admin-nav">
            <div className="nav-group">
              {[
                { id: 'analytics', icon: '📊', label: 'Sales Analytics', color: '#3b82f6' },
                { id: 'products', icon: '📦', label: 'Products', color: '#10b981' },
                { id: 'orders', icon: '🛒', label: 'Orders', color: '#f59e0b' },
                { id: 'sales', icon: '💰', label: 'Sales Dashboard', color: '#ef4444' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                  style={{
                    background: activeTab === tab.id 
                      ? `linear-gradient(135deg, ${tab.color}, ${tab.color}dd)` 
                      : 'rgba(255, 255, 255, 0.1)',
                    borderColor: activeTab === tab.id ? tab.color : 'transparent',
                    color: activeTab === tab.id ? 'white' : 'var(--text-secondary)',
                    boxShadow: activeTab === tab.id ? `0 8px 25px ${tab.color}40` : 'none',
                    transform: activeTab === tab.id ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <span className="nav-icon" style={{ fontSize: '1.2rem' }}>{tab.icon}</span>
                  <span className="nav-label">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="admin-content">
            {loading ? (
              <div className="loading-container">
                <div className="professional-loader"></div>
                <span>Loading dashboard data...</span>
              </div>
            ) : (
              <>
                {activeTab === 'analytics' && (
                  <div>
                    <ProfessionalSalesAnalytics />
                  </div>
                )}
                
                {activeTab === 'products' && (
                  <div>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      marginBottom: '2rem',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}>
                      <h2 style={{ 
                        color: 'var(--text-primary)', 
                        margin: 0,
                        fontSize: '2rem',
                        fontWeight: '600'
                      }}>📦 Product Management</h2>
                      <button 
                        onClick={() => navigate('/add-product')}
                        style={{
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          color: 'white',
                          border: 'none',
                          padding: '12px 24px',
                          borderRadius: '12px',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <span>➕</span>
                        Add Product
                      </button>
                    </div>
                    
                    <div style={{
                      background: 'var(--glass-background)',
                      padding: '2rem',
                      borderRadius: '20px',
                      border: '1px solid var(--border-color)',
                      backdropFilter: 'blur(20px)',
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏗️</div>
                      <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        Product Management Under Development
                      </h3>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Advanced product management features will be available soon.
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'orders' && (
                  <div>
                    <CustomerOrders />
                  </div>
                )}
                
                {activeTab === 'sales' && (
                  <div>
                    <SalesDashboard />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Admin Mode Indicator */}
      <AdminIndicator showStatus={true} />
    </div>
  );
};

export default NewAdminDashboard;
