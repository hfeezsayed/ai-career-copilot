# 🚀 AI Career Copilot

An end-to-end AI-powered career development platform built with **Next.js, FastAPI, MongoDB Atlas, JWT Authentication, and OpenAI**.

AI Career Copilot helps users analyze resumes, match resumes against job descriptions, generate personalized career roadmaps, chat with an AI career assistant, and track career progress through an interactive dashboard.

---

## ✨ Features

### 🤖 AI Career Chat

- AI-powered career guidance
- Career-related Q&A
- Persistent chat history
- Rename and delete conversations
- Markdown-formatted AI responses

### 📄 Resume Analyzer

- Upload PDF or DOCX resumes
- ATS score generation
- Skill extraction
- Missing skills detection
- Resume strength evaluation
- AI improvement suggestions

### 🎯 Job Matcher

- Resume vs Job Description comparison
- Match percentage calculation
- Missing keyword identification
- ATS optimization insights
- Career alignment analysis

### 🗺 Career Roadmap Generator

- Personalized career roadmaps
- Goal-based learning paths
- AI-generated milestones
- Structured career progression plans

### 📊 Smart Dashboard

- Resume score tracking
- Job match tracking
- Career goal tracking
- Recent activity timeline
- Profile completion monitoring

### 🔐 Authentication & Security

- JWT Authentication
- Secure login & registration
- Protected routes
- Password hashing using bcrypt

---

## 🏗 Architecture

Frontend → Next.js 15 + TypeScript + Tailwind CSS

Backend → FastAPI + Python

Database → MongoDB Atlas

Authentication → JWT

AI Engine → OpenAI GPT-4o Mini

---

## 🛠 Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Lucide React

### Backend

- FastAPI
- Python
- Pydantic
- JWT Authentication
- Passlib (bcrypt)

### Database

- MongoDB Atlas
- PyMongo

### AI

- OpenAI API
- GPT-4o Mini

---

## 📂 Project Structure

```bash
ai-career-copilot/

├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── data/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── schemas/
│   │   ├── dependencies/
│   │   └── db/
│
└── README.md
```

## 📸 Screenshots

### Dashboard

- Resume Score Tracking
- Job Match Tracking
- Career Goal Monitoring
- Recent Activities

### Resume Analyzer

- ATS Score
- Skill Extraction
- Missing Skills Detection

### Job Matcher

- Resume vs JD Analysis
- Match Percentage
- Keyword Analysis

### AI Career Chat

- Career Guidance
- AI Conversations
- Chat History

---

## ⚡ Installation

### Clone Repository

```bash
git clone https://github.com/hfeezsayed/ai-career-copilot
cd ai-career-copilot
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
OPENAI_API_KEY=your_openai_api_key

MONGODB_URI=your_mongodb_connection_string

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

## 🎯 Key Learning Outcomes

This project demonstrates:

- Full Stack Development
- AI Integration
- REST API Development
- JWT Authentication
- MongoDB Atlas Integration
- File Upload Handling
- Resume Parsing
- Prompt Engineering
- Dashboard Analytics
- Production-Ready Architecture

---

## 🚀 Future Improvements

- Real ATS Scoring Engine
- AI Resume Rewriting
- LinkedIn Profile Analyzer
- Interview Preparation Module
- AI Mock Interviews
- Advanced Career Analytics
- Real-time Streaming Chat

---

## 👨‍💻 Author

**Hafeez Ali**

Full Stack Developer | AI Enthusiast

Building practical AI-powered applications with modern web technologies.

---

⭐ If you found this project useful, consider giving it a star.
