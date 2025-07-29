import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { GuestVehiclePage } from './components/GuestVehiclePage';
import { GuestMaterialPage } from './components/GuestMaterialPage';
import { SignUpPage } from './components/SignUpPage';
import { AuthModal } from './components/AuthModal';
import { ConfirmationPage } from './components/ConfirmationPage';
import { ServiceDashboard } from './components/ServiceDashboard';
import { VehicleListingPage } from './components/VehicleListingPage';
import { MaterialListingPage } from './components/MaterialListingPage';
import { VehicleDetailsPage } from './components/VehicleDetailsPage';
import { ProfilePage } from './components/ProfilePage';
import { VehicleOwnerRegistration } from './components/VehicleOwnerRegistration';
import { MaterialSupplierRegistration } from './components/MaterialSupplierRegistration';
import { VirtualDashboard } from './components/VirtualDashboard';
import { VehicleManagementPage } from './components/VehicleManagementPage';
import { User, Partner } from './types';

type ViewType = 'home' | 'vehicles' | 'materials' | 'about' | 'contact' | 'signup' | 'dashboard' | 'profile' | 'confirmation' | 'services' | 'vehicle-listing' | 'material-listing' | 'vehicle-details' | 'vehicle-management';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [user, setUser] = useState<User | null>(null);
  const [partner, setPartner] = useState<Partner | null>(null);
  const [registrationData, setRegistrationData] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showVehicleOwnerRegistration, setShowVehicleOwnerRegistration] = useState(false);
  const [showMaterialSupplierRegistration, setShowMaterialSupplierRegistration] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setShowAuthModal(false);
    
    // Redirect based on user role
    if (userData.role === 'consumer') {
      setCurrentView('dashboard');
    } else {
      // For partners, show their dashboard
      const mockPartner: Partner = {
        id: Date.now().toString(),
        type: userData.role as 'vehicle_owner' | 'material_supplier',
        businessName: userData.name + ' Business',
        ownerName: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address || 'Sample Address',
        district: 'Colombo',
        businessLicense: 'BL123456',
        brNumber: 'BR123456',
        yearsInBusiness: 5,
        description: 'Professional service provider',
        services: ['Construction Services'],
        certifications: [],
        insuranceDetails: {
          provider: 'Sample Insurance',
          policyNumber: 'POL123456',
          expiryDate: '2025-12-31'
        },
        documents: {
          businessLicense: null,
          insurance: null,
          brCertificate: null,
          vehiclePhotos: []
        },
        status: 'approved',
        registrationDate: new Date().toISOString(),
        rating: 4.8,
        totalJobs: 25,
        notifications: []
      };
      setPartner(mockPartner);
      setCurrentView('dashboard');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setPartner(null);
    setCurrentView('home');
  };

  const handleRegistration = (data: any) => {
    setRegistrationData(data);
    setCurrentView('confirmation');
  };

  const handleVehicleOwnerRegistration = (data: any) => {
    setRegistrationData(data);
    setShowVehicleOwnerRegistration(false);
    setCurrentView('confirmation');
  };

  const handleMaterialSupplierRegistration = (data: any) => {
    setRegistrationData(data);
    setShowMaterialSupplierRegistration(false);
    setCurrentView('confirmation');
  };

  const handleConfirmationAction = (action: 'dashboard' | 'services') => {
    if (action === 'dashboard') {
      // Create user from registration data
      const newUser: User = {
        id: Date.now().toString(),
        name: registrationData.name || registrationData.fullName,
        email: registrationData.email,
        phone: registrationData.phone || registrationData.mobileNumber,
        role: registrationData.role,
        isAuthenticated: true,
        address: registrationData.address
      };
      setUser(newUser);

      if (registrationData.role === 'consumer') {
        setCurrentView('dashboard');
      } else {
        // Create partner for business users
        const newPartner: Partner = {
          id: Date.now().toString(),
          type: registrationData.role,
          businessName: registrationData.businessName || registrationData.businessBrandName || newUser.name + ' Business',
          ownerName: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          address: registrationData.address,
          district: registrationData.district,
          businessLicense: 'BL' + Date.now(),
          brNumber: 'BR' + Date.now(),
          yearsInBusiness: registrationData.yearsInBusiness || 1,
          description: registrationData.description || 'Professional service provider',
          services: registrationData.services || ['General Services'],
          certifications: registrationData.certifications || [],
          insuranceDetails: {
            provider: 'Sample Insurance',
            policyNumber: 'POL' + Date.now(),
            expiryDate: '2025-12-31'
          },
          documents: {
            businessLicense: null,
            insurance: null,
            brCertificate: null,
            vehiclePhotos: []
          },
          status: 'pending',
          registrationDate: new Date().toISOString(),
          rating: 0,
          totalJobs: 0,
          notifications: []
        };
        setPartner(newPartner);
        setCurrentView('vehicle-management');
      }
    } else if (action === 'services') {
      // Create user from registration data and go to services
      const newUser: User = {
        id: Date.now().toString(),
        name: registrationData.name || registrationData.fullName,
        email: registrationData.email,
        phone: registrationData.phone || registrationData.mobileNumber,
        role: registrationData.role,
        isAuthenticated: true,
        address: registrationData.address
      };
      setUser(newUser);
      
      if (registrationData.role === 'consumer') {
        setCurrentView('services');
      } else {
        // Create partner for business users and go to services
        const newPartner: Partner = {
          id: Date.now().toString(),
          type: registrationData.role,
          businessName: registrationData.businessName || registrationData.businessBrandName || newUser.name + ' Business',
          ownerName: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          address: registrationData.address,
          district: registrationData.district,
          businessLicense: 'BL' + Date.now(),
          brNumber: 'BR' + Date.now(),
          yearsInBusiness: registrationData.yearsInBusiness || 1,
          description: registrationData.description || 'Professional service provider',
          services: registrationData.services || ['General Services'],
          certifications: registrationData.certifications || [],
          insuranceDetails: {
            provider: 'Sample Insurance',
            policyNumber: 'POL' + Date.now(),
            expiryDate: '2025-12-31'
          },
          documents: {
            businessLicense: null,
            insurance: null,
            brCertificate: null,
            vehiclePhotos: []
          },
          status: 'pending',
          registrationDate: new Date().toISOString(),
          rating: 0,
          totalJobs: 0,
          notifications: []
        };
        setPartner(newPartner);
        setCurrentView('services');
      }
    } else {
      setCurrentView('dashboard');
    }
  };

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    setIsMenuOpen(false);
  };

  const handleHomeNavigation = () => {
    if (user) {
      switch (user.role) {
        case 'vehicle_owner':
          setCurrentView('vehicle-management');
          break;
        case 'material_supplier':
          setCurrentView('vehicle-management'); // This will show material management for material suppliers
          break;
        case 'consumer':
        default:
          setCurrentView('home');
          break;
      }
    } else {
      setCurrentView('home');
    }
  };

  const handleVehicleSelect = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setCurrentView('vehicle-details');
  };

  const handleUpdateProfile = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  const handleUpdatePartner = (partnerData: Partial<Partner>) => {
    if (partner) {
      setPartner({ ...partner, ...partnerData });
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onLogin={() => setShowAuthModal(true)} onSignUp={() => setCurrentView('signup')} />;
      case 'vehicles':
        return <GuestVehiclePage onSignUp={() => setCurrentView('signup')} />;
      case 'materials':
        return <GuestMaterialPage onSignUp={() => setCurrentView('signup')} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'signup':
        return (
          <SignUpPage 
            onRegistration={handleRegistration}
            onVehicleOwnerSignUp={() => setShowVehicleOwnerRegistration(true)}
            onMaterialSupplierSignUp={() => setShowMaterialSupplierRegistration(true)}
          />
        );
      case 'services':
      case 'dashboard':
        return user ? (
          <ServiceDashboard 
            user={user}
            onVehicleService={() => setCurrentView('vehicle-listing')}
            onMaterialService={() => setCurrentView('material-listing')}
          />
        ) : (
          <HomePage onLogin={() => setShowAuthModal(true)} onSignUp={() => setCurrentView('signup')} />
        );
      case 'vehicle-listing':
        return <VehicleListingPage 
          onBack={() => setCurrentView('dashboard')}
          onVehicleSelect={handleVehicleSelect}
        />;
      case 'material-listing':
        return <MaterialListingPage 
          onBack={() => setCurrentView('dashboard')}
        />;
      case 'vehicle-details':
        return selectedVehicle ? (
          <VehicleDetailsPage 
            vehicle={selectedVehicle}
            onBack={() => setCurrentView('vehicle-listing')}
          />
        ) : (
          <ServiceDashboard 
            user={user}
            onVehicleService={() => setCurrentView('vehicle-listing')}
            onMaterialService={() => setCurrentView('material-listing')}
          />
        );
      case 'services':
        return user ? (
          <ServiceDashboard 
            user={user}
            onVehicleService={() => setCurrentView('vehicle-listing')}
            onMaterialService={() => setCurrentView('material-listing')}
          />
        ) : (
          <HomePage onLogin={() => setShowAuthModal(true)} onSignUp={() => setCurrentView('signup')} />
        );
      case 'dashboard':
        return user ? (
          user.role === 'consumer' ? (
            <ServiceDashboard 
              user={user}
              onVehicleService={() => setCurrentView('vehicle-listing')}
              onMaterialService={() => setCurrentView('material-listing')}
            />
          ) : (
            partner ? (
              <VirtualDashboard 
                partner={partner}
                onUpdatePartner={handleUpdatePartner}
                onLogout={handleLogout}
                onGoHome={() => setCurrentView('dashboard')}
              />
            ) : null
          )
        ) : (
          <HomePage onLogin={() => setShowAuthModal(true)} onSignUp={() => setCurrentView('signup')} />
        );
      case 'vehicle-management':
        return partner ? (
          <VehicleManagementPage
            partner={partner}
            onUpdatePartner={handleUpdatePartner}
            onLogout={handleLogout}
            onNavigate={(page) => {
              if (page === 'home') {
                setCurrentView('services');
              } else if (page === 'about') {
                setCurrentView('about');
              } else if (page === 'profile') {
                setCurrentView('profile');
              } else {
                setCurrentView('vehicle-management');
              }
            }}
          />
        ) : (
          <HomePage onLogin={() => setShowAuthModal(true)} onSignUp={() => setCurrentView('signup')} />
        );
      case 'profile':
        return user ? (
          <ProfilePage 
            user={user} 
            onUpdateProfile={handleUpdateProfile}
            onBack={() => setCurrentView(user.role === 'consumer' ? 'dashboard' : 'dashboard')}
          />
        ) : null;
      case 'confirmation':
        return (
          <ConfirmationPage 
            onAction={handleConfirmationAction}
            registrationData={registrationData}
          />
        );
      default:
        return <HomePage onLogin={() => setShowAuthModal(true)} onSignUp={() => setCurrentView('signup')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
        currentView={currentView}
        onNavigate={handleNavigate}
        onHomeNavigate={handleHomeNavigation}
        onShowLogin={() => setShowAuthModal(true)}
        onShowSignUp={() => setCurrentView('signup')}
      />
      
      {renderCurrentView()}
      
      <Footer onNavigate={handleNavigate} />

      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      )}

      {showVehicleOwnerRegistration && (
        <VehicleOwnerRegistration
          isOpen={showVehicleOwnerRegistration}
          onClose={() => setShowVehicleOwnerRegistration(false)}
          onSubmit={handleVehicleOwnerRegistration}
        />
      )}

      {showMaterialSupplierRegistration && (
        <MaterialSupplierRegistration
          isOpen={showMaterialSupplierRegistration}
          onClose={() => setShowMaterialSupplierRegistration(false)}
          onSubmit={handleMaterialSupplierRegistration}
        />
      )}
    </div>
  );
}

export default App;