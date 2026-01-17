# VisitUNA Backend API

Backend API for the VisitUNA Tourism Website built with MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Features

- **User Authentication** with JWT and role-based access (Admin/User)
- **Contact Form Management** with email notifications
- **Events & Activities** with booking system
- **Gallery Management** with image uploads
- **Newsletter Subscription** system
- **Admin Dashboard** with comprehensive statistics
- **Email Service** with formatted HTML templates
- **Security** features (Helmet, CORS, Rate Limiting)

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Gmail account for email service (or other SMTP service)

## ⚙️ Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Create `.env` file:**
   Copy `.env.example` to `.env` and update the values:

   ```bash
   cp .env.example .env
   ```

3. **Configure MongoDB Atlas:**
   - Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
   - Create a new cluster
   - Get your connection string
   - Update `MONGODB_URI` in `.env` file

4. **Configure Email Service:**
   - For Gmail, enable 2-factor authentication
   - Generate an app-specific password
   - Update `EMAIL_USER` and `EMAIL_PASS` in `.env`
   - Update `ADMIN_EMAIL` with your email address

5. **Update JWT Secret:**
   - Generate a secure random string for `JWT_SECRET`

## 🏃 Running the Server

### Development mode:

```bash
npm run dev
```

### Production mode:

```bash
npm start
```

The server will run on `http://localhost:5000`

## 📡 API Endpoints

### Authentication (`/api/auth`)

- `POST /register` - Register new user
- `POST /login` - Login user
- `GET /me` - Get current user (Protected)
- `GET /logout` - Logout user (Protected)
- `PUT /updateprofile` - Update user profile (Protected)
- `PUT /updatepassword` - Update password (Protected)

### Contact (`/api/contact`)

- `POST /` - Submit contact form (Public)
- `GET /` - Get all contacts (Admin)
- `GET /stats` - Get contact statistics (Admin)
- `GET /:id` - Get single contact (Admin)
- `PUT /:id` - Update contact status (Admin)
- `DELETE /:id` - Delete contact (Admin)

### Events (`/api/events`)

- `GET /` - Get all events (Public)
- `GET /:id` - Get single event (Public)
- `POST /:id/book` - Book event (Protected)
- `GET /bookings/my` - Get user bookings (Protected)
- `POST /` - Create event (Admin)
- `PUT /:id` - Update event (Admin)
- `DELETE /:id` - Delete event (Admin)
- `GET /bookings/all` - Get all bookings (Admin)
- `PUT /bookings/:id` - Update booking status (Admin)

### Gallery (`/api/gallery`)

- `GET /` - Get all images (Public)
- `GET /:id` - Get single image (Public)
- `PUT /:id/like` - Like image (Public)
- `POST /` - Upload image (Admin)
- `PUT /:id` - Update image (Admin)
- `DELETE /:id` - Delete image (Admin)
- `GET /stats/all` - Get gallery statistics (Admin)

### Newsletter (`/api/newsletter`)

- `POST /subscribe` - Subscribe to newsletter (Public)
- `POST /unsubscribe` - Unsubscribe from newsletter (Public)
- `GET /` - Get all subscribers (Admin)
- `GET /stats` - Get newsletter statistics (Admin)
- `DELETE /:id` - Delete subscriber (Admin)

### Admin (`/api/admin`)

- `GET /dashboard` - Get dashboard statistics (Admin)
- `GET /users` - Get all users (Admin)
- `PUT /users/:id/role` - Update user role (Admin)
- `PUT /users/:id/status` - Activate/Deactivate user (Admin)
- `DELETE /users/:id` - Delete user (Admin)

## 🔐 User Roles

- **User** - Regular user with access to booking events, viewing content
- **Admin** - Full access to all features including content management and user management

## 📧 Email Templates

The system includes beautifully formatted HTML email templates for:

- Contact form submissions (sent to admin)
- Auto-reply to users who submit contact form
- Welcome email for new user registrations

## 🗄️ Database Models

- **User** - User accounts with roles
- **Contact** - Contact form submissions
- **Event** - Events and activities
- **EventBooking** - Event bookings
- **GalleryImage** - Gallery images
- **Newsletter** - Newsletter subscriptions

## 🔒 Security Features

- Password hashing with bcrypt
- JWT authentication with HTTP-only cookies
- Role-based authorization
- Input validation
- Rate limiting
- CORS protection
- Helmet security headers
- XSS protection

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Nodemailer** - Email service
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger

## 📝 Environment Variables

See `.env.example` for all required environment variables.

## 🐛 Error Handling

The API includes comprehensive error handling:

- Mongoose validation errors
- Duplicate key errors
- Cast errors (invalid ObjectId)
- Custom error responses

## 📊 Admin Dashboard

The admin dashboard provides:

- Total users, contacts, events, bookings statistics
- Recent activities
- Popular events
- Revenue tracking
- Booking status breakdown

## 🚀 Deployment

For production deployment:

1. Set `NODE_ENV=production` in `.env`
2. Use a production MongoDB cluster
3. Set secure `JWT_SECRET`
4. Configure production email service
5. Update `CLIENT_URL` to your frontend domain

## 📞 Support

For issues or questions, contact the development team.

## 📄 License

ISC
