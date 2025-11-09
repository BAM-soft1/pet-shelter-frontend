# Implementation Plan

## Component Library

- **shadcn/ui** ✅ - Beautiful React components built with Radix UI and Tailwind CSS
  - Installed components: Button, Card, Badge, Dialog, Table, Input, Label

## Priority 1: Enhanced Animal Cards

### ✅ DONE (ADDED ONE MORE)

- [x] Install shadcn/ui and configure
- [x] Add image URLs to mock animal data
- [x] Redesign animal cards using shadcn components
  - Use Card, Badge components
  - Add animal images
  - Improve layout and styling
  - Better status badges and info display
- [x] Update AnimalDetailModal with shadcn Dialog
- [] Add skeleton to cards when loading
- [] Conditionally render so animals not vaccinated (e.g., with status not ready for adoption from the backend) are not shown to users in the /animals page, but only on the admin page.

## Priority 2: Admin Dashboard

- [x] Create `/admin` route and layout
- [x] Update animal.ts to use backend API
  - [x] Updated Animal type to match backend AnimalDTOResponse
  - [x] Added Species and Breed types
  - [x] Implemented full CRUD operations (getAnimals, getAnimalById, createAnimal, updateAnimal, deleteAnimal)
  - [x] AnimalOverview page now fetches from backend
  - [x] AdminAnimals page now shows all animals from backend
  - [x] Added age calculation helper (from birthDate)
  - [x] Added loading and error states
  - [x] Filter animals by isActive and Status in user view
  - [x] Added `imageUrl` field to Animal entity and DTO
  - [x] Added 8 more animals to InitData (10 total)
  - [x] All animals now have Unsplash image URLs
- [x] Animal Management (CRUD):
  - [x] List view with table showing all animals from backend
  - [x] Delete functionality working with backend API
  - [x] Create animal form (Dialog/Modal)
  - [x] Edit animal form
  - [x] Better delete confirmation dialog
  - [x] Species and Breed dropdowns loaded from API
  - [x] Form validation and error handling

## Priority 2.5: Login / Logout and auth protection # DONE

## ✅ FIXED: Show proper error messages from backend

- Created `getErrorMessage()` utility that extracts `response.data.message` from axios errors
- Updated Login and Register pages to use this utility
- Now shows actual backend error messages like "Invalid email or password" instead of generic "Request failed with status code 401"

## ✅ FIXED: Redirect logged-in users away from login/register pages

- Added `useEffect` to both Login and Register pages
- Checks `auth.isLoggedIn()` on component mount
- Redirects to home page if user is already logged in

## ✅ FIXED: Token expiry now stored and used correctly

- Problem: On page reload, we hardcoded 1 hour timeout instead of using actual token expiry (15 min)
- Solution: Store `tokenExpiresAt` timestamp in localStorage during login
- On reload: Calculate remaining time and schedule logout accordingly
- Also checks if token already expired before making API call

## Priority 3: Adoption Application System - FOR LATER IMPLEMENTATION

- [ ] User-facing features:
  - [ ] "Apply for Adoption" button on animal detail
  - [ ] Adoption application form (Dialog)
  - [ ] Needs to be logged in to do this
- [ ] Admin-facing features (on dashboard):
  - [ ] View pending applications table
  - [ ] Approve/Reject actions
  - [ ] View completed adoptions list

## Priority 4: Clean up of refresh tokens stored in DB?

---

## Notes

- Backend available in `BackendPetShelter/src/main`
- Database schema available in `mandatory-1/databases-soft-1/mandatory-1/database/`
