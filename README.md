# Cook it Up

Cook it Up is a web application built with React that allows users to input a list of ingredients and generates recipes based on the provided ingredients. The app uses an AI API from [Hugging Face](https://huggingface.co/) to analyze the input and suggest suitable recipes.

## Features

- **Ingredient Input**: Users can input a list of ingredients they have on hand.
- **AI-Powered Recipe Suggestions**: The app generates recipes based on the ingredients using advanced AI models.
- **User-Friendly Interface**: A clean and responsive UI for seamless interaction.
- **Real-Time Results**: Get recipes almost instantly after providing the ingredients.

## Technologies Used

- **Frontend**: React.js
- **API**: Hugging Face AI API
- **Styling**: CSS

## Installation

Follow these steps to run the application locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/JoHnOvRkiLL/cook_it_up.git
   cd recipe-finder
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up API Key**:
   - Sign up or log in to [Hugging Face](https://huggingface.co/) and obtain an API key.
   - Create a `.env` file in the root directory and add your API key:
     ```env
     REACT_APP_HUGGINGFACE_API_KEY=your-api-key
     ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. **Access the App**:
   Open your browser and navigate to `http://localhost:xxxx`.

## Usage

1. Enter a list of ingredients in the input field (e.g., "tomato, cheese, basil").
2. Click the **Cook it Up** button.
3. Browse through the suggested recipes and choose the one that suits your taste.

## Contributing

Contributions are welcome! If you have ideas for improving the app or fixing bugs, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.


## Acknowledgments

- Special thanks to [Hugging Face](https://huggingface.co/) for providing the AI API.
- Inspired by the joy of cooking and sharing recipes.

## Contact

For any inquiries or feedback, feel free to reach out:
- Don't reach out too tired for this.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
