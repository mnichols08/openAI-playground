import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function returnCodingIdea() { 
  const assistant = await openai.beta.assistants.create({
    name: "Metric Schema Generator",
    instructions: "I want to learn more about Generative AI and how it can be used to generate code ideas. If I provide a television series can you give me some ideas on a cool web app that could be built around it?",
    tools: [],
    model: "gpt-4o"
  });
  const thread = await openai.beta.threads.create();
const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: process.argv[2]
    }
  );

  // We use the stream SDK helper to create a run with
// streaming. The SDK provides helpful event listeners to handle 
// the streamed response.
 
const run = openai.beta.threads.runs.stream(thread.id, {
    assistant_id: assistant.id
  })
    .on('textCreated', (text) => process.stdout.write('\nassistant > '))
    .on('textDelta', (textDelta, snapshot) => process.stdout.write(textDelta.value))
    .on('toolCallCreated', (toolCall) => process.stdout.write(`\nassistant > ${toolCall.type}\n\n`))
    .on('toolCallDelta', (toolCallDelta, snapshot) => {
      if (toolCallDelta.type === 'code_interpreter') {
        if (toolCallDelta.code_interpreter.input) {
          process.stdout.write(toolCallDelta.code_interpreter.input);
        }
        if (toolCallDelta.code_interpreter.outputs) {
          process.stdout.write("\noutput >\n");
          toolCallDelta.code_interpreter.outputs.forEach(output => {
            if (output.type === "logs") {
              process.stdout.write(`\n${output.logs}\n`);
            }
          });
        }
      }
    });
}

async function returnMetricSchema() { 
  const assistant = await openai.beta.assistants.create({
    name: "Metric Schema Generator",
    instructions: "Take two arguments, a positon at a company and an industry, and return a JSON object with 15 metrics that are important to the user in that position and industry. ",
    tools: [],
    model: "gpt-4o"
  });
  const thread = await openai.beta.threads.create();
const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: `${process.argv[2]}, ${process.argv[3]}`
    }
  );

  // We use the stream SDK helper to create a run with
// streaming. The SDK provides helpful event listeners to handle 
// the streamed response.
 
const run = openai.beta.threads.runs.stream(thread.id, {
    assistant_id: assistant.id
  })
    .on('textCreated', (text) => process.stdout.write('\nassistant > '))
    .on('textDelta', (textDelta, snapshot) => process.stdout.write(textDelta.value))
    .on('toolCallCreated', (toolCall) => process.stdout.write(`\nassistant > ${toolCall.type}\n\n`))
    .on('toolCallDelta', (toolCallDelta, snapshot) => {
      if (toolCallDelta.type === 'code_interpreter') {
        if (toolCallDelta.code_interpreter.input) {
          process.stdout.write(toolCallDelta.code_interpreter.input);
        }
        if (toolCallDelta.code_interpreter.outputs) {
          process.stdout.write("\noutput >\n");
          toolCallDelta.code_interpreter.outputs.forEach(output => {
            if (output.type === "logs") {
              process.stdout.write(`\n${output.logs}\n`);
            }
          });
        }
      }
    });
}
 
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
      content: process.argv[2]
    }
  );

  // We use the stream SDK helper to create a run with
// streaming. The SDK provides helpful event listeners to handle 
// the streamed response.
 
const run = openai.beta.threads.runs.stream(thread.id, {
    assistant_id: assistant.id
  })
    .on('textCreated', (text) => process.stdout.write('\nassistant > '))
    .on('textDelta', (textDelta, snapshot) => process.stdout.write(textDelta.value))
    .on('toolCallCreated', (toolCall) => process.stdout.write(`\nassistant > ${toolCall.type}\n\n`))
    .on('toolCallDelta', (toolCallDelta, snapshot) => {
      if (toolCallDelta.type === 'code_interpreter') {
        if (toolCallDelta.code_interpreter.input) {
          process.stdout.write(toolCallDelta.code_interpreter.input);
        }
        if (toolCallDelta.code_interpreter.outputs) {
          process.stdout.write("\noutput >\n");
          toolCallDelta.code_interpreter.outputs.forEach(output => {
            if (output.type === "logs") {
              process.stdout.write(`\n${output.logs}\n`);
            }
          });
        }
      }
    });
}
 
returnCodingIdea();

