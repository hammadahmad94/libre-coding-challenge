# Roadmap AI - AI Goal Decomposition Tool

[Video Presentation](https://www.dropbox.com/scl/fi/vvcgj772r7e3q2cl9n9kq/libre-challenge-vidoe.mov?rlkey=4ye6keq1jmq9c292guojsyuja&st=hkohuvnl&dl=0)

Roadmap AI is an AI-powered consultant that helps users break down high-level, ambitious goals (like "Launch a Newsletter" or "Learn Python") into concrete, actionable implementation plans.

## 🚀 Features

*   **AI Consultation**: A chat interface where the AI asks clarifying questions to understand your context.
*   **Structured Roadmaps**: Automatically generates a step-by-step implementation plan (JSON-based) when the consultation is complete.
*   **Split-View Interface**: View your chat and your roadmap side-by-side.
*   **Interactive UI**: Typing indicators, markdown support, and skeletons for a polished experience.

## 🛠 Tech Stack

### Frontend
*   **Framework**: React (Vite)
*   **UI Library**: Material UI (MUI)
*   **Icons**: Lucide React
*   **Language**: JavaScript
*   **Markdown**: `react-markdown`

### Backend
*   **Framework**: FastAPI
*   **Language**: Python 3.8+
*   **AI Engine**: OpenAI GPT-4o
*   **Architecture**: Layered (Router -> Controller -> Service)

---

## 🏁 Getting Started

### Prerequisites
*   Node.js (v16+)
*   Python (v3.8+)
*   OpenAI API Key

### 1. Clone the Repository

```bash
git clone https://github.com/hammadahmad94/libre-coding-challenge.git
cd libre-coding-challenge
```

### 2. Backend Setup
Navigate to the backend directory and set up the Python environment.

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Configure Environment Variables:**
Create a `.env` file in the `backend/` directory:

```env
OPENAI_API_KEY=sk-your-openai-api-key-here
```

**Run the Server:**
The backend will run on port **8002**.

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8002
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies.

```bash
cd frontend
npm install
```

**Run the Client:**
The frontend will run on **localhost:5173**.

```bash
npm run dev
```

---

## 📖 Usage Guide

1.  **Open the App**: Go to `http://localhost:5173`.
2.  **Start Chatting**: Type a goal (e.g., "I want to run a marathon").
3.  **Consult**: Answer the AI's clarifying questions.
4.  **Generate**: When you're ready, click the **Map Icon** (Generate Plan) next to the send button.
5.  **View Roadmap**: The screen will split, showing your tailored roadmap on the right.

---

## 🔮 Future Improvements (v2)
*   **Persistence**: Save user sessions and roadmaps to a database (PostgreSQL).
*   **Deep-Dive Mode**: Click on any roadmap step to start a sub-chat for specific advice.
*   **Export**: Export plans to Notion, PDF, or Trello.
