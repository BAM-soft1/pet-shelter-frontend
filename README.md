# 🐾 Pet Shelter – Fullstack Application

Velkommen til **Pet Shelter**, et webbaseret system til et dyreinternat.  
Applikationen gør det muligt for brugere at se, adoptere og registrere kæledyr, mens administratorer kan håndtere dyreoplysninger, adoptioner og brugere via et administrationspanel.

---

## Repository & Deployede Versioner

- **Frontend (GitHub):** [https://github.com/BAM-soft1/pet-shelter-frontend](https://github.com/BAM-soft1/pet-shelter-frontend)  
- **Backend (GitHub):** [https://github.com/BAM-soft1/BackendPetShelter](https://github.com/BAM-soft1/BackendPetShelter)  
- **Deployed Frontend:** [https://pet-shelter-frontend-i82h.onrender.com/]  
- **Deployed Backend (API):** [bam-shelter-backend-bggeadccfkhnbydg.germanywestcentral-01.azurewebsites.net]

---

## Teknologier

### Frontend
- **React** + **Vite**
- **TypeScript**
- **Tailwind CSS**
- **React Router** til client-side routing
- **Axios** til API-kald
- **Miljøvariabler (.env)** til API-konfiguration

### Backend
- **Node.js** + **Express**
- **MySQL** database
- **Mysql-driver**
- **JWT Authentication**
- **dotenv** til konfiguration
- **CORS** middleware

### Database
- **MySQL** til persistent lagring af data  
- Administreret via **DataGrip & Intellij's Tool "Endpoint"**

---

## ⚙️ Funktionalitet

### For brugere
- Opret og log ind på brugerprofil  
- Se alle dyr, der er tilgængelige for adoption  

### For administratorer
- Log ind som admin
- Se Admin dashboard 

---

###  Frontend

1. **Klon projektet**
   ```bash
   git clone https://github.com/BAM-soft1/pet-shelter-frontend.git
   cd pet-shelter-frontend

2. Installer afhængigheder

npm install

3. Opret .env-fil

VITE_API_BASE_URL=http://localhost:3000/api

5. Start udviklingsserver

npm run dev

Frontend kører typisk på:
👉 http://localhost:5173

**Backend**

1. Klon backend-repoet

git clone https://github.com/BAM-soft1/BackendPetShelter.git
cd BackendPetShelter


2. Installer afhængigheder

npm install

3. Opret .env-fil

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=din_adgangskode
DB_NAME=petshelter
JWT_SECRET=hemmelig_nøgle
PORT=3000


4. Opret MySQL-database

Åbn DataGrip eller et andet SQL-værktøj

Opret en database:

CREATE DATABASE petshelter;

Kør migrations eller lad ORM’en oprette tabeller ved første kørsel

5. Start backend-server

npm run dev

API’et kører som standard på:
👉 http://localhost:3000

