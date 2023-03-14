import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  // TODO: use the chatId to etrieve all the previous promts from firestore and add them to the prompt to make the conversation more contextual

  // TODO: if model === "gpt-3.5-turbo" modify the endpoint to "https://api.openai.com/v1/chat/completions" and also modify the format of the prompt according to the updated docs.

  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9, //temperature is a value between 0 and 1 that determines the randomness or "creativity" of the response. The higher the temperature, the more creative the response. The lower the temperature, the more likely the response will be a logical continuation of the prompt.
      top_p: 1, //top_p is a value between 0 and 1 that determines the diversity of the response. The higher the top_p, the more diverse the response. The lower the top_p, the more likely the response will be a logical continuation of the prompt.
      max_tokens: 1000, //max_tokens is the maximum number of tokens that the API will return. The API will always return as many tokens as it can up to this maximum.
      frequency_penalty: 0, //frequency_penalty is a value between 0 and 1 that penalizes new tokens based on whether they appear in the text so far. The higher the frequency_penalty, the more likely the API will return new tokens that do not appear in the text so far.
      presence_penalty: 0, //presence_penalty is a value between 0 and 1 that penalizes new tokens based on whether they appear in the prompt so far. The higher the presence_penalty, the more likely the API will return new tokens that do not appear in the prompt.
      // stream: true
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChaseGPT was unable to find an answer for that! (Error: ${err.message})`
    );

  return res;
};

export default query;
