## 🔐 Routes

### Public Routes

- `/` → Home
- `/login` → Login page
- `/signup` → Signup page

### Protected Routes

- `/private` → Accessible only after login
- `/admin` → Accessible only for users with role `admin`

## 👤 Admin Test Credentials

- **Email**: `admin@gmail.com`
- **Password**: `admin123`

## 🔐 RBAC Logic

User roles are fetched from Firestore and stored in context. Routes are conditionally rendered based on user roles using:

- `<PrivateRoute>` — restricts access to logged-in users only
- `<RoleBasedRoute>` — restricts access based on user roles (e.g., `admin`)
