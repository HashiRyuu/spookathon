# Spookathon — local AI chat prototype

A hackathon project (Spookathon, October 2025): a **browser chat page that talks to a local Llama 3 model** through a small Node.js proxy, plus sign-in and sign-up pages for a "Student Life" site.

This is a time-boxed hackathon prototype.

## How it works

```
index.html  ──POST /api/chat──▶  proxy.js (Express, port 3000)  ──▶  Ollama (port 11434, llama3)
```

The browser cannot call Ollama directly because of cross-origin rules, so `proxy.js` forwards each chat request to the local Ollama server and returns the model's response.

## Files

| File | What it is |
| --- | --- |
| [`index.html`](index.html) | Chat page: sends your message to the proxy and shows the model's reply |
| [`proxy.js`](proxy.js) | Express server that forwards `/api/chat` requests to Ollama |
| [`ui.html`](ui.html) | A smaller version of the chat interface |
| [`web.html`](web.html) | A responsive HTML/CSS starter page |
| [`signin.html`](signin.html), [`signup.html`](signup.html) | Sign-in and sign-up pages with their stylesheets (built by a teammate) |

## Run it locally

1. Install [Ollama](https://ollama.com) and download the model: `ollama pull llama3`
2. Start the proxy:

   ```sh
   npm install
   npm start
   ```

3. Open `index.html` in your browser and send a message.

## Known limitations

- Messages are inserted into the page as HTML, so the chat should escape user and model text before a real deployment.
- The proxy returns Ollama's streamed output as one block of text instead of streaming it to the page.
- The sign-in and sign-up pages are front-end only; they are not connected to a backend.
