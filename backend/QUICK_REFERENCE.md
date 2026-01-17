# 🚀 VisitUNA Backend - Quick Reference Card

## ⚡ Quick Start Commands

```bash
# Install dependencies (already done)
npm install

# Configure environment
cp .env.example .env
# Then edit .env with your MongoDB URI, Gmail credentials, etc.

# Seed database with admin user and sample data
npm run seed

# Start development server
npm run dev

# Start production server
npm start
```

---

## 🔑 Default Admin Login

```
URL: http://localhost:5000/api/auth/login
Email: admin@visituna.lk
Password: Admin@123
```

**⚠️ Change password after first login!**

---

## 📡 Essential API Endpoints

### Test Server

```
GET http://localhost:5000/api/health
```

### Authentication

```
POST /api/auth/register    - Register user
POST /api/auth/login       - Login (returns JWT token)
GET  /api/auth/me          - Get current user (Protected)
```

### Contact Form (Sends Email!)

```
POST /api/contact          - Submit contact form
GET  /api/contact          - Get all messages (Admin)
```

### Events

```
GET  /api/events           - Get all events
POST /api/events/:id/book  - Book event (Protected)
POST /api/events           - Create event (Admin)
```

### Admin Dashboard

```
GET /api/admin/dashboard   - Get statistics (Admin)
GET /api/admin/users       - Get all users (Admin)
```

---

## 🔐 Authentication Header

For protected routes, include JWT token:

```
Authorization: Bearer <your_jwt_token>
```

---

## 📧 Email Configuration

Your `.env` file needs:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
ADMIN_EMAIL=your-email@gmail.com
```

**Get Gmail App Password:**

1. Enable 2FA: https://myaccount.google.com/security
2. Generate password: https://myaccount.google.com/apppasswords

---

## 🗄️ MongoDB Atlas Setup

1. Create account: https://www.mongodb.com/cloud/atlas
2. Create free cluster (M0)
3. Create database user
4. Whitelist IP (0.0.0.0/0 for development)
5. Get connection string
6. Add to `.env`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/visituna
```

---

## 🧪 Quick Test

### Test Contact Form (Will Send Email!)

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Testing email functionality"
  }'
```

Check your ADMIN_EMAIL inbox!

---

## 📂 Important Files

```
backend/
├── .env                    ← Configure this first!
├── server.js               ← Main entry point
├── seedData.js             ← Run to create admin user
├── package.json            ← Dependencies & scripts
└── README.md               ← Full documentation
```

---

## 🎯 User Roles

- **user** - Regular user (default for new registrations)
- **admin** - Full access to all features

Change role via:

```
PUT /api/admin/users/:id/role
Body: { "role": "admin" }
```

---

## 🔧 Troubleshooting

### Server won't start?

- Check `.env` file exists and is configured
- Verify MongoDB URI is correct
- Check port 5000 is available

### Emails not sending?

- Verify Gmail app password is correct
- Check 2FA is enabled on Gmail
- Ensure EMAIL_USER and EMAIL_PASS are set
- Check spam folder

### MongoDB connection failed?

- Verify connection string in `.env`
- Check IP is whitelisted in MongoDB Atlas
- Verify database user credentials

---

## 📊 Database Collections

After seeding:

- **users** - 1 admin user
- **events** - 4 sample events
- **galleryimages** - 6 sample images
- **contacts** - Empty (fills as users submit)
- **eventbookings** - Empty (fills as users book)
- **newsletters** - Empty (fills as users subscribe)

---

## 🎨 Next: Build Admin Panel

Create these pages in your frontend:

1. `/admin/login` - Admin authentication
2. `/admin/dashboard` - Statistics & overview
3. `/admin/messages` - Contact form submissions
4. `/admin/events` - Event management
5. `/admin/bookings` - Booking management
6. `/admin/users` - User management
7. `/admin/gallery` - Image management
8. `/admin/newsletter` - Subscriber management

---

## 📝 Documentation Files

- `SETUP_GUIDE.md` - Detailed setup instructions
- `API_DOCUMENTATION.md` - Complete API reference
- `IMPLEMENTATION_SUMMARY.md` - What was built
- `README.md` - Project overview

---

## 🚀 Production Checklist

Before deploying:

- [ ] Change admin password
- [ ] Set NODE_ENV=production
- [ ] Use production MongoDB cluster
- [ ] Generate strong JWT_SECRET
- [ ] Configure production email service
- [ ] Update CLIENT_URL to production domain
- [ ] Enable HTTPS
- [ ] Set up proper CORS origins

---

## 💡 Pro Tips

1. **Test emails first** - Make sure email config works before going live
2. **Change admin password** - Default password is for testing only
3. **Use environment variables** - Never commit `.env` to git
4. **Monitor logs** - Check terminal for errors and activity
5. **Test with Postman** - Easier than curl for complex requests

---

## 📞 Quick Links

- **MongoDB Atlas:** https://cloud.mongodb.com
- **Gmail App Passwords:** https://myaccount.google.com/apppasswords
- **API Health Check:** http://localhost:5000/api/health
- **API Root:** http://localhost:5000/api

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Server starts without errors
- [ ] Health check returns success
- [ ] Can login as admin
- [ ] Contact form sends email to your inbox
- [ ] Events API returns seeded data
- [ ] Gallery API returns seeded images
- [ ] Admin dashboard returns statistics

---

**🎉 Your backend is ready! Start building the admin panel!**
