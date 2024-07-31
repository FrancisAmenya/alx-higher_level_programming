#!/usr/bin/node

const request = require('request');
const util = require('util');

// Convert request to use Promises
const requestPromise = util.promisify(request);

const movieId = process.argv[2];
const baseUrl = 'https://swapi-api.alx-tools.com/api/films/';
const fullUrl = baseUrl.concat(movieId);

async function main() {
  try {
    const response = await requestPromise(fullUrl);
    const movie = JSON.parse(response.body);
    const characters = movie.characters;

    // Create a variable to store the number of characters processed
    let charactersProcessed = 0;

    // Create an empty array to store the character names
    const characterNames = [];

    // Use Promise.all to fetch all character names in parallel
    await Promise.all(characters.map(async (characterUrl) => {
      try {
        const charResponse = await requestPromise(characterUrl);
        const charData = JSON.parse(charResponse.body);
        const charName = charData.name;

        // Add the character name to the array at the correct index
        characterNames[characters.indexOf(characterUrl)] = charName;
      } catch (error) {
        console.error(`Error fetching character: ${error}`);
      } finally {
        // Increment the charactersProcessed variable
        charactersProcessed++;
      }
    }));

    // Check if all characters have been processed
    if (charactersProcessed === characters.length) {
      // Log the character names when all characters have been processed
      characterNames.forEach((actor) => {
        console.log(actor);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

main();
