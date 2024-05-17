import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

async function returnColorSchema() { 
  const assistant = await openai.beta.assistants.create({
    name: "Color Scheme Generator",
    instructions: "Take a color or mood and return a color scheme in JSON format that represents the input well. Provide some information about why each color was picked as well",
    tools: [],
    model: "gpt-4o"
  });
  const thread = await openai.beta.threads.create();
const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: 'Calming'
    }
  );

  // We use the stream SDK helper to create a run with
// streaming. The SDK provides helpful event listeners to handle 
// the streamed response.
 
// const run = openai.beta.threads.runs.stream(thread.id, {
//     assistant_id: assistant.id
//   })
//     .on('textCreated', (text) => process.stdout.write('\nassistant > '))
//     .on('textDelta', (textDelta, snapshot) => process.stdout.write(textDelta.value))
//     .on('toolCallCreated', (toolCall) => process.stdout.write(`\nassistant > ${toolCall.type}\n\n`))
//     .on('toolCallDelta', (toolCallDelta, snapshot) => {
//       if (toolCallDelta.type === 'code_interpreter') {
//         if (toolCallDelta.code_interpreter.input) {
//           process.stdout.write(toolCallDelta.code_interpreter.input);
//         }
//         if (toolCallDelta.code_interpreter.outputs) {
//           process.stdout.write("\noutput >\n");
//           toolCallDelta.code_interpreter.outputs.forEach(output => {
//             if (output.type === "logs") {
//               process.stdout.write(`\n${output.logs}\n`);
//             }
//           });
//         }
//       }
//     });
}

function App() {
  const [count, setCount] = useState(0)
  console.log(returnColorSchema())
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
      </p>
    </>
  )
}

export default App
