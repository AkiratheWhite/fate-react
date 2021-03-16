// import mash_smile from '/img/mash_smile';
// import mash_happy from '/img/mash_happy';
// import mash_blush from "/img/mash_blush";

const greetingKey = [
    {
		"greeting": "Senpai! Welcome back! Are we going to continue reviewing the archives today?",
		"img": "mash_happy"
	},

	{
		"greeting": "Ah, there you are, Senpai. What are we doing today?",
		"img": "mash_smile"
	},

	{
		"greeting": "Oh? Are you here to review the archives, Senpai? Can I join you?",
		"img": "mash_blush"
	},

	{
		"greeting": "Welcome back, Senpai. If you're reviewing the archives, make sure you take proper breaks between records!",
		"img": "mash_smile"
	},

	{
		"greeting": "Senpai, please wait just a moment! I'll go get you something to drink!",
		"img": "mash_happy"
	}
]

const getGreeting = () => {
    var rand = Math.floor(Math.random()*5);
    var randGreeting = greetingKey[rand];
    return randGreeting;
}

const Greeting = () => {

    var selectedGreeting = getGreeting();

    return (
        <div id="greeting">
        <   img src={`/img/${selectedGreeting.img}.png`}/>
        <div class="dialogue">{selectedGreeting.greeting}</div>
        </div>
    );
}
 
export default Greeting;