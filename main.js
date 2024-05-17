import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function findPart() { 
  const assistant = await openai.beta.assistants.create({
    name: "NAPA Part Number Generator",
    instructions: "I will provide the year, make, model, drive type, and engine size of a vehicle, and a second argument that is a part name. You will help me locate the part online.",
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

async function findUniversalJoint() { 
  const assistant = await openai.beta.assistants.create({
    name: "Metric Schema Generator",
    instructions: "If I give you the year, make, and model, drive type, an engine size of a vehicle, then you will return the correct universal joints offered for that vehicle in the SKF lineup.",
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

async function returnProductDescription() { 
  const assistant = await openai.beta.assistants.create({
    name: "Metric Schema Generator",
    instructions: "I need to generate a great product description for a product. Only I am just going to give you the product name and you will generate a great product description for me.",
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

async function returnSeoTags() { 
  const assistant = await openai.beta.assistants.create({
    name: "Metric Schema Generator",
    instructions: "I need to generate good SEO tags for some products that I sell. I will provide you with an product title and/or description and you will return a list of SEO tags that I can use to improve my search engine rankings.",
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
 
// returnCodingIdea();
//returnMetricSchema();
//returnSeoTags();
//returnProductDescription();
//findUniversalJoint();
returnColorSchema();
//findPart();