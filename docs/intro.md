---
sidebar_position: 1
id: intro
title: What is AI-Kit?
---

# Welcome to AI-Kit

AI-Kit is a tiny RAG (Retrieval-Augmented Generation) system and open-source AI toolkit.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- An OpenRouter API key ([get one here](https://openrouter.ai/keys))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JithunMethusahan/AI-Kit.git
   cd AI-Kit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your bot:
   Create a `.env` file in the root directory:
   ```
   API_KEY=your_openrouter_api_key_here
   ```
   Edit `config.yaml` for other settings like model and appearance.

4. Add your knowledge base (optional):
   Edit `knowledge.txt` with context information for your bot.

5. Build the widget:
   ```bash
   npm run build
   ```

### Integration

Add the generated script to your website:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <!-- Your website content -->

    <script src="dist/chatbot.bundle.js"></script>
</body>
</html>
```

## ⚙️ Configuration

- **API Key**: Set `API_KEY` in `.env` file (get from [OpenRouter](https://openrouter.ai/keys))
- **Other Settings**: Edit `config.yaml` to customize model, appearance, and behavior

Available free models include:
- `deepseek/deepseek-r1-0528:free`
- `mistralai/devstral-2512:free`
- And many more (see [OpenRouter models](https://openrouter.ai/models))