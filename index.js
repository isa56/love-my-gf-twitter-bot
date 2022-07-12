
const Twit = require("twit");

require("dotenv").config();

const tweet = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});


const beganDating = new Date(2020, 07, 18);
const oneHour = 3600000;
const halfAnHour = 1800000;

const daysTogether = () => Math.ceil((new Date().getTime() - beganDating.getTime())/(1000*3600*24));
const monthsTogether = () => (Math.floor((new Date().getTime() - beganDating.getTime()) / (1000*3600*24*30)));
const yearsTogether = () => Math.floor((new Date().getTime() - beganDating.getTime()) / (1000*3600*24*365));

const monthsTogetherThisYear = () => (monthsTogether() - (yearsTogether() * 12));

function action() {

    const sentences = [
        "I love my girlfriend!",
        "I love my partner so so so much",
        "When my partner smiles the sun shines brighter",
        "I hope my sweetheart has an amazing day today",
        "My bae is the good in my days",
        "I love everything about my girlfriend omg",
        "I think about my significant other 24/7, and I don't intend to stop",
        "I miss my gf's hugs so so much. When they embrace me it feels like nothing else matters",
        "Hey, beautiful. You're the brightest person in the world, and you have the most beautiful smile.",
        "Babe, you're so so so beautiful, I love you soooo much <3",
        "I think my Girlfriend™ is the most amazing and dedicated person in the world",
        "I think my significant other is such a special person, they do so so much for me and understand me even when I'm unreasonable.",
        "My Significant Other is amazing and I'd do anything to make them happy (including coding a bot in a language I don't know)",
        "I wanna hug and be with them so much :D I think they're The One™",
        "You know that 'special someone'? Well, I found mine <3",
        "I really really really wanna hug them 24/7, they're so warm and comfy",
        "Hey, love. I just want you to know that you make it all worth it. You're worth it, and you're enough. I love you so much",
        "My bae's so smart it makes me >//< I love it when they talk about anything they're interested in",
        "I love seeing my sweetheart doing the things they love, be it gaming, reading or nerding",
        "Every single minute being with you has been worth it",
        `Hey, V. Thank you for these ${yearsTogether()} year${yearsTogether() > 1 ? 's' : ''} and ${monthsTogetherThisYear()} month${monthsTogetherThisYear() > 1 ? 's' : ''}. It means the world to me.`,
        `It's been more than ${daysTogether()} days with my love. Not all have been perfect, but it's all worth it because I have them.`,
        "I would sword fight while flirting with you anytime",
        "Hey, I can help you study the chemistry that exists between us, dear",
        "Hey, love, I'm here just to tell you how much I love you.",
        "Would you swordplay with me?",
        "*big mouth* ᵃ",
        "All I wanna do is wake up next to you every single day",
        "I would love to be with you 24/7, my heart",
        "They are just so so so handsome, I can not.",
        "I wanna go to the beach with them",
        "*sees photo of gf* BARK BARK BARK WOOF WOOF WOOF",
        "Oh, babe, you are the most beautiful person in this world.",
        "I hope we can spend the rest of our lives together.",
        "I can't wait to see you again, my heart",
        "I'd join the dark side as long as you were there, V.",
        "Bae, are you a Sith Lord? Because I've Fallen for you.",
        "Call me Shirou Emiya cuz Fate is teeling me to Stay the Night with you, darling ( ͡° ͜ʖ ͡°)",
        "I Chose You from the moment I saw you on the wild",
        "I think I need a Paralyze Heal, cuz you're Stunning.",
    ];

    const position = Math.floor(Math.random() * (sentences.length));

    tweet.post(
        'statuses/update',  // funcao de postar tweet
        { status: sentences[position] },  // post que será feito
        function (error, data, response) {
            if (error) {
                console.log("ERRO: " + error);
                return false;
            }

            console.log("Tweet postado com sucesso!");
        }
    )

}

setInterval(action, oneHour);
