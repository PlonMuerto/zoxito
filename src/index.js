import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import App from '@routes/App.jsx';

ReactDOMClient.createRoot(document.getElementById("app")).render(
    <App/>
);