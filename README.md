# Ancrux-Cru Repository

A comprehensive repository containing three distinct projects focused on cryptocurrency payments, encrypted content delivery, and web presence. This repository showcases the evolution of the ANCRUX platform across different technologies and payment systems.

---

## 📋 Table of Contents

1. [Repository Overview](#repository-overview)
2. [ANCRUX MVP - Lightning Network Video Platform](#ancrux-mvp---lightning-network-video-platform)
3. [ANCRUX Chipipay - Starknet & Chipi Pay Integration](#ancrux-chipipay---starknet--chipi-pay-integration)
4. [CRU Landing Page - Corporate Website](#cru-landing-page---corporate-website)
5. [Getting Started](#getting-started)
6. [Contributing](#contributing)

---

## 🌟 Repository Overview

This repository contains three interconnected projects that demonstrate different approaches to decentralized content monetization and web presence:

- **ANCRUX**: Lightning Network-based encrypted video platform
- **ANCRUX Chipipay**: Starknet/Ethereum L2-based version with NFT integration
- **CRU Landing Page**: Corporate website and brand presence

Each project represents a different technological approach to the same core concept: enabling creators to monetize their content through cryptocurrency payments while maintaining content security through encryption.

---

## ⚡ ANCRUX MVP - Lightning Network Video Platform

### Overview
The original ANCRUX MVP is a revolutionary platform that combines video encryption with Lightning Network payments. It allows content creators to upload videos that are automatically encrypted server-side and can only be decrypted after a Lightning Network payment is made.

### 🚀 Key Features
- **AES-256-GCM Encryption**: Military-grade video encryption with secure key management
- **Lightning Network Integration**: Instant micropayments via LND (Lightning Network Daemon)
- **RESTful API**: Clean endpoints for uploading, payment processing, and content delivery
- **SQLite Database**: Embedded database for efficient metadata storage
- **Key Wrapping System**: HKDF-based key derivation for enhanced security

### 🛠 Technology Stack
- **Backend**: Node.js with ES Modules
- **Web Framework**: Fastify (high-performance, low-overhead)
- **Database**: Better-SQLite3 (embedded, fast)
- **Encryption**: Native Node.js crypto module
- **Payment Processing**: Lightning Network via LND REST API
- **File Handling**: Native file system operations with multipart support

### 📡 API Endpoints
```
POST   /videos          - Upload and encrypt video content
POST   /pay/:id         - Generate Lightning invoice for video access
GET    /pay/:id/status  - Check payment status
GET    /keys/:id        - Retrieve decryption keys (post-payment)
GET    /videos/:id      - Download encrypted video file
```

### 🔐 Security Architecture
1. **Content Encryption Key (CEK)**: Each video gets a unique random 256-bit key
2. **Key Wrapping**: CEK is encrypted using HKDF-derived keys from a master secret
3. **Nonce Management**: Unique nonces for each encryption operation
4. **Payment Verification**: Videos only decrypt after confirmed Lightning payment

### 📦 Installation & Setup
```bash
cd ANCRUX
npm install
cp .env.example .env
# Configure Lightning Network credentials in .env
npm start
```

### 🔧 Requirements
- Node.js v18+
- Lightning Network node (LND) with REST API access
- Valid macaroon and TLS certificate for LND connection

---

## 🌐 ANCRUX Chipipay - Starknet & Chipi Pay Integration

### Overview
An advanced evolution of the ANCRUX platform that integrates with Starknet (Ethereum L2) and Chipi Pay for gasless transactions. This version introduces NFT-based access control and leverages the Starknet ecosystem for enhanced scalability and reduced transaction costs.

### 🚀 Enhanced Features
- **All ANCRUX MVP features** plus:
- **Starknet Integration**: Built on Ethereum's most advanced L2 solution
- **NFT Access Control**: Video access managed through NFT ownership
- **Chipi Pay Integration**: Gasless transactions for improved user experience
- **Multi-Chain Support**: Expanded payment options beyond Lightning Network
- **Smart Contract Integration**: On-chain verification of content ownership

### 🛠 Advanced Technology Stack
- **Base Stack**: All ANCRUX MVP technologies
- **Blockchain**: Starknet (Ethereum L2)
- **Smart Contracts**: Cairo-based NFT contracts
- **Payment SDK**: Chipi Pay for gasless transactions
- **Web3 Integration**: Starknet.js for blockchain interactions

### 🏗 Architecture Enhancements

#### Three Server Implementations:
1. **server.js**: Original Lightning Network implementation
2. **server_starknet.js**: Basic Starknet integration with NFT minting
3. **server_strk_chipi.js**: Full Chipi Pay integration for gasless transactions

#### Payment Flow Evolution:
1. **Traditional**: User pays → Lightning invoice → Content unlock
2. **Starknet**: User pays → NFT minted → Ownership verified → Content unlock
3. **Chipi Pay**: User initiates → Gasless transaction → NFT minted → Content unlock

### 📡 Extended API Endpoints
```
# All ANCRUX MVP endpoints plus:
POST   /pay/:id/starknet     - Generate Starknet NFT payment
GET    /verify/:id/:address  - Verify NFT ownership
POST   /chipi/execute        - Execute gasless transaction via Chipi Pay
```

### 🔗 Smart Contract Integration
- **NFT Contract**: Each video purchase mints a unique NFT
- **Ownership Verification**: On-chain proof of content access rights
- **Gasless Transactions**: Chipi Pay handles gas fees for users

### 📦 Installation & Setup
```bash
cd "ANCRUX Chipipay"
npm install
cp .env.example .env
# Configure Starknet and Chipi Pay credentials in .env
npm start
```

### 🔧 Additional Requirements
- Starknet account with deployed NFT contract
- Chipi Pay API credentials
- NFT contract ABI file

---

## 🎨 CRU Landing Page - Corporate Website

### Overview
A modern, responsive corporate website built with React and TypeScript, featuring a sleek design system and optimized user experience. This landing page serves as the public face of the CRU brand and provides information about the ANCRUX platform.

### 🚀 Key Features
- **Modern React Architecture**: Built with TypeScript and Vite
- **Responsive Design**: Mobile-first approach with desktop scaling fixes
- **Component Library**: Comprehensive UI components using Radix UI
- **Form Integration**: Contact forms with Formspree integration
- **Performance Optimized**: Fast loading with modern build tools
- **Scale Fix System**: Laptop display optimization

### 🛠 Technology Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state
- **Backend**: Express.js with TypeScript
- **Database**: Drizzle ORM with Neon PostgreSQL

### 🎯 Pages & Features
- **Landing Page**: Hero section with brand messaging and email capture
- **About Us**: Company information and mission statement
- **Privacy Policy**: Legal compliance and user rights
- **404 Page**: Custom not-found page with navigation

### 📱 Responsive Design System
```
Mobile:   320px - 768px   (Primary focus)
Tablet:   768px - 1024px  (Adaptive scaling)
Desktop:  1024px+         (Scale fix applied)
```

### 🔧 Scale Fix System
The landing page includes an innovative scale fix system to address display issues on laptops:

```typescript
// Toggle in App.tsx
const ENABLE_SCALE_FIX = false; // Set to true for laptop optimization
```

### 📦 Installation & Development
```bash
cd Cru-Landing-Page-main
npm install
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### 🎨 Component Architecture
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── ScalePortal.tsx
├── pages/            # Route components
├── lib/              # Utilities and configurations
└── styles/           # Global styles and fixes
```

### 🔧 Environment Setup
- **Development**: Hot reload with Vite
- **Production**: Optimized builds with code splitting
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Forms**: Formspree integration for contact handling

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm or yarn package manager
- Git for version control

### Quick Start Guide

1. **Clone the repository**:
   ```bash
   git clone https://github.com/andressev/Ancrux-Cru.git
   cd Ancrux-Cru
   ```

2. **Choose your project**:
   ```bash
   # For Lightning Network version
   cd ANCRUX
   
   # For Starknet/Chipi Pay version
   cd "ANCRUX Chipipay"
   
   # For the landing page
   cd Cru-Landing-Page-main
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Configure environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Start development**:
   ```bash
   npm start        # For ANCRUX projects
   npm run dev      # For landing page
   ```

### Configuration Requirements

#### ANCRUX MVP (.env):
```env
MASTER_KEY_BASE64=your_base64_master_key
LND_URL=your_lnd_rest_url
LND_MACAROON_HEX=your_macaroon_hex
LND_TLS_CERT_B64=your_tls_cert_base64
```

#### ANCRUX Chipipay (.env):
```env
# All ANCRUX MVP variables plus:
STARKNET_ACCOUNT_ADDRESS=your_starknet_address
STARKNET_PRIVATE_KEY=your_private_key
STARKNET_NFT_CONTRACT_ADDRESS=your_nft_contract
STARKNET_NFT_ABI_PATH=./path/to/abi.json
CHIPI_PAYMASTER_API_KEY=your_chipi_api_key
CHIPI_RPC_URL=your_rpc_endpoint
```

#### CRU Landing Page:
```env
DATABASE_URL=your_postgresql_url
VITE_API_URL=your_api_endpoint
```

---

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Commit with descriptive messages: `git commit -m "Add feature: description"`
5. Push to your fork: `git push origin feature/your-feature`
6. Create a Pull Request

### Code Standards
- **TypeScript**: Use strict type checking
- **ESModules**: Prefer ES6+ syntax
- **Error Handling**: Implement comprehensive error handling
- **Security**: Follow crypto and payment security best practices
- **Documentation**: Comment complex logic and maintain README updates

### Testing Guidelines
- Test all payment flows thoroughly
- Verify encryption/decryption cycles
- Check responsive design across devices
- Validate environment configurations

---

## 📄 License

This project is licensed under the MIT License - see individual project LICENSE files for details.

---

## 🔗 Links & Resources

- **Lightning Network**: [Lightning Labs](https://lightning.engineering/)
- **Starknet**: [Starknet Documentation](https://docs.starknet.io/)
- **Chipi Pay**: [Chipi Pay SDK](https://github.com/chipi-pay)
- **React**: [React Documentation](https://reactjs.org/)
- **Fastify**: [Fastify Framework](https://www.fastify.io/)

---

## 📞 Support

For questions, issues, or contributions:
- Create an issue in this repository
- Contact the development team
- Check individual project README files for specific documentation

---

*This repository represents the evolution of decentralized content monetization, showcasing different technological approaches to the same innovative concept.*

