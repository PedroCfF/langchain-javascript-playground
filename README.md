# langchain-javascript-playground

A Node.js and TypeScript project that utilizes the `langchain` library to work with various language model APIs, such as OpenAI's GPT series.

This project follows the main steps outlined in [this blog post](https://langchainers.hashnode.dev/getting-started-with-langchainjs).


## Prerequisites

- Node.js: version 14.0.0 or later
- npm: version 6.0.0 or later


## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:
```git
git clone 
```

2. Navigate to the project's root directory:
```bash
cd langchain-javascript-playground
```

3. Install the dependencies:
```bash
npm install
```


## Building the Project

Before you can run the project, you need to build it using the TypeScript compiler. Run the following command in the project's root directory:
```bash
npm run build
```

This command will compile the TypeScript files in the `src` folder and output the JavaScript files in the `dist` folder.


## Running the Project

There are three main scripts that you can run:

1. Basic LLMS:
```bash
npm start -- dist/basics/basic_llms.js
```

2. Basic Prompts:
```bash
npm start -- dist/basics/basic_prompts.js
```

3. Basic Chains:
```bash
npm start -- dist/basics/basic_chains.js
```

4. Basic Agents:
```bash
npm start -- dist/basics/basic_agents.js
```

5. Basic Memory:
```bash
npm start -- dist/basics/basic_memory.js
```


## Development Mode

If you want to run the project in development mode without building it first, you can use the following command:

```bash
npm run dev -- src/basics/<script_name>.ts
```

Replace `<script_name>` with the name of the script you want to run (e.g., `basic_llms`, `basic_prompts`, `basic_chains`, etc).


## License

This project is licensed under the AGPL-version-3.0 License.


## Support

If you encounter any issues or have questions, please check the [issues](<issues_url>) section of the repository or contact the author.
