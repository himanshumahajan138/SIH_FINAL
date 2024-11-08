# React-powered Rasa Chatbot

This project demonstrates how to create a chatbot using React for the frontend and Rasa for the backend. The backend is implemented in Python 3.8 using `virtualenv` for environment management.

## Prerequisites

- Node.js 
- Python 3.8
- pip
- virtualenv

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-rasa-chatbot.git
cd react-rasa-chatbot
```

### 2. Set Up the Backend

#### 2.1. Create and Activate Virtual Environment

```bash
cd backend
python3.8 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

#### 2.2. Install Required Packages

```bash
pip install -r requirements.txt
```

`requirements.txt` should include:

```
rasa==3.0.0
rasa-sdk==3.0.0
```

#### 2.3. Train the Rasa Model

```bash
rasa train
```

#### 2.4. Run the Rasa Server

```bash
rasa run
```

#### 2.5. (Optional) Run Rasa Action Server

If you have custom actions, start the action server:

```bash
rasa run actions
```

### 3. Set Up the Frontend

#### 3.1. Install Node.js Dependencies

```bash
cd ../frontend
npm install
```

#### 3.2. Start the React Development Server

```bash
npm start
```

### 4. Configuration

#### 4.1. Update Rasa Server URL

In the React app, update the Rasa server URL to match where your Rasa server is running. This is usually done in the `src/App.js` file or wherever the Rasa server endpoint is specified.

```javascript
const rasaServer = 'http://localhost:5005/webhooks/rest/webhook';
```

### 5. Project Structure

```
react-rasa-chatbot/
│
├── backend/
│   ├── actions/
│   ├── data/
│   ├── models/
│   ├── config.yml
│   ├── domain.yml
│   ├── endpoints.yml
│   └── requirements.txt
│
└── frontend/
    ├── public/
    ├── src/
    ├── package.json
    └── README.md
```

### 6. Additional Commands

#### 6.1. Stop Running Servers

To stop the Rasa server and React development server, use `Ctrl+C` in their respective terminal windows.

#### 6.2. Deactivate Virtual Environment

```bash
deactivate
```

## Troubleshooting

- Ensure that both the Rasa and React servers are running on different ports.
- Verify that the Rasa server URL is correctly configured in the React app.

## Contributing

Feel free to contribute by submitting pull requests or issues to this repository. Ensure that your code adheres to the project's coding standards and includes tests where applicable.

## License

This project is licensed under the MIT License.
