# Jaimaaruthi Electrical Store - React Client 🏪⚡

A modern, responsive React.js client application for Jaimaaruthi Electrical and Hardware Store with direct UPI payment integration.

## 🚀 Features

### 💳 **Direct Payment Integration**
- **Primary Payment Method**: Direct UPI payment to merchant bank account
- **UPI ID**: `prannav2511@okhdfcbank`
- **Bank**: Karur Vysya Bank 1054
- **No Processing Fees**: Direct bank transfer without intermediaries
- **QR Code Support**: Instant payment via QR scan
- **Multi-UPI Support**: Works with GPay, PhonePe, Paytm, BHIM, and all UPI apps

### 🛍️ **E-Commerce Features**
- Complete product catalog with categories
- Shopping cart with real-time updates
- User authentication and registration
- Order tracking and history
- Mobile-responsive design
- Professional checkout process

### 📊 **Sales Analytics Dashboard**
- Real-time sales reporting with Chart.js
- Revenue trend analysis with line charts
- Payment method distribution (Pie charts)
- Order status breakdown (Doughnut charts)
- Top products analysis (Bar charts)
- Advanced filtering by date, payment method, status
- Professional admin interface

### 🎨 **Modern UI/UX**
- Mobile-first responsive design
- Professional gradient themes
- Smooth animations and transitions
- Intuitive navigation
- Clean, modern interface

## 🛠️ Technology Stack

### Frontend Framework
- **React.js** - Main framework with hooks and context API
- **React Router** - Client-side routing
- **Context API** - State management (Auth, Cart, Stock)

### Data Visualization
- **Chart.js** - Professional charts and graphs
- **React Chart.js 2** - React wrapper for Chart.js
- Multiple chart types (Line, Bar, Pie, Doughnut)

### Styling & Design
- **CSS3** with Flexbox and Grid
- **Mobile-first responsive design**
- **Professional gradient themes**
- **Custom animations and transitions**

### Payment Integration
- **Direct UPI Payment System**
- **QR Code Generation** for instant payments
- **Multi-platform UPI support**
- **Professional payment UI**

## 💰 Payment System

### Direct Bank Integration
```
UPI ID: prannav2511@okhdfcbank
Bank: Karur Vysya Bank
Account: 1054
Payment Flow: Direct Transfer (No Gateway)
```

### Payment Features
- **Primary Option**: Direct UPI payment prominently featured
- **QR Code Interface**: Professional mobile-optimized scanner
- **Bank Details Display**: Transparent merchant information
- **Instant Confirmation**: Real-time payment processing
- **Fallback Options**: Razorpay gateway and Cash on Delivery

### Customer Experience
1. **Select Payment**: Direct Bank Payment (recommended)
2. **View Details**: Clear display of UPI ID and bank info
3. **Scan QR**: Mobile-optimized QR code interface
4. **Pay**: Use any UPI app for instant transfer
5. **Confirm**: Immediate order confirmation

## 🏗️ Project Structure

```
src/
├── components/           # Reusable components
│   ├── Header.js        # Navigation header
│   ├── SalesAnalytics.js # Chart components
│   └── ...
├── contexts/            # React contexts
│   ├── AuthContext.js   # Authentication state
│   ├── CartContext.js   # Shopping cart state
│   └── StockContext.js  # Inventory state
├── pages/               # Page components
│   ├── Home.js         # Landing page
│   ├── Payment.js      # Direct payment integration
│   ├── SalesReport.js  # Analytics dashboard
│   └── ...
├── styles/             # CSS stylesheets
├── utils/              # Utility functions
└── api.js             # API configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend server running

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Prannav-7/Electro_store_client.git
cd Electro_store_client
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_UPI_ID=prannav2511@okhdfcbank
REACT_APP_MERCHANT_NAME=Prannav P - Jaimaaruthi Electrical Store
REACT_APP_BANK_NAME=Karur Vysya Bank 1054
```

4. **Start development server**
```bash
npm start
```

5. **Build for production**
```bash
npm run build
```

## 🎯 Key Components

### Payment Integration (`src/pages/Payment.js`)
- Direct UPI payment as primary option
- Professional QR code interface
- Mobile-optimized payment flow
- Bank details transparency

### Sales Dashboard (`src/pages/SalesReport.js`)
- Comprehensive analytics with Chart.js
- Multiple chart types and filtering
- Real-time data visualization
- Professional admin interface

### Product Management
- Complete CRUD operations
- Image upload and management
- Category-based organization
- Stock tracking

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first approach
- **Touch-Friendly**: Optimized for mobile interactions
- **Fast Loading**: Optimized bundle sizes
- **PWA Ready**: Service worker support

## 🔐 Security Features

- **Direct Payment**: No sensitive data stored
- **Authentication**: JWT-based secure login
- **Input Validation**: Comprehensive form validation
- **XSS Protection**: Sanitized inputs

## 🌟 Payment Benefits

### For Customers:
- **Instant Payment**: Direct UPI transfer
- **Secure**: Bank-to-bank transfer
- **Convenient**: All UPI apps supported
- **Transparent**: Clear merchant details

### For Merchant:
- **Instant Credit**: Direct to bank account
- **No Fees**: Zero processing charges
- **Full Control**: Complete payment visibility
- **Professional**: Enhanced customer trust

## 📈 Analytics Features

- **Revenue Tracking**: Daily, weekly, monthly trends
- **Payment Analysis**: Method-wise breakdown
- **Order Insights**: Status and completion rates
- **Product Performance**: Top-selling items
- **Advanced Filtering**: Date range and category filters

## 🎨 Design Philosophy

- **User-Centric**: Intuitive and accessible design
- **Professional**: Clean, modern interface
- **Performance**: Optimized for speed
- **Responsive**: Works on all device sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and queries, contact:
- **Store**: Jaimaaruthi Electrical and Hardware Store
- **Owner**: Prannav P
- **UPI**: prannav2511@okhdfcbank
- **Bank**: Karur Vysya Bank 1054

## 📄 License

This project is proprietary software for Jaimaaruthi Electrical Store.

---

**Built with ❤️ for Jaimaaruthi Electrical and Hardware Store**

**Direct Payment Integration • Professional Analytics • Modern React Architecture**