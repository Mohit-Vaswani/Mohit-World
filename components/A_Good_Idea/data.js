const data = [
  {
    idea: "Solar car roof activates Air Con when a car reaches 95 degrees. Great way to save both human and animal lives.",
  },
  {
    idea: "Smartwatch app that shows you how much time you have for catching your bus or train.",
  },
  {
    idea: "An app where I can scan an item and it will tell me the material it’s made off, i.e scan a table and the app tells me it’s pinewood.",
  },
  { idea: "A dishwasher setting for non-dishwasher safe items." },
  {
    idea: "A feature on Instagram that would allow us to rearrange our photos.",
  },
  {
    idea: "A social networking type of app where all you upload is a voice note",
  },
  {
    idea: "Facebook filter that removes posts from your timeline that include keywords of your choice.",
  },
  {
    idea: "Cars should have built in sensors to let them aware that an ambulance or police car is approaching from a distance. Gives the driver time to slow down and pull over.",
  },
  {
    idea: "A domestic electronic shoe lacing machine. Automatically laces your shoes while you wear them. Stick your foot in and the device will tie your shoes.",
  },
  {
    idea: "LinkedIn should have a check in feature. Be great to see what your connections are up to i.e David checked in to Insomnia with Barry.",
  },
  {
    idea: "To stop people using toilet paper to dry their hands thus wasting toilet paper. Design a roll dispenser that only dispenses toilet paper when you sit on the toilet seat.",
  },
  { idea: "Time hop for Snapchat stories." },
  { idea: "Mirrors behind photographers for school portraits." },
  {
    idea: "A chrome extension that mutes any videos containing Donald Trump.",
  },
  {
    idea: "An augmented reality exercise app where you’re being chased by zombies and have to run?",
  },
  {
    idea: "An app called Twitter Politics where people can argue about their views.",
  },
  {
    idea: "A site for compiling all live mentions of a topic from various sources.",
  },
  {
    idea: "Solar panel beach umbrella. Charge your phone at the beach.",
  },
  {
    idea: "A website that dumbs down research papers so everyone can understand.",
  },
  {
    idea: "An app that helps you remember to drink, eat, and take a break from the internet.",
  },
  {
    idea: "An app where you sing into it and tells you the chords.",
  },
  { idea: "A ‘can’t be arsed’ option for events on Facebook" },
  {
    idea: "LinkedIn feature to save posts so you can read later, similar to Facebook.",
  },
  {
    idea: "Domain providers should take down harmful pages spreading viruses.",
  },
  {
    idea: "A bar where you can specify your target blood-alcohol concentration %, and the bartender serves you drinks to maintain it.",
  },
  {
    idea: "A ‘Back To The Future’ GTA style game where the map is complete over different timelines.",
  },
  {
    idea: "A version of instagram without likes or follower numbers.",
  },
  {
    idea: "An app where your kids gain followers or likes if they do their house chores.",
  },
  {
    idea: "Social networks should have an “unfollow” pop up modal. When a user clicks ‘unfollow’ a pop up will ask “Why are you unfollowing?” Feature is optional to turn on/off.",
  },
  {
    idea: "An app where people can collaborate and make short 8 second videos.",
  },
  {
    idea: "A feature on Instagram where you can see who looks at your posts but doesn’t like them.",
  },
  {
    idea: "An app that tells you where the bathrooms are in buildings you’re not familiar with.",
  },
  {
    idea: "A personal indoor air quality monitor that identifies pollutants in your surroundings, and gives you real-time solutions to breathe cleaner air.",
  },
  { idea: "CheeseCake factory should open up in Dublin." },
  { idea: "An app where u can find plugs near you" },
  { idea: "A feature to unsend Snapchats" },
  { idea: "A night mode on iMessage." },
  {
    idea: "Google Maps should let you choose a route based on the safest route, bypass black spots etc.",
  },
  {
    idea: "A marketplace for investors or business owners to buy and sell businesses.",
  },
  {
    idea: "A foam roller for your entire body. Similar to a tanning bed but with built in foam rollers that roll your entire body in one sitting.",
  },
  { idea: "A change username option on SnapChat." },
  {
    idea: "That 70s Show should have a once off episode that tells where they are now.",
  },
  {
    idea: "A browser plugin that recognises pictures of animal cruelty and swaps them with cute animal photos.",
  },
  {
    idea: "WhatsApp or iMessage should have a ‘silent message’ feature where you can send a message that doesn’t cause the recipient’s phone to beep.",
  },
  {
    idea: "Automatically separate bookmarks in the browser by topics",
  },
  { idea: "Dating App that’s done through Facetime." },
  {
    idea: "A browser extension that, every week, randomly picks one of your least-visited bookmarks and asks you if you want to delete it.",
  },
  { idea: "A pen that shows its “mileage”" },
  {
    idea: "Every person convicted of animal abuse should be put on a list so they can never own another animal.",
  },
  {
    idea: "Mobile phone companies should offer free credit to take their surveys. The more questions you answer the more credit you get.",
  },
  { idea: "Dog sitter app, hire people to look after your dog." },
  {
    idea: "An app where you take photos of attractive people and it provides you with their social media accounts ONLY if the other person approves it.",
  },
  {
    idea: "A notification if a specific person viewed your Snapchat story.",
  },
  {
    idea: "A Facebook Chrome extension to block any posts that contain animal cruelty.",
  },
  {
    idea: "An app where you can just take a picture of a gemstone and it’ll give you the name of it.",
  },
  {
    idea: "An app where you can scan a math problem and it will give you the answer.",
  },
  {
    idea: "An app where you can start and warm the shower so you don’t have to get out of bed.",
  },
  { idea: "A “secretly follow” option on Instagram." },
  {
    idea: "An option to make a tweet private, so certain people that follow you can’t see it, but everyone else can.",
  },
  { idea: "A search option on who viewed your Snapchat story." },
  { idea: "An eating popcorn emoji." },
  { idea: "A recently deleted folder for iMessages." },
  {
    idea: "Drone umbrella that follows you as you walk, the drone would be aware of its surroundings to dodge on coming people and other objects.",
  },
  {
    idea: "An app where I could schedule for certain text messages to go to different people at different times of the day",
  },
  {
    idea: "A website where you can book away day travel to games depending on your team.",
  },
  {
    idea: "A button on your tv to make the remote buzz or make some sort of sound.",
  },
  {
    idea: "A chrome extension which automatically scans fake news memes on Facebook and gives a rating.",
  },
  {
    idea: "An app where you can scan your old gift cards to see how much money is left on them.",
  },
  {
    idea: "An app where you can block one person from multiple social networks and calls/text all in one swoop.",
  },
  {
    idea: "An app where you can set up walks for your dog by strangers. Like Uber for dog walking. You can rate each walker and dog.",
  },
  {
    idea: "An app where you type a detailed description of your dream, press send, & get an immediate answer for what your dream means.",
  },
  {
    idea: "An app where it reads the content of your email and produces a creative subject title.",
  },
  {
    idea: "An app where u can warn people when their car is getting towed.",
  },
  {
    idea: "A plain black t shirt for the gym that when you sweat the words “Currently killing it” appears.",
  },
  {
    idea: "Facebook 2.0 that only allows user sign ups if they have an original Facebook account that is at least a few years old.",
  },
  {
    idea: "An app where u take a picture of a leaf & it tells u what type of tree it’s from.",
  },
  {
    idea: "An app like Tinder, but for book worms, where I can find people who are reading the books I’m reading and we discuss them.",
  },
  {
    idea: "Disney should create a channel where they play throwback Disney tv shows and movies all day & night.",
  },
  {
    idea: "Apple music should warn you if you try to add the same song to a playlist",
  },
  {
    idea: "Thrift shop for apps. A place where you can buy vintage apps for next to nothing.",
  },
  { idea: "Unsend option for WhatsApp." },
  { idea: "24-hour movie theatre." },
  {
    idea: "VIP for iMessage. Get notifications from just one, or a couple of people.",
  },
  { idea: "Fidget Spinner with an odometer built in." },
  {
    idea: "An app for the perfect selfie: Algorithm that detects the perfect lighting, frame etc and takes a photo for you. It will then apply the perfect filter to compliment your features.",
  },
  {
    idea: "Buddy app. Tinder for finding a buddy. Choose what type of buddy you’re looking for. Buddy for drinking, a buddy for fishing, a buddy for going to concerts etc.",
  },
  {
    idea: "An app where you would play a riff and it will tell you if it’s already a song.",
  },
  {
    idea: "Autocomplete while typing for PCs. It helps on our phones. Why not build it into operating systems?",
  },
  {
    idea: "Automatic two-factor identification on password reset emails.",
  },
  {
    idea: "Walking or running app where the podcast only plays if you’re moving. If you want to finish that podcast you need to put the extra work in.",
  },
  {
    idea: "Netflix should have an option where you can track your friends to see what they watch.",
  },
  {
    idea: "An app where you can see a map of all the McDonald drive thru and see how busy they are. Also, an option to pre order and a separate lane for pick up only.",
  },
  {
    idea: "An app where you could point at a restaurant and it would tell you average Yelp rating.",
  },
  {
    idea: "Web Browsers should support tab hierarchies or tab groups.",
  },
  {
    idea: "An app where I could message my fridge asking what’s inside it and it would reply back.",
  },
  {
    idea: "A way where I could make a playlist with songs from Sound Cloud, Apple Music, and Spinrilla.",
  },
  {
    idea: "An app called Siri-Mom, where new parents can ask random questions.",
  },
  {
    idea: "Shazam for movies, so I could find out what I was watching without looking for the remote.",
  },
  {
    idea: "Extension that automatically delays my twitter post until it knows when the best time to post.",
  },
  {
    idea: "An app where friends pool in cash before an event so everything can be paid fairly i.e taxi fare.",
  },
  { idea: "Timehop for Snapchat stories." },
  { idea: "Takeaway pub that delivered Sunday dinners." },
  {
    idea: "An AI Assistant health app that creates your diet menu from scratch based on disease, blood sugar, blood pressure, weight, symptoms, etc",
  },
  {
    idea: "A commercial toilet paper holder that sends a message to the cleaner/ janitor when its running low.",
  },
  {
    idea: "A fashion app that suggests you different outfits according to your personality, or preferred celebrity, or for a specific occasion that you are looking for, all based on current fashion trends.",
  },
  {
    idea: "A safer way to post photos of your kids online. Any photos you post on Facebook of your kids are all hidden behind a security wall. The security password is something related to you that only your close friends and family would know, i.e where did I go to school?",
  },
  {
    idea: "Dental assistants should actually watch clients brush and floss. Then they can correct bad techniques.",
  },
  { idea: "The ability to search for text within YouTube videos." },
  {
    idea: "A mattress with built in sensors that checks your health thoroughly during the night and notifies you in case there is any issue.",
  },
  {
    idea: "AR furniture construction tutorials to make home assembly easier to follow.",
  },
  {
    idea: "Amazon Alexa and Google Home skills creation templates for non-programmers",
  },
  {
    idea: "A toothbrush that tells you the health of the bristles and when you need to change them with the push of a button.",
  },
  {
    idea: "Competitive photography shows like MasterChef, but for photographers instead of chefs.",
  },
  {
    idea: "Tinder for couples. Find a couple to go on a date with based on interests etc.",
  },
  {
    idea: "A work app that your fellow employees can vote where to go eat so you don’t waste your lunch deciding on where to go eat.",
  },
  {
    idea: "An app where if a person harasses someone online that message/comment is sent to their friends & family.",
  },
  { idea: "An app where you can rate the music at a bar." },
  {
    idea: "When calling friends who have 3 different phone numbers, have an option to call all of their numbers at the same time.",
  },
  {
    idea: "Connect your house central heating with the weather forecast to start heating in advance before it gets cold.",
  },
  {
    idea: "Monthly mystery parcels that will teach you how to cook a totally foreign dish!",
  },
  {
    idea: "An app for traveling moms that maps the nearest public bathrooms with a changing table and private spaces",
  },
  {
    idea: "An app that creates a life-like avatar of you, based on photos and measurements, which can virtually try on clothes while shopping online",
  },
  {
    idea: "Location of pay and display machines should be more obvious.",
  },
  {
    idea: "A website to help people with depression. The site will have tips and advice on how to cope with the illness from other sufferers.",
  },
  {
    idea: "Blood donor app where you register with your blood type and get notifications whenever donations are needed.",
  },
  {
    idea: "An app like yelp except it tells you where that amazing smell is coming from as ur walking down a street in a strange city",
  },
  {
    idea: "MusicGram. An app like Instagram where I can post music and write little captions underneath, where you can also share and send music.",
  },
  {
    idea: "An app connecting houses to housemates with a swipe to match.",
  },
  {
    idea: "Drive through market place where busy people can buy stuff like meat and poultry, vegetables and goods while just being in your car.",
  },
  {
    idea: "A CRM but for friendship that makes it easier to keep in touch with the people you care about the most.",
  },
  {
    idea: "Personal Project Management Services for overwhelming situations, (death of a loved one, etc.)",
  },
  {
    idea: "Coffee shop where you can watch the football and chill with your mates.",
  },
  {
    idea: "When you flush your toilet a shield should pop up to protect you from any spray.",
  },
  {
    idea: "An AI powered trash can for your home that will recognise what you trash and will automate the online ordering replacement",
  },
  { idea: "Soap that smells like coffee" },
  {
    idea: "A freelance marketplace that connects purpose-driven professionals to nonprofits in need of services like marketing, fundraising, web design/development, IT, and PR.",
  },
  { idea: "Coffee shop & library hybrid." },
  {
    idea: "Censored speedboat motors that if in 5 feet of an object (person or marine mammals) it automatically shuts off.",
  },
  {
    idea: "An app that keeps you posted on air quality where you’re at?? Like for us asthmatics?",
  },
  {
    idea: "Pizza delivery services had an app like Uber, so I could see where they are.",
  },
  {
    idea: "An app that tells you what items of food are about to go out of date. Stop food wastage.",
  },
  {
    idea: "Require student loan applicants to show they have anideaof how to pay the loan off, like we currently do with business loans.",
  },
  { idea: "LinkedIn should have polls as a feature" },
  { idea: "FaceTime should have filters like SnapChat" },
  {
    idea: "Railroad crossings should have large timers that countdown how long a train will take to pass.",
  },
  {
    idea: "An app where you can turn off your lights by using the clap emoji.",
  },
  {
    idea: "An anonymous tweet option where only your followers would see the tweet but they had noideawho tweeted it",
  },
  {
    idea: "Movie theaters get an app where people who are going to the restroom/to get food can watch the movie while they’re out.",
  },
  {
    idea: "A site to build your own smartphone, pick screen size, RAM, internal storage, etc.",
  },
  { idea: "Google should implement a “no spoilers” function." },
  {
    idea: "An app where you take a photo of a girls face and it tells you what foundation and shade.",
  },
  {
    idea: "A way to tell retailers you’ve already purchased the item you were checking out online & no longer need the ad reminders.",
  },
  {
    idea: "Amber alert for dogs. An app where your shown lost dogs based on your GPS coordinates.",
  },
  {
    idea: "A platform where you can post an item for sale and it automatically posts to eBay, Amazon, DoneDeal and other seller sites in one go.",
  },
  {
    idea: "An app where you can lend a helping hand to someone who doesn’t understand technology. Share your screen and help them find what they’re looking for.",
  },
  {
    idea: "An app where friends can share their work schedules so you can skip the “I’m at work” texts.",
  },
  {
    idea: "An app like tinder where you make playlists of songs or artists and you can meet people based only on music choices.",
  },
  { idea: "An option to turn off the “tweets liked by others”" },
  { idea: "An easier way to add images to an email on iPhone." },
  {
    idea: "A precursor to self-driving cars, a car that knows the current speed limit and helps you avoid breaking it.",
  },
  {
    idea: "A day to remember scientists who died to further science.",
  },
  {
    idea: "Duck Hunt style gun for computers where you could shoot unwanted web pop ups.",
  },
  {
    idea: "Russian Roulette button on Instagram where you click on the button and it randomly picks a photo from your camera roll.",
  },
  {
    idea: "An app where guys can post pictures of clothes for their girlfriends and ask girl users if they should buy or not.",
  },
  {
    idea: "An app where I could keep track of all the movies I’ve seen and also rate them. Ability to follow my friends and view what they watched and also what they thought of the movies they had seen.",
  },
  {
    idea: "An app where it calculates your alcohol intake and blocks you from texting/ tweeting/ Instagram storying etc.",
  },
  {
    idea: "A “disable like button” on Instagram so I can stalk without having to worry about liking a photo from 2 years ago.",
  },
  {
    idea: "An app that connects you to someone in the world who is interested in learning your language and vice versa.",
  },
  {
    idea: "Electronic doormat, no need to remove your dirty shoes, just step on it and the rest will be taken care of!!",
  },
  {
    idea: "Develop a book/ app to teach kids, teens and young adults about financial literacy, what taxes are, how to invest and to deal with all the problems in between.",
  },
  {
    idea: "An app where you find your doppelgänger and call it Twinder",
  },
  { idea: "A microwave version of a freezer" },
  {
    idea: "Give leftovers from restaurants to farmers, so they can feed animals & grow more good food locally.",
  },
  {
    idea: "Apple Air pods should be turned into dangling earrings when not in use.",
  },
  {
    idea: "An app where you set goals of all kinds and your friends cheer you on.",
  },
  {
    idea: "“Uber Classic”, where someone could come pick you up in a classic or historical car.",
  },
  { idea: "Fingerprint gun safe/lock box." },
  {
    idea: "They should play music in bathrooms so that you can’t hear other people do their business.",
  },
  { idea: "An app where you can save Twitter & Instagram videos." },
  {
    idea: "An app where you can take one video and upload it to all your social media stories.",
  },
  {
    idea: "A feature on SnapChat where you could add a sticker that showed what song you were listening to.",
  },
  {
    idea: "A way to turn down the brightness of my phone just a tad bit more.. it still seems so bright on the lowest setting.",
  },
  {
    idea: "An app that knows every piece of clothing that I own and generates outfits for me.",
  },
  {
    idea: "A way to block automatic messages on Twitter & Instagram",
  },
  {
    idea: "A “notify me when it’s on sale” option next to add to my cart when online shopping.",
  },
  {
    idea: "A way to block women’s grunting/ screaming when watching tennis on the TV.",
  },
  {
    idea: "A drone service designed to give you a hands-free personal night light when walking in darkened locations such as night time walks where street lights are not present.",
  },
  {
    idea: "Netflix should have a category called ‘bloopers’ where you can search bloopers from your favourite shows.",
  },
  {
    idea: "An app where u take a pic of your physical calendar and it imports all the info into your phone calendar.",
  },
  {
    idea: "An app where you scan items to see if they’re recyclable",
  },
  { idea: "Facebook has poke, Twitter should have a bird whistle." },
  {
    idea: "A ring that anyone who was single would wear so people could approach in a bar.",
  },
  { idea: "A nut and bolt for toilet seat that won’t break" },
  { idea: "Tinder but for finding workout partners." },
  {
    idea: "Dating app or program add-on that allows users to find matches using facial feature recognition software based on youridea type of date.",
  },
  {
    idea: "A crowdfunding app for your kid’s college fees. Tell granny to skip the birthday money and text it to the app instead.",
  },
  { idea: "A lost and found platform." },
  {
    idea: "Tattoos where you can set how long you want them to last. I want a tattoo where it fades when I get into my 50s",
  },
  {
    idea: "Donut boxes should come with complimentary hand/face wipe",
  },
  {
    idea: "A website that tells you the hottest issue of any country on a given day.",
  },
  {
    idea: "A music app where you can see playlists of your favourite athletes.",
  },
  {
    idea: "An app that scans a book cover and tells you the ratings/reviews. You can also tell the app some of your favourite authors so the next time you scan the bookshelf it will highlight the books it recommends",
  },
  {
    idea: "Changing magazines with built in tablets on airplanes. Update content/ prices in real time.",
  },
  {
    idea: "Card readers built into tables at restaurants so you can pay quickly and leave without waiting ages",
  },
  {
    idea: "Spring loaded Pringles cans that push them up as you eat them so they are always at the top",
  },
  { idea: "An app that helps backpackers connect with each other." },
  { idea: "A search engine for movie and video game critics." },
  {
    idea: "Tinder for adopting animals. An app where it lists animals in your area that are up for adoption.",
  },
  { idea: "An iced coffee truck." },
  {
    idea: "A feature on Instagram where you could see every photo you commented on",
  },
  {
    idea: "A website where you input all your skills and hobbies it recommends you a job.",
  },
  {
    idea: "A veterinary app to speak directly to a vet for any issue with your animal.",
  },
  {
    idea: "Shopping trolleys should come with a foot pedal to raise the bottom. No more bending down to the bottom of the trolley.",
  },
  {
    idea: "Twitter should have a feature to swipe left to right for multiple images.",
  },
  {
    idea: "Nike and Adidas need an app where you can take a pic of a shoe and they give you the model name",
  },
  {
    idea: "An app that changed your search history to interesting news articles if your laptop is stolen.",
  },
  {
    idea: "A tab on people’s Twitter profiles so that you could see only the tweets they personally tweeted",
  },
  {
    idea: "An app that lets you know when and where every happy hour in your city is happening",
  },
  { idea: "Ability to ‘like’ peoples private messages on Twitter." },
  {
    idea: "An app where you can have digital copies of your passport and license that counts as valid.",
  },
  {
    idea: "An app where you can create a shopping list which also includes pictures.",
  },
  {
    idea: "Chrome extension to block any mention of potential tv/ movie spoilers.",
  },
  {
    idea: "A charity to fund a mobile clinic that goes around every weekend helping homeless people’s pets for free. Checks their body condition, offer vaccinations, booster shots etc",
  },
  {
    idea: "Every car owner manuals should come with a downloadable app for your phone.",
  },
  { idea: "Night mode feature on Snapchat" },
  {
    idea: "A platform for writers to collaborate on movie scripts, songs, articles plays etc. Real-time updates, revisions, and contributions.",
  },
  { idea: "Dribbble needs to add category filters." },
  {
    idea: "Create surfboard fins out of recycled plastic bottles and donate some profits to ocean charities.",
  },
  {
    idea: "AppleWatch should have a feature where it would pulse faster or slower depending on if you’re closer or farther from the phone.",
  },
  {
    idea: "A Snapchat feature where the sender gets a notification on how fast you skipped passed their snap.",
  },
  { idea: "A like button for when someone blocks you." },
  { idea: "A drive thru Wok Stop, fresh and healthy fast food!" },
  {
    idea: "An app that tells me where the nearest water fountain is.",
  },
  {
    idea: "An app where I can pick a movie and they deliver it with some popcorn and sweets.",
  },
  { idea: "Two-person Bluetooth Headphones." },
  {
    idea: "Websites donate to charity in exchange for social media shares.",
  },
  {
    idea: "A bracelet I could wear that would tell Netflix when I fall asleep so I don’t miss any episodes.",
  },
  {
    idea: "An augmented reality app that shows you where (exactly) on the wall to drill the hole.",
  },
  {
    idea: "An app where you find random people to play board games with.",
  },
  {
    idea: "Blacklist feature on Twitter & Facebook. Enter in keywords such as ‘Donald Trump, Bieber, Babies…’ and anything related to that won’t show on your feed.",
  },
  {
    idea: "A ‘recently deleted messages’ folder in iMessages/ WhatsApp",
  },
  {
    idea: "An app that young entrepreneurs can go on and talk about business while getting each other’s help & feedback.",
  },
  {
    idea: "IP tracking with notifications for content creators. DMCA takedowns, email templates etc.",
  },
  {
    idea: "An app that’s capable of scanning fur and be able to tell if it is real or not.",
  },
  {
    idea: "Healthy moms healthy babies. Support and guidance to pregnant women to help them physically and mentally prepare for motherhood.",
  },
  {
    idea: "Tinder for creatives. Find local designers/artists for the work you need to be done based off of proximity/category. View profiles/portfolios & swipe to contact.",
  },
  {
    idea: "A platform for landowners who want to rent out their land instead of their home for outdoor family reunions, seminars, corporate functions, weddings, camping etc.",
  },
  {
    idea: "Yelp for Dogs. Find dog-friendly places and services (cafes, dog parks, grooming etc.),",
  },
  {
    idea: "Go Compare for wedding planning. Find the cheapest photographer, wedding cake maker etc in your area.",
  },
  {
    idea: "A central repository for the world’s unpublished media. Books, music, art, scripts, inventions, even business plans… share it, hype it, make it happen…",
  },
  {
    idea: "Uber for photographers. On demand marketplace for photographers.",
  },
  {
    idea: "An app where you can upload a photo of a spider and it tells you if it’s poisonous or not.",
  },
  {
    idea: "Airlines should partner with Netflix and offer the entire international catalog.",
  },
  {
    idea: "an app where you type in the name of a food and it tells you whether or not it’s safe for dogs.",
  },
  {
    idea: "An app where users contribute to a searchable database of public restroom door codes.",
  },
  {
    idea: "A way to save tweets on Twitter like I can save links on Facebook",
  },
  { idea: "Spray tan with sunscreen added." },
  {
    idea: "A button on Instagram to delete all messages at once or read all messages.",
  },
  {
    idea: "LinkedIn comments should be ranked in order of how many likes they received.",
  },
  {
    idea: "An app where you can scan cosmetics and it will tell you whether or not it is tested on animals or not.",
  },
  {
    idea: "An app where you can describe the kind of mood you’re in and it suggests a good movie to watch based off that",
  },
  { idea: "A “view later” option for tweets with links or videos." },
  {
    idea: "An app where you can input “sold out” items from any retailer and get an alert if they come back in stock",
  },
  {
    idea: "An audiobook app where it senses when I fall asleep and automatically pauses",
  },
  {
    idea: "An app where it will take a picture of you and draw you as a Disney character",
  },
  {
    idea: "An app where you stream live footage of a coffee shop to see how crowded it is before deciding if you should go.",
  },
  {
    idea: "Concept for a tv show about Batman that air at the same time, with the same story, but one is from Batman’s perspective, and the other is from Jokers perspective.",
  },
  {
    idea: "A way to take a picture of a business card with an iPhone and it automatically adds it as a contact.",
  },
  {
    idea: "A “go to beginning of conversation” button on the WhatsApp",
  },
  {
    idea: "An app where your washing/drying machine tells you when it’s done so you don’t have to check it all the time",
  },
  {
    idea: "Twitter should have a feature where it would recommend people to tag based on what you’re tweeting about.",
  },
  { idea: "A button on snap that said “Mark all stories as read”" },
  {
    idea: "Fake tattoos for kids to wear but the only way they stick is if they hydrate their skin. Sneaky way to get them to drink more water.",
  },
  {
    idea: "If someone uploads a newer version of a video on YouTube, YouTube should have a “there is a newer video available” link.",
  },
  {
    idea: "An app where a person without a right foot and a person without a left foot can split the cost of a single pair of shoes.",
  },
  { idea: "A website where you can rate hotel showers" },
  { idea: "Mario Kart game for the iPhone" },
  {
    idea: "Drive-thru should allow you to save your order so then they could have 2 lanes. One for people who just scan their credit card and it automatically knows their last order and then the people who don’t know what they want.",
  },
  {
    idea: "Option on Netflix to share a tv/ movie with your friend who is also on Netflix. Can have a Recommended by your friend section.",
  },
  { idea: "Fast lane for walking." },
  { idea: "Option to fast forward and rewind Instagram videos." },
  {
    idea: "An option to filter out clean versions of songs/albums on streaming sites.",
  },
  {
    idea: "iPhone alarm should allow you to type in the time instead of scrolling.",
  },
  {
    idea: "A fridge that has a sensor that would automatically cut off the flow when the glass is full!",
  },
  {
    idea: "Politicians should create and sign a contract between them and the public about what they will and will not do. If they break the contract then kick them out of office.",
  },
  {
    idea: "An app where people/bookworms can find & exchange books any & everywhere for free/cheap.",
  },
  {
    idea: "An app like Tinder where, instead of hookups, you find people to get ice cream with",
  },
  {
    idea: "Netflix should have a button so you can thumbs up your favourite parts of shows",
  },
  {
    idea: "Option to browse Netflix by actor/ actress. See a list of all the films of your favourite actor/ actress",
  },
  {
    idea: "An app where creatives can complain about their clients anonymously",
  },
  {
    idea: "An app to tell you if you left the tap running. Synced up to your home alarm.",
  },
  { idea: "Apple EarPods that double up as a USB." },
  {
    idea: "Cereal Milk Flavoured Milk. A variety of milk flavoured with your favourite cereal.",
  },
  {
    idea: "When you set your alarm to go asleep your phone should also turn itself on silent/ airplane mode and then when you turn your alarm off it should also turn silent/ airplane mode off.",
  },
  {
    idea: "Self-cleaning hairbrush, a hairbrush that sucks hair from the brush into its handle for easy removal.",
  },
  { idea: "Kickstarter but for independent video game developers." },
  {
    idea: "An app called fresh finds that tracks and notifies you of where the cheapest organic produce is in your area.Go Compare for clothes shopping",
  },
  {
    idea: "An app that blocks emails/calls from work on certain days so you can enjoy your days off.",
  },
  {
    idea: "Youtube removed videos should provide at least the title, so I could fix my music playlist when a video is removed or automatically suggest the closest match.",
  },
  {
    idea: "A button for when you hang up that makes it sound like your hanging up a phone really hard.",
  },
  {
    idea: "A website where you can upload a design and then they mail you a temporary tattoo version of it so you can wear it for a few days before a lifetime commitment",
  },
  {
    idea: "A duvet that adjusts its thread weight depending on the room temperature.",
  },
  {
    idea: "A playlist feature for Netflix. A feature to add several shows to a playlist and have a button to play a random episode from that list.",
  },
  { idea: "A social media app where all you post is music lyrics." },
  {
    idea: "An app where you can post your Instagram photo variations and strangers help you choose what pic to post.",
  },
  { idea: "A mini washing machine for your whites." },
  {
    idea: "Make special gyms for depressed and anxious people. Prescribe gym cards to people when diagnosed.",
  },
  {
    idea: "An app that tells you where you can find the cheapest/nearest drinks at any time of the day.",
  },
  {
    idea: "iMessage/ WhatsApp should have polls for decision making.",
  },
  {
    idea: "Newsletter subscription website. Search by niche and browse all the popular newsletters to subscribe to.",
  },
  {
    idea: "Phones should have the option to “Add Temporary Contact” for when you’re buying something off Gumtree",
  },
  {
    idea: "Assign different message tones for different WhatsApp groups.",
  },
  {
    idea: "A GPS tracker that is built into cardboard shipping boxes so parcel companies have more accountability for “lost packages.”",
  },
  {
    idea: "Pettr. An app where you just upload your pets and then swipe left or right if you want to pet someone’s pet.",
  },
  { idea: "An app that tells me where the nearest beer garden is." },
  {
    idea: "An app where friends can send you some of their mobile data when you’re running low.",
  },
  {
    idea: "An app where I can scan my old VHS and DVD barcodes and the movie shows up to stream.",
  },
  {
    idea: "Emergency netting that surrounds apartment blocks in case of a fire.",
  },
  {
    idea: "An emergency drone that could carry people from burning high rise buildings.",
  },
  {
    idea: "Apartments should have fire safety levels. So when renting you know that the apartment you’re viewing is hazardous or not.",
  },
  {
    idea: "An option to “follow” someone but don’t send them a notification so they don’t realise you never followed them in the first place.",
  },
  {
    idea: "A shopping cart that adds up your total as you add items. No more being embarrassed at the till.",
  },
  {
    idea: "An app where it scans products and highlights the harmful ingredients.",
  },
  {
    idea: "Loyalty card app. An app where you can just scan your unique barcode within the coffee shop, take away etc. 10 scans and you get a freebie.",
  },
  { idea: "Pedal to raise and lower a toilet bowl." },
  { idea: "Tolf. Golf but with a tennis racket and ball." },
  {
    idea: "Instagram should let you follow a hashtag or a location.",
  },
  {
    idea: "A website where you can search for a song and see what movies/ tv shows that song was featured in.",
  },
  {
    idea: "Startup follow app. An app where you can follow start-ups, watch their daily vlogs, get an insight into what it’s like to research, design and launch an app from scratch.",
  },
  {
    idea: "Phone camera with an adjustable camera lens that you can extend and move around.Kind of like a built-in selfie stick.",
  },
  { idea: "Twitter should let you follow a hashtag or a location." },
  {
    idea: "An app where you record phone calls and it just auto transcribes everything that was said",
  },
  {
    idea: "Twitter should make an app where u tap on a colour on ur icon and it’ll pull up a bunch of headers that match the colour",
  },
  {
    idea: "An AR app where your iPhone overlays the logos of a politician’s sponsors on their outfits.",
  },
  {
    idea: "An app where you can take a picture of your plate and it calculates the calories",
  },
  {
    idea: "Twitter should include Reddit down vote features. So you can have the ability to up vote and down vote tweets.",
  },
  {
    idea: "Socks that generate electricity every time you take a step inside your house.",
  },
  {
    idea: "Make the ground & curbs outside pubs out of rubber mats.",
  },
  {
    idea: "An app where you request people in your area who show up and accompany you on a walk.",
  },
  {
    idea: "An app for Twitter/ Facebook/ Instagram where every time I want to upload a post, I have to do a session of Duolingo first.",
  },
  {
    idea: "An app called “It’s App To You”. An app for indecisive people (where should I eat, what should I watch, etc.)",
  },
  {
    idea: "A meme search engine where you could describe a reaction picture you saw and it would pull it up for you",
  },
  {
    idea: "Night football, glow in the dark tees/ shorts/ runners/ football/Nets and pitch markings.",
  },
  {
    idea: "Pay it forward app. A bot to scroll and find out all the posts on your Facebook feed with no likes and then like them.",
  },
  {
    idea: "A pill you could take to get drunk so you didn’t have to drink all the calories and waste your money.",
  },
  { idea: "Krispy Kreme should open up a shop in Dublin" },
  {
    idea: "A site where you can input classical work and it will tell you where you can find orchestras playing it soon.",
  },
  {
    idea: "Instagram need to sort out the stacked tagged users UI. If there is a tag behind a tag then your not able to click it…",
  },
  {
    idea: "An app where you can listen to what athletes say on the court/field",
  },
  {
    idea: "A way to click on a tweet and read all the quote tweets of it.",
  },
  { idea: "24hr pizza delivery service." },
  {
    idea: "Simon Cowell alarm clock app. An alarm clock where Simon Cowell insults you until you get up.",
  },
  {
    idea: "Twitter should auto suggest hashtags based on what you’re tweeting about.",
  },
  {
    idea: "Elevators should know when it’s full so it doesn’t make unnecessary stops at other floors.",
  },
  {
    idea: "An Online marketplace where you can connect with people who can offer mate rates and staff discounts for a small listing fee.",
  },
  {
    idea: "A second car horn specifically for when people don’t use their indicators.",
  },
  {
    idea: "An app where people can view/rank where the cleanest public bathrooms are around them.",
  },
  {
    idea: "Website to show you where your local neighbourhood watch scheme? is.",
  },
  {
    idea: "An app where u secretly send pics of your date or men who approach u etc, just in case u go missing?",
  },
  {
    idea: "An ebook where you read entire novels in Star Wars opening text crawl format.",
  },
  {
    idea: "An app where you can combine SoundCloud, YouTube & Spotify playlists.",
  },
  { idea: "Deliveroo for Pick ’n’ Mix." },
  {
    idea: "An outdoor sports/running app, on which you can point the camera to another and see their pace, distance etc for their current run",
  },
  {
    idea: "There should be a “show me posts since I was online last” option for browsing Facebook.",
  },
  {
    idea: "Cookie pizza delivery service. The cookies come in small/ medium/ large and you can get different toppings. Same concept as pizzas but with cookies.",
  },
  {
    idea: "Youtube creator awards. YouTube give awards to their biggest influencers. Facebook, Twitter, and Instagram should start following suit.",
  },
  {
    idea: "An app like Tinder where you can find people in the Deaf community and socialise.",
  },
  { idea: "iPhone should include Gaeilge as a keyboard option" },
  {
    idea: "An app where it notifies you throughout the day not to eat crap and when to cook",
  },
  {
    idea: "Facebook should have a selection of gifs to choose from.",
  },
  { idea: "24hr movie theatres in Ireland" },
  {
    idea: "Mobiles with front and back displays. The generic screen on the front and a kindle screen on the back, for reading ebooks.",
  },
  { idea: "A bed that vibrates when it’s time to wake up." },
  {
    idea: "StartupBox. GoggleBox version of people viewing new startup websites.",
  },
  { idea: "Autocorrect swear words into funny alternatives." },
  { idea: "Ikea food should deliver." },
  { idea: "An app to meet up with Gaeilgeoirs in your area." },
  { idea: "Tag people in your snapchats" },
  {
    idea: "An app where all your friends put in their location and it tells you what’s a close fun place for everyone to meet at",
  },
  {
    idea: "A browser extension that tells you if a link is dead before you click on it",
  },
  { idea: "An easier way to add iMessage stickers." },
  { idea: "LinkedIn should allow you to upload videos." },
  {
    idea: "A subscription service where you buyidea. For a dollar or month, you get sent 10idea every month.",
  },
  {
    idea: "A search engine that finds products sold by shops in your area.",
  },
  {
    idea: "Every takeaway/ coffee shop etc should have two lines for people who already know what they want and the undecideds.",
  },
  {
    idea: "Hologram fitness instructor. Get to see every exercise from a 360-degree view.",
  },
  {
    idea: "Netflix feature to spread a season over 1 episode a week. Rather than binging on all episodes in 2 days why not savour them over the course of 10–12 weeks, depending on how many episodes there are.",
  },
  {
    idea: "An app where you rate other drivers, and if their ratings get too low their license is revoked.",
  },
  {
    idea: "An app where you order your groceries and set a pickup time and they go get all your groceries and bring it out to your car.",
  },
  {
    idea: "A way to communicate with a coffee shop when you’re on a train, so at the next stop they bring you a coffee on board for you.",
  },
  {
    idea: "An app where you can pick a conversation topic, and it’ll list the nearest person who would meet up to chat about it.",
  },
  {
    idea: "Sponsor a child digital bracelet. Track anonymously a child that you sponsor in third world country. Track their health, education etc. Actually, see the benefit of your donations.",
  },
  {
    idea: "A news network that focuses on the good things happening around the world.",
  },
  { idea: "Flavoured whipped cream." },
  {
    idea: "A foot pedal on the side of the toilet that you can press with your foot to open and close",
  },
  { idea: "An e-reader that is waterproof & solar-powered." },
  {
    idea: "An app where you can take a picture of furniture you see in real life, upload it and it tells you exactly where to buy it?",
  },
  {
    idea: "An app where you take a picture of a spider or a snake and it tells you what it is and if it’s poisonous.",
  },
  {
    idea: "Colour coded emails dependant on how important they are.",
  },
  {
    idea: "Tinder for projects. An app where it brings people that are close to work on projects together.",
  },
  {
    idea: "A Dating app for gamers. Get matched with users who like the same games. If matched then you plan an online game together and chat live either with audio or text.",
  },
  { idea: "Temporarily injured parking spots." },
  {
    idea: "D.E.I.S schools with left over food should donate it to homeless charities at 3pm every day in order to avoid the huge waste that occurs in schools all over the country.",
  },
  {
    idea: "A pedal on each side of the toilet that you can press with your foot. One to raise up the seat and one to lower it.",
  },
  {
    idea: "iPhone needs to have an app where the screen is a scale.",
  },
  {
    idea: "An app where it crash my phone whenever i spend too much time here and not studying",
  },
  {
    idea: "Auto translate all words on LinkedIn posts to your chosen language.",
  },
  {
    idea: "Chrome extension to replace the Words ‘Donald Trump’ With ‘GobShite’",
  },
  {
    idea: "Snapchat should have a feature to preview peoples snaps. Holding down the snap should load a quick 6-second preview.",
  },
  {
    idea: "A creep mode on Instagram that made it impossible for you to accidentally like any pictures by accident.",
  },
  {
    idea: "Facebook should scan uploading photos for missing children using facial recognition algorithms.",
  },
  {
    idea: "All plane rides should come with complimentary sweets for take off and landing.",
  },
  {
    idea: "A car that is able to detect if the car is overheating and something is moving or sitting inside the car and if the temperature reaches some critical level, then the car would kick on the air con, to keep the car at a sensible temperature or honk the horn to get attention.",
  },
  {
    idea: "Babysitting service in the cinema so people won’t take their young kids to rated R movies.",
  },
  {
    idea: "An app where you can downgrade a social media app to the version you liked the most.",
  },
  {
    idea: "An app where you can share 6-second comedic videos that loop.",
  },
  {
    idea: "An inter-car communication service so that I can tell the person at the stoplight that it turned green.",
  },
  {
    idea: "A website that tells you where you should move to and live based off of your preferences.",
  },
  {
    idea: "WhatsApp option to be able to accept a group invitation request rather than being added automatically.",
  },
  {
    idea: "A toilet that measures your wee & poo to determine your dietary deficiencies.",
  },
  {
    idea: "A website where users could upload raw footage they shot and editors could download and edit it into movies.",
  },
  {
    idea: "An app that takes my grocery list and tells me where to shop to save money?",
  },
  {
    idea: "An app where when you don’t remember lyrics or the name you can describe the storyline of a song and then it pops up",
  },
  {
    idea: "An app that shows me where the nearest vending machine is",
  },
  {
    idea: "An app where I can hire a person with my exact measurements to go shoe/ clothes shopping for me.",
  },
  {
    idea: "Shazam for birds. An app where you record a bird call and it’ll tell you what bird it is.",
  },
  {
    idea: "Suncream that changes colour when the protection wears off",
  },
  {
    idea: "WhatsApp that allows you to login so you can use your account on other peoples phones.",
  },
  {
    idea: "Website where you can view all online design competitions",
  },
  { idea: "An option to sort tweets by the number of comments" },
  {
    idea: "Kindle should let you select any outside cover so you can choose what people think you are reading.",
  },
  {
    idea: "Microwave that always makes sure the handle is facing you.",
  },
  {
    idea: "A charity bin where you can leave unwanted clothes, toys, books etc. The bin would be picked up on a monthly basis",
  },
  {
    idea: "Get rid of microwaves that still beep after you open them",
  },
  {
    idea: "An app for the YouTube community. Where vloggers can find people to collaborate with.",
  },
  {
    idea: "An app where you can show ur ID on your phone on a night out",
  },
  {
    idea: "An app where you can order condoms through your phone to be delivered",
  },
  {
    idea: "An app where poor people submit their wishes and the wealthy grant them when they want to feel good about themselves",
  },
  {
    idea: "An app where you can check how busy your library is or if there are empty tables available.",
  },
  {
    idea: "A reality show following a start-up from the very beginning, it’s important for people to see what REALLY happens in start-ups. It’s not all nerf guns and ping pong.",
  },
  {
    idea: "A feature that shows all the tweets I’ve deleted over the years.",
  },
  {
    idea: "A “cat mode” for your computer where all buttons would just temporarily shut off while they walk across the keyboard.",
  },
  {
    idea: "A filter on YouTube for you to not see Reaction videos after each search.",
  },
  { idea: "Dry shampoo for your body" },
  { idea: "Bring back Vine." },
  { idea: "Drop the mic emoji" },
  {
    idea: "A washing machine that dries your clothes after washing them.",
  },
  {
    idea: "Coffee mug with a ‘do not disturb’ door hanger as the handle.",
  },
  {
    idea: "Drone ball collector. A drone built to retrieve footballs, golf balls, tennis balls etc.",
  },
  {
    idea: "Disposable protein shakers, buy from a vending machine, fill with water and then bin when finished. On the go protein.",
  },
  { idea: "Screen sharing app for your phone." },
  { idea: "An app where you can check how busy any ATM is." },
  {
    idea: "An app where you can check whether an ATM is out of service or not.",
  },
  {
    idea: "A mug that automatically whisks your tea/ coffee with the click of a button, no spoon needed.",
  },
  {
    idea: "Credit app. Drag a photo that you want to use on your website into credit app and it will find the original owner. You can then email them to ask if you could use their image.",
  },
  {
    idea: "Ban all sweet vending machines from gyms (yes this does exist)",
  },
  {
    idea: "Shops should email a copy of all your purchase receipts to your credit card company so you can track them online.",
  },
  {
    idea: "A way to return all spam post you’ve received in the Mail, to the sending company, preferably at the sender’s expense.",
  },
  { idea: "Declutter service." },
  { idea: "A dating app that only allows five-word messages" },
  {
    idea: "A vicious dog barking house alarm, imagine a burglar breaking into your home and hearing the sounds of an angry dog barking starting up. He wouldn’t be hanging around.",
  },
  {
    idea: "Polaroid app. Photos don’t show til 10 minutes later. The allure of not knowing what you look like til the photo goes live. Shaking your phone speeds up the process of developing the photo.",
  },
  { idea: "Teach kids that failure is ok" },
  {
    idea: "QR jobs that you can print and put on your shop window. Job seekers can scan the QR and get the details on their phone",
  },
  {
    idea: "Guest shoe soles for your house. Soles click onto guests shoes so they don’t bring in the dirt on their shoes.",
  },
  {
    idea: "Milk cartons that turn a different color the older that your milk is getting.",
  },
  {
    idea: "Subscription service that delivers you little single serving boxes of cereal",
  },
  {
    idea: "Protein scooper that sticks to the top of the inside bag, no more digging for the scooper.",
  },
  {
    idea: "A running buggy that tracks your heart rate, distance etc. A buggy with built in FitBit. By grabbing the handlebar the buggy tracks your heart rate. You can also see a leaderboard of other mummies and how well there doing.",
  },
  {
    idea: "An app where you can check how busy a coffee shop is or if there are seats available.",
  },
  { idea: "A bin specifically for glass." },
  { idea: "Option to fast forward and rewind Instagram stories." },
  {
    idea: "Digital house key that tells you whether you locked your house or not. No more second guessing yourself.",
  },
  { idea: "A website that listed all the nearby concerts." },
  { idea: "Option to record WhatsApp calls" },
  { idea: "“Recently Deleted” folder for WhatsApp messages" },
  {
    idea: "Fidget spinner with a small display showing spin count.",
  },
  {
    idea: "End of year Apple Music statistics should show how much money you made each artist",
  },
  {
    idea: "An app where you follow someone on all forms of social media at the same time",
  },
  {
    idea: "An app where you take someone’s photo and it shows you their Instagram",
  },
  {
    idea: "An app where you can list your fav bands and it alerts you when they release new music",
  },
  {
    idea: "Unwanted printer ink. People throw away printers with sometimes ink cartridges that are full. The unwanted ink could be sent to schools, colleges, charities etc",
  },
  { idea: "Jeans with socks sewn in" },
  { idea: "Control all lighting in your house with your iWatch." },
  {
    idea: "Control your children’s phones from your own. Power to lock it when you want or turn it off altogether to get them off to bed.",
  },
  {
    idea: "Swing ball app. Play online swing ball against your mates.",
  },
  { idea: "Find my pen. Pen tracker for your digital pen." },
  {
    idea: "Hairband with a magnetic clasp. Easy to close and open. Stops hair getting caught in generic rubber band",
  },
  {
    idea: "Underarm sweat deodorant. Make them think you pushed it hard in the gym",
  },
  {
    idea: "Radiators that change color with heat. Easily find the radiators that need to be bled.",
  },
  {
    idea: "Grab a coffee app. A networking app for entrepreneurs, visionaries, creative thinkers etc. Tinder-style matching. Filter based on location, industry, interests etc. Once matched you choose a location to grab a coffee.",
  },
  {
    idea: "Inhaler with an alarm and the only way to turn it off is by taking your inhaler.",
  },
  {
    idea: "Digital inhaler where parents could download and app to track their child’s usage.",
  },
  {
    idea: "An app where you match with people who wanna eat the same kinda food as you for lunch",
  },
  { idea: "A way to see who visits your Facebook profile" },
  {
    idea: "A dating app similar to Tinder but instead of photos you upload a 15-second video introducing yourself.",
  },
  {
    idea: "Snapchat should sell the loading animation as advertising space to brands.",
  },
  { idea: "Uber for motorbikes." },
  {
    idea: "An app to let you know where the closest baby changing tables are",
  },
  { idea: "They have football golf but what about golf bowling." },
  { idea: "iPhones should come with screen protectors." },
  { idea: "A version of Snapchat that doesn’t drain your battery." },
  {
    idea: "An app where anonymous people can help you respond to texts?",
  },
  {
    idea: "iPhone plug that unplugs itself from the socket after your phone is charged",
  },
  {
    idea: "LinkedIn allows you to share an article, photo or an update but why not share a book your reading option. Would love to know what books my connections are reading.",
  },
  { idea: "LinkedIn option to create folders for your messages." },
  { idea: "Surfboards with built in GPS." },
  {
    idea: "An eggshell magnet removes the little bits of eggs from your scrambled egg mixture.",
  },
  { idea: "A “hide post from _ “ option on Instagram." },
  { idea: "”This should be on Facebook” report button on LinkedIn" },
  {
    idea: "A Chrome extension for Netflix that links you to the social accounts from the tv show that you’re watching.",
  },
  {
    idea: "An app where you type in what is going on in your life and a song pops up that relates to everything about your life.",
  },
  {
    idea: "A browser extension that censors any curse words in videos on Youtube, Vimeo etc",
  },
  {
    idea: "Twitter should recommend popular users based on how much engagement they have and not how many followers.",
  },
  {
    idea: "MyFitnessPal for drinking. Tell the app your weight, height etc. You then scan what your drinking and the app will tell you how many units you have left before your going to vomit/ blackout.",
  },
  {
    idea: "Death countdown for shelter animals, it would definitely influence more people to adopt.",
  },
  { idea: "A “hide post from _” option on Facebook." },
  { idea: "Hoodie strings that are earphones." },
  {
    idea: "A meeting app that if someone cancels on you more than 3 times they have to donate to a charity of your choice.",
  },
  {
    idea: "Ideacoffee morning. Once a week a group of like-minded individuals grab a coffee and chat aboutidea that they have thought about during the week. Same concept as creative mornings but foridea",
  },
  {
    idea: "Garage sale app. An app where you can look up all the garage sales going on around you",
  },
  { idea: "A “skip ten seconds forward” button on Netflix" },
  {
    idea: "A browser extension to hide spoilers from all social networks",
  },
  {
    idea: "Golf tee with a retractable string that is attached to your golf bag. Never lose another tee again.",
  },
  {
    idea: "Google maps should have a least stressful route and maybe a Scenic Route option",
  },
  {
    idea: "Kitchen knife holders that, when removing knives, make the metallic unsheathing sound made by swords in movies.",
  },
  {
    idea: "Phone battery charger that has an LCD screen which shows your battery percent. Saves you having to click your phone to check the %",
  },
  { idea: "Facebook should have a night mode." },
  {
    idea: "Browser extension that removes the likes/ comments from everything. It’s amazing how influenced we are to click on something because of how many likes it has.",
  },
  {
    idea: "Scheduler for stories, post one story to Instagram, Facebook and Snapchat with one click.",
  },
  {
    idea: "Every photo/ art/ design etc that is shared on social networks should have mandatory source link attached.",
  },
  {
    idea: "An app for people who are on their own at a gig where they can connect and meet others.",
  },
  {
    idea: "The volume in your car increases when you lower the windows. Counter balances the outside noise.",
  },
  {
    idea: "Positive NewsLetter, a newsletter that only shares positive, uplifting news.",
  },
  {
    idea: "Interactive art. A digital painting where you can move the items around. Imagine a digital painting of a bowl of fruit that you could move the items around.",
  },
  { idea: "A welcome mat that also acts as a weighing scales." },
  {
    idea: "Tinder-like app for serious musicians who want to be in a band.",
  },
  {
    idea: "A fridge as your browser homepage where you can add photos, shopping lists, to-do lists, funky magnets etc.",
  },
  {
    idea: "Elon Musk should release an aftershave called ‘Elon’s Musk’",
  },
  {
    idea: "Dublin Bus realtime information should also show if the bus is full or not.",
  },
  {
    idea: "Travel tracker app. An app that shows you where you’ve been, how much you spent in different countries amongst other features.An app that locates where people are giving out free samples.",
  },
  {
    idea: "An app where you pay someone to go and buy you snacks and deliver them.",
  },
  { idea: "An option to leave audio recordings on your photos." },
  { idea: "A spitting water out emoji." },
  { idea: "An app that told me how busy a supermarket is." },
  { idea: "“Undo” button on the keyboard." },
  {
    idea: "Automatically share contacts when you place your phone on top of another phone.",
  },
  {
    idea: "Block someone across all social networks with one click.",
  },
  {
    idea: "QR codes on your shopping receipt so you can reorder online.",
  },
  {
    idea: "A dating website where you post your most recently played songs on Spotify or Apple Music.",
  },
  {
    idea: "An app where you can paste a list of ingredients and it points out anything potentially not vegan.",
  },
  { idea: "An option to schedule text messages." },
  {
    idea: "Family chore app. Designate chores for your kids straight to their phone.",
  },
  { idea: "FaceTime voicemail." },
  {
    idea: "Digital Stress ball that can track how hard you squeezed the ball. Sync to your phone so you can track how often you get stressed. Also, see how stressed your friends are who also have the ball.",
  },
  {
    idea: "Youtube video preview on hover (why isn’t this a thing?)",
  },
  {
    idea: "A website telling you where taxpayers money is spent, including politicians’ expenses etc",
  },
  { idea: "The option to save and like Instagram stories" },
  {
    idea: "Option to add sound effects to your Facebook posts (When you hover over the comment). Effects you can add range from laughter, crying, screaming etc.",
  },
  {
    idea: "Start over button on Facebook. Delete all your content, friends, comments, likes etc and start fresh.",
  },
  {
    idea: "A chatbot for families to find resources that can help them understand the illness of a loved one (Cancer, AIDS/HIV, Diabetes etc) and how to best support. Get insights from others with similar illnesses and what helped them get through it etc.",
  },
  { idea: "Facebook should allow voice comments." },
  {
    idea: "An app where you can schedule to take someone’s parking spot.",
  },
  { idea: "An app to show you where the clampers are in the city!" },
  {
    idea: "A website where it will give your total followers over all social networks in real time.",
  },
  {
    idea: "An app where two chatting parties can listening to same music while chatting.",
  },
  { idea: "A like button for when people block you." },
  { idea: "Reset content button for your Instagram explore page." },
  {
    idea: "Holy communion dispenser at mass, so people don’t have to eat from people’s hands.",
  },
  {
    idea: "Stairs should be split down the middle with a line. One side for walking down and the other for walking up. 9 times out of 10 there’s room for both parties",
  },
  {
    idea: "Smartphones should record in landscape when held vertically.",
  },
  {
    idea: "All sweet vending machines in gyms should have an ‘out of order’ sign on them",
  },
  {
    idea: "Browsers should open up a new tab when you click twice on a link.",
  },
  { idea: "An app for how and where to get quality avocados." },
  { idea: "Back scratching chair." },
  {
    idea: "On April 1st, the Shazam app identifies all songs as Rick Astley ‘never gonna give you up’",
  },
  {
    idea: "Skype analytics for companies. Track how active your employees are during your meetings, also view word clouds, transcripts etc.",
  },
  {
    idea: "An app where you can upload multiple email subject titles and other users rate them from best to worst, so you know which one to use.",
  },
  {
    idea: "Designer tools website. Find out what tools your favourite designer uses to get the job done.",
  },
  { idea: "Self-cleaning house windows." },
  {
    idea: "An app where you can set your phone to permit you on social media only certain times of the day?",
  },
  {
    idea: "An app that will track all your automatically paid bills like Apple Music, utilities, cable, etc. It will notify you when money gets taken from your account and the option to cancel.",
  },
  {
    idea: "Genetically modify grass so it only grows to the perfect size.",
  },
  {
    idea: "Allow Doctors to fly for free provided that they would be willing to help in a medical emergency.",
  },
  { idea: "Clothes should have QR codes for reorder" },
  { idea: "Search button for your likes on SoundCloud" },
  { idea: "MTV should drop the ‘M’ and just call themselves ‘TV’" },
  { idea: "24hr drive thru for healthy juices/ shakes." },
  {
    idea: "Walking stick for visually impaired that is synced to traffic lights. So when the walking stick makes contact with the traffic light pole it automatically presses the button for the green man.",
  },
  {
    idea: "Walking stick for visually impaired with built in google maps. The visually impaired person would tell the walking aid where it needs to go. Wireless earphone pod (Use in one ear) would guide the person to their destination.",
  },
  {
    idea: "Youtube thumbnails should show how many likes/ dislikes a video has.",
  },
  {
    idea: "Online book rental website (subscribe every month, rent up to 3 books).",
  },
  {
    idea: "Social alarm clock app. An app that allows your friends to choose what songs or noises you wake up to.",
  },
  {
    idea: "Soda companies slowly lower the amount of sugar by 30% or 40%.",
  },
  { idea: "VR rental for children’s parties." },
  { idea: "All phones should come with sign language emojis." },
  {
    idea: "An app where u could follow people but instead of tweeting or posting pictures, u only share songs",
  },
  { idea: "Boarding Cards should be the same shape as passports" },
  { idea: "There should be TL;DRs on Terms and Conditions" },
  {
    idea: "Google should make a Star Wars themed Doodle on May 25th 2017 to celebrate the 40th anniversary",
  },
  { idea: "The ability to type in bold or italics in iMessage." },
  { idea: "”Find my headphones” app" },
  {
    idea: "Automatically add a kiss (x) at the end of each message to your partner. Assign your partner in your contacts so your phone knows.",
  },
  {
    idea: "A debate app that matches two total strangers with opposite opinions about a topic they both like.",
  },
  {
    idea: "”Book routes” an app linked with Google Earth, that I can follow the route of a protagonist took in my favourite book.",
  },
  {
    idea: "SnapChat filter that showed what song you’re listening to.",
  },
  {
    idea: "Roulette feature on Netflix where you click on a show & it spits out a random episode for you to watch.",
  },
  {
    idea: "An app that detects when I fall asleep and logs where I left off in whatever I was watching on Netflix.",
  },
  {
    idea: "Let users filter film services like Netflix by rating (G, PG, etc.)",
  },
  {
    idea: "A tattoo website where you upload pictures of your body where you want a tattoo, and then lets you upload your own designs and place it where you want it. You can then print out a template to take to the tattoo artist!",
  },
  {
    idea: "Screenshots automatically delete themselves off your computer after 24 hours, saved to the cloud just incase you need any of them back",
  },
  { idea: "A WhatsApp feature to add emojis to messages." },
  {
    idea: "Rubbish truck with an infrared scanner, that scans green bin for rubbish that’s not recyclable and declines if detected.",
  },
  {
    idea: "If someone tries to break into your house all external handles give out a mild electric shock to deter robbers.",
  },
  {
    idea: "Turn dog pounds into dog petting stores. Charge people €2–3 for admission. The money that they make can pay for staff to feed, walk and care for the dogs until they get housed. It can also create a bond between the customer and the animal while giving the animal some much-needed love and affection.",
  },
  {
    idea: "If someone enters your pin in three times incorrectly then your phone takes a photo of them and emails you.",
  },
  { idea: "Three way FaceTime." },
  {
    idea: "Spotify radio station feature, where I could listen to someone else pick the music. Randomly pick other users with similar music tastes and listen into what they play.",
  },
  {
    idea: "Browser extension that would fact check what you’re typing, and then would automatically add references if what you’re saying is correct",
  },
  { idea: "Disney Land VR for kids." },
  {
    idea: "If you were ever forced to enter your PIN it would be great to have a second PIN on your phone to remove your all data on your phone.",
  },
  {
    idea: "GPS voice navigation for a shopping app. Add your shopping list, plug your headphones in and the app will guide you around the shop in the quickest and most practical way.",
  },
  {
    idea: "Feed App. Similar to other social networks, the more your content is liked (fed) the longer it survives. When users stop feeding your content then it will eventually be deleted (starve).",
  },
  {
    idea: "An app to tell me who has deleted my contact from there phone.",
  },
  {
    idea: "Watching Netflix with my parent’s feature. When you click this feature it will skip any awkward sex scenes.",
  },
  { idea: "An online scheduler for SnapChat" },
  {
    idea: "Plugs that unplug themselves from the socket when your not using them",
  },
  { idea: "Google analytics for all your social networks." },
  {
    idea: "If some ones social account gets reported for trolling a certain amount of times then there should be a puzzle that pops up every time he posts. The more times he gets reported then the harder the puzzle gets.adjustable lunch boxes.",
  },
  { idea: "A lunchbox that shapes to its contents" },
  {
    idea: "A flexible soap that shapes to your body. No more rigid bars of soap.",
  },
  {
    idea: "MyFitnessPal for your mental health. Track your mental health. Chat and motivate other users. See how your pals are feeling etc",
  },
  {
    idea: "A clean my mac for your iPhone.An option on your iPhone to free up storage space with the click of the button.",
  },
  { idea: "Facebook should have polls." },
  {
    idea: "Double tap your iPhone lock screen button to turn on the flashlight.",
  },
  { idea: "Food gift cards for the homeless." },
  {
    idea: "An app to where you get in a car, your phone locks itself and doesn’t let you unlock it until you’re fully parked.",
  },
  {
    idea: "Tinder for phone contacts where you match with people but can’t message and it’s just for validation. Contacts you don’t match get deleted off both parties phones.",
  },
  {
    idea: "Shuffle option for Netflix so if I’ve already seen all the episodes of a show I could just watch random ones.",
  },
  {
    idea: "A privacy button for your phone that will disconnect the mic and camera.",
  },
  { idea: "Night mode on LinkedIn app." },
  { idea: "An Uber for lawn care." },
  {
    idea: "An app that lets you talk to your dogs or tell their emotions by the way they are barking.",
  },
  {
    idea: "An app that deletes your whole digital presence online after you die.",
  },
  { idea: "Toothpaste that compliments orange juice." },
  {
    idea: "MacBook screen that has the same anti-glare screen as a kindle.",
  },
  { idea: "‘Sent with sarcasm’ option for iMessage texts" },
  { idea: "Option to sort Instagram posts in chronological order" },
  {
    idea: "Bless you app. An app where if you sneeze it sends the sneeze emoji to everyone in your contacts so someone can say “bless you”",
  },
  {
    idea: "LinkedIn should remove those automated ‘anniversary’ messages.",
  },
  {
    idea: "Automatic twisting fork for when your eating spaghetti.",
  },
  {
    idea: "Fingerprint activated glass that keeps your glass covered when you’re away from it.",
  },
  {
    idea: "A highlighter that scans text and gives you the definition on an LCD screen",
  },
  {
    idea: "Hanging toilet cleaner that turns your water glow in the dark.",
  },
  {
    idea: "Plant pots that send you a phone notification telling you that they need water.",
  },
  { idea: "Taxis that allow pets to travel." },
  { idea: "Instagram should have a night mode." },
  { idea: "Yelp for landlords." },
  {
    idea: "Button on my remote that will flick through the channels.",
  },
  {
    idea: "Jacket with built in hook that you can stick to any wall.",
  },
  {
    idea: "An app where I can just watch the group/player I want to see play Golf.",
  },
  {
    idea: "The ability to save photos from Instagram to my iPhone.",
  },
  {
    idea: "Option to remove the annoying laughing track on sitcoms.",
  },
  {
    idea: "I’m watching a Lewis Howes YouTube interview with Tony Robbins and he recommends some books that inspired him. It would be great if there was someway that YouTube pulled all the books he mentioned and where to buy them in a sidebar.",
  },
  {
    idea: "An Instagram feature to block certain locations from showing up on my feed.",
  },
  { idea: "Some surveys should have a “Meh” option." },
  {
    idea: "Set different background wallpapers depending on the time. When I’m with my partner I would like a nice nature photo and when I’m not with my partner I would like a photo of her.",
  },
  {
    idea: "National Be Sound Day. A day where everyone is just sound to each other.",
  },
  {
    idea: "Julius Caesar social network. A social network where if your content gets a certain amount of thumbs down then it gets deleted.",
  },
  {
    idea: "Way to add family members on Social networks but hide your content from them.",
  },
  { idea: "Light switches that glow in the dark." },
  {
    idea: "Tinder for wanderlust. An app where you can meet people on your travels. Connecting people who love to travel.",
  },
  {
    idea: "“Human filter” on Twitter. No brands or tweets with just links.",
  },
  {
    idea: "Clear certain stories on Snapchat without having to watch them.",
  },
  { idea: "An app for finding tennis partners." },
  {
    idea: "A bath that when it reaches a certain level it turns off and sends you a notification on your phone.",
  },
  { idea: "Create a sarcasm font." },
  {
    idea: "GoFundMe for artists. a funding website where artists can showcase their work and try get funding to open their own show.",
  },
  {
    idea: "The Waterford Whisperer should post a serious article every April 1st",
  },
  {
    idea: "Blood donation app that notifies you when your blood was used and who it helped.",
  },
  {
    idea: "An app to pay for shopping trolleys. It’s 2017 and I can’t get a trolley without a goddamn €2 coin… come on now.",
  },
  {
    idea: "An app where u can shop on your phone and then pull up to the shop and they load it in your trunk for you.",
  },
  { idea: "Option to word search your iMessages." },
  { idea: "All buses should have hand sanitiser gel" },
  {
    idea: "A travel app that you tell where you need to go and what time. It will then tell you when you should leave depending on how heavy or light the traffic is.",
  },
  {
    idea: "Option to preview a picture on Snapchat without it saying you opened it.",
  },
  {
    idea: "Buses that set peoples music to a certain level and also turned all phones to silent.",
  },
  {
    idea: "Teach secondary school students about mental illness so they know what to do if they have or get one.",
  },
  {
    idea: "Instagram option to turn off automatically adding me to Group Messages.",
  },
  {
    idea: "CV inspiration. Search for anyone’s CV to see how it’s designed and what information it contains.",
  },
  {
    idea: "Messaging app that tells you if the person you’re about to text is driving or not. If they are driving then your are unable to message them.",
  },
  { idea: "Teeth whitening coffee." },
  {
    idea: "A taxi app that tells you what kind of music your taxi man likes to listen to or is currently listening to.",
  },
  { idea: "Option to remove Snapchat articles." },
  { idea: "Tinder for finding study partners." },
  {
    idea: "E-Cigs should come with an app to tell you how much you’ve saved by switching to vape, also information about how much you smoke etc to try encourage you to quit.",
  },
  { idea: "Design a protein coffee" },
  {
    idea: "Double press an elevator button to cancel button pressed.",
  },
  {
    idea: "A button on your iPhone charger that makes your iPhone beep.",
  },
  {
    idea: "A Pen Pal service for old people. They could be matched to people their own age who would have similar interests, and they can send paper mail if that’s what they’re used to.",
  },
  {
    idea: "A display strip across the back window of your car with a light that expands out as the brakes are applied harder.",
  },
  {
    idea: "An option to specify the number of ice cubes from a Fridge ice dispenser.",
  },
  {
    idea: "Your phone notifies you when you have a certain amount of battery life.",
  },
  {
    idea: "Parrot to-do app. An app where you record your daily to-dos by voice and then a Parrot will repeat them to you every time you open the app. Sync it across all devices. You could even have a physical parrot that could sit on your laptop and repeat them every hour or so.",
  },
  {
    idea: "An app where you can point your phone’s camera at an URL on another screen and then have it appear on your phone.",
  },
  {
    idea: "A way to find out your Netflix stats so you could see how much of your life you’ve wasted.",
  },
  {
    idea: "An app that would allow you to plan a vacation/trip and let you know if the weather will be poor during any of the days you are going on vacation.",
  },
  {
    idea: "An app that would know when is the best time to go on screensaver mode based on your previous actions.",
  },
  {
    idea: "An app to warn you if making a purchase would result in your bills not being paid for that month.",
  },
  {
    idea: "A text message sound that changes depending on how long the message is.",
  },
  {
    idea: "Bank give users two pins: one for normal use, the other for pretending you have insufficient funds in case you’re forced to withdraw money.",
  },
  {
    idea: "An app that shows me where charity huggers are so I can avoid them.",
  },
  {
    idea: "An app where you upload a picture of clothing you fancy and it finds where it’s from for you to buy.",
  },
  { idea: "An option to remove Facebook messenger stories." },
  {
    idea: "An app that could tell what song you are listening to via Shazam, and send it to last.fm",
  },
  {
    idea: "Soundcloud should have a “play next” button, or “queue” on each track.",
  },
  {
    idea: "Search inspirational people’s book library. Imagine being able to search people you admire and then view their book library on an app.",
  },
  {
    idea: "Wikipedia-type recipe website where people can sign up and edit recipes of all kinds of dishes.",
  },
  {
    idea: "Make a simple entertaining guide that teaches Americans the metric system.",
  },
  {
    idea: "Chrome extension to hide negative posts on twitter, Facebook etc. An algorithm that would scroll your feed and hide anything with that thinks maybe might be negative.",
  },
  {
    idea: "An app that allowed you to easily link SkyScanner flights with Airbnb to help prioritise trips.",
  },
  {
    idea: "Carbon monoxide detector add-on device for laptop, phone or on a table",
  },
  {
    idea: "Undo option for streaming video sites. Reverse mid-clicks on the progress bar.",
  },
  { idea: "Option to charge your phone in public toilets" },
  {
    idea: "SMAA — Social Media Addicts Anonymous. SMAA is a Twelve Step Fellowship dedicated to helping anyone suffering because of their Social Media Addiction.",
  },
  {
    idea: "Online swear jar. Every time you swear online you will be greeted with a popup asking would you like to donate €0.10 to a charity of your choice",
  },
  { idea: "Sushi delivery service." },
  {
    idea: "Anti-online toutidea Stop people bulk buying tickets to your favourite artists and later selling at a huge increase — why not put in place a questionnaire around the artist. Ask questions that only die-hard fans will know. Once they answer correctly then they get the option to purchase. This way only the true fans will get tickets.",
  },
  {
    idea: "An app where you can type in what gym you go to and all the people who also go there pop up and you can choose your partner.",
  },
  {
    idea: "Uber for Doctors. An app where you can rate doctors after you’ve been treated by them.",
  },
  {
    idea: "Teeth Checker app. An app where a dentist could check your teeth health via a wireless thin small camera via Bluetooth. The dentist would be able to direct you around the inside of your mouth. After reviewing he might recommend getting a clean/ certain teeth checked etc.",
  },
  {
    idea: "Stick on pockets for when you want to be naked but also want to carry your iPhone around the house.",
  },
  {
    idea: "Treat a nurse to a free coffee. A coffee delivery service that will deliver coffees to nurses during the long hours.",
  },
  { idea: "A donut delivery service" },
  {
    idea: "Restart button on your social accounts. Press the button and your Facebook/ Instagram/ twitter etc will delete everything and you just start fresh.",
  },
  {
    idea: "Apple needs an update where you can have youtube as a background app and multitask.",
  },
  {
    idea: "Queue app. An app to let you know how many people are in the line for your favourite takeaway.",
  },
  {
    idea: "Un send option in iMessage. Every iMessage you send to a person you have a 60-second window to delete.",
  },
  { idea: "Tinder for babysitters." },
  {
    idea: "Plagiarise extension. It scans what you’re about to post and if you’re ripping off someone else’s tweet/ Facebook post etc it will delete it.",
  },
  {
    idea: "An app that tracks all of my online orders and shows me where they are all in one convenient place.",
  },
  { idea: "VR tour of Mars." },
  {
    idea: "An office chair that shocks you every 90 mins to get up and walk/ stretch.",
  },
  {
    idea: "Make it mandatory for office workers to not eat their lunch at their desk. Go out and get some air.",
  },
  {
    idea: "Allow companies on LinkedIn to share video stories about their company. It would help potential employees get a great insight into the companies culture.",
  },
  {
    idea: "An app where you type in all the random food items you have left and it brings up recipes you can make with just those ingredients.",
  },
  {
    idea: "Automatic window management, where it automatically hides any app that isn’t part of the last 5 apps being used.",
  },
  {
    idea: "An app where I can make a walking route that spells a word?",
  },
  {
    idea: "PT app, record your exercises at the gym and have a PT review your video and give you feedback on improving form etc",
  },
  {
    idea: "Rain sensor car windows. Windows will roll themselves up when it starts raining.",
  },
  { idea: "Option to record FaceTime calls." },
  { idea: "“Recently Deleted” folder for messages" },
  { idea: "VR tour of AIRBNB houses." },
  {
    idea: "A rubber ring protector for when you’re in the gym lifting weights.",
  },
  {
    idea: "Supplement recommendation. You tell the website what your problems are, you enter “I feel tired” the website would recommend a combination of supplements such as — Zinc & Iron. You can then purchase through the website.",
  },
  {
    idea: "Street Parking App, Find available street parking wherever you are.",
  },
  {
    idea: "Referee VR. Imagine being able to put yourself in the referee’s shoes in a live game.",
  },
  { idea: "Soy sauce should come in squirt bottles." },
  {
    idea: "Synopsis chrome extension. The synopsis extension would summarise anything on a website- Terms of service for example.",
  },
  {
    idea: "Youtube best bits. A youtube clone that condensed all the best bits from a persons video. People always post comments like “scroll to 1:23 for the best bit” so why not automatically edit a video based on the user’s comments.",
  },
  {
    idea: "Credit card that shows your balance with fingerprint touch",
  },
  { idea: "Pet toy that you can control with your iPhone." },
  {
    idea: "A fork that shocks you if it feels you’re eating too quickly.",
  },
  {
    idea: "Anti-drink driveidea Anyone who parks in a bar/ pub car park HAS to put their keys into a locked box. To unlock the box you have to breathe into a breathalyser. If you pass the breathalyser then you get your keys and if you don’t you get the option to ring a taxi.",
  },
  {
    idea: "Office earphones. Next time your colleague is listening to music you can now talk to them without having to wave your hands or shouting. With office earphones, you can simply talk to them through your computer.",
  },
  {
    idea: "iPhone should have ‘car mode’. Car mode turns off all distractions when your driving (Calls, texts etc)",
  },
  {
    idea: "Force drivers to buckle their seat belts. If the seat belt isn’t buckled, the car won’t turn on.",
  },
  {
    idea: "A browser extension that replaces “Emojis” with plaintext.",
  },
  { idea: "Heated handle bars during the cold months." },
  {
    idea: "Tinder but for canceling plans. You only see the other person wants to if they swipe right too.",
  },
  {
    idea: "iScream — An app that tracks the ice cream vans in your area.",
  },
  {
    idea: "“I’m on a diet” app, filter out all the videos and photos of tasty food from your social networks.",
  },
  {
    idea: "Should be a list you can add yourself to that will stop any junk mail, cold callers, religious groups etc.",
  },
  {
    idea: "When you delete an app all your apps that you use everyday stay where they are. I hate when i delete an app and everything moves and I keep clicking on where my other apps used to be.",
  },
  {
    idea: "Magic 8 ball version of Tinder. Shake the ball to reject and press the screen to accept. The ball would vibrate when you were near a match.",
  },
  {
    idea: "Glasses that translate text from one language to another.",
  },
  { idea: "Uno for iMessage games." },
  {
    idea: "Ideamarketplace. Post youridea.Developers, designers, sales and other skilled members view allidea and ask to work on youridea Once your happy with a team you then build theideaas a side project. Each member has equal ownership.",
  },
  {
    idea: "An option on Instagram to filter out NSFW photo. Now when your in public places you can view your feed without the worry of a fitness model showing up.",
  },
  { idea: "Glasses that will highlight dog poo when walking." },
  {
    idea: "A dating website where you put in your favourite foods and get matched with people who like the same foods",
  },
  {
    idea: "An app where you can just rant to some stranger that relates to you, and you don’t feel as if you’re bothering anyone.",
  },
  {
    idea: "An app where your phone can set fake battery life info on an iPad so your kids will close it when you want them to.",
  },
  { idea: "An app where you can boil the kettle from your phone" },
  { idea: "Disable phones in the cinema." },
  {
    idea: "Anyone who is named Patrick gets free transport on St.Patricks Day.",
  },
  {
    idea: "Countdown clock on your mug telling you how long you have left before your tea/ coffee goes cold.",
  },
  {
    idea: "Spend time being left on hold when calling a company? Why not have the option to leave your number and have them ring you back when there free.",
  },
  {
    idea: "A backup ring pull on tins JUST in case the first ring pull breaks off.",
  },
  {
    idea: "A running app that will show you safe routes to run at night.",
  },
  {
    idea: "iPhone app that turns your iPhone into a flashing bicycle light. Comes with bike attachment and ear pods so you can still accept calls.",
  },
  {
    idea: "Airport social app where you can find people who showed up embarrassingly early as well and wanna kill time.",
  },
  { idea: "Delete all messages at once option on LinkedIn." },
  { idea: "24hr drive thru for pizza." },
  {
    idea: "I wish there was a LinkedIn extension that automatically disconnects with anyone pushing clickbait, pyramid schemes or self-praise content",
  },
  { idea: "Forgot my key drone service." },
  {
    idea: "One place to view my Snapchat, Instagram and Facebook chat stories.",
  },
  {
    idea: "Mate status. An app where you can see whats the status of your mate when you’re out. Are they gone to the toilet or have they gone home? Mate status will let you know.",
  },
  { idea: "iPhone message features that allow scheduled messages." },
  { idea: "Auto-scroll feature for iPhone." },
  {
    idea: "USB attachment for your iPhone. Turn your iPhone into a USB to quickly save files",
  },
  {
    idea: "A weather app that tells you what clothes you need to wear instead of the actual weather.",
  },
  { idea: "Onerr.com a cheaper version of fiverr.com" },
  { idea: "Clap two times to put iPhone to sleep feature." },
  {
    idea: "App icon sizes are scaled depending on usage. For example WhatsApp icon is 200% a typical icon size and Stocks app 70% typical icon size. Max size is 200% and minimum is 70%.",
  },
  {
    idea: "A camera app that finds the meaning of words when you hover over them.",
  },
  {
    idea: "An adjustable protein shaker. The size adjusts by how much you fill it.",
  },
  {
    idea: "Email copy marketplace. Find the best copy to use for your email by filtering your niche. Hundreds of templates to choose from.",
  },
  {
    idea: "Social influencer kit, a website which showcases tools from experienced social influencers to help other influencers grow ….”Growth Kit”",
  },
  {
    idea: "Did I leave my lights on app. Syncs up with your car or house. When the app recognises that your away from either you will get a notification if you left a light on.",
  },
  {
    idea: "Block certain people from ringing you. The people who try ring you go straight to voicemail without your phone even ringing.",
  },
  {
    idea: "Shuffle for Instagram, an option to shuffle ALL your Instagram photos with the click of a button OR an option to filter photos by popularity. Show me the photos with the most likes.",
  },
  {
    idea: "Movie review site where all the reviews are done by kids.",
  },
  {
    idea: "An app where your phone locks itself after 10 pm so you don’t get distracted. You can still make and receive calls.",
  },
  {
    idea: "An app that shows me where the cheapest petrol is near me.",
  },
  {
    idea: "Credit Card app that syncs to all your online subscriptions. In one click you can update your card details across all websites rather than individually updating.",
  },
  {
    idea: "An app where you have to guess if Donald Trump quotes are real or fake.",
  },
  { idea: "An app to turn on your heated blankets." },
  {
    idea: "Notification hub, connect all your social accounts and have one place where you can see all your new notifications.",
  },
  {
    idea: "A children’s book about the sock that got lost in the washing machine.",
  },
  {
    idea: "1 on 1 chat app to discuss topics that interest you with another user.",
  },
  {
    idea: "Present — A website where you can show and tell for your presentations.",
  },
  { idea: "Tattoo artist marketplace." },
  {
    idea: "Should I buy this? Put an end to impulsive buying.Next time your about to buy something online a button will pop up on the checkout page “Do you need this” When you click the button you save the details/ cart. The next day you will be given a reminder “Hey do you still want to buy….”",
  },
  {
    idea: "An option to hide LinkedIn messaging from my home feed.",
  },
  {
    idea: "An app where you can check how busy a bar is or if there are seats available.",
  },
  {
    idea: "Bullshit meter, a chrome extension rates how much bullshit every article is.",
  },
  {
    idea: "Name & shame website for people who don’t pick up there dog poo.",
  },
  {
    idea: "Option on Netflix to add your friends so they can recommend shows for you to watch and vice versa",
  },
  {
    idea: "To do list app that donates to charity if you don’t hit your tasks.",
  },
  {
    idea: "An option on Twitter that you could just scroll through random tweeted polls and vote on them.",
  },
  {
    idea: "Earphones that rewind at the push of a button, the same way a Dyson plug does. Never have tangled earplugs again.",
  },
  {
    idea: "4 handled mug, now you don’t have to go looking for the handle.",
  },
  {
    idea: "Chrome extension that blocks anything related to Trump.",
  },
  { idea: "Mute button on Instagram" },
  {
    idea: "Sensor umbrellas. An umbrella that would move according to its surroundings. If you see another umbrella coming towards on you on a tight path then the umbrella would close a certain distance so you could bypass easily.",
  },
  { idea: "Twitter stories." },
  {
    idea: "An app where u get paired up with someone who gets up before you and they let you know how the weather really is outside",
  },
  {
    idea: "A site dedicated to polls, filter polls by interests etc. I love polls.",
  },
  {
    idea: "An option to re-follow someone without alerting them to the fact that you unfollowed them in the first place",
  },
  { idea: "An option to edit your comments on LinkedIn" },
  { idea: "Replay button on Soundcloud" },
  {
    idea: "Lend the visually impaired a helping hand. An app where if a visually impaired person was in trouble it would alert a user who is close by to come and help. Could be as simple as a helping hand across the road.",
  },
  {
    idea: "An easy to open Microwave, why do microwaves require so much force to open?",
  },
  { idea: "Facebook option so save a status as a draft." },
  {
    idea: "Website where I can enter text that gets converted down to a 140 character version that is still understandable",
  },
  {
    idea: "Nonprofit Organisation that fact-checks and can mark influential posts on social media",
  },
  {
    idea: "An option to turn off “Are you still watching?” on Netflix",
  },
  { idea: "Thunderstorm background for my iPhone." },
  { idea: "Marketplace for reviewers." },
  { idea: "Smoke free parks." },
  {
    idea: "A website where you can take a picture of a plant and it gives you care instructions.",
  },
  {
    idea: "An option in your YouTube sub feed which hides all the videos you have already watched.",
  },
  {
    idea: "Obama should have his own Reality show.. “Obama, what he did next”",
  },
  {
    idea: "An app where women could alert other nearby women when a creepy guy was near… It could be called “Creep alert”",
  },
  { idea: "A yo-yo iPhone case." },
  {
    idea: "Coffee cup sleeves with the day’s news printed on them…in bullet points of course.",
  },
  {
    idea: "A digital water bottle where the colour will change depending on how close you are to hitting your daily requirements. Red being 0% and blue being 100%.",
  },
  {
    idea: "Digital awareness bracelets. Charities should release wearable awareness bracelets where you get updates on how your monthly donations are being used.",
  },
  {
    idea: "Golf ball drone. GPS tracked gold balls, never lose your ball again. Did your ball fall in the lake? No problem the drones claw will retrieve your ball effortlessly.",
  },
  {
    idea: "A website that just gives bullet points of “who did what today and why was it good/bad/indifferent”",
  },
  {
    idea: "Facebook graffiti. The ability to leave graffiti on your friend’s walls, the graffiti is tagged by you to stop inappropriate content and lasts up to an hour.",
  },
  { idea: "Adjustable coffee cup lid hole." },
  {
    idea: "A digital toothpick where it is able to tell how healthy your gums are.",
  },
  {
    idea: "Frisbee drone. Now you can play frisbee on your own. Simply throw the frisbee and it will return to your GPS coordinates every time.",
  },
  {
    idea: "An app where you type in where you’re going and the occasion and it tells you what to wear",
  },
  { idea: "An 8 ball app to help decide where you should go eat." },
  { idea: "A website where you could post photos of stray dogs." },
  {
    idea: "Instead of “America’s next top model”, why not have “Americas next top role model” for our children.",
  },
  {
    idea: "An app where it tells you how much sugar is in products. Imagine scanning a can of coke and seeing 20 sugar cubes stacked, you then scan Lucozade and see 25 sugar cubes stacked.",
  },
  {
    idea: "FLYE fit swipe machine that works (Any FLYE fit members will understand)",
  },
  {
    idea: "Wearable hat technology. A hat where people could tell how your feeling by the colour.",
  },
  {
    idea: "A simulator game where you become a famous social influencer.",
  },
  {
    idea: "Flash drive with an e-ink display, so you can tell whats on your drive",
  },
  {
    idea: "A toaster that rotates and ejects the toast horizontally right onto your plate.",
  },
  {
    idea: "An app where men can learn whether or not a woman’s shop has a seat for partners. If no seat then we wait outside.",
  },
  {
    idea: "Low battery mode option to always have on my iPhone. Turning off when “sufficiently charged” really grinds my gears. I want it on ALL the time.",
  },
  { idea: "Music version of IMDb" },
  { idea: "Touch ID handles to unlock the car." },
  {
    idea: "An iPhone feature that makes your phone vibrate just before it runs out of battery to remind you to charge it.",
  },
  {
    idea: "Browser tabs to be different colours depending on how long I spent on them. Red > 0–1 Hour, Orange > 1–2, Green > 2+",
  },
  {
    idea: "Netflix should have a “Soon to be removed” section for content they will be removing.",
  },
  {
    idea: "“Swear Jar” bot on Facebook/ Twitter etc that automatically donates an allotted amount to a charity every time someone swears in a post.",
  },
  {
    idea: "Flash Mob cleaners, a site where people post photos of polluted areas. Each Sunday the mob will pick a place and go clean it up. Before and after photos will be posted when completed.",
  },
  {
    idea: "They should start putting pictures of alcoholics on alcohol packaging, they put tar lungs on cigarettes then why not alcohol. Pictures of obese people on junk food…",
  },
  {
    idea: "Unlock those time wasting apps like Facebook, Twitter, Instagram by going for a jog. The app would connect to RunKeeper and you would only have access to your fav apps once you did the predetermined amounts of steps.",
  },
  {
    idea: "Rent a controller, an online store where you can rent console controllers.",
  },
  {
    idea: "Alarm clock App that would tell you how many other people have set their alarm at the same time. It could show you the percentage of people who snoozed too. And maybe what time they went to bed?",
  },
  {
    idea: "Option to choose what music you would like to listen when put on hold.",
  },
  {
    idea: "A social network that hides your likes and follower count.",
  },
  {
    idea: "An app that prompts you to call your loved ones. The app would send you a notification to call your kids/ parents/ grandparents/ etc.",
  },
  {
    idea: "A LinkedIn feature which looks at your current job role/company and lets you see the typical career paths for other people that had a similar job role/company five years ago. LinkedIn should really give you tools like this to build your career rather than just another networking site",
  },
  {
    idea: "A dating app where you set a dateidea and then you’re only shown people who want to do that dateideaas well.",
  },
  {
    idea: "“Google this number” A button that pops up on your phone while its ringing.",
  },
  {
    idea: "Online book store where you can chat to other users viewing the same book. Be great to talk to other people about the author or previous books you read etc.",
  },
  { idea: "Where are they now? website for people used in Memes." },
  { idea: "Netflix should have a shuffle button" },
  {
    idea: "Mute button option on my Microwave. People are sleeping!",
  },
  {
    idea: "When you receive a friend request on Facebook, your options should be “Accept,” “Delete” or “Hide Request”",
  },
  { idea: "A silent game controller." },
  {
    idea: "Programmable safe word upon hearing that automatically silently calls emergency response, read out your GPS coordinates to the operator and then keep the call alive so the victims voice is recorded.",
  },
  {
    idea: "A “hide open programs” button before you log back into your laptop",
  },
  {
    idea: "Online stores removing out of stock items from their shop. If it’s out of stock then remove it. Simples.",
  },
  { idea: "An “Add to Queue” option on YouTube." },
  {
    idea: "Chrome extension to hide a topic on every social media channel to avoid spoiling of your favourite TV show or live sports event.",
  },
  {
    idea: "Netflix group chat — option to talk to your friends while watching your favourite tv shows.",
  },
  {
    idea: "An app where you can share battery % with your friends when they’re in need.",
  },
  {
    idea: "An app which decides who pays for the bill, no more … “NO I’LL PAY”, “WOULD YA STOP…I’M PAYING” “NO, NO, NO”.",
  },
  { idea: "Gym for the over 60’s" },
  { idea: "A dating app for non-drinkers/ smokers." },
  {
    idea: "Shazam for perfume…Where you could figure out what kind of perfume or cologne someone’s wearing.",
  },
  {
    idea: "An App where you take a picture of the food you’re about to eat and it tells you how many calories are in it.",
  },
  {
    idea: "Chewing Gum that when exposed to air for more then 30 minutes turns to dust.",
  },
  {
    idea: "An app where you scan the barcode of books you own and get a free digital copy.",
  },
  {
    idea: "An App where every jog raises funds for social causes of your choice.",
  },
  { idea: "Chrome extension to block baby photos on Facebook." },
  { idea: "Find my iPhone app clone for my wallet." },
  {
    idea: "Chrome extension for Netflix to auto-skip the intro & credits.",
  },
  {
    idea: "An option on Netflix to make a playlist of episodes from your favorite shows",
  },
  { idea: "Shazam for people…Where do I know this person from?" },
  {
    idea: "Venues that disable your phone from recording or taking photos. Let’s just enjoy the moment.",
  },
  { idea: "DoggySitter — doggy sitting app." },
  {
    idea: "SnapChat for messages. Send a message to people’s phones that automatically deletes after 30 seconds.",
  },
  { idea: "24hr drive thru for sushi." },
  {
    idea: "App that you take a picture of somebody’s shoes or clothes and it tells you exactly where to get it",
  },
  {
    idea: "An app where you have to take an IQ test before you post political/intellectual opinions",
  },
  { idea: "Night mode for IMessage" },
  {
    idea: "Packets of Starburst containing only your favourite flavour (Orange)",
  },
  {
    idea: "An app where you can try on glasses. Like snapchat filters!",
  },
  {
    idea: "An app to save videos to your phone from Twitter, Instagram, Facebook etc",
  },
  {
    idea: "Ad revenue from tweets like you can on YouTube for videos.",
  },
  { idea: "Option to mute people’s snapchat stories" },
  { idea: "Dislike photos on Instagram" },
  {
    idea: "An app where all your friends can post their schedules for the day or week so that you know who can hang out at any time.",
  },
  { idea: "Option to turn off Instagram live notifications" },
  { idea: "Member berry emoji" },
  { idea: "Save and view others bookmarks based on interests." },
  {
    idea: "An app to let you know how many people are in the gym before you get there. Rob Bye designed how the app may look > (https://dribbble.com/shots/3324372-YourGym)",
  },
  {
    idea: "Nintendo dogs/ cats App, someone build this you will make serious $$$",
  },
  { idea: "Property rental website that is pet friendly" },
  {
    idea: "Donate my schoolbooks, a site where you can give your old schoolbooks and also get free schoolbooks or ANY books for that matter. Sharing is caring and everyone should have access to books regardless of your situation.",
  },
  {
    idea: "Public toilets, an app to tell you where the closest public toilet is.",
  },
  {
    idea: "An app where you take a pic of a dog and it identifies the dogs breed and gives you info on the breed.",
  },
  {
    idea: "An app where you can post a screenshot of a conversation and users will help you decide what to reply with.",
  },
  {
    idea: "Drunk text App, an app where you can select contacts who NOT to message/ ring until the next day.",
  },
  { idea: "24hr drive thru for healthy food." },
  {
    idea: "An app where you type in a company & it tells you if they are tied to anyone in the Trump administration.",
  },
  {
    idea: "Twitter should remove messages, I NEVER get a message from a human. 99% of my messages are from bots and it’s frustrating as hell.",
  },
  {
    idea: "An app where you enter food, but instead of counting calories, it’s measured in steps.",
  },
  {
    idea: "An app that tells me where the closest shop that sells protein bars is.",
  },
  { idea: "A fishing website called ‘ClickBait’" },
  { idea: "Online streaming service strictly for 90’s shows" },
  { idea: "An app to remove filters from anyones photos." },
  { idea: "An app where you could just FaceTime puppies" },
  {
    idea: "An app where you can take a picture or recording of a movie/tv show and it tells you what it is.",
  },
  {
    idea: "An app where we have celebs voices as siri, imagine Morgan Freeman talking to you every day.",
  },
  {
    idea: "SnackChat, people post pics of their snack selection ahead of a party.",
  },
  { idea: "“find my iPhone” app for my Fitbit…”Find my Fitbit”" },
  { idea: "Select all button when viewing SnapChat stories" },
  { idea: "Dislike button for twitter" },
  {
    idea: "VR for selling homes, imagine being able to take a tour of a house from the comfort of your own home.",
  },
  { idea: "Out of Office auto reply for phone calls." },
  {
    idea: "A way to tell strangers their lights were burned out while driving",
  },
  {
    idea: "Instagram notifications option to flick between comments/ likes/ mentions. I hate scrolling my notifications trying to find the comments on my posts.",
  },
  { idea: "Yelp for people." },
  { idea: "Search engine just for kids" },
  { idea: "Tinder for making friends in your area" },
  { idea: "Unsubscribe button for physical mail" },
  {
    idea: "A machine learning video site that will tailor movies to how long you have. So if you choose 1 hour and pick Titanic then it will cut the movie down into 60 minutes from 3,000 minutes.",
  },
  {
    idea: "Block my employer — block your current employer from having access or connecting with your social accounts.",
  },
  {
    idea: "Dog chip scanner app, scan a dog and quickly find the contact details of the owner. I remember finding a stray dog at night and then looking for a veterinarian that was open to scan the dog. They were all closed and we had to wait till the next day. Fortunately she did have a chip and the owners were contacted. Imagine I could have skipped all that hassle with an app….someone build it NOW!!",
  },
  { idea: "Delete all my social networks at once button." },
  { idea: "Trampolines at every bus stop… bus stops are boring." },
  {
    idea: "Blackout — if you block someone on one social network then they’re auto blocked on every other website even if there your friend or not.",
  },
  { idea: "An option to edit your tweet." },
  { idea: "A park in every city that is lit up 24/7" },
  {
    idea: "If you delete an email without opening it more than 5 times then you automatically unsubscribe.",
  },
  { idea: "A Bookmark that you can sync with your Ipad/Kindle." },
  {
    idea: "If you’re reading a hardback version of the book and then download a digital version then the bookmark will open the page you left off on the hardback copy.",
  },
  { idea: "Feel good App, an app that only posts jokes or" },
  { idea: "positive material…release those feel good endorphins." },
  {
    idea: "Chrome extension that would block anything Kardashian relatedLike/ Dislike buttons on Netflix",
  },
  { idea: "Crowdfund site for TV programmes" },
  { idea: "24 hour coffee shop…a quality one" },
  { idea: "Whack a mole alarm clock" },
  { idea: "Speed signs that adjust speed depending on the weather" },
  {
    idea: "App to delete someone’s number off your phone, that also made your number get deleted off theirs too",
  },
  { idea: "Donald Trump Emojis" },
  { idea: "RPG Middle-Earth video game" },
  {
    idea: "Tinder for animals. So instead of looking for hook ups, you can look for puppies that you can take on walks and pet.",
  },
  {
    idea: "Chrome extension that blocks any mention of politics on twitter",
  },
  { idea: "Unsplash for Video" },
  {
    idea: "Website that has a live feed of all Donald Trumps decisions.",
  },
  { idea: "A website where you can download protest sign art." },
  {
    idea: "Thunder & lightening effect for iMessages for when your arguing w/ someone",
  },
  {
    idea: "An online store that sells everything Will Smith wore on every episode of Fresh Prince.",
  },
  {
    idea: "Drop me a line — Fisherman social network (Find local fishermen in your area)",
  },
  { idea: "Fitbit dogs collars — track your pets activities." },
  { idea: "Witter — Twitter clone for comedians to share jokes." },
  { idea: "Spotter App — Find someone to spot you in the gym." },
  {
    idea: "Should I buy this? — Tinder style App that you send your friends products and ask ‘Should I buy this?’",
  },
  {
    idea: "A website where people with similar (or the same) birth charts could connect.",
  },
  {
    idea: "A movie theatre where all the auditoriums are unbooked. You pay to have them play any movie you want",
  },
  {
    idea: "A smart fridge that you can scan food barcodes and ask to be notified a week before the food expires.",
  },
  {
    idea: "A browser plugin that auto declines privacy pop-ups for websites.",
  },
  { idea: "Collaborative art which can be forked and merged." },
  {
    idea: "Youtube feature where users who comment on a video your watching shows how much % of the video they watched.",
  },
  {
    idea: "QR code for websites. iPhone feature that if you point the camera at a URL it opens it in your browser.",
  },
  {
    idea: "Car windows that go up and down (when open) with speed — a bit like stereo volume already does.",
  },
  {
    idea: "Shopping trolley with GPS built in. Scan your previous receipt and the trolley will tell the quickest route to take via built-in headphones.",
  },
  { idea: "There should be a section in bars that say “designated drivers”" },
  {
    idea: "The App Store/Playstore should support ordering apps by how many permissions they need.",
  },
  {
    idea: "A website for whistleblowers to leak info, with rewards for the most upvoted leak of the month.",
  },
  {
    idea: "A “build your own frozen yoghurt” type place but instead of dessert toppings you’re creating your own poutine…add as many cheese curds and fries and gravy etc as you want.",
  },
  {
    idea: "A machine learning app which tracks the weather and the likelihood of falling sick. The app will tell you which vitamins to take to give you the best chances of preventing the likelihood of falling ill.",
  },
  {
    idea: "A skill exchange website. Connect students across the world. Connect someone who is learning Physics but needs help with 3D modelling. Each time you help someone you get credits. You can use those credits to reach out to other members.",
  },
  {
    idea: "Tea subscription service. Receive a certain tea based on what season it is. Ginger Chai during cold winters and maybe Green tea with lemon for the summer.",
  },
  {
    idea: "Gym focused only on the elderly. The gym would focus on help in restoring mobility, functional health and reduce body pain while reducing weight through healthy eating and lifestyle changes.",
  },
  {
    idea: "A smart wallet which is paired with your cell phone via Bluetooth. The wallet sends you an alert when you’re out of a set distance. “Hey Dave, just checking to see if you meant to leave me behind”",
  },
  {
    idea: "An app for bloggers to help take the best photo depending on what location they are in. The app would let them know where all the sunflower fields, cute cafe’s and unique buildings are etc. (See Mockup below)",
  },
  { idea: "A smart remote that makes a noise when you say “find remote!”" },
  { idea: "A silent movie theater candy bag." },
  {
    idea: "An e-reader option that displays one word at a time and has a peripheral dial that lets you control the rate at which the words flash by",
  },
  { idea: "The Escape Key should close pop-ups." },
  {
    idea: "A caption generator that allows you to plug in specific words and then comes up with an Instagram caption for you",
  },
  { idea: "A dating app that connects you through your library card." },
  {
    idea: "Tinder should keep a counter for you of how many people you swipe left on that swiped right on you, so people can know if they need to be less picky.",
  },
  { idea: "A Tooth Brush with a built-in toothpaste cartridge." },
  {
    idea: "Google map feature that shows you where you can afford to live based on your salary.",
  },
  {
    idea: "When will youtube do an update where it allows you to still hear the video whilst not on the app.",
  },
  {
    idea: "Scratch and sniff labels on fruit/ veg for the visually impaired.",
  },
  {
    idea: "A twitter feature to tell someone why you’re unfollowing them. (See mockup)",
  },
  {
    idea: "YouTube feature to change “Trending location” similar to Twitter “Trending for you”",
  },
  { idea: "Album covers should have animated versions." },
  {
    idea: "A fitness application that has gamification mode, in order to compete with your gym friends.",
  },
  {
    idea: "A website that allows you to filter political candidates by endorsements, so voters can get a better understanding of who to vote for.",
  },
  {
    idea: "A smart email app. If someone sends you an attachment that you already have it will automatically open it up for you.",
  },
  {
    idea: "An app called SweepstakeBot that aggregates sweepstakes and auto-submits entries on your behalf.",
  },
  {
    idea: "An app that rates women’s clothing stores based off of how comfortable seating is for boyfriends and whether there’s wifi.",
  },
  { idea: "Geoscience themed rock candy." },
  {
    idea: "Connect Google Earth with History API’s to travel in space and time.",
  },
  {
    idea: "T-shirts where the graphics/ images adjust in shape as you gain/lose weight.",
  },
  {
    idea: "An earthquake app that makes your phone vibrate to let you know of an approaching earthquake.",
  },
  {
    idea: "Elastic tattoos that adjust in shape as you gain/ lose weight to keep their original form.",
  },
  {
    idea: "Cars sold in areas with intense heat should have the option of redirecting AC to the trunk when carrying shopping bags.",
  },
  {
    idea: "Wikipedia should have a “Show no pictures” button for when you’re trying to learn about something gross, but don’t want to view the imagery.",
  },
  {
    idea: "Cars should have two horns, one for cars and one for pedestrians which would be a lower sound setting so that you could honk without scaring them.",
  },
  {
    idea: "An iPhone feature where if you add someone’s email all of their social handles pop up and ask if you want to follow them.",
  },
  { idea: "A way to send muted/non-alerting texts." },
  {
    idea: "An option on YouTube where you can look up what comments you have liked in the past.",
  },
  {
    idea: "Gossip should have its own section in the news. Just like sports. It shouldn’t be mixed with the real news.",
  },
  {
    idea: "Snapchat can recognise barcodes on products etc and load filters. How about the same thing on the stage area so that if you point Snapchat it shows you a message saying to enjoy the event or something fun.",
  },
  {
    idea: "A cooking show that has an app where you can order what they’re cooking for delivery.",
  },
  {
    idea: "High heels but you can pop off the heel and it becomes a flat shoe.",
  },
  {
    idea: "An app where you can search for a reliable plug in your location.",
  },
  {
    idea: "Mobile Amber Alerts should give a photo of the child and kidnapper.",
  },
  {
    idea: "An app where two groups of indecisive-but-hungry friends make decisions for each other anonymously.",
  },
  { idea: "An app which gives suggestions on how to pose for photos." },
  {
    idea: "Our phones should be programmed where if we lose them (in a small area), we say Marco and it responds with Polo.",
  },
  {
    idea: "A Google maps feature where you enter two locations and have it figure out restaurants/places near the midpoint.",
  },
  {
    idea: "Google map should have a feature for Halloween that tells you what road has the best Halloween decorations, so you know where to drive to show your kids.",
  },
  {
    idea: "iPhone feature where kids have to answer a random question from a school subject every 1/2 hour in order to continue using the apps.",
  },
  {
    idea: "A feature on Instagram where you can emoji react to someone’s post",
  },
  { idea: "WhatsApp groups should have polls for easier decision making." },
  { idea: "Fitbit cat collars — track your cat’s activities." },
  { idea: "A self-cleaning gym shaker." },
  {
    idea: "Amber alert for cat’s. An app where your shown lost cat’s based on your GPS coordinates.",
  },
  { idea: "An 8 ball app to help decide where you should go eat." },
  { idea: "A drone boomerang, guaranteed to always return to the thrower." },
  { idea: "TherapyCab. Uber but the drivers are certified therapists." },
  { idea: "The ability to type in bold or italics in WhatsApp." },
  {
    idea: "HeadSpace should give you the ability to change the voice to a female.",
  },
  {
    idea: "Toilets that glow in the dark so you don’t have to turn on the light at night.",
  },
  {
    idea: "Gmail feature where you can pin an email to the top so you don’t forget to reply.",
  },
  {
    idea: "Porch lights that change color. I’m expecting a deliver, color changes to purple, their is an emergency my porch light changes to red (will also help the ambulance locate the house quicker.)",
  },
  {
    idea: "An Instagram feature where you can delete all the photos of you and your ex on your profile. Simply enter in the persons @ username and press delete.",
  },
  {
    idea: "A mobile application that helps to predict that bus delay by using machine learning.",
  },
  { idea: "Sports bottle mouthwash." },
  { idea: "A healthy version of Applebees with a drive-through." },
  { idea: "Auto paragraphs for posts without them." },
  { idea: "Snapchat should have the option to mark snaps as NSFW." },
  {
    idea: "A browser extension to delay your twitter-feed to not see any spoilers.",
  },
  { idea: "Trash Cans that can fit pizza boxes." },
  { idea: "Pokémon Snap but with Dogs you meet on the street." },
  {
    idea: "Speed limit signs should reward you with points for matching the speed limit. The points are recorded & redeemable at local venues.",
  },
  {
    idea: "Separate lines for bus tickets at the terminal for tourists and locals.",
  },
  {
    idea: "Headphones should have a rating on how much other people can hear your music.",
  },
  {
    idea: "iPhones should let us set a reminder ‘Warn me when my battery has X amount of time left before it dies.",
  },
  { idea: "An app that tells you where and when you can vote." },
  { idea: "An option on dating apps to link to our Goodreads accounts." },
  { idea: "Shazam for lipstick." },
  {
    idea: "Chrome extension for Youtube where the video will mute while the ad is playing and then click skip ad when you can.",
  },
  {
    idea: "Google map app feature where, when you plot a journey from A to B, it highlights points of interest along the way.",
  },
  {
    idea: "An iPhone setting where it automatically organizes app icons by their usage.",
  },
  { idea: "A one-time age verification system." },
  {
    idea: "Food-Scented Air Fresheners to help cancer patients with no appetite.",
  },
  {
    idea: "A digital learning tool/ platform to help entrepreneurs bring their business ideas to life.",
  },
  {
    idea: "An ice pack exchange service where people camping/driving can turn in their melted ice pack in exchange for frozen ice packs.",
  },
  { idea: "Non-odorless tuna cans for the office." },
  { idea: "Double-clicking an elevator button should cancel it" },
  {
    idea: "A messaging app feature that merges all the short messages into one with one notification.",
  },
  {
    idea: "A podcast where two people speak to each other. One person speaks your language, the other speaks the one you are trying to learn.",
  },
  {
    idea: "There should be hooks by the sinks in public washrooms to hang coats or bags on while washing and drying your hands.",
  },
  {
    idea: "Instagram like counts should be displayed as a % of your followers.",
  },
  {
    idea: "An app that shows you where the good trick or treating houses are.",
  },
  {
    idea: "A travel card that has a strip which changes colour depending on how much money you have on it. Green means €20+, orange means between € 5–10 and red means €0",
  },
  {
    idea: "A shuffle option for sitcoms on Netflix, similar to our music apps.",
  },
  {
    idea: "A sticker you can affix to your mailbox to inform the postal service that you already voted, and therefore do not need any more political ads.",
  },
  {
    idea: "An app that you can turn it on when walking alone at night that immediately sends your position, a series of photos and video to your next of kin when you say your unique safeword.",
  },
  {
    idea: "A car alarm that you can add your name to the system. When the alarm is activated the car will loudly read out your name so you know it’s your car when in a parking lot.",
  },
  {
    idea: "An app where you take a 3d scan of your arms. You can then add tattoo ideas to see if you like them.",
  },
  {
    idea: "An app called CareBnB that supports those relocated by natural disasters to find shelter from those with a spare room.",
  },
  {
    idea: "Instagram like counts should be displayed as a % of your followers.",
  },
  { idea: "An app called “find my airpods”" },
  {
    idea: "Social detox iPhone feature. When you enable this feature it moves all your icons to the last screen on your phone. You’re less likely to go looking for the app icon if it’s three screens away.",
  },
  {
    idea: "Pokemon Go for LinkedIn — Linkedin Go — “Got to connect to them all!” The app will recognize other members, find them on LinkedIn and send them a connection request.",
  },
  {
    idea: "A search engine where you can say “I only have X amount of money” and it will show you the foods/restaurants nearby that you can afford.",
  },
  {
    idea: "Dark mode glasses. Glasses that turn any app on your phone to dark mode.",
  },
  {
    idea: "An app where I post all of my free hours in blocks and people sign up for times to hang out.",
  },
  {
    idea: "In case of a mugging scenario, ATMs should have a feature that if you enter 911 at the end of your PIN it alerts the police.",
  },
  {
    idea: "If the ice cream machine at McDonald’s isn’t working the yellow ‘M’ out the front should turn red.",
  },
  {
    idea: "Add an on/off switch to filter political posts on social media apps.",
  },
  {
    idea: "Somebody should make a bar of soap with an indentation for the sliver of the previous bar of soap.",
  },
  {
    idea: "A dating app, that instead of pictures you only see peoples bios.",
  },
  {
    idea: "A feature that silents the morning alarm if you’ve been using your phone",
  },
  { idea: "The first step in every food recipe should be “wash hands”." },
  {
    idea: "An SMS app that periodically reminds you to reply to texts you haven’t responded to.",
  },
  {
    idea: "Restaurants should have a takeout/delivery “for dogs” menu section.",
  },
  {
    idea: "A Device that’s record everything in a meeting, then converts to text and stores in cloud",
  },
  {
    idea: "A web application in office to chat with colleagues an anonymously",
  },
  {
    idea: "A newspaper printed on a paper bag you can use to bag your recycling",
  },
  { idea: "A before/after comparison slider for websites" },
  {
    idea: "Every grocery store should have a rack next to the egg display where shoppers can place egg cartons that have broken eggs.",
  },
  { idea: "A whole section of YouTube for videos that don’t require sound." },
  {
    idea: "Autocorrect should provide punctuation choices for users who type entire paragraphs without using any.",
  },
  {
    idea: "A chrome extension that filters out products from any shop where the products are made in a certain country.",
  },
  {
    idea: "A YouTube feature that provides recommendation videos based on your emotions. (emoji)",
  },
  { idea: "A WhatsApp feature where you can schedule messages." },
  {
    idea: "T-shirts which change colours depending on your body temperature.",
  },
  {
    idea: "A table with temperature control.Ability to keep my coffee at a constant set level and also my laptop cool.",
  },
  {
    idea: "AI umbrella that will constantly move according to it’s environment to make sure you’re always protected.",
  },
  {
    idea: "An app where I can save articles for later reading but then receive a newspaper version of all the stories I haven’t read yet in the mail at the end of each month.",
  },
  {
    idea: "A ring with a compartment for perfume so that, whenever you are out and suddenly need to update yourself you can simply dab yourself.",
  },
  {
    idea: "A reminder app that detects when you are leaving the house and reminds you to bring your own custom list (Keys, wallet etc)",
  },
  {
    idea: "Bucket list app. An app that groups people by similar bucket lists.",
  },
  {
    idea: "Twitter should tell you how many times people have tried to create an account with your username.",
  },
  {
    idea: "A freeway app that sends you an alert if your job commute route has a stoppage or delay of service.",
  },
  { idea: "An app that scans facial expressions to find the perfect gif." },
  { idea: "Fitbit should have a “making love” as a workout option." },
  {
    idea: "Closed Caption glasses for movie theatres so the deaf can watch movies.",
  },
  {
    idea: "A phone with 2 screens. The main one has no camera and the whole side is a screen. The other side has a normal camera with a “selfie screen”.",
  },
  {
    idea: "Swimming goggles that let you see underwater when it’s dark so that you can go night swimming.",
  },
  { idea: "Shopping carts that self-park in the cart corral." },
  { idea: "A two in one travel shampoo, conditioner and toothpaste." },
  {
    idea: "Toothpaste in a jar similar to a peanut butter jar. The toothbrush is perfect for scraping along the sides and getting every last bit out.",
  },
  { idea: "Hardware store delivery service." },
  { idea: "MacBooks with charger ports on both sides of the laptop." },
  { idea: "A hairbrush that’s an actual waterproof microphone." },
  { idea: "A spray that turns any display panel into an anti-glare panel." },
  {
    idea: "A car wash that was also set up like a haunted house. Get your car washed and also keep the kids entertained.",
  },
  {
    idea: "A browser extension named tl;dr where people collaborate to summarize articles and web pages.",
  },
  { idea: "A lightsaber hedge trimmer with automatic lightsaber sounds." },
  { idea: "We have invented Waterbeds so why not Watercouches." },
  {
    idea: "An app that sends your musical tastes to whatever club you’re in so that the playlist automatically adjusts to the tastes of who’s in the club.",
  },
  {
    idea: "An app like Uber but instead it picks you up from the gym after Leg day, with a protein shake and a foam roller.",
  },
  { idea: "Night delivery for coffee." },
  {
    idea: "Machine learning weather app where I can log what I wore on a given day, the temperature on that day and if I was too hot or too cold in it because I never know how to dress for the weather.",
  },
  {
    idea: "An app where you type in a quote, it tells you which writer wrote that quote, then sends a thank you tweet to them.",
  },
  {
    idea: "iPhone feature for the alarm clock. Usually, I turn my phone on silent but sometimes forget to change to loud when waking up. It would be great if my phone automatically turned my phone to loud after turning off my alarm.",
  },
  {
    idea: "They should have a button in cars that turns on all outside lights so you can walk around and check that none are out by yourself",
  },
  {
    idea: "Public washrooms should play music so that we don’t have to hear each other shitting.",
  },
  {
    idea: "Modern cars should have a standardized slot on the dashboard where people could insert whatever design of dock they would want.",
  },
  {
    idea: "AI video player that learns when the loud parts of a movie come up, the volume is automatically lowered and increased after that section is over",
  },
  {
    idea: "A browser extension that automatically presses “accept” or “continue” on all questions, if you allow cookies on their website.",
  },
  { idea: "Marvel should create a CGI Stan Lee to keep the cameos going." },
  {
    idea: "Highlighting text and pressing caps lock should capitalize/uncapitalize that text.",
  },
  {
    idea: "A code that will revert your phone to a certain premade coverup if the police force you to unlock it.",
  },
  { idea: "IMDB scores should be integrated into Netflix." },
  { idea: "Airbnb but for house parties." },
  { idea: "Google Maps should have a safety rating for routes filter." },
  { idea: "Crunchbase should tell us how different businesses make money." },
  {
    idea: "An app where you move your phone around in a room and it creates a heat map of where you get the best WIFI signal.",
  },
  {
    idea: "WhatsApp feature to allow the ability to trim and edit your voice messages before sending.",
  },
  {
    idea: "Hold music service with caller ID that identifies you and connects to your Spotify account while you wait for the help desk to answer your call.",
  },
  {
    idea: "An app where you can draw your own route for someone and they get it as GPS directions.",
  },
  { idea: "Bus stops should have heated seats for the cold winters." },
  { idea: "A progress bar for Fitbit Bluetooth sync." },
  { idea: "Invent silent candy packaging for movie theatres." },
  {
    idea: "A website that connects cosplay with hospitals so they can visit sick children and cheer them up.",
  },
  { idea: "A backpack with a light inside." },
  {
    idea: "An alternative to Tumblr. Perfect time to roll it out. So many displaced people and content, perfect opportunity.",
  },
  {
    idea: "A dating app synced with a wearable ring. When you’re in proximity to a match your ring glows brighter the closer you get.",
  },
  {
    idea: "Exercise machine with an attached sweet cabinet that won’t open until you have burnt a certain number of calories.",
  },
  { idea: "AI bin that comes on its own when you call it." },
  {
    idea: "Netflix and Spotify should have a ‘Pay Now’ option on their account page.",
  },
  {
    idea: "A database of resumes that got people specific jobs so you know what direction to take to get those positions.",
  },
  { idea: "Cheese filled french fries." },
  {
    idea: "LinkedIn should give you the option to edit sent messages within a conversation.",
  },
  {
    idea: "An app where I can enter in the errands that I have to run and it tells me the quickest order to do them in to minimize driving time.",
  },
  { idea: "An app for girls to help other girls pick out selfies." },
  {
    idea: "A “nap mode” for iPhones, so whenever I’m having a quick nap it responds to texts to let people know that I’m napping and not ignoring them.",
  },
  {
    idea: "An app where I can input unhealthy food I’m craving and it will give me a list of healthy food that will satisfy that craving.",
  },
  { idea: "A reaction button to people’s stories on Snapchat." },
  {
    idea: "All fire alarms should have built-in cameras, a great way to prevent pranksters.",
  },
  {
    idea: "An App that would sync my jogging path with the traffic lights on my route so I know when I should run quickly to get those green light.",
  },
  {
    idea: "An iPhone feature that keeps track of what apps you use the least and at the end of every month it suggests if you would like to delete them.",
  },
  {
    idea: "WhatsApp option to leave WhatsApp groups without everyone knowing you’ve left.",
  },
  {
    idea: "You should be able to choose hotel rooms like you can choose seats on a plane.",
  },
  { idea: "The ability to mute YouTube recommendations." },
  {
    idea: "An app like Tinder that connects you with people in the area that have the same food cravings as you.",
  },
  {
    idea: "A light on Apple phone chargers that determined whether the charger is working or not.",
  },
  { idea: "A coffee shop that served Nutella on toast for breakfast." },
  { idea: "Public toilets with phone chargers." },
  {
    idea: "An Instagram feature where how much you like a post is generated by the length of time you hold the like button.",
  },
  { idea: "A mute button on my blender." },
  {
    idea: "A Facebook bot that deletes all those stupid videos with screaming orgasms, it’s not even funny.",
  },
  {
    idea: "A way for Netflix to show you how many times you’ve watched something.",
  },
  {
    idea: "A Snapchat/ Instagram stories filter to filter out concert videos.",
  },
  { idea: "We had chained wallets but what about chained phone cases." },
  {
    idea: "Apple music feature that gives me the ability to “bookmark” where I have stopped listening to a playlist, so I could go back later after listening to other things and resume from that spot.",
  },
  {
    idea: "iMessage option to mark texts as unread so I don’t forget to reply to them",
  },
  {
    idea: "Traffic chat app. The ability to chat to cars in a 3-mile radius. Find out whats causing the traffic, vent, or just play games to pass the time. The app only works when you’re stationary.",
  },
  { idea: "A Twitter feature to see if a user is online." },
  {
    idea: ".The ability to donate your trolley coin to charity after you’ve finished shopping. Maybe some sort of coin drop mechanism.",
  },
  {
    idea: "An AR app where you can “throw bottles into the sea and let them arrive anywhere in the world.” The app only works when you’re at the beach.",
  },
  {
    idea: "An app where similar to Spotify, you can take a clip of a trailer for a movie/tv show and it will recognise that and add it to a list for you to check back on later.",
  },
  {
    idea: "Gym keys that sync with your lock which can tell what number your locker is on an LCD screen.",
  },
  {
    idea: "An app where you can put in your location and it will tell where the closest big green field is",
  },
  {
    idea: "A website where you can swap costumes with another person to save yourself money.",
  },
  { idea: "A vegetarian/healthier version of McDonald’s." },
  { idea: "A fresh fruit drive-thru." },
  {
    idea: "Every device should have a QR code that translates to a link to its instruction manual.",
  },
  {
    idea: "A dating app where you pick what kind of food you want and then it matches you with a restaurant and a person that wanted the same food for you to go out with.",
  },
  {
    idea: "Silent message. The ability to edit the message settings for individual people where you can turn off their notifications for the message. The text will not show up until they unlock their phone.",
  },
  {
    idea: "Pitybot. An Instagram bot that will like your post out of pity when you get no likes after a certain duration of time.",
  },
  {
    idea: "An app where you input your diet and it tells you what vitamins etc you are lacking.",
  },
  {
    idea: "Linkedin should create a feature where you put in your dream job and it tells you what you need to do and how to get it.",
  },
  {
    idea: "A website where you enter your location and it gives you a list of dinosaurs that lived there.",
  },
  {
    idea: "Facebook naughty corner. A feature to “Hide this person for one month” Give them a time out for being annoying without unfriending them",
  },
  {
    idea: "Location-based notification.iPhone notification “theme” settings. The ability to switch notifications between “office” and it’ll silence certain notifications while allowing others. And a “home” setting to allow all.",
  },
  {
    idea: "iPhone option in the calendar app that you could select ‘Do not disturb’ mode for certain appointments.",
  },
  {
    idea: "Smoke breaks are acceptable in work, it should be acceptable for nonsmokers should be able to take just as many breaks.",
  },
  {
    idea: "Apple music should have a GTA playlist that would contain all the music they play on the car radios from all games.",
  },
  {
    idea: "Your Bin should automatically return to your driveway or designated space after being picked up by the collectors.",
  },
  {
    idea: "Install emergency call boxes at or near rural bus stops, prioritising those areas where they are most likely needed first. The call boxes could tie directly to 911. Add a camera so the dispatchers can see exactly what’s going on.",
  },
  {
    idea: "Dark mode glasses. Glasses that turn any app on your phone to dark mode.",
  },
  { idea: "Spotify should have a light mode feature." },
  { idea: "Netflix option to disable auto play of previews." },
  {
    idea: "iPhone settings should be able to sync to your GPS so it can tell where you are and change your phone settings accordingly. For example, when I enter a bookstore/ cinema/ library or church my phone should change from loud to silent/ vibrate automatically.",
  },
  { idea: "Apple Music had a dark mode." },
  {
    idea: "Tinder for help. An app where elderly people can post what they need to be done and the younger generation can accept or decline. For example “I need help cutting my grass” or “I need someone to take my dog to the vet”",
  },
  {
    idea: "Google ad option to tell your size to all the advertisers so they only show you ads that have clothes in your size.",
  },
  { idea: "Apple Music handoff feature." },
  {
    idea: "Rental units should be rated for energy usage and efficiency during the year.",
  },
  {
    idea: "An alarm clock that wakes you up with motivational advice so you can always wake up in a good mood.",
  },
  {
    idea: "LinkedIn chrome extension that can tell you if someone is wasting your time.",
  },
  { idea: "An option to read podcasts with captions." },
  { idea: "A way to tip people who work in retail." },
  {
    idea: "VR controllers for your feet. Be great for sports games like Fifa.",
  },
  { idea: "Edible Food Tape, made with rice paper." },
  {
    idea: "Vending machines should have a built-in bar that you can manually move up and down in case your item gets stuck in between the screen and the spring.",
  },
  {
    idea: "Wikipedia app feature where you press a button and it works out what documentary you’re watching then gives you a list of articles you can read for more info.",
  },
  {
    idea: "Dog valet. A service that minds your dog while you eat in the restaurant.",
  },
  {
    idea: "Tinder alternative, instead of pictures, you swipe on descriptions. If you swipe yes, you then get to see pictures and decide whether or not to go through with it.",
  },
  {
    idea: "Laughing app. The app will respond to random laughter with laughter of their own.",
  },
  {
    idea: "Google Images and Instagram should have an option to show the original source of the image.",
  },
  {
    idea: "AR app where you can feed ducks anywhere you want. Just point your phone and swipe to throw bread. Ducks will appear and eat the bread.",
  },
  { idea: "Dog-friendly church." },
  { idea: "Netflix lists should have folders to separate shows and movies." },
  {
    idea: "An app where you can post on Snapchat and Instagram stories at the same time.",
  },
  {
    idea: "A website where you can rent cinemas with others for to watch films that are out of the theater like Harry Potter or Die Hard.",
  },
  {
    idea: "All Cars should have an Augmented Reality option. Open the car hood and scan a QR code that starts an augmented view of the engine compartment with all parts labeled.",
  },
  {
    idea: "An app where you can enter the movies you want to see and the streaming services you have and it alerts you when the movie is available.",
  },
  {
    idea: "Facebook should have a feature for ads where you can donate. For example, if I see an ad for a charity I should be able to donate to the ad to keep it up for longer.",
  },
  {
    idea: "Have separate bookmarks that you create when in incognito mode on Chrome. Bookmarks only appear when you’re in incognito.",
  },
  {
    idea: "An app that can identify animals by their sounds or songs for birds.",
  },
  {
    idea: "Facebook or iPhone App: the game “Guess Who” but with your Facebook friends.",
  },
  {
    idea: "Paracetamol bottle water. For people on the go when they have a headache.",
  },
  {
    idea: "Ice cream that contains chamomile, and other sleep ingredients to help keep you calm and cool.",
  },
  {
    idea: "Blood donation app that sends you a notification each time your blood save someone’s life.",
  },
  { idea: "A playlist of your favourite gifs that you can autoplay." },
  {
    idea: "A study app that locks all your social apps 1 month before your exams.",
  },
  {
    idea: "A feature on freelance sites where you could anonymously tell someone they are not offering nearly enough money for what they’re asking for.",
  },
  {
    idea: "An app for buses and trains where you can select what stop you’re getting off at and then it could set off a ringtone when you’re close in case you nod off.",
  },
  { idea: "Receipts at barber shops that say what the haircut was." },
  {
    idea: "A website where I can enter my daily calories & it will generate a week’s worth of meal plans for me?.",
  },
  { idea: "“Unsend” option on Twitter DM like the one on Instagram" },
  { idea: "Netflix for eBooks. A subscription service for ebooks." },
  {
    idea: "An app where I set my workout schedule and if I don’t workout my phone will lock itself until I do.",
  },
  { idea: "An Instagram user search bar on stories." },
  {
    idea: "A Snapchat feature to see what name you’re saved as on other people’s Snapchats.",
  },
  { idea: "Pancake delivery service." },
  {
    idea: "A hose with a small radar sensor to dynamically adjust the pressure depending on the density of the flower, bush etc.",
  },
  {
    idea: "Google should attach their Google cameras to wheelchairs. Collect the data to show where handicap access is limited.",
  },
  {
    idea: "Program Siri to only respond to your children’s requests when they say ‘please’ or ‘thank you’.",
  },
  {
    idea: "Stickers that are geo-tagged so you can stick them on whatever and then use an app to track whatever you want.",
  },
  {
    idea: "A credit card setting that only allowed me to spend money on healthy restaurants/ food items.",
  },
  {
    idea: "An app where you can book trips that shows others interested in the same trips. You then have the ability to connect together and travel together.",
  },
  {
    idea: "A youtube channel where 5-year-olds read out Donald Trump’s tweets.",
  },
  { idea: "Adblock that allows you to choose sites you want to support." },
  {
    idea: "A bar library, where you could drink beer/ wine, read, and people watch.",
  },
  {
    idea: "An app where you can search a makeup/cosmetics brand and check if its cruelty-free.",
  },
  {
    idea: "A notification on my phone whenever I type a message and forget to hit send.",
  },
  { idea: "A range of gym make up, specifically designed to be sweat proof" },
  {
    idea: "An app to input plot predictions from movies/tv while you watch.",
  },
  { idea: "A sliced pan that contains only the heels." },
  { idea: "Instagram feature to like Instagram stories" },
  {
    idea: "Disposable twist-on caps for standard aluminum cans to make them resealable.",
  },
  {
    idea: "Emergency reserve power as a standard for phones. If you’re battery dies, enough power is reserved to power on and make a quick call.",
  },
  { idea: "Public toilet paper with ads printed on them." },
  { idea: "An app where skaters can link up and skate together." },
  {
    idea: "Petrol delivery app. Next time you run out of petrol you can order petrol and have it delivered via the app.",
  },
  {
    idea: "Transcription glasses. Glasses for the visually impaired, that when activated would display subtitles when people are talking.",
  },
  { idea: "Netflix feature where it skips the scenes where animals die." },
  {
    idea: "An alarm clock where the only way to turn off is by doing 10 push-ups.",
  },
  {
    idea: "An app where people post one playlist of all their favourite music and you can choose if you want to be friends with them or not based on the type of music they listen to.",
  },
  { idea: "Healing Crystals as a Service." },
  {
    idea: "Instagram should swap likes for time. The app can tell how long followers spend on your content and will show how long people spend viewing your content. So instead of — 140 likes/ 12 comments you would see — 4hrs 12mins/ 12 comments.",
  },
  {
    idea: "A monthly subscription box that links to your Apple Music/ Spotify music and sends band merchandise that goes along with what you listen to the most. Option to select what you prefer. (i.e. shirts, keychains, hats, posters)",
  },
  {
    idea: "Online retailers should have a ‘browse by clothing fabric’ filter",
  },
  {
    idea: "A social network that every year deletes all your content on December 31st.",
  },
  {
    idea: "Twitter should ghost any Donald Trumps tweets that mention Kim Jong Un, Donald and his immediate family can see the tweet but the rest of the world won’t. They could set up a bot to like/ RT/ Comment with fake profiles that are also ghosted.",
  },
  {
    idea: "A music subscription service that combines Apple, Tidal, Spotify, and Soundcloud.",
  },
  {
    idea: "Netflix should have a section called, ‘RIP’, generated on Dec 31 with all the actors who died that year.",
  },
  {
    idea: "Hallmark Cards should have an ‘I’m sorry your startup failed’ section.",
  },
  {
    idea: "A setting on Netflix where I could say I’m gonna be watching it all day so I don’t have to keep saying yes I’m still here after a few hours.",
  },
  {
    idea: "Apple Music should show me which songs I listened to the most each month.",
  },
  {
    idea: "An app where you type in the ingredients you have on hand and it generates a cocktail recipe.",
  },
  {
    idea: "Netflix needs an additional app where you can see who is watching what you are so you can talk to them about it.",
  },
  {
    idea: "When selecting an alarm tone on your phone you should be able to select ‘Random’ so that it changes every time.",
  },
  {
    idea: "Instagram “are you sure you want to like this pic” protection option to turn on or off for accidentally liking photos.",
  },
  { idea: "A best nine for tweets." },
  {
    idea: "An icon in WhatsApp that lets you know it that person is drunk or not.",
  },
  {
    idea: "An app for disabled drivers where they can report people who park in handicap spots without a disabled sticker.",
  },
  { idea: "A smoke detector that doesn’t go off when your cooking." },
  { idea: "An indoor dog park." },
  { idea: "iPhone feature built in style of tinder to delete phones." },
  {
    idea: "Siri should be able to tell whether your having a bad day or not and send you pick me ups if you are.",
  },
  {
    idea: "New Years resolution app. An app where you post a list of your new year’s resolution, by posting them publicly you make yourself accountable and more likely to stick to them",
  },
  {
    idea: "iPhone feature that tracks your Internet searches (this happens anyway) and if you search for anything suicide-related the phone will automatically find ‘Mom/ mother/Dad/ Pops’ in your contacts and message them alerting them that you’re struggling.",
  },
  {
    idea: "There should be an option to send a “loud text”, one that increases the ringer on the recipient’s phone to let them know it’s an important message.",
  },
  { idea: "Instagram feature to post pictures/ gifs in comments." },
  {
    idea: "An app like Shazam for dogs where you could take a picture and it pops up exactly what kind of breed it is.",
  },
  {
    idea: "An app where you can say a specific part of an episode of a show and the app tells you the exact episode you are speaking about.",
  },
  {
    idea: "A Wikipedia option to turn off photos, I like to read about science but I’m a sometimes don’t like the gory photos.",
  },
  {
    idea: "An app which changes your screen’s white balance according to its surroundings.",
  },
  {
    idea: "Fruit Gums should come with a little packet of floss or toothpicks in it.",
  },
  {
    idea: "A way to block all those people on Instagram that sell weight loss tea and teeth whiteners.",
  },
  { idea: "A delivery service for fuzzy socks." },
  { idea: "A “search emoji” feature for iMessage." },
  { idea: "Non-alcoholic clubs." },
  { idea: "Pet and child-free airline." },
  {
    idea: "An app to scan your prescription into an app to show you where the closest pharmacist to you has your prescription in stock.",
  },
  {
    idea: "An app where you can watch the same video at the same time and have a chat to discuss it.",
  },
  { idea: "A “clear stories” button on SnapChat." },
  {
    idea: "A feature on Instagram where you can show what song you’re currently listening to or a shortcut to Spotify/ Apple music player where people can listen to your playlists.",
  },
  {
    idea: "Kindle feature where you can discuss the book with other readers who are reading the same book in real time.",
  },
  {
    idea: "There should be an option to send a “silent text”, one that doesn’t sound the ringer on the recipient’s phone.”",
  },
  { idea: "Gambling website where you can bet cryptocurrencies." },
  {
    idea: "The ability to “favourite” or “subscribe to” reviewers on sites like RottenTomatoes, GoodReads or even Amazon.",
  },
  {
    idea: "Cars should have an “apology light” for when you’ve made a driving mistake and you want to say sorry to the other driver.",
  },
  { idea: "Voice to unlock iPhone" },
  {
    idea: "Snapchat should offer a video of all the snaps you sent throughout the year",
  },
  {
    idea: "To solve forgetting passwords, there should be an app that websites could integrate with — so you could sign in via fingerprint touch.",
  },
  { idea: "An app that I could see live stream footage of car parks." },
  {
    idea: "An iPhone feature that deletes all your photos and texts upon death",
  },
  { idea: "A brand of alcohol called “Christmas Spirit”" },
  { idea: "Edible stickers on fruit." },
  {
    idea: "An app where you can organise your screenshots into different categories. (Inspiration, recipes, funny things etc.",
  },
  { idea: "Chronological order posts on Instagram." },
  { idea: "A way to honk at the people behind you." },
  {
    idea: "Twitter has a mute option, I wish there was a blind button on Instagram so you can choose not to see people’s pics without actually unfollowing them.",
  },
  {
    idea: "The countdown clock should appear on your iPhone when it has 30 seconds of battery left.",
  },
  {
    idea: "Bank card with GPS installed which syncs with an app. Track your card in case you lose it or it gets stolen.",
  },
  { idea: "Read receipts on emails." },
  { idea: "Tinder app for friendships." },
  {
    idea: "A home security system that can use NFC so you can put a bracelet or use your phone.",
  },
  {
    idea: "When asked if you like an app, there should be a “yes but I’m not rating it on the app store” option.",
  },
  { idea: "A website that lists all current free steam games." },
  { idea: "An app where girls can exchange their party dresses." },
  { idea: "An app that shows you where all the best free samples are." },
  {
    idea: "Netflix feature where if there is only one profile on your account, it will stop asking you who’s watching.",
  },
  {
    idea: "A heat map that shows where highly concentrated areas of stomach flu virus",
  },
  {
    idea: "Christmas shopper app. Give the app a list of Christmas presents and have someone buy them and deliver them to your home.",
  },
  {
    idea: "A VR game where you try to defect from North Korea to South Korea.",
  },
  { idea: "A time hop feature for Snapchat" },
  {
    idea: "Real-time audio description for blind and visually impaired generated through an augmented reality style headset and image processing",
  },
  { idea: "Allow down-voting on Instagram, Twitter & Instagram" },
  {
    idea: "An app, alike Shazam, where you sing the tune of the song that you don’t know the name of and it tells you that song.",
  },
  {
    idea: "Personalised find it books where you send in some photos of yourself and friends/family members/pets etc. and they get edited into crowded pictures in a find it book.",
  },
  {
    idea: "An app where you input different articles of clothing you have and shuffle it to come up with outfit ideas",
  },
  {
    idea: "Virtual Running App — Set running challenges, compete with others in real time",
  },
  {
    idea: "A wheelchair that is a power bank for phones and tablets, and recharges itself from the Rotational Kinetic Energy of every wheel spin.",
  },
  {
    idea: "Cryptocurrencies should have undone functions for payments so if a market is hacked, the money can be brought back",
  },
  {
    idea: "A search engine where you can say “I only have X amount of money” and it will show you the foods/restaurants nearby you can afford.",
  },
  {
    idea: "An app where you hover your phone camera over a link on a paper, or on your laptop, and it copies the link to your clipboard.",
  },
  {
    idea: "A website that tells you where you should move to and live based off of your preferences.",
  },
  {
    idea: "An AR app that I can point my phone camera at a crowd and it shows their twitter handle and profile pic above their head.",
  },
  {
    idea: "An app where I can give it my game library (Steam, Itch.io, etc) along with some parameters for what I want to play (“3rd Person”, “<10 hours”, “Not horror”, etc) and it gives me a recommended game.",
  },
  {
    idea: "An app where you can meet and befriend your fellow passengers on an upcoming flight. Everyone has a little profile saying why they’re on the flight. You can add little recommendations about the destination city too.",
  },
  {
    idea: "Edible dog food wrapping paper so your dog could actually open their Christmas presents.",
  },
  { idea: "A setting on SnapChat to block all concert SnapChat stories." },
  {
    idea: "Set a preference for “Quiet” or “Conversations” when booking an airplane ticket. You’re seated next to someone with the same preference.",
  },
  {
    idea: "A Facebook dating site that matches you based on interest in similar page likes/ interests.",
  },
  {
    idea: "GMAIL should have a feature to warn you if they try and send an email which ends with “Best retards” instead of “Best regards”",
  },
  {
    idea: "A virtual pet that expects the same level of care as a real pet, but every time you have to spend money on the pet (food, vet bills, etc.), the money goes to a savings account. A good thing for people wondering if they can afford to have a pet.",
  },
  {
    idea: "SMS, instant messages, and emails should have a “quiet” flag, so you can send a message to someone without waking/ disturbing them if you think they might be busy or asleep.",
  },
  {
    idea: "Movie subtitles that show up on your glasses. This way people can view the same movie with or without the subtitles and everyone is happy.",
  },
  {
    idea: "A GPS app that doesn’t start talking until you’re out of an area you’re familiar with.",
  },
  {
    idea: "A toilet synced with an app that measures your urine and poo to determine your dietary deficiencies.",
  },
  {
    idea: "A messaging app where the individual characters appear in real time on the other person’s screen.",
  },
  {
    idea: "An app that alerts you in the evening if you don’t have an alarm set for the next morning.",
  },
  {
    idea: "Connect your Netflix, Hulu, Amazon Prime, etc. account to Social accounts and filter out spoiler posts.",
  },
  {
    idea: "A Siri feature where if you curse, Siri will reply “David, watch your language please”",
  },
  {
    idea: "Youtube feature where users who comment on a video your watching shows how much % of the video they watched.",
  },
  {
    idea: "A browser extension that blocks comments until you read the article or image to draw your own opinion.",
  },
  { idea: "A mute politics button on Twitter" },
  {
    idea: "Create “movie routes” on Google Earth, so that I can follow the route the hero took in my favorite movie",
  },
  {
    idea: "Google maps but with a slider that lets you go back in time to see things like Yugoslavia, USSR or even things like British Raj.",
  },
  {
    idea: "Turning on the alarm when you leave your house should automatically turn off power to appliances that you are worried about (e.g., the oven, microwave, etc.).",
  },
  {
    idea: "A site like MyDecadeTV.com but for music videos. Pick a year and a genre, and get a nonstop stream of music videos.",
  },
  {
    idea: "Doggy meet up app. An app where you can find where your local doggy meets up is on.",
  },
  {
    idea: "Google map should have a feature for Christmas that tells you where the best Christmas lights are in your city, so you know where to drive to show your kids.",
  },
  {
    idea: "If you link up Shazam to your Apple music account, anything you Shazam will be placed into a new playlist called ‘Shazam’.",
  },
  { idea: "Homemade baby food home delivery service." },
  {
    idea: "A cooking app where you tell the app whether people are vegan, gluten free etc. The app will give you recipes that are most practical for the group.",
  },
  {
    idea: "A Twitter feature where it’ll show people when they’re using the app or away from their phone.",
  },
  {
    idea: "Poorly performing movies should have their price reduced. Instead of, say, being pulled early. Just like video game prices.",
  },
  {
    idea: "Tinder Roast. An app where if you match with someone you both just roast each other.",
  },
  {
    idea: "A weather app where instead of giving you the actual weather, it gave you feedback from someone who has actually been outside that day. “It’s actually not too cold, maybe 55. Definitely light jacket but that’s it.”",
  },
  {
    idea: "A train app that sends you an alert if your job commute route has a stoppage or delay of service.",
  },
  {
    idea: "Install LED signs on the most gridlock-ridden motorways that display what speed people should be driving to prevent congestion.",
  },
  {
    idea: "Shazam for Makeup. An app where you upload a picture and it will tell you what brands of makeup the person is using in the picture then purchase directly through the app.",
  },
  {
    idea: "A website where you can view pictures of peoples bookshelves. Filter by occupation/ interests.",
  },
  {
    idea: "A wiki for TV shows that has settings to allow you to select how far you’ve watched, showing only info from the parts you were seen.",
  },
  { idea: "A 24-hour yoga studio." },
  { idea: "An option on Instagram to remove all your inactive followers." },
  { idea: "A like button for Instagram stories." },
  { idea: "An app that tells you where the nearest clean bathroom is." },
  { idea: "An app where you can color pictures with your friends." },
  {
    idea: "A button to click to let Google know I bought the item so they can stop targeting me with its ads.",
  },
  {
    idea: "A setting on Snapchat where you could keep a Snapchat friend just so they can see your stories but you didn’t have to see theirs.",
  },
  {
    idea: "Two-way socks!.Socks that are the same on the inside, so it doesn’t matter if they’re inside out.",
  },
  {
    idea: "A retro console eg. Super Nintendo that gets an add-on that gives it network connectivity for online play.",
  },
  {
    idea: "An app like Yelp, but you get to review the customer, instead of the business.",
  },
  { idea: "Street lamp lights that change color depending on the weather." },
  {
    idea: "A button that u could press that would transfer strangers music in public from their headphones to your headphones so u could see what music they’re listening to.",
  },
  {
    idea: "YouTube should have a “skip subscribe message” button for users who are already subscribed to the channel.",
  },
  { idea: "A phone case that screams when its dropped." },
  { idea: "An app where people can trade gift cards." },
  { idea: "A pinky promise emoji." },
  {
    idea: "A “like” button for emails. We should be able to just double tap or click their response for a thumbs up.",
  },
  {
    idea: "An app for coffee shops that tells you where the restrooms are and what the wifi password is so you don’t have to speak to people.",
  },
  {
    idea: "2017 wrapped for Netflix so I could see exactly how many minutes of my life I have spent watching TV shows and movies.",
  },
  {
    idea: "A website where users submit a “Fashion prompt” and other users tell them what to wear",
  },
  { idea: "A shop that sells mugs with celebrities mug shots." },
  {
    idea: "Somewhere to eat your lunch away from your desk when it’s raining.",
  },
  {
    idea: "Products that cause significant degradation to the environment should have warnings similar to cigarette packs.",
  },
  {
    idea: "An app that takes your Spotify playlists and suggests a club with similar music taste.",
  },
  {
    idea: "An app for dog owners. Where you can match your dog with other dogs in your area for puppy play dates.",
  },
  {
    idea: "A way to schedule text messages and WhatsApp the same way you can schedule emails.",
  },
  { idea: "Find My Chapstick app." },
  {
    idea: "An app for the hearing impaired that syncs with their home phone. The app converts the audio into text.",
  },
  { idea: "A way to poke someone to respond to an email." },
  {
    idea: "A button that sends a chime or ring to the person talking on the phone to let them know you want to talk or say something or just have to go.",
  },
  {
    idea: "A filter for people that talk bluntly that adds words to make it sound nicer, kind of like Grammarly.",
  },
  {
    idea: "A VR app where you can paint alongside a Bob Ross episode with your friends.",
  },
  {
    idea: "A chrome extension for LinkedIn to block LinkedIn ‘Gurus, Influencers etc’ and also to block duplicate copy/ paste posts.",
  },
  {
    idea: "An online checklist that helps you spot “red flags” if you/a loved one is in an abusive relationship.",
  },
  { idea: "VSCO for videos." },
  {
    idea: "Facebook should require you to tag your post when posting a status, link or any media. That way, when you don’t want to see certain posts on your feed or from a particular person, you can select from a list of tags. Such as ‘I don’t want to see X-Factor & ______’",
  },
  {
    idea: "An app for kids’ tablets where every 1/2 hour they have to answer 5 math problems to continue using it.",
  },
  {
    idea: "An app where you enter the social media accounts of someone and the app tells me what to buy them for Christmas based on their likes and interests.",
  },
  {
    idea: "Computer manufacturers should include EMV chip readers so you can make secure debit purchases online.",
  },
  {
    idea: "Youtube should have a categorised subscription page where all of the channels that you subscribed that uploads music should be under the category Music and video games under “games” etc.",
  },
  { idea: "A mute button on snap stories." },
  {
    idea: "A website where people could pitch ideas so possible investors could help them actually have a decent setup and in return, the investor would take a % of all earnings until paid back double with the option to continue investing.",
  },
  {
    idea: "A digital toothbrush that syncs with your tap. When you place your toothbrush under the tap the water turns on and when you remove the brush the tap turns off. Stops water wastage.",
  },
  {
    idea: "An app where I can enter any type of trees or flower & the app tells me parks/locations where to find them.",
  },
  {
    idea: "Cars with an infrared sensor which measures the street temperature and warns you if below 0 deg for possible ice.",
  },
  {
    idea: "An augmented reality app that lets you arrange your artwork on the wall before you hang it.",
  },
  {
    idea: "An app where two people can listen to the same song at the same time.",
  },
  {
    idea: "WhatsApp feature where you get asked if you want to join a group message and not just added automatically.",
  },
  { idea: "A combination of taxi & a psychiatrist service." },
  {
    idea: "An app that matches you with sports facilities, when they have free slots. It can even provide with an opponent player/team to play against or with.",
  },
  {
    idea: "An app where you can share and receive Christmas lists with other users.",
  },
  {
    idea: "An app where teens/ children can indicate a location (street, building, town or within 1km radius) where they were abused but keep themselves anonymous. This will allow people to see specific areas where a high concentration of abuse is taking place.",
  },
  {
    idea: "Option to pause a WhatsApp recording, if someone sends you an audio message while recording you can have the option to pause your recording, listen to the message and then go back to your recording.",
  },
  {
    idea: "WhatsApp feature where you can add voice effects to your audio messages. Send my message as T-Pain",
  },
  {
    idea: "An app on your phone where you can check if blocked calls or contacts have tried to contact you.",
  },
  {
    idea: "Earphones that can sense if someones trying to talk to you. If certain words are used in a sentence the earphones vibrate and turn down. Words such as “hello” or your name etc.",
  },
  {
    idea: "An app where you can upload a gif and it tells you what it’s from.",
  },
  {
    idea: "An app where you input the Spotify, GooglePlayMusic or Apple Music usernames of a bunch of people in the room and it figures out how to play music that everyone likes.",
  },
  {
    idea: "A Pocket feature where it stops you from adding the same article multiple times.",
  },
  {
    idea: "An app where your car texts you to tell you it needs water/ oil or if there is something wrong with the mechanics.",
  },
  {
    idea: "A slack feature to “follow” people on Slack or a way to mark the people you are most interested in hearing from so they don’t get lost.",
  },
  {
    idea: "Netflix for newspapers where you could just pay centrally and get past the paywalls and it would be divvied out.",
  },
  {
    idea: "An app where every time you unlock your phone while driving you automatically pay €2 to the Irish Road Victims Association",
  },
  { idea: "A mystery show where you solve the crime at home, on an app" },
  { idea: "A Dyson style hand-dryer but for dishes." },
  { idea: "An app where u can trade art with other artists." },
  {
    idea: "Snapchat feature where you could see how long someone looks at your story or if they just click through it.",
  },
  { idea: "An app that shows you where the cheapest Christmas trees are." },
  {
    idea: "An app that will let me create a “shopping list” of stuff I need, then let me know when I’m near a place that sells it.",
  },
  {
    idea: "An app where users can anonymously record themselves singing and rate each other’s skill/talent out of 10, and leave comments for improvement.",
  },
  {
    idea: "An alarm clock app where every time you get up on time your kitten gets stronger and happier, everytime you press snooze the kitten gets weaker and unhappier.",
  },
  {
    idea: "An app where, if I go to buy a movie on Amazon, it tells me if it’s on Netflix, Hulu etc.",
  },
  { idea: "Shazam for cars. An app to diagnose vehicle engine noises." },
  {
    idea: "A piano app where I can take a photo of sheet music and it will play me the rhythm.",
  },
  {
    idea: "An interactive map of every shopping centre, to use while shopping.",
  },
  { idea: "A Facebook feature to “Hide this person for one month”" },
  {
    idea: "An app that tells you what the wait time for a table is at restaurants near you, based on customer reporting.",
  },
  { idea: "A chrome extension to block anything Christmas related." },
  { idea: "A popular page on Twitter like there is Instagram." },
  { idea: "Off Licence drive-thru." },
  { idea: "A gym that disables camera features on mobile phones." },
  {
    idea: "Space invaders option to close your background apps on iPhone. Instead of trying to destroy aliens you try to destroy your background apps.",
  },
  {
    idea: "A website called idontget.it that helps you look up pop culture references.",
  },
  {
    idea: "An app where you can bet with your mates on which song is going to be bigger.",
  },
  {
    idea: "WhatsApp excuse generator. A list of excuses to get you out of certain situations.",
  },
  {
    idea: "A website that matches amputees with different legs so they can trade shoes.",
  },
  { idea: "Set different message sounds to different people on iMessages." },
  { idea: "Airport drop-in gyms." },
  {
    idea: "An app that makes people sign an NDA before you tell them about your app idea.",
  },
  {
    idea: "Tupperware that changes shape to fit exactly the amount of food you’re putting into it.",
  },
  {
    idea: "An app where you can bet with your mates on which song is going to be bigger.",
  },
  {
    idea: "A 360-degree camera that lives in my fridge so I know whats in my fridge. The camera will be synced with my iPhone.",
  },
  {
    idea: "An app where you can book barbers or hair stylists to come do your hair at home.",
  },
  { idea: "Twitter should add a schedule tweet feature." },
  { idea: "Mario Kart for the iPhone." },
  { idea: "Black Friday sale on gas." },
  {
    idea: "A phone case that doubles as a pill control dispenser (Pez dispenser) so you’re never somewhere without them.",
  },
  {
    idea: "Grass soil treatment that reacts to dog poo, when poo comes into to contact with the grass it changes the colour to bright red.",
  },
  {
    idea: "An app where patients can see updates of doctors diagnosis on their latest lab reports.",
  },
  {
    idea: "iPhone multiple user logins. For example, if your child likes to use your phone for games you could allow them to Fingerprint login but you could hide all your apps, emails, phone, messages and also disable app store purchases.",
  },
  { idea: "An option where you could change your SnapChat username." },
  { idea: "24-hour library." },
  {
    idea: "Defibrillator Location App. An app that will tell you where the nearest AED Defibrillator is to you.",
  },
  { idea: "Time-specific iPhone backgrounds." },
  {
    idea: "“Pimp my Idea” app. An app where you can share your ideas and other users can give you ways to develop them.",
  },
  {
    idea: "Chrome extension spoiler blocker. Simply type in the TV/ Movies you want to block and the extension will blur any text that mentions them",
  },
  {
    idea: "An app or website where you can include your own guess who characters and play with people online by sharing the link.",
  },
  {
    idea: "Combat nursing home abuse by telling staff members that the building is equipped with hidden cameras but never disclose the locations.",
  },
  {
    idea: "Whiteboard clock. Instead of 8:30 am you could write ‘drop kids to school’, 3 pm could be ‘coffee with Dad’",
  },
  {
    idea: "Toy store AR app. Scan a toy and see it come to life on your phone. Digitally try before you buy.",
  },
  {
    idea: "A hugging app. An app that allows you to hug other app users that are nearby. Sometimes all you need is a hug.",
  },
  {
    idea: "Multiple volume sliders on TV when watching sports. The ability to turn down/ up the volume of the commentary or the crowd independently.",
  },
  { idea: "An app that tells you the speed limit based on where you are?" },
  {
    idea: "An alarm clock that puffs out the scent of freshly brewed coffee",
  },
  {
    idea: "A way for me to toggle retweets on and off on my timeline so that I could actually read tweets from the people I follow",
  },
  {
    idea: "VR treadmill that places you at a crime scene and you gotta run from the cops.",
  },
  {
    idea: "An app where you could add your shopping items from various online stores & pay them all at once vs doing everything separately.",
  },
  { idea: "An app where you can check how full your flight is." },
  {
    idea: "A setting in iOS that after locking your device do not use Face ID for x amount of minutes.",
  },
  { idea: "A way to mark a SnapChat as unread." },
  {
    idea: "Edible rubber bands to wrap around sandwiches so they don’t fall apart while you eat them.",
  },
  { idea: "An app where you could see if your friends are awake or not" },
  {
    idea: "All movies and TV shows watched at home should have a “no scream” option that makes sure that the extra loud noises are made 50% quieter",
  },
  {
    idea: "All “PULL” doors should have a handle. All “PUSH” doors should not.",
  },
  { idea: "An app where I can warm my car up from my bed." },
  {
    idea: "An app where everyone in your group can put in their availability and the app tells you when is a good time to meet would be.",
  },
  {
    idea: "Night Vision tech built into a car windshield for driving at night.",
  },
  {
    idea: "A woman’s hair salon with wigs of various haircuts & textures so you can try on before you make any drastic decisions.",
  },
  {
    idea: "An Apple feature where if you double click the home button there should be a button to close all background apps.",
  },
  {
    idea: "An app that would allow you to sell multiple items on multiple platforms. Create one listing for each item and the app would post the item to ALL platforms (eBay, Amazon, Facebook groups etc).",
  },
  {
    idea: "A website that makes custom seasoning for cooks. Create your own blend of seasonings.",
  },
  { idea: "An app where you can rate peoples pets." },
  {
    idea: "A smoke detector that can tell the difference between a fire/ shower/ toaster /cooking etc.",
  },
  {
    idea: "A website for musicians where they create a chain of videos that make a song when played together.",
  },
  { idea: "Tea mixer tap: right for tea, left for milk." },
  {
    idea: "Audiobooks for people with short attention spans where the reader shouts “HEY LISTEN UP THIS PART IS IMPORTANT”",
  },
  {
    idea: "An Uber-style app for actors. Where fellow actors can meet and go over lines together.",
  },
  {
    idea: "Instagram should add a setting to filter out videos/ photos based on your keywords.",
  },
  {
    idea: "An extendable hand that can pick your boiling hot bowl out of the microwave.",
  },
  {
    idea: "A dating app but the only photo your allowed upload is your passport photo. Let’s be honest your passport photo is as real as it gets.",
  },
  {
    idea: "Apple needs an update where when you look at the weather app, it gives you outfit options to wear based on the temperature.",
  },
  { idea: "A comments section on Netflix TV shows." },
  {
    idea: "ATM location app which lets you know where the closest ATM is to you and also whether it’s out of service or not.",
  },
  {
    idea: "MacBooks should have battery charger inputs on each side of the laptop.",
  },
  {
    idea: "MyFitness Pal should have a feature that tells you if a food is gluten-free or not when you scan it in.",
  },
  {
    idea: "iPhone receipt app tracker. Take a photo of your receipt and have it converted into an Excel spreadsheet.",
  },
  { idea: "An app where you can exchange unwanted Christmas presents." },
  {
    idea: "Online course to help older people/technologically illiterate people learn how to use computers and avoid scams.",
  },
  {
    idea: "Gym clothes that change colour in accordance with your heart rate, so it’s visible if you’re actually being active or not",
  },
  {
    idea: "An app where I can plug in all my tracking numbers and label. So I know exactly where and when each item will be delivered.",
  },
  { idea: "A ‘skip ad’ button on podcasts." },
  { idea: "A way to ‘like’ that someone ‘liked’ your tweet." },
  {
    idea: "Gyms should have rooms full of mirrors where people can go and take photos of themselves.",
  },
  {
    idea: "YouTube feature where you can’t leave a comment on a video until you watch a certain % of the video.",
  },
  {
    idea: "Hackathon app, find and join upcoming hackathons around your area.",
  },
  { idea: "SnapChat feature to see how long someone’s SnapChat story is" },
  { idea: "Twitter feature to turn off retweets on your timeline." },
  {
    idea: "Smartphones should have an option to report spam/soliciting calls directly to the COMREG if you are on the”Do Not Call” list",
  },
  {
    idea: "A large digital picture frame that simulates paper and displays a different movie, music or art posters.",
  },
  {
    idea: "Lego AR app where I point to a bunch of bricks on a table and the app generates a possible model and step by step instructions.",
  },
  {
    idea: "An app where you type in your reading list & it shows you all the libraries near you that have the books & the cheapest places to buy them",
  },
  { idea: "The LinkedIn app should have a night mode option" },
  { idea: "A video game where any character can die forever." },
  {
    idea: "An iPhone feature where you can mute your phone while your other half rants and it will flash when the audio on her side has ended.",
  },
  { idea: "Twitter option to mute everyone using the 280 character limit." },
  { idea: "A 2-month advent calendar." },
  { idea: "A folder for recently deleted iMessages" },
  {
    idea: "A “report to CEO/president” button on LinkedIn for when someone gets abusive messages.",
  },
  {
    idea: "A MacOS widget to show me the battery levels of all the devices in my office (e.g. iPhone, iPad etc).",
  },
  {
    idea: "MyFitnessPal app should give you suggestions of foods to eat based on how many calories you have left. If you are low in one area of your macros, the app will suggest foods to get you to your daily goal.",
  },
  {
    idea: "Chrome extension that sorts recommended Facebook friends by # of mutual friends.",
  },
  {
    idea: "An APP where customers can scan each product before purchasing and the APP would populate if it is cruelty-free or not.",
  },
  { idea: "A “mark as unread” for text messages" },
  {
    idea: "Facebook feature where you say how/ where you know someone when you send a friend request, similar to LinkedIn.",
  },
  {
    idea: "Cars should be built with old-school, hand-operated window rollers in addition to power windows. There should always be a key in addition to an electric clicker fob thing as well.",
  },
  {
    idea: "An app where users can anonymously record themselves singing and rate each other’s skill/talent out of 10, and leave comments for improvement.",
  },
  {
    idea: "An app that would allow you to alert everyone who didn’t wash their hands after using the bathroom.",
  },
  { idea: "Ability to pin a post to the top of a Patreon Page." },
  {
    idea: "Password to turn down my mobile phone, so in case of a quick robbery, the thief can’t power off your phone, enabling you to track it.",
  },
  {
    idea: "WhatsApp should have an update where you can send voice notes without opening the app.",
  },
  { idea: "Animoji app where you can create 15-second Animoji videos." },
  { idea: "Silent fireworks." },
  {
    idea: "Secret Santa app. Tell the app your budget then add the person’s social accounts. The app’s algorithm will display a list of items that the person would like based on their social activity/ likes.",
  },
  {
    idea: "An easier way to update reading status with audiobooks on Goodreads.",
  },
  {
    idea: "An app where students from around the country can talk about homework together.",
  },
  {
    idea: "An iPhone feature where if you add someone’s number . all of their social handles pop up and ask if you want to follow them.",
  },
  { idea: "Tinder for Amazon." },
  {
    idea: "An app, where you type in a movie or show and it tells you what streaming service its on.",
  },
  { idea: "A way to make google calendar an interactive wallpaper." },
  {
    idea: "A way to track whether gift cards you’ve gifted have ever been used.",
  },
  {
    idea: "An app like tinder where you could chat with other local artists and meet up and draw together.",
  },
  {
    idea: "An app where waiting staff anonymously report if their restaurant pays them credit card tips or not.",
  },
  {
    idea: "Google ads should implement a new feature where it shows positive/ motivational images instead of ads to people who are searching for words around suicide.",
  },
  {
    idea: "Home Alone Virtual Reality Game. Protect your home from Marv and Harry.",
  },
  {
    idea: "A GPS map for searching a specific item to buy in surrounding stores",
  },
  {
    idea: "A delivery service that delivers all your items that did not pass airport boarding security back to their owner’s home.",
  },
  {
    idea: "A map of local bars, filter by what sports they’re playing on their TV. Show me who’s playing the Man United match.",
  },
  {
    idea: "Dwayne Johnson (The Rock) should release a cookbook titled “Can you smell what the Rock is cooking” insert raised eye emoji here.",
  },
  {
    idea: "An app that will randomly set off an alarm during all hours to better prepare you for having a kid. To turn off alarm you must sing “Rock a Bye Baby”",
  },
  {
    idea: "Restaurants/ Cafes that disables your phones wifi so you can only receive phone calls. Put the phone down and talk to each other.",
  },
  {
    idea: "An app where you can pinpoint your house on a publicly viewable map to say whether you are/aren’t doing Halloween.",
  },
  { idea: "A way to recover old WhatsApp messages." },
  {
    idea: "Flu essentials delivery service. Lemsip, 7up, Chicken soup and much more delivered straight to your door.",
  },
  {
    idea: "An app like Pocket but where it just automatically downloads everything my favourite writers publish.",
  },
  { idea: "A VR Bonsai game." },
  { idea: "An option to translate private messages on Instagram." },
  { idea: "Time hop feature for Snapchat." },
  {
    idea: "Stairs that recognizes when your falling and turns into a slide to reduce injury",
  },
  { idea: "Night Owls. A dating app for people who work irregular hours." },
  {
    idea: "Car keys that only work when you pass a breathalyser test. Blow on the key and if your ok to drive the key will pop open.",
  },
  {
    idea: "A physical LCD bookcase that displays all your ebooks. Simply click on the ebook you want and it will open on your Kindle.",
  },
  {
    idea: "An adult version of trick or treating where you knock and get alcohol and pizza instead of sweets.",
  },
  {
    idea: "Petflix. An app where I can watch movies but it skips the bits where animals die.",
  },
  {
    idea: "“I just want to see the results now” option for polls on Instagram & Twitter",
  },
  {
    idea: "An Instagram feature that allowed you to hide individual photos from your family.",
  },
  {
    idea: "Apple music option to “Skip skits “ on any albums that have a skits.",
  },
  { idea: "The reverse side of DVD’s should contain the soundtrack." },
  {
    idea: "A barber app where there is an option to choose if you want to have a conversation or not.",
  },
  { idea: "An option to add BCC on WhatsApp." },
  { idea: "Scented candles that smell of blown out normal candles" },
  {
    idea: "My mobile should recognise when its close to my notebook and re-route notifications to there",
  },
  { idea: "The ability to mute the commentator when watching sports." },
  {
    idea: "Freelancer reviews and recommendations of companies that they worked for. Find out which companies pay on time etc before you agree to work for them.",
  },
  {
    idea: "Supermarkets should organise complimentary taxi services for the elderly living in the area who cannot drive.",
  },
  {
    idea: "iPhone feature — double-click the home button and the camera app opens instantly.",
  },
  { idea: "Soundproof public toilets or only play heavy rock music." },
  {
    idea: "A service where someone comes and gets your car when you’re in a hurry and can’t find a parking spot.",
  },
  {
    idea: "Jigsaw (The Horror Movie) VR game. An intense game where you need to win the games to survive.",
  },
  {
    idea: "Chrome Extension that applies funny SnapChat filters to any images of Donald Trump.",
  },
  {
    idea: "A feature that records peoples reactions when watching your SnapChats or Instagram stories. Call it the Gogglebox feature. Ability to turn on or off on both sides.",
  },
  {
    idea: "Netflix should have a deleted scene section. Watch deleted scenes from your favourite movies.",
  },
  {
    idea: "An app where you judge prospective partners by their book covers.",
  },
  {
    idea: "An option on Amazon to filter out “does not deliver to Ireland.”",
  },
  {
    idea: "A retirement home where lonely old people are given elderly pets from animal shelters that are not wanted.",
  },
  {
    idea: "An app where all links sent into a twitter thread make a playlist.",
  },
  {
    idea: "A way to leave email chains you’re cc’d on like you can leave group chats.",
  },
  { idea: "An option on Twitter to lock certain tweets." },
  {
    idea: "A trash can that detects when it’s full and auto ties the bag and then releases it out the side ready for you to carry.",
  },
  {
    idea: "A home alarm system that instead of the generic alarm it’s a recording of a man screaming “Hey you, get the fuck out of my house”",
  },
  {
    idea: "A browser extension to filter items that appear under Amazon’s “Today’s Deals” pages.",
  },
  {
    idea: "An app where you post 3 selfies and people tell you which of them is the best.",
  },
  {
    idea: "An app that exists where you can just list artists and songs and the app generates a playlist of those people/ that type of music?",
  },
  {
    idea: "Netflix feature where it tells you when you can go pee during a movie without missing anything important.",
  },
  {
    idea: "Any game that puts up text during loading screen should always have it switch text by pressing a button, not a random timer.",
  },
  { idea: "Use drones to change lightbulbs on highways." },
  {
    idea: "A dating site that matches people based on marital benefits. Aimed at people who are not looking for love, but could use an advantage in their living situation.",
  },
  {
    idea: "A mix of fortune cookies and scratch cards. Crack open a fortune cookie for a chance to win big money.",
  },
  {
    idea: "An app where I can scan an Ikea item and get an accurate time+frustration estimate.",
  },
  {
    idea: "Laptops should have a privacy switch that physically disables the microphone and camera.",
  },
  { idea: "Group phone calls for WhatsApp." },
  {
    idea: "An app where I can merge multiple pictures so everyone looks good in the same shot.",
  },
  {
    idea: "An app where you take a pic of all the clothes in your house and then it tells you what Halloween costumes you can make out of them.",
  },
  {
    idea: "An app that shows where the good trick or treating houses are? “Check out №14 if you like Haribo.”",
  },
  {
    idea: "Keyboard clean button. A button you could press that locks all your keys so you can quickly wipe/ clean your keyboard without your laptop going mental. It also puts your computer to sleep so you clean the screen.",
  },
  {
    idea: "Create a VR scenario where a drunk driver knocks down and kills a mother and a child. Then force any convicted drunk driver to wear the Goggles go through the whole scenario as punishment. From bar to falling out of the car to the carnage.",
  },
  {
    idea: "A VR app for socially awkward people to learn how to talk to the opposite sex.",
  },
  {
    idea: "Tinder, but where you meet new mums and hang out with your babies.",
  },
  {
    idea: "Colour coded stickers for your door to let people know whether your open to trick or treaters or not.",
  },
  { idea: "iPhone battery that lasts longer than 6 hours." },
  { idea: "Batman augmented reality app where I have to catch criminals." },
  {
    idea: "A Cooking app where each recipe has its own music playlist that you can listen to while cooking.",
  },
  { idea: "An app where you can send wine to people." },
  {
    idea: "Supermarkets should use RFID chips for their products to speed up the process at the cash.",
  },
  {
    idea: "Public toilet doors that are sensored so you don’t have to touch the handles.",
  },
  {
    idea: "An app where you can take a pic of your junk and it shows you what Pinterest projects you can make with it.",
  },
  { idea: "A VR game of Where’s Waldo?" },
  {
    idea: "Career mode for women or ability to build your own female player in FIFA",
  },
  {
    idea: "An app for casting like Tinder where you could just swipe right on someone you wanted to see for a role.",
  },
  {
    idea: "A machine learning shower. It learns what temperature you like and at what speed. Voice-activated so you can turn on/ off",
  },
  { idea: "Option on Netflix to turn off the laughing track on comedies." },
  {
    idea: "Karaoke app, think of it like group facetime with music and lyrics.",
  },
  {
    idea: "An app where I put in what I want to eat and it gives me different types of workouts/durations I have to do to burn off the calories.",
  },
  {
    idea: "When you tag someone in a WhatsApp the person tagged will receive a notification on their phone. When they click the notification they are brought straight to that message.",
  },
  {
    idea: "A VR jury duty game. You get to sit through a full trial viewing evidence etc.",
  },
  { idea: "WhatsApp should have shared whiteboard where users can draw on." },
  {
    idea: "Coke should come with a chewing gum in the bottle cap so you can clean your teeth after your finished.",
  },
  {
    idea: "1RM app. An app for powerlifters where they post their 1RM (1 rep max) lifts.",
  },
  {
    idea: "Instead of horrible lounge music why not learn a language while on hold with customer support.",
  },
  {
    idea: "An app where you can input text and it automatically generates a reply when you don’t know how to respond to something.",
  },
  {
    idea: "Netflix should make an original documentary about the abuse of power by powerful, corrupt producers.",
  },
  { idea: "An app where you can check alcohol prices at restaurants" },
  {
    idea: "An app, where you can type in the amount of macros you are wanting to eat, and it gives you options for eating out.",
  },
  { idea: "MacBook with built in area for my computer glasses." },
  { idea: "AR Graffiti App." },
  {
    idea: "An app where once I’ve watched a video on Instagram, it removes it from Facebook/ Snapchat/ Twitter etc.",
  },
  { idea: "Follow with all my accounts Instagram feature." },
  { idea: "McVities Digestives biscuits flavoured tea bags." },
  { idea: "A way to like or dislike peoples SnapChats." },
  {
    idea: "A shelter for lonely people where they can go and talk to each other for a few hours.",
  },
  { idea: "Have an age limit on coffee." },
  {
    idea: "Gyms should have coloured bands. A green coloured band would mean you could talk to that person or ask for advice. Red would mean that person doesn’t want to be disturbed.",
  },
  {
    idea: "An option on SnapChat that you could just click and it would send to your streaks.",
  },
  {
    idea: "Baby advent calendar with baby tips and stuff. Also, could include baby chocolates but eating a baby might be weird — so maybe not.",
  },
  {
    idea: "PS4 should have a way to individually control other people’s mic volume in your chat.",
  },
  { idea: "Twitter should make a “why we banned/blocked ____ account”." },
  {
    idea: "Start a TV club where a few people watch a set amount of episodes a week of a series and get together to discuss.",
  },
  {
    idea: "An app where two people come pick you up and the other person drives your car back for you so you don’t need to leave it.",
  },
  {
    idea: "Tinder should add mini-games, so you can play games with your tinder match as an icebreaker.",
  },
  { idea: "A Facebook feature to “Hide this person for one month”…" },
  {
    idea: "An office-acceptable non-smoking reason to go outside for 10 minutes and just get some air or maybe eat an apple.",
  },
  {
    idea: "Netflix should have a way to “reset” a series so I could re-watch it without every episode starting in the credits.",
  },
  {
    idea: "I wish there was a website where people with similar (or the same) birth charts could connect with each other.",
  },
  {
    idea: "An app where we can submit the locations of weak WIFI signal so that they can work towards improving locations based on the frequency of reporting and sizes of dead zones.",
  },
  { idea: "Car app that allows you to record audio messages for WhatsApp." },
  { idea: "An app that tells you where the free samples are around you." },
  {
    idea: "An app that combines Google Maps and Alarms to wake you up earlier if the drive to work has more traffic than usual",
  },
  { idea: "Spotter — an “Airbnb” for traveling gym goers" },
  {
    idea: "An app to find walking partners for people with dogs or without.",
  },
  {
    idea: "Restaurant menu AR app. See the food on the menu in a real-world environment before you order it.",
  },
  {
    idea: "An app where you enter products you purchase all the time and it alerts you when they go on sale.",
  },
  {
    idea: "An app where users can submit wifi passwords of places like restaurants, hotels and other places with free wifi.",
  },
  {
    idea: "There should be an app where you push a button whenever you come down with a cold and it records the time and your location so they can track the spreading and also help prevent other people from catching a cold.",
  },
  {
    idea: "An app where you submit a photo and people give you caption ideas for it.",
  },
  {
    idea: "An alarm clock that wakes you up by saying a list of your favourite sayings.",
  },
  { idea: "An Airbnb app where you can find haunted houses to sleep" },
  {
    idea: "Underpants that have a filter built in for eliminating fart smells.",
  },
  {
    idea: "Gyms should connect their treadmills, ellipticals, rowers, bikes, to a generator to power their building for free.",
  },
  {
    idea: "An app where people can share their leftovers with anyone willing to come and take it.",
  },
  {
    idea: "A Poker AR game. Players can see the other players, head and hand movements (Such as throwing chips on the table).",
  },
  {
    idea: "An app called “Airport Chats” where you can find people in your terminal to drink with.",
  },
  {
    idea: "A browser extension specifically for downloading Instagram/ Facebook/ Twitter images at their highest resolution.",
  },
  {
    idea: "An app that’s like Find My Friends but it shows you where the people are that owe you money, we’ll call it Find My Money.",
  },
  {
    idea: "Trucks that can raise themselves to allow cars to pass through on the motorway when necessary.",
  },
  { idea: "Instagram videos should show how long each video is." },
  {
    idea: "Documentaries should include “reenactment”, “simulated”, etc. at the bottom of the frame to let me know footage has been manipulated in some way.",
  },
  {
    idea: "iPhone should build an App Graveyard feature, a place where you can see all the apps you deleted from your phone. Reinstall by clicking on the app icon. The app icon is a just shortcut to the store so it doesn’t take up memory on your phone.",
  },
  {
    idea: "Uber for Piggybacks. Need a piggyback to your dinner date? Order a PiggyBack. Cheaper than a taxi.(Million dollar idea )",
  },
  {
    idea: "A gym that reduces your monthly fee based on how frequent you go.",
  },
  {
    idea: "eBooks should include environment noises while you read the book to add atmosphere. Imagine reading a thriller about a woman running through the woods and as you turn a page you can hear wind whistling, heavy breathing and branches breaking.",
  },
  {
    idea: "iPhone should have a feature that changes the photo of your lock screen every week.",
  },
  {
    idea: "All trucks should have a screen on front and back. The screen on the front shows whats happening behind the truck and the back the opposite. Will help with overtaking and also turning.",
  },
  {
    idea: "YouTube should have a feature for your favourite channels which shows the amount of money you’ve raised for them by watching ads.",
  },
  {
    idea: "An app or a website where you can exchange gift cards for other gift cards.",
  },
  { idea: "Gloves that vibrate when you get a message or a phone call." },
  { idea: "A progress bar on GIFs." },
  {
    idea: "A Tinder-like app that will match you with your music/film/ books/T.V series soulmate. Where you could talk about your favourites, recommendations, or invite them to go out to watch gigs/movies.",
  },
  {
    idea: "Banksy App. A geolocation map which shows you if you’re near any Banksy Graffiti based on your location.",
  },
  {
    idea: "Auto applies job app. Upload your CV, Cover Letter, and personal details. The app scrapes all jobs in your industry and auto applies to any new relevant jobs.",
  },
  {
    idea: "The volume of your car increases the harder you press on the horn.",
  },
  {
    idea: "Gym mirrors should have built-in tech that allows the user to see their data — heart rate, calories burned etc. Could sync up with a Fitbit.",
  },
  {
    idea: "App store should have options to filter apps in order of the number of downloads and also an option to filter in size of MB.",
  },
  { idea: "Why hasn’t anyone created an alternative to Vine?" },
  {
    idea: "App for Google Glass that replaces sad faces of people you pass by on the street with the happy ones.",
  },
  {
    idea: "A location-based app that credits your Travel card fare based on length of delay you experience.",
  },
  {
    idea: "TV that is connected to your Fitbit. If the Fitbit recognised that you have fallen asleep then it will turn the TV off, if you left it on.",
  },
  {
    idea: "An app which preserves languages which are about to extinct and also lists its native speakers.",
  },
  { idea: "Convenient food delivery service for vegans." },
  {
    idea: "When someone rings you in a nightclub/ concert rather than answering the phone and shouting down the line. An iPhone feature where your phone can tell you’re in a noisy environment and give you an automated message response to let the person know you can’ t talk and will ring them later.",
  },
  {
    idea: "A Twitter App where you can write as many characters as you want. The app takes your text and posts it on a thread.",
  },
  { idea: "An “undo” button on the keyboard." },
  { idea: "An airport cinema." },
  {
    idea: "Movie theaters should come with apple airports. Be nice to have an option to block out noisy people",
  },
  {
    idea: "Instagram feature to be able to share other users stories as your own story.",
  },
  {
    idea: "Facebook dating app, get paired with other users with similar profiles, friends, likes, interest etc.",
  },
  {
    idea: "An app that shows you where the bathrooms are in different stores.",
  },
  {
    idea: "An app where you can upload a picture of sheet music and it plays it for you so you know what your part sounds like",
  },
  {
    idea: "Uber for phone chargers. Low battery? No problem. ChargeU will drop a portable straight to you. Will pick up at a later date.",
  },
  { idea: "Netflix should have an “I’m feeling lucky button.”" },
  {
    idea: "Twitter should ban Trump’s account. Twitter’s rules apparently don’t apply to Trump.",
  },
  { idea: "Autopause on Netflix when my Fitbit says I’ve fallen asleep." },
  {
    idea: "An app where you upload a reference picture & it tells you what colour the paints you need are.",
  },
  {
    idea: "Twitter feature to curate the content on my feed. Like, I could only get tweets from the people I want tweets from.",
  },
  {
    idea: "Chrome extension that turns all the negative emojis into positive ones.",
  },
  {
    idea: "A shelf fixed to the ceiling that can be lowered to access its items",
  },
  {
    idea: "Sometimes I accidentally delete apps, it would be great if iPhone had a feature to show me the last 3 apps I deleted.",
  },
  {
    idea: "An app called ‘Dinder’ where couples find other couples nearby to have dinner with.",
  },
  { idea: "A toggle on Dribbble to show/ hide 100-day UI challenges." },
  {
    idea: "A chrome extension that reveals the pricing plans of any site you’re on.",
  },
  {
    idea: "YouTube feature where if someone ‘dislikes’ a video a pop-up asks them why. There dislike won’t process until they give their reason.",
  },
  {
    idea: "VR Sports-based video game where you play as the camera operator",
  },
  {
    idea: "McDonald’s app where you can search for a location and see if their ice cream machine is broken.",
  },
  {
    idea: "A site that gives you gifts recommendations for your friends based on their social media likes and dislikes.",
  },
  { idea: "Bike friendly professional clothing line." },
  {
    idea: "Buses should have a blinker light that tells customers they have 60 seconds until the bus leaves the stop.",
  },
  { idea: "A browser extension that mines crypto-currencies for you." },
  {
    idea: "YouTube feature where if someone ‘dislikes’ a video, any comments they make on the video will have smaller text and greyed out a bit, so that future video watchers can maybe parse out why they dislike the video.",
  },
  {
    idea: "A food app where you can order food from different takeaways and get them delivered. I want Whopper meal & dominos cookies.",
  },
  { idea: "Online shoe store for amputees." },
  {
    idea: "YouTube should have a playlist for all your new subscription feed videos.",
  },
  { idea: "Augmented Reality Subbuteo game." },
  { idea: "Mayo & ketchup squirt bottles that have nozzles on both ends." },
  { idea: "Play and pause buttons on YouTube browser tab." },
  {
    idea: "Apple should have a feature that Siri counts down from 20 when your battery is about to die on your iPhone or MacBook. “David your phone will die in 20,19,18…”",
  },
  { idea: "Netflix lists should have folders to separate shows and movies." },
  { idea: "Clothes dryers should have a bedsheets setting." },
  {
    idea: "A Twitter feature where it autocorrects certain words to be shortened & understandable & take some punctuation out so it can fit a tweet.",
  },
  {
    idea: "Movie theaters should sell merchandise for the movies they are playing.",
  },
  {
    idea: "A feature on SnapChat where you can emoji react to someone’s story.",
  },
  { idea: "A “please no radio” feature in the Uber app." },
  {
    idea: "A search bar to see who viewed your Snapchat story instead of going through the whole list.",
  },
  {
    idea: "A Twitter/ Facebook filter to hide the same shared image/ tweet that keeps appearing on your newsfeed. I only want/ need to see it once and not multiple times.",
  },
  { idea: "Twitter should introduce stories." },
  {
    idea: "AR dating app. If your match is on the app they will have a heart above their head. Fire virtual love arrows at potential love matches. Think Pokemon go for dating.",
  },
  {
    idea: "Once a month the lottery should be played charitable organisations only and the public cannot play.",
  },
  { idea: "Mobile phones should automatically switch from 3G to WiFi." },
  {
    idea: "An app for GTA where if you get a call in the game, you have to pick it up on your phone.",
  },
  {
    idea: "An app where people who can’t sleep get connected with people who love to read out loud.",
  },
  {
    idea: "Solar powered bike lanes. It’s easy to separate a bike lane from the road during the day as its colour coded but less at night. What if you installed solar powered lights that would light up at night.",
  },
  { idea: "Spoiler free trailers." },
  {
    idea: "A website where you could find documentaries based on what animal you search for. IMDB for animals documentaries.",
  },
  { idea: "YouTube “Watch later “ feature." },
  {
    idea: "A chrome extension that automatically updates bookmarks to where you last closed the page on that bookmark.",
  },
  { idea: "VR car simulator for learner drivers." },
  {
    idea: "Toilet paper holder with built-in phone charger, charge your phone while you poo.",
  },
  {
    idea: "Ice cream truck app. The ice cream music plays on your phone when the truck is near your road.",
  },
  {
    idea: "Facebook posts should have a fake Button feature in addition to share, like etc.",
  },
  {
    idea: "A microwave barcode feature that lets you scan the packaging to begin cooking the food for the perfect amount of time and power level.",
  },
  {
    idea: "An app where you find out who else on the plane wants to split a cab to town or maybe going to the same hotel etc",
  },
  {
    idea: "Traffic lights should have sounds so that people looking at their phones know when the light turns green.",
  },
  {
    idea: "A sensor door that lights up when someone knocks on it, be useful for deaf/ elderly people. A light box can be placed in rooms where the person spends most of their day.",
  },
  {
    idea: "A site that I could pay to watch movies that are currently in theaters.",
  },
  {
    idea: "An option on iPhone to have everything after the first page of your home screen ordered by usage.",
  },
  { idea: "WhatsApp calls to landlines" },
  { idea: "A Protein-shake & Smoothie Food Truck" },
  { idea: "Undo delete button for WhatsApp audio message." },
  {
    idea: "A computer AI network that generates new episodes of TV shows by analysing and compiling all the other episodes.",
  },
  {
    idea: "An App that would suggest music based on the notes, keys and chord progressions of your favourite songs.",
  },
  { idea: "An app where it turns your pictures into emojis." },
  {
    idea: "An app where grumpy people stuck in traffic on the way home from work is able to order food and have them delivered by drones.",
  },
  {
    idea: "An app where you list all your favourite artists, you get auto updates sent to your phone about tour dates, new music etc. all in one place",
  },
  {
    idea: "An app where you take a picture of your baking ingredients and it gives you a dessert recipe",
  },
  { idea: "Group messaging feature on SnapChat." },
  {
    idea: "A chrome extension to mute youtube ads and automatically clicks the skip ad button.",
  },
  {
    idea: "Report trolling/ bully button on Facebook. When pressed the bully/ troll will be sent 100,000 messages on his profile every hour until he/ she deletes their account.",
  },
  {
    idea: "A TV that automatically adjusts its brightness according to the light in my room.",
  },
  { idea: "A SnapChat story devoted solely to dogs." },
  { idea: "A forehead slap emoji." },
  { idea: "A children’s school lunch delivery service." },
  {
    idea: "New iPhone x should have a feature where you can pull a face and it turns it into an emoji.",
  },
  { idea: "A pancake drive-thru." },
  {
    idea: "Privately like a photo on Facebook, the user sees that you liked it but nobody else can.",
  },
  {
    idea: "An iMessage nudge button for when people are taking too long to reply.",
  },
  {
    idea: "Snapchat face recognition for dogs and cats with their own set of face filters. Human filters for dogs.",
  },
  {
    idea: "An app where you can pull music from different streaming services to make a playlist.",
  },
  {
    idea: "A Twitter feature where when you got into an argument with someone you could switch it to audio.",
  },
  {
    idea: "AR app where I point my phone at someone speaking and it displays the voice/speech in text for the hearing impaired.",
  },
  {
    idea: "An app where you announce when you’re going to leave a library seat so those looking for seats can switch out with you.",
  },
  { idea: "A restaurant that only does birthday parties." },
  {
    idea: "A web/mobile app that allows users to join a room, and add music to the queue.",
  },
  {
    idea: "A trading app like Tinder where you trade items like furniture, phones, and other things.",
  },
  {
    idea: "A service that purchases, tracks, and syncs an eBook & its audiobook, so you can effortlessly transition to reading and listening to your book.",
  },
  {
    idea: "Fly sensored windows. A double window pane that allows the fly exit your house. When a fly lands on the window the inner pane of your glass opens forcing the fly to the next window pane. The inner pane closes as the outer pane opens.",
  },
  { idea: "Credit card with a pullout pen tip to write with." },
  {
    idea: "Netflix pilot season, Netflix showcase new pilots and the most popular pilots get their own series",
  },
  {
    idea: "Facebook should have an optional ‘seen’ feature which hides posts that you have looked at or marked as uninteresting.",
  },
  { idea: "Image zoom in on all images on all social networks." },
  {
    idea: "Bank Cards should use a QR Code to store information. The current contacts of the chip get damaged easily",
  },
  {
    idea: "An app where you can enter a persons license plate and complain about their driving.",
  },
  {
    idea: "An option when online shopping where it shows a model the same size and build as you wearing the item of clothing.",
  },
  { idea: "A way to mute quote tweets" },
  {
    idea: "An app where small youtube creators can connect/support each other.",
  },
  { idea: "An option on twitter to block a certain community on twitter." },
  {
    idea: "A way to tell advertisers that I already use their product so I could stop seeing/hearing their ad.",
  },
  {
    idea: "A way to “like” emails. That way people know I received them, but they also know I’m too lazy to respond.",
  },
  { idea: "Milkshake delivery service." },
  { idea: "Women’s sports magazine, covers women’s football, rugby etc" },
  { idea: "A TCM Netflix-style service just for old movies." },
  { idea: "A service that delivered coffee every morning." },
  {
    idea: "An alarm clock that turns your lights on so you can’t fall back asleep.",
  },
  {
    idea: "A button in Google results that would say “Never show me this website ever again”.",
  },
  {
    idea: "A twitter function to block/mute a thread, but not the actual people involved.",
  },
  { idea: "Voicemail for WhatsApp" },
  { idea: "Twitter feature to “hide my tweets from” option." },
  {
    idea: "Expressions of emotions through your keyboard. The harder you press on the keys the larger the letters.",
  },
  { idea: "Twitter should have a save draft feature." },
  {
    idea: "Airport locker storage for items you can’t bring on a plane but don’t want to throw away. Option to pay on collect on way back.",
  },
  {
    idea: "A way to reply to Facebook, Twitter and Instagram messages on one platform.",
  },
  {
    idea: "A way to like or dislike TV ads via your remote. Some advertisers need to know how bad their ads are.",
  },
  {
    idea: "A way of knowing which of your twitter followers muted you, so that you can unfollow them.",
  },
  { idea: "A way to custom the “you are blocked because <reason>” message." },
  { idea: "WhatsApp should have filters like SnapChat" },
  { idea: "A way to block automated messages being sent to me on Twitter." },
  {
    idea: "Banks should send a confirmation notification to the sender that money has been received.",
  },
  {
    idea: "Bluetooth heated socks. Socks that you can heat via your phones Bluetooth for those winter nights.",
  },
  {
    idea: "Bath mode for your iPhone. Block calls and texts so you don’t get any frights and drop your phone. The mode still allows access to wifi for browsing.",
  },
  { idea: "A machine that automatically unracks your weights for you." },
  {
    idea: "Netflix feature where you can talk to people who are currently watching the same show as you.",
  },
  {
    idea: "Twitter should allow you view poll results without having to vote.",
  },
  {
    idea: "An Air BnB feature which allows users in disaster areas to offer their homes to stay in for free.",
  },
  { idea: "Direction tag on fitted bed sheet." },
  { idea: "A drive thru that sells candy." },
  {
    idea: "Incognito mode for Netflix so i could secretly watch embarrassing awful things.",
  },
  { idea: "Add a button to alarm clock apps for “tomorrow is my day off”" },
  {
    idea: "Actors should share what film scripts they get and ask their fans “should I act in this”",
  },
  { idea: "A completely unbiased news channel that is publicly funded." },
  { idea: "A 24 hour Christmas TV channel. Plays all the classics 24/7" },
  {
    idea: "Adobe should have a shared feature where people can work on Illustrator or Photoshop together.",
  },
  {
    idea: "Make an option on Netflix similar to the kid’s area, but for seniors. Have it stocked with old westerns. The design layout could be simplified with increased font size etc.",
  },
  {
    idea: "Apple Music feature to tell you how many people are listening to the track your listening to.",
  },
  { idea: "A monthly subscription box for candles." },
  {
    idea: "A way to ‘retweet’ photos on Instagram and not on a third party app.",
  },
  {
    idea: "An edit button on Instagram where you could edit your pictures and change the order of them.",
  },
  {
    idea: "To celebrate Australia day google should flip all search results text upside down.",
  },
  { idea: "Find my iPhone app clone for my glasses." },
  {
    idea: "Facebook should limit the number of likes each person gets per month. That way when you get a like from a friend it will mean so much more.",
  },
  {
    idea: "Facebook should implement a feature for missing children that when a child goes missing in your area then there missing person poster will be pinned to your newsfeed.",
  },
  {
    idea: "Apparently, people with Alzheimer’s respond well when they’re put into environments that mirror certain earlier decades with which they were familiar when, like the 1930’s, 1940’s or 1950’s. Create a VR app where people with Alzheimer’s can be transported back to an environment that they are familiar with.",
  },
  {
    idea: "A chrome extension that finds the source of articles so you don’t have to go searching when the author doesn’t share it.",
  },
  { idea: "iMessage feature to search messages for keywords." },
  {
    idea: "A chrome extension that replaces Donald Trumps face with ? emoji.",
  },
  {
    idea: "An app where you type in an artist name and it gives you a list of every song ever made/featured on in chronological order",
  },
  {
    idea: "A book club app. Each week your given a book to read and review. The review will be done in a group message chat.",
  },
  {
    idea: "An app where it lets you know all the sales around you based on your location.",
  },
  {
    idea: "FaceTime feature to let me leave a video message if the person doesn’t answer the phone.",
  },
  {
    idea: "An app where you can buy and sell unused space in nearby wheelie bins.",
  },
  { idea: "iPhone should hire David Attenborough as the new voice of Siri." },
  {
    idea: "An app where you can rate airplane food called snacks on a plane.",
  },
  {
    idea: "When you click a Google search result it should take you to the words you searched for.",
  },
  {
    idea: "An app that allows you to see when charity shop donations are needed. For example, Age Action Ireland in Camden Street needs donations.",
  },
  {
    idea: "When you buy a paper version of a book on Amazon (or the kindle version), the kindle version (or the book) can be bought at a reduced price.",
  },
  {
    idea: "An app where people sign up to show up at dirty Airbnb rooms and leave it cleaned up in exchange for staying free.",
  },
  {
    idea: "“Shits and Giggles” app. An app that downloads content throughout the day, so you can browse while on the toilet even if you don’t have WIFI.",
  },
  {
    idea: "An Instagram like app but only for newly bought clothes where you can only publish if you also scan the barcode with your camera. Then people give points so that you choose the best outfit.",
  },
  {
    idea: "Google Maps should display how long the drive through is at McDonald’s.",
  },
  { idea: "Automatically separate bookmarks in the browser by topics" },
  {
    idea: "An app where you input the weather you want, and it shows the nearest locations where the forecast matches your weather needs.",
  },
  { idea: "An option to make certain tweets private." },
  { idea: "A smart belt that can charge your phone." },
  {
    idea: "Develop jacket with airbags for protecting elderly people when falling.",
  },
  {
    idea: "A restaurant that use AR to transport its customers to other parts of the world and create a completely immersive experience.",
  },
  {
    idea: "WhatsApp feature to allow you to forward a whole conversation rather than individual messages.",
  },
  {
    idea: "An IOS app for prioritising notifications and showing them based on time and day.",
  },
  {
    idea: "A smart television that is smart enough to recognise that kids are watching too close and turns itself off",
  },
  {
    idea: "An app where I input foods that I like and it tells me where I should eat for lunch based on my location.",
  },
  {
    idea: "A camera app that gives you a subtle vibrate feel when the phone is perfectly level",
  },
  {
    idea: "Shazam should have a feature that lets you know you’ve already Shazamed a song so you don’t repeat yourself.",
  },
  {
    idea: "AR glasses that shows peoples social handles floating above their head. Connect with people who seem interesting.",
  },
  { idea: "Social network for Gaeilgeoiri (Irish speakers)." },
  {
    idea: "Milk bottle cap that changes colour when the milk starts to go off.",
  },
  { idea: "A silent coffee machine." },
  {
    idea: "An app that lets people who speak different languages communicate using images instead of words.",
  },
  {
    idea: "Youtube “play this video next” button on each of the related videos.",
  },
  {
    idea: "Toilet and bathroom lights that will be dimmed during the night.",
  },
  { idea: "Facial recognition camera to start the car" },
  {
    idea: "Mini space probes individuals can launch into space. Receive pics & info on your own space probe!",
  },
  {
    idea: "Sun lotion dispensers and/or hand lotion dispensers in public and private bathrooms",
  },
  {
    idea: "Smart physical wallet that knows whats inside it and connects it to your budget file on your computer automatically",
  },
  {
    idea: "A laundry basket that compacts your clothes into a small cube to toss in the wash.",
  },
  {
    idea: "Wireless headphones that store playlists so no need to bring the phone on a jog/to the gym.",
  },
  {
    idea: "A Marco Polo type app that can respond to voice commands to help me find my phone.",
  },
  {
    idea: "Spectacles that change glass colour according to the person’s mood sensed by spec frame.",
  },
  {
    idea: "Access all your social media in one simple to use app that shows how much time you spend each day on social media.",
  },
  {
    idea: "Smart car that recognises your mood when you get in and selects the right music for the moment.",
  },
  {
    idea: "An identification app that shows the users age with the scan of a fingerprint, to curb underage drinking.",
  },
  {
    idea: "An app where you can point your phone’s camera at any logo and have it tell you who designed the logo and any previous versions.",
  },
  {
    idea: "Car windscreen that prevents full power headlights from blinding drivers.",
  },
  {
    idea: "A news site that is as unbiased as possible. Merges articles from multiple sources.",
  },
  {
    idea: "Netflix should group movie series like TV shows. That way, it’s a lot easier to binge a movie series.",
  },
  {
    idea: "Dog food that has wild flower seeds in it, for those owners who refuse to pick up.",
  },
  {
    idea: "Material for inside a mug, which doesn’t allow for tea/coffee to leave circle lines.",
  },
  {
    idea: "Swimming pool sensor to prevent drownings. It can float in the water and alert if a child / person is underwater too long.",
  },
  {
    idea: "Object recognition scanners at checkouts so that all those sticky labels on fruit & veg can be eliminated!",
  },
  {
    idea: "A site where your family stores videos/ photos of family members describing themselves. Then your descendants can view videos of their ancestors in the future.",
  },
  {
    idea: "An app that allows you to order drinks at the bar and alerts you when it’s ready. No more yelling at the barman.",
  },
  {
    idea: "An app that instantly takes screenshots of Donald Trumps tweets before he deletes them.",
  },
  {
    idea: "AI city guide with routes, navigation, voice guidance and AR for tourism and sale.",
  },
  {
    idea: "Self-floating umbrella to avoid sun burns while swimming in the sea.",
  },
  {
    idea: "Google Maps should send me a push notification if I get close to a place I added on my “Want to go” list.",
  },
  {
    idea: "A wine glass with a mechanism to instantly chill a wine and keep it cold (liquid nitrogen in the stem).",
  },
  {
    idea: "A browser extension that automatically resets Facebook feed to “Most Recent”.",
  },
  {
    idea: "A social network where users benefit financially from the information being shared about them with marketers.",
  },
  { idea: "A sharing and rating platform for events." },
  {
    idea: "A clothes dryer that automatically folds your clothes when they are dried.",
  },
  { idea: "Plant pots that change color when they are dry." },
  { idea: "Bulbs that change color when there about to stop working." },
  {
    idea: "Solar car roof activates Air Con when a car reaches 95 degrees. Great way to save both human and animal lives.",
  },
  {
    idea: "Ex deleter. An app that goes through all your photos and uses AI to identify your ex-boyfriend/ girlfriend and swaps their face with your best friend.",
  },
  {
    idea: "An app where I  scan my grocery receipts and it will track the prices of the items I buy most frequently so I can know when something is on sale for a good price or not.",
  },
  { idea: "Airbnb for venues (wedding, party, etc)" },
  {
    idea: "App Store should have search filters – show me what’s popular, newest, no microtransactions.",
  },
  { idea: "All libraries should have a coffee shop." },
  {
    idea: "Baby food scanner app. The app will help inform you what benefits the food will provide and if it’s safe to give to your baby.",
  },
  {
    idea: "AR event planner app. Design your banners, balloon, etc and see how they would look in your venue through AR.",
  },
  {
    idea: "Laptop Finder website. You tell the website what apps// tools you intend to use and it will tell you which laptop to buy based on your needs.",
  },
  {
    idea: "GoHelpMe. A site similar to GoFundMe but you offer your help or volunteer depending on what they’re trying to accomplish.",
  },
  {
    idea: "Jobs should come with a 5-7 day free trial to see if you like the people, atmosphere, etc.",
  },
  { idea: "Snapchat should create a Stranger things ‘Upside down’ filter." },
  {
    idea: "Travel Ticker app. You will be able to see a map of the world with the countries left to visit. Each country you visit will be removed.",
  },
  {
    idea: "E-commerce sites should offer the ability to have slower shipping.",
  },
  {
    idea: "AI carbon monoxide detectors that  automatically open windows when activated,",
  },
  {
    idea: "Airbnb for homeless people. Allow homeowners to post listings for homeless people.",
  },
  { idea: "Friend app: Automate messages to your friends once a week." },
  {
    idea: "App Store feature that tells you very clearly where each app was made and also a bullet point summary of these Terms of Service. For example:\n– Very broad copyright license on your content\n– Instagram shares information with any third parties\n– You waive your right to a class action",
  },
  { idea: "Augmented Reality  Ghostbusters game for Android/ iPhone" },
  {
    idea: "An app that tells you where the closest building is to you that will allow you to use their plug socket.",
  },
  {
    idea: "Recipe website that not only takes you straight to the recipe but fixes the seasoning levels to match your tastes.",
  },
  {
    idea: "Augmented Reality Pokemon game for android/ apple watches. Train your Pokemon by walking with the watch.",
  },
  {
    idea: "Once your Facebook post goes viral, your post should be locked in the state it was when you originally posted.",
  },
  {
    idea: "Dating app where you can enter media you didn’t enjoy and it will match you up with potential love interests who also didn’t enjoy it.",
  },
  {
    idea: "Mobile phone feature to block all calls from numbers that are not in your contacts.",
  },
  {
    idea: "IMDB/ Rotten Tomatoes feature called ‘Give up now’ that tells me when I should stop watching a certain TV show because the quality drops considerably.",
  },
  {
    idea: "Fireworks that when exploded make the sign language sign for “BOOM”",
  },
  { idea: "Turn movie theatres that are empty into coworking spaces." },
  { idea: "A fire alarm that plays Nelly – “Hot In Herre” when triggered." },
  {
    idea: "A way to map out your company’s skills per employee, so you never have to ask around for help again. Kind of like knowing everyone’s superpowers.",
  },
  {
    idea: "An app which allows me to take a picture of a business card, scan it and then save it in some spreadsheet or to some CRM.",
  },
  { idea: "Netflix theater that plays all the exclusive Netflix movies." },
  { idea: "Twitter feature to search your DMs." },
  {
    idea: "Photography feedback site where you share your edits and get real-time feedback from the community.",
  },
  {
    idea: "Alarm clock that is synced to your PayPal/ Stripe. You set your daily revenue target and if you achieve that target while you sleep then the alarm allows you a lie in otherwise it will wake you up.",
  },
  {
    idea: "An oven that notes the last time your oven door was shut closed.",
  },
  { idea: "Smoke detector in mobile phones." },
  { idea: "Separate buttons for opening selfie camera and forward camera." },
  {
    idea: "Similar to Medium highlight tool. A Netflix feature where you can highlight a section of a show/movie and share it across your Instagram/ Twitter/ Facebook profile. For example “I love this scene in Step Brothers“ Maximum length set at 5mins. Great growth tool for",
  },
  {
    idea: "An alarm clock that gives away spoilers to your favourite TV shows the longer you sleep.",
  },
  {
    idea: "A heated mouse. Keep your hand warm while you work during the winter days in work.",
  },
  { idea: "Tinder for single parents called PlayDate." },
  {
    idea: "QR code headstones and virtual tours featuring dead people talking about themselves.",
  },
  { idea: "Pez dispenser style toothpaste that comes in pellet form." },
  {
    idea: "A circus where the audience wears AR goggles and the people perform with monsters.",
  },
  { idea: "Pinata VR game for people who are stressed out." },
  {
    idea: "An iPhone feature where you could use your camera to highlight over passages from a book and then save them.",
  },
  { idea: "Gyms should install elastic hair bands dispensing machines." },
  { idea: "A boxing bag made out of bubble wrap" },
  {
    idea: "An app that informs you when your food is nearing its expiry date. The app will notify you when you have 2–3 days left or a set time along with creative recipe ideas to use up the food and stop wastage.",
  },
  {
    idea: "An iMessage feature that notifies you when someone opens your message.",
  },
  {
    idea: "An IOS app that imitates a Bluetooth mouse using the phone’s camera to track a surface.",
  },
  { idea: "Create glitter tattoo ink." },
  {
    idea: "When you’re typing a message your phone should automatically replace the period key with a question mark when they detect you are typing a question.",
  },
  {
    idea: "You can test drive a car, you should be able to test drive mobile carriers to see which one best suits you.",
  },
  {
    idea: "There should be the option to send a “Whenever” text, so the message doesn’t disturb the recipient and they receive the message “Whenever” they next check their phone.",
  },
  { idea: "Tinder-style app to connect young professionals with mentors." },
  {
    idea: "A perfume that adapts to the environment you are in. If in a closed space, it reduces the smell and otherwise increases it",
  },
  {
    idea: "A smart microwave that automatically stops and stirs your food halfway through the power duration.",
  },
  {
    idea: "iMessage/ Whats App should have a transcribe feature for when you get a voice message but are unable to listen.",
  },
  {
    idea: "Pregnancy delivery service that provides a weekly meal plan along with supplements to help promote a healthy Pregnancy pregnancy .",
  },
  {
    idea: "All bank apps should have the option to let them know your on holidays.",
  },
  { idea: "A dishwasher for makeup brushes" },
  {
    idea: "A device like Ring/NestCam that you can mount in your car when you get motion alerts.",
  },
  {
    idea: "Horror audiobooks sound come with horror movie sound effects. Imagine listening to a book like Michael Myers with those sounds.",
  },
  {
    idea: "The muting option on Twitter is a beautiful thing. I wish there was an IG equivalent.",
  },
  {
    idea: "GTA feature where you could scan your face and insert your height and weight, so you can make yourself in GTA",
  },
  {
    idea: "All restaurant/ cafes/ businesses, in general, should have buttons you can kick to open the door for people in wheelchairs.",
  },
  {
    idea: "An alarm clock that slaps you awake if you hit snooze more than once",
  },
  {
    idea: "Uber for Healthcare. health app where patients can communicate with healthcare professionals in real time, hail ambulances in case of emergencies, order drugs from registered pharmacies and many other features.",
  },
  {
    idea: "An app or a website where you can exchange gift cards for other gift cards.",
  },
  {
    idea: "An app where you can take a picture of a list of names and numbers and it automatically saves them in your contacts",
  },
  {
    idea: "YouTube should make an update where I can still listen to music when the app is closed.",
  },
  {
    idea: "A “Remove Song for X amount of hours” button for music apps with playlists so you can modify a playlist for a specific occasion without having to permanently remove from a playlist",
  },
  {
    idea: "A “real news” authority that fact checks articles and appends a badge for certified real articles.",
  },
  {
    idea: "An app where people share their ideas and investors can read them and reach out to potentially do business if they see the concept going anywhere.",
  },
  { idea: "Option on FaceTime to leave a voicemail." },
  {
    idea: "Socks that come in 3, so you have a spare for when the washing/ dryer machine decides to eat one.",
  },
  {
    idea: "Netflix should offer a theatrical trailer option on every movie, to help you decide what to watch.",
  },
  {
    idea: "A tap with a small LCD screen that measures how much water has come out since the last reset.",
  },
  {
    idea: "Highlighting text and pressing left/right shift to increase/decrease the font size.",
  },
  {
    idea: "For April 1st every social network should make their default font Comic Sans for the day.",
  },
  {
    idea: "Save me app. Is your date going poorly? Hit up Save Me and get some stranger to kill the date.",
  },
  {
    idea: "A service that will contact all of the businesses/ services that I’m moving and need to end/transfer/ change my address.",
  },
  {
    idea: "A website similar to genius.com, but instead of lyrics, transcribes and explains the jokes in every movie and television show.",
  },
  {
    idea: "An app where I can scan a menu at a fancy restaurant and it tells me what all the words mean.",
  },
  {
    idea: "An app where it harasses people who owe you money until they pay you back.",
  },
  {
    idea: "Couches at the front of every store for boyfriends that got dragged along.",
  },
  {
    idea: "A self-heating butter dish that keeps the butter at a perfect softness for bread.",
  },
  { idea: "Undo delete button on iPhone Mail app." },
  { idea: "A VR Pacific Rim where you play as a Kaiju." },
  { idea: "Drive-thru wood-fired pizza." },
  {
    idea: "An app where you tap a button to indicate you’re hungry, your other friends open the app and know which of their other friends are also hungry.",
  },
  {
    idea: "Youtube should have a “full tab” button in addition to “full screen” mode.",
  },
  {
    idea: "A chrome extension for google image search that automatically shows you the highest resolution image that’s available.",
  },
  {
    idea: "An app where you draft a tweet & app suggests more constructive wording.",
  },
  {
    idea: "Netflix should have a ‘show me a random episode’ where you could get a random selection of any episode from a series.",
  },
  { idea: "An app where you can design a house exterior and interior." },
  {
    idea: "Scream app. An app where you can vent your anger and frustration into the app. View a map of the world and listen to others screams.",
  },
  {
    idea: "YouTube should adjust its algorithm so that the later at night you are watching, the weirder the recommended videos become.",
  },
  {
    idea: "An app where you scan your plate and it tells you how many calories it is.",
  },
  {
    idea: "A hybrid shopping cart/ ambulance gurney so that you can just push the cart into your car boot.",
  },
  {
    idea: "An app where I can turn my heated blanket on from my phone so my bed is warm when I get home.",
  },
  {
    idea: "Pay to enter public bathrooms, your money will be returned to you when you wash your hands.",
  },
  {
    idea: "A delivery service that allows local people to pool items to meet the minimum order for delivery",
  },
  {
    idea: "A truck that picks up your bike and brings it home for you when you can’t bike home due to bad weather.",
  },
  {
    idea: "A Gmail feature that automatically sends you to BCC after you’ve made an email intro.",
  },
  { idea: "Airbnb filter to select haunted houses." },
  {
    idea: "An app where you could type in how your feeling and it would bring up songs to listen to.",
  },
  {
    idea: "A setting on my phone where I could choose to never, ever be asked to rate an app.",
  },
  { idea: "Twitter feature to disable quote retweet" },
  { idea: "An app where gig-goers can share hotels, transport etc." },
  {
    idea: "An app to block your social network apps when you’re in proximity to other people with the same app. Help to promote conversations.",
  },
  {
    idea: "An AR social fitness app where you build a character that increases strength/ superpowers the more you work out. Then you battle other players in your gym. Increase certain stats by doing certain exercises eg. Squats give you higher leg power.",
  },
  {
    idea: "Facebook, Instagram, Twitter should hide the amount of like a post has to reduce the hive mentality.",
  },
  {
    idea: "Tinder-style app where people post their resumés and swipe on companies they would like to work and if you get a match you get an interview until you interact with them to eliminate the hive mind",
  },
  {
    idea: "A Cartoon Network VR game where you have the ability to jump into any show and play mini-games.",
  },
  { idea: "Tinder-style app but only for memes." },
  {
    idea: "An app where your alarm goes off once your battery is fully charged.",
  },
  {
    idea: "Car headlight ‘brights’ that automatically switch to normal when other cars approach at night and then switch back the ‘bright’ mode.",
  },
  {
    idea: "A wiki page per group conversation in Whatsapp. Makes it easier to organize.",
  },
  {
    idea: "A chrome extension that automatically clicks the ‘skip this ad’ button on Youtube.",
  },
  {
    idea: "An app where you scan the grocery receipt that puts the items in a digital pantry and tells you what you can make with what you have",
  },
  {
    idea: "An app where people share their daily routines. Be amazing to find the daily routines of anyone that you admire.",
  },
  {
    idea: "App called SkateSpot where you can take pictures of good skating spots in your area and see spots other people have found.",
  },
  { idea: "An option to schedule Facebook messages" },
  {
    idea: "An algorithm that could scan my business email for bullshit. Keywords to alert would be “influencer, ambassador, innovators, limited, exclusive, VIP package, curate, platform, collaborator",
  },
  {
    idea: "The car headlights brightness that automatically reduces to normal when other cars approach at night and then increase the brightness when it passes.",
  },
  {
    idea: "An IMDB for startups. The ability to search for a startup idea and see if it’s been done before and if it was a success or a failure. Features such as team size, sales, insights are included etc.",
  },
  {
    idea: "WhatsApp feature where you can appear offline to certain people so they can’t message you during certain hours.",
  },
  {
    idea: "The ability to let people know you don’t mind sharing gym equipment by adding coloured bands. Green means ‘you can jump in’ red means ‘wait till I’m done’",
  },
  {
    idea: "We all know social media can cause depression. Insurance companies should start paying you for not using Facebook, Instagram, Twitter and other social networks so often.",
  },
  {
    idea: "Playgrounds should block WIFI/ 3G on mobile phones so that parents spend more time playing with their kids instead of on their phones.",
  },
  { idea: "Dark Mode for every single webpage and every single app." },
  {
    idea: "A Duolingo type of app that taught you how to speak in different accents.",
  },
  {
    idea: "Free bus journeys with the requirement that you must watch ads for the entirety of your bus journey.",
  },
  {
    idea: "An app where men can report which places lack baby changing tables in the men’s room.",
  },
  {
    idea: "VR on Pinterest so that you could walk through different color schemes, interactive houses, kitchens etc.",
  },
  {
    idea: "An app where a random song would play that matches the amount of time it will take for me to get home.",
  },
  {
    idea: "A cookbook loaded with recipes for meals that you and your pets can eat together.",
  },
  {
    idea: "A browser extension that replaces pictures of Trump’s face when you’re browsing Facebook with a picture of a kitten.",
  },
  { idea: "An app that tells you where the nearest mailbox is." },
  {
    idea: "A way to save a perfectly shuffled Spotify playlist in that order.",
  },
  {
    idea: "A time-delay capsule that contains 400mg of caffeine. Take it before you go to bed. 8 hours later it begins releasing the dosage.",
  },
  {
    idea: "A dating app that doesn’t have ghost accounts or spam you can only contact someone new once per day.",
  },
  {
    idea: "An astrology dating app, where you can match people compatible with your natal charts",
  },
  {
    idea: "Uber service where the driver & a passenger could drive you and your car home.",
  },
  {
    idea: "A dating app where your profile is automatically be labeled as “Unavailable” if you have an unread message. People can still send you messages but they will know that you probably won’t answer because of the label.",
  },
  {
    idea: "In google maps, they should also show the speed limit of each street on the maps, so when you’re unsure there’s nothing to worry about.",
  },
  {
    idea: "Socks that generate electricity every time you take a step inside your house.",
  },
  {
    idea: "There should be a breathalyzer to show how sick you are. This would be fair to employers/employees alike. Measure amount of bile, pathogens in breath/blood",
  },
  {
    idea: "WhatsApp feature where you can preview a photo someone sent you by holding down your finger from your locked screen",
  },
  {
    idea: "Facebook “bookmark” feature where if you get halfway through your feed and have to get off or accidentally hit refresh then you can go back to where you left.",
  },
  { idea: "An app where you can view the seats available in coffee shops" },
  {
    idea: "An app for travelers, where you could click a city and a community would recommend you things to try, such as restaurants, places to visit and any secret spots.",
  },
  {
    idea: "App that turn off all sounds and alarms when you “shhh” at them.",
  },
  {
    idea: "Social media profanity crawler. The crawler will examine all your social posts and delete anything that contains any profanity. Good for when you’re going for a job interview.",
  },
  { idea: "A website where you can track all of your packages at once." },
  {
    idea: "A meme search engine where you could describe a reaction picture you saw and it would pull it up for you.",
  },
  {
    idea: "Elevators should know when it’s full so it doesn’t make unnecessary stops on other floors.",
  },
  {
    idea: "Water bottles with built-in alarms which start beeping if you haven’t opened them after X amount of time.",
  },
  {
    idea: "Netflix feature where you can talk to your friends who are currently watching the same movie as you.",
  },
  {
    idea: "An app where people who are alone at restaurants can identify others who’d like someone to eat with?",
  },
  { idea: "A “hide tweet from ____” option on Twitter." },
  { idea: "Twitter feature to allow you 120 seconds to edit your tweet." },
  {
    idea: "An app where you can use your GPS location to find a local cleanup, or you can make your own by drawing on a map of the location you’re looking to clean up. Store the info where cleanups are completed and have different colors representing when the area was cleaned last.",
  },
  {
    idea: "An App where you enter your mental problem on your profile and it looks for similar and people in your location to chat with?",
  },
  {
    idea: "Aircraft toilets should be designed in the same style of plane seats",
  },
  {
    idea: "A browser add-on/extension that sources and replaces the low-quality images of the cast list on IMDB.",
  },
  {
    idea: "Anyone who wants to buy a gun should have to get approval from a Psychologist before purchasing.",
  },
  {
    idea: "Tinder should alert you when people you super like swipe left on you.",
  },
  {
    idea: "Air Guitar app. Record, view and rate users air guitars. Choose from a list of songs to shred.",
  },
  {
    idea: "Google noise map for streets — can be helpful when booking a hotel.",
  },
  {
    idea: "Netflix should introduce ads on their platform but make it optional. If the viewer accepts they should get a cut of the profit.",
  },
  {
    idea: "Drunk tracker. An app where you and your friends can connect your GPS locations so later on in the night if your drunken friends go missing you can see where they are and if their safe or not.",
  },
  {
    idea: "An app that analyzes text messages or conversations and tells you the most effective way to respond or interact based on context.",
  },
  { idea: "Toilet paper rolls should be made out of flushable materials." },
  {
    idea: "AR app for smart glasses that turns a really big crowd into a small group of very encouraging friends for public speaking.",
  },
  { idea: "A Netflix setting to permanently skip all show intro." },
  {
    idea: "Snapchat should show your last set of messages when someone responds so you don’t forget all the time.",
  },
  {
    idea: "Phone app that regularly asks if you’re alive. In the result of your death, it will delete your browser history and hard drive.",
  },
  {
    idea: "A Chrome Plugin that removes Pinterest links out of all Google searches.",
  },
  {
    idea: "An app just like Waze where we could check the influx of people in a place or event.",
  },
  { idea: "A mobile phone feature that converts sound/ text into emoji" },
  {
    idea: "A gym/ networking app. Find workout partners with similar interests so you can train and network at the same time.",
  },
  {
    idea: "Every time someone is shot in the US, Twitter should remove 1,000 of Trump’s followers until he actually does something.",
  },
  {
    idea: "An app that you can scan your food receipts from a picture and it will tell you how often you buy certain items and then make an automated grocery list of the items you buy often enough.",
  },
  {
    idea: "An app that scans your music library, and tracks those artists upcoming gigs.",
  },
  { idea: "A way to turn off YouTube Red Originals in my suggestions." },
  {
    idea: "Pop tart wrappers should have the flavor of pop tart on the wrapper.",
  },
  { idea: "A smart shirt that changes color when you sweat." },
  {
    idea: "AudioBooks that play a particular song or track during a scene. For example, playing action music during a fight scene",
  },
  {
    idea: "A ‘do not disturb’ mode in the UBER app that you can turn on to let the driver know that you’re not in the mood for trivial small-talk.",
  },
  {
    idea: "Detachable soles that can be swapped out for varying terrains and replaced when they deteriorate.",
  },
  {
    idea: "Plastic spoons that you peel a cover off of and they are full of peanut butter or Nutella.",
  },
  { idea: "Rosetta Stone should offer job-specific options." },
  {
    idea: "A restaurant that you can subscribe to (just like a gym membership) where you can go to eat with your subscription card every day.",
  },
  {
    idea: "A way to let retailers know you’ve already purchased their item you were checking out online & no longer need the ad reminders.",
  },
  {
    idea: "A flying subscription where you pay a certain amount of money a month and then you can fly anywhere in the world.",
  },
  {
    idea: "Instagram should auto suggest hashtags based on what you’re posting about.",
  },
  {
    idea: "Hoodie strings that are earphones. Traffic lights should have a pedestrian crossing foot button so you don’t have to touch it with your hands.",
  },
  {
    idea: "A pedal on the side of the toilet that you can press with your foot.",
  },
  {
    idea: "A “local businesses only” search filter for Yelp, Google, etc. so I can support the interesting places in cities I’m otherwise unfamiliar with.",
  },
  {
    idea: "The tear strip on the Amazon book packaging should double as a tear-off bookmark.",
  },
  { idea: "A colour picker for fonts." },
  {
    idea: "A meal planning app where you can input budget criteria, and have an exclusions list of things I don’t want it to suggest I cook.",
  },
  {
    idea: "A pet microchip that works with an app, so that if your pet is lost, you can initiate it, and see where the dog or cat is located.",
  },
  {
    idea: "An app where I can paste recipe links and it outputs a grocery list.",
  },
  {
    idea: "An app that had protests listed in your area, what they’re for, and where and when they’re meeting.",
  },
  {
    idea: "Netflix filter “don’t show me suggestions with X person in them”.",
  },
  {
    idea: "A solar panel blanket that during the day the sun charges to keep the homeless warm at night.",
  },
  {
    idea: "Winter Gloves that vibrate when you get a message or a phone call.",
  },
  {
    idea: "A feature on Spotify to sort a playlist by tempo so as the party gets started the tempo can gradually pick up the vibe as the night progresses.",
  },
  {
    idea: "All supermarkets should allow you to round up your total and give the remainder to charity.",
  },
  {
    idea: "A “stalking mode” on Instagram that lets you browse with the like button removed.",
  },
  { idea: "AirBNB for swimming pools." },
  {
    idea: "A web crawler that finds copied images/text on a site, to help find copyright violations.",
  },
  {
    idea: "A Netflix for online newspapers, which is a universal paywall remover.",
  },
  {
    idea: "Transparent toothpaste tubes so we can squeeze the remaining toothpaste more efficiently.",
  },
  { idea: "Roomba, but to clear snow on your driveway." },
  { idea: "An amber alert system app for dogs." },
  {
    idea: "A weather app feature where every day you record whether you personally think that day is cold or not and then over time, it predicts whether you’ll find that day cold.",
  },
  {
    idea: "Apple should have a feature that lets you, group, alarms for people who need ten each time they want to wake up.",
  },
  { idea: "A “secretly follow” option on Twitter." },
  { idea: "Skateboards with built-in GPS." },
  {
    idea: "An app that alerts you when your ex-girlfriend or ex-boyfriend is around so you can avoid them.",
  },
  { idea: "Plant pots that change colour when they need water." },
  { idea: "A scented candle that smelled like when you blow out a candle." },
  {
    idea: "A heated bike saddle for the night it’s been freezing and your saddle is all cold and hard.",
  },
  { idea: "Baby bottle with Temperature Indicator." },
  {
    idea: "A baby bottle that changes colour when it’s at the perfect temperature for feeding.",
  },
  {
    idea: "Virtual pet app that you keep alive with exercise and healthy eating.",
  },
  {
    idea: "Apple music search function where you can find local music artists based on your location.",
  },
  {
    idea: "iPhone plug that unplugs itself from the socket after your phone is charged",
  },
  { idea: "Instagram should allow voice comments." },
  { idea: "Cars should have a U-Turn light." },
  {
    idea: "Clothes should have a section where the material is the same as the material you clean your glasses.",
  },
  {
    idea: "Apple Music charts should be based on how much you press next after the song comes on.",
  },
  { idea: "An upcoming concert site with song samples next to each artist" },
  {
    idea: "An app where you can pay people to write subtitles for YouTube videos in foreign languages.",
  },
  {
    idea: "Tiny windshield wipers for your glasses to help you see when it’s raining.",
  },
  {
    idea: "Children’s TV programmes should have subtitles to help children learn to read.",
  },
  { idea: "Soda companies should sell assorted ‘party packs’" },
  {
    idea: "Aroma alarm clock that releases a smell that starts off gentle but gets more pungent the longer you ignore it.",
  },
  { idea: "Iced coffee delivery service." },
  {
    idea: "An app that tells you where the nearest cup of coffee is during a power outage.",
  },
  { idea: "The ability to save Instagram story links for later use." },
  { idea: "All cars should have built-in trash cans in front and back." },
  {
    idea: "A gym that reduces your monthly fee based on how frequent you go.",
  },
  {
    idea: "An app similar to Tinder, where you get matched with lonely elderly people to keep company.",
  },
  {
    idea: "Adobe should have a cloud feature where people can work in Illustrator or Photoshop together.",
  },
  {
    idea: "A standard on all smartphones so when you dial 911, it goes into an emergency black box mode. It kills non-essential processes to extend battery, starts recording video from front & rear cams, and locks phone into this mode until the biometric + special passcode is entered.",
  },
  {
    idea: "Smartphone App to see inside Greeting Cards by simply scanning the card.",
  },
  {
    idea: "A database of scanned diaries with the ability to name swap all of the first and last names to keep it anonymous if you wish.",
  },
  { idea: "A taxi & a psychiatrist service." },
  {
    idea: "Restaurants/ Cafes that blocks your phones wifi so you can only receive phone calls.",
  },
  {
    idea: "Toothpaste should come in aerosol cans similar to shaving cream.",
  },
  {
    idea: "A Gmail folder that if you add any emails it will automatically unsubscribe for you.",
  },
  {
    idea: "Netflix should add a feature when you hover over the time left in a show it also displays the clock time it will be finished at",
  },
  { idea: "Netflix feature to disable the goddamned auto-play trailers." },
  {
    idea: "An app where you post 3 selfies and people tell you which of them is the best.",
  },
  {
    idea: "ShazHum. An app where if you know the Melody of a song but not the lyrics you could just hum the melody. The app matches it up with the song you’re humming about.",
  },
  {
    idea: "Two types of alarms on your phone, a standard alarm, then a ‘wake up’ alarm that starts off quiet and gradually gets louder.",
  },
  {
    idea: "A drunk mode on your phone that you set before drinking, it will not let you send a text to certain people before asking you and double checking with you in order to send it.",
  },
  {
    idea: "Amazon should pick-up your old boxes when you get a new package.",
  },
  {
    idea: "Amazon should prompt you to give follow-up reviews a year after purchasing to assess durability and usefulness.",
  },
  {
    idea: "An alarm clock that switches your lights on so you can’t fall back asleep.",
  },
  { idea: "An iPhone app that gets rid of in-app ads?" },
  {
    idea: "Microwaves should have a mute button for when you do not want to hear the loud beep.",
  },
  { idea: "GPS tracker that tells jokes in between directions." },
  { idea: "Umbrella Drone. A hands-free umbrella that follows you" },
  {
    idea: "Protein scooper that sticks to the top of the inside bag, no more digging for the scooper.",
  },
  {
    idea: "Supermarkets should have a policy where you can put in your email so they can inform you of a recall on an item that you bought.",
  },
  {
    idea: "A smart fridge that turns down the light when you open it at 2 am.",
  },
  {
    idea: "Google Glasses that can subtitle everything for those who have trouble hearing.",
  },
  {
    idea: "A smart microwave knows to beep quietly when you use it at 2 am.",
  },
  { idea: "Bluetooth oven so you can preheat it before you get home." },
  {
    idea: "Glasses that convert sound into light. Imagine you’re hearing-impaired and you can’t hear the doorbell ringing or the baby crying, but what if you could see those sounds?",
  },
  {
    idea: "A dating app where people can leave reviews of a person similar to an Amazon product.",
  },
  {
    idea: "Spotify but for movies. An app where people can make lists of movies for each genre that they like, also the ability to search a friend’s page & see their list of their favourite movies.",
  },
  { idea: "Shazam for math equations." },
  {
    idea: "Smart Bookmarks. If you open a bookmark then move away, it replaces the bookmark with the new page.",
  },
  {
    idea: "Bikes should have small brake lights so cars know if they’re slowing down.",
  },
  {
    idea: "Automatically share your contact details when you place your phone on top of another phone.",
  },
  { idea: "A text search function for things spoken in youtube videos" },
  {
    idea: "An app for people in long-distance relationships where they can watch movies together.",
  },
  {
    idea: "A second car horn specifically when people don’t use their indicators.",
  },
  {
    idea: "A site like WhoSampled that was basically a catalog of every song with its instrumental, acapella & original reference tracks.",
  },
  {
    idea: "Give elderly people discounts to elderly pets at Pet Stores to encourage people to adopt older animals.",
  },
  {
    idea: "A microwave that scans the barcode of your food and automatically cooks it at the proper temperature and time.",
  },
  {
    idea: "An app where you upload a reference picture & it tells you what colour the paints you need are.",
  },
  {
    idea: "An app called ‘Dinder’ where couples find other couples nearby to have dinner with.",
  },
  {
    idea: "A wine glass with a mechanism to instantly chill a wine and keep it cold (liquid nitrogen in the stem).",
  },
  {
    idea: "A light switch that delays the switching off of lights until you can comfortably climb the stairs away from the monsters.",
  },
  {
    idea: "Also, a light switch that automatically turns off after 10 minutes so people will stop leaving the fucking hallway light on at night.",
  },
  { idea: "A website/app that will summarize massive amounts of text." },
  {
    idea: "An app like Tinder but for Instagram photography buddies. Where you could swipe left or right on their content and then if there was a match you could meet up and go take photos together.",
  },
  { idea: "Restaurant just for dogs!" },
  {
    idea: "An app where you upload pictures of your face to your profile and it analyzes your face and filters it to match with other profiles faces that are similar to help you find your doppelgänger!",
  },
  {
    idea: "A food processor that plays the music of your choice to block out the noise.",
  },
  { idea: "Bedroom light switches that glow in the dark" },
  {
    idea: "Netflix option to remove the irritating laughing track on sitcoms.",
  },
  { idea: "Automatic twisting fork for when you’re eating spaghetti" },
  { idea: "A food gift card for the homeless." },
  { idea: "iPhones should require a passcode before they turn off." },
  {
    idea: "Standalone printers that print out the news for those who don’t do well with modern technology, such as the elderly.",
  },
  {
    idea: "Apple should design AirPods that look like mostly concealed in-ear hearing aids.",
  },
  {
    idea: "iPhone should swap Siri’s voice for Stephen Hawkings as a tribute for the month of April.",
  },
  {
    idea: "A Cooking app where each recipe has its own music playlist that you can listen to while cooking.",
  },
  {
    idea: "Instead of awful lounge music why not learn a language while on hold with customer support.",
  },
  {
    idea: "An app where you can paste a list of ingredients and it flags anything possibly not vegan.",
  },
  { idea: "Facebook should allow voice comments." },
  { idea: "Three-way FaceTime." },
  {
    idea: "Feed App. Alike other social networks, the more your content is liked (fed) the longer it survives. When users stop feeding your content then it will eventually be deleted (starve).",
  },
  { idea: "Instagram should have a night mode." },
  {
    idea: "A wearable light, with a phone symbol, that flashes red when you’re talking on your phone via earbuds.",
  },
  { idea: "Waterproof books." },
  {
    idea: "Email clients should have an autosuggestion of the current holiday when you type the first few letters in the email’s header and body",
  },
  {
    idea: "Create an app which does random Google/Facebook searches and randomly clicks ads to make data mining worthless.",
  },
  {
    idea: "Hate when airport security confiscates my things. A service where I can mail it to myself.",
  },
  {
    idea: "A large digital picture frame that simulates paper and displays a different movie, music or art posters.",
  },
  {
    idea: "Laptops should have a privacy switch that physically disables the microphone and camera.",
  },
  {
    idea: "A place like a gym that charges a monthly membership fee, but instead of workout equipment they have specialized tools for you to use, like bandsaws, 3D Printers, CNC machines, etc.",
  },
  {
    idea: "Hazard lights should have a different frequency or ‘blink rate’ to indicators, in case you can only see one from behind.",
  },
  {
    idea: "A mattress with a face hole for people sleeping on their stomach.",
  },
  {
    idea: "Tinder-style ‘find new friends’ app for older folks or any ages.",
  },
  {
    idea: "Facebook daily statistics. At the end of each day, you get a notification telling you how long you’ve spent on Facebook.",
  },
  {
    idea: "Learning how to play an instrument should be like martial arts were you’re awarded colored belts as you progress. A good way to keep kids motivated.",
  },
  {
    idea: "A YouTube app for kids that only shows and plays videos from subscribed channels.",
  },
  {
    idea: "An app that would notify you when you’re near something of historical significance.",
  },
  {
    idea: "An app where you build a profile, write down your hobbies, favorites bands and so on, and when you’re near someone with similar interests, it sets an alert and then gives you the option to contact them right away, in order to chat or exchange contact information right there.",
  },
  {
    idea: "Productivity app that tracks your social media usage. At the end of the day it sends you daily statistics of how much time you spent and a little motivator to help you be more productive for the next day. “Hey Dave, you wasted 106 minutes today and you also missed your daily steps”",
  },
  {
    idea: "The Facebook desktop should send you a notification when your phone battery is low.",
  },
  {
    idea: "Emails should have a 5-minute waiting window for canceling prior to being delivered for those instant regret moments after hitting the “send” button.",
  },
  {
    idea: "A horror movie app where movies are rated by users heart rates. The app is synced to a wearable watch. Find out where peoples heart rates spiked the most on specific movies.",
  },
  {
    idea: "Instagram should recommend popular users based on how much engagement they have and not how many followers.",
  },
  { idea: "An oven that flips the contents inside." },
  {
    idea: "Cars should have brake lights on the front of the cars so that pedestrians know whether or not a car is breaking.",
  },
  {
    idea: "An app where all your friends can post their schedules for the week so that you know who can hang out.",
  },
  {
    idea: "A dating app where you set a date idea, and then you’re only shown people who would want to do that date idea as well.",
  },
  { idea: "A social network that hides your likes and follower count." },
  {
    idea: "A school shoe for teenage kids that expands 1 size per month for 4 years until they reach 18.",
  },
  {
    idea: "An option to choose what music you would like to listen when your put on hold.",
  },
  {
    idea: "an app that lets people on the same flight swap seats to sit with pals for free",
  },
  {
    idea: "Create surfboard fins out of recycled plastic bottles and donate profits to ocean charities.",
  },
  {
    idea: "A wallet that has a companion app that would timestamp when your wallet was opened and on the app.",
  },
  {
    idea: "In case of a mugging scenario, ATMs should have a feature that if you enter 911 at the end of your PIN it alerts the police.",
  },
  {
    idea: "An app where you can put together outfits from different websites to see if it looks right rather than wasting time ordering and sending back.",
  },
  {
    idea: "An app where I could scan the cover of a book I own, and it automatically emails me an electronic .pdf of the book.",
  },
  {
    idea: "When clearing your browser history, there should be an option to fill the history up with “normal” websites.",
  },
  {
    idea: "A TV that turns itself when my Fitbit recognises that I’ve fallen asleep",
  },
  { idea: "Make an AR app where you use your hand as a puppet." },
  {
    idea: "A fan that replicates the randomness and wind patterns of a breeze and also outputs beach sounds — waves, seagulls etc.",
  },
  {
    idea: "Fifa, but with corruption. You can bribe the referee to miss stuff, or even bribe members of the other team to throw the game, and you’d get a chance of being caught.",
  },
  { idea: "A filter to remove stock photos from google images" },
  {
    idea: "Different colored tissues at the end of the tissue box to let you know there will soon be none left.",
  },
  {
    idea: "Roulette feature on Netflix where you click on a show & it outputs a random episode for you to watch.",
  },
  {
    idea: "A debate app that pairs two total strangers with opposite opinions about a topic they both like.",
  },
  { idea: "Clothes should have QR codes for reordering." },
  { idea: "Animal shelters should promote dog share programs." },
  {
    idea: "Death countdown for shelter animals, it would unquestionably influence more people to adopt.",
  },
  {
    idea: "iPhone plug that unplugs itself from the socket after your phone is fully charged.",
  },
  {
    idea: "An electrified wristband that activates every time it recognizes too many calories in any meal your hand touches.",
  },
  { idea: "Amazon should create a Christmas toy catalog." },
  {
    idea: "A service that sends you a postcard every week made with pictures from your online album.",
  },
  { idea: "An option to turn off Instagram’s auto refresh" },
  {
    idea: "A lock toggle for when you want to show someone a picture on your phone but don’t want them to swipe to other pictures.",
  },
  {
    idea: "A way to save your email on your keyboard so you can quickly enter it with one click.",
  },
  {
    idea: "Personalized dryer sheets scented of your favorite cologne or perfume.",
  },
  {
    idea: "An app where you could rate your mental health daily/hourly/by-the-minute from 1–10.",
  },
  {
    idea: "An explore tab on Twitter that showed you tweets you might be interested in or from people that are followed by your mutuals.",
  },
  {
    idea: "A way to post your Instagram story, Snapchat story, and Facebook story all in one click.",
  },
  {
    idea: "Teach the elderly about the dangers of internet scams and being targeted by scammers.",
  },
  { idea: "WhatsApp group polls." },
  { idea: "McDonald’s should sell hard packs of ice cream." },
  {
    idea: "A chrome extension that overloads Facebook with useless data, essentially making the data it collects inaccurate and useless.",
  },
  {
    idea: "An app where you take a picture of your baking ingredients and it outputs a dessert recipe.",
  },
  {
    idea: "Furniture that vibrates every hour to remind you of how long you’ve been sitting for.",
  },
  {
    idea: "Doctor offices should have exercise equipment in their waiting rooms, instead of only chairs, to encourage being healthy.",
  },
  {
    idea: "A smart scale that helps you lose weight named Wade but spelled Weighed.",
  },
  {
    idea: "Doctor offices should have vinyl chairs so you can wipe them down with antiseptic wipes.",
  },
  {
    idea: "Uber for barbers. A service that connects you with certified stylists that will cut hair at your home.",
  },
  {
    idea: "A cast replica of significant other’s hand, but its a walking stick for the elderly.",
  },
  {
    idea: "An option to choose to listen to an audiobook or jokes while on hold.",
  },
  {
    idea: "Cars should have lasers that project an outline on the road in front of you of where your tires will go so you can move easily.",
  },
  {
    idea: "Smartphone image folders should have an option of locking on a single image and unlocking with a PIN. So that if you show a picture to a friend they can’t start scrolling through all your pictures if you don’t want them to.",
  },
  {
    idea: "Google should have an option to remove all search suggestions that may contain spoilers.",
  },
  {
    idea: "Bluetooth device list should show if the device is already connected somewhere else so you don’t have to waste time trying to connect.",
  },
  {
    idea: "Snapchat should add a “decibel meter” filter like the one that shows speed so that your friends can see how loud that party you’re at is.",
  },
  {
    idea: "Social networks should have an “unfollow” pop up modal. When a user clicks ‘unfollow’ a pop up will ask “Why are you unfollowing?” Would you like to know the reason you’re being unfollowed?",
  },
  {
    idea: "An app that tells you where the bathrooms are in buildings you’re not familiar with.",
  },
  {
    idea: "A button on your tv to make the remote buzz or make some sort of sound.",
  },
  {
    idea: "An app where you can scan your old gift cards to see how much money is left on them.",
  },
  {
    idea: "Marvel should release a home assistant like Alexa or Google Home, but it’s JARVIS.",
  },
  { idea: "Spotify should offer the option to tip artists" },
  { idea: "An emergency room app so you know where you are in the queue." },
  {
    idea: "Instead of offering 100% refund for online purchase returns, offer ~110% refund of in-store credit to keep the customer’s money on the site",
  },
  {
    idea: "An app where you can transfer Spotify playlists to Apple Music and vise versa.",
  },
  {
    idea: "Cinemas should show all previous movies in a franchise a few days before the release of the sequels for the people that didn’t watch them.",
  },
  {
    idea: "Phones should have a pattern vibrate system for each different person you get a text from. Same with sound.",
  },
  {
    idea: "An app where you can find like-minded folks who wanna see the same movies or go to the same events as you.",
  },
  {
    idea: "A smart mirror that would allow you to try on clothes without actually wearing it.",
  },
  {
    idea: "An app where you can scan someone’s picture to see what filter they used.",
  },
  {
    idea: "An app where you could put your address in and it would automatically set a walking track up for you at a certain amount of km.",
  },
  {
    idea: "Apple needs to make an update where when you take a picture using the camera app, the picture doesn’t flip.",
  },
  { idea: "An app like Pokémon go but a where’s Waldo version." },
  {
    idea: "Facebook should have a little timer at the top of my feed to remind me how much time I waste.",
  },
  {
    idea: "An app that tells you where the nearest cafe with a plug socket is and how long you can make a coffee last there without a member of staff asking you to move.",
  },
  {
    idea: "A game mode in online multiplayer games that require a successful mic test before you can join. Ensuring everyone in your party has a mic.",
  },
  { idea: "A website where you can rate landlords." },
  { idea: "A night mode for iMessage." },
  {
    idea: "iMessage should autocorrect swear words into funny alternatives.",
  },
  {
    idea: "A bed synced with your Fitbit that vibrates when it’s time to wake up.",
  },
  { idea: "Tv remotes should have a headphone socket for quiet viewing." },
  {
    idea: "Drones should come equipped with a backup little parachute system to be deployed in case of mid-air mishap or shutdown",
  },
  {
    idea: "An app that suggests the best activity/ task to do based on your weekly activity.",
  },
  { idea: "A candle that smells of freshly baked chocolate chip cookies." },
  { idea: "A FaceTime voicemail." },
  { idea: "Uber should offer a service to jump your car." },
  {
    idea: "Airports should have thrift stores where they sell items that were confiscated by the TSA.",
  },
  {
    idea: "AI Rubbish bin on wheels that brings your bin to the curb on collection day.",
  },
  {
    idea: "Airports should have lockers you could store stuff in until you get back from your destination rather than it being confiscated by the TSA.",
  },
  {
    idea: "Phone companies should start making it easier for us to replace the battery in our own phones.",
  },
  {
    idea: "An app like Shazam for dogs where you could take a picture and it pops up exactly what kind of breed it is.",
  },
  {
    idea: "A website where you upload top and side photos of an object, and it creates the 3d printer file.",
  },
  { idea: "Automatically load YouTube videos in ViewPure instead" },
  { idea: "Dyson hand-dryer but for your dishes." },
  { idea: "A website where u can swap art with other artists." },
  { idea: "A website where you can check alcohol prices at restaurants." },
  {
    idea: "They should make a randomiser button on Rubik’s cube so that when you press it the cube auto rotates and you get a new challenge to complete.",
  },
  {
    idea: "A service which provides professional private car buyers to amateur car buyers who would go with them to inspect, value and haggle the price of the car professionally and with respect to the seller. The service could take 5% of every sale, the seller gets an honest sale and the buyer is left with the best deal and with the best knowledge of the car.",
  },
  {
    idea: "An app that will look for higher resolution versions of pictures stored on your devices",
  },
  {
    idea: "An app where you can send in a picture & then it gives you a clever caption back.",
  },
  { idea: "Netflix for movies that are still in theatres" },
  {
    idea: "Netflix for bloopers, watch bloopers from your favourite TV shows/ movies.",
  },
  {
    idea: "An augmented reality battle royale game where players run around a city in real-life and shoot each other by pointing their mobile phone at other players and tapping.",
  },
  {
    idea: "An app like Shazam but for film and TV where you can film the screen on your phone and it tells you who the actor and other things they’ve been in.",
  },
  {
    idea: "There should be an MMO for the Gameboy or Gameboy Color that runs on actual hardware and the WiFi chip is inside the cartridge.",
  },
  { idea: "A social community centre for lonely people." },
  { idea: "Create a transparent toaster." },
  {
    idea: "An app where you can put in what TV shows you watch and it will show you a calendar displaying showtimes and when new seasons will be released.",
  },
  {
    idea: "A widget app on phones that constantly monitors gas prices of gas stations in a given radius so you can always get the cheapest gas in the area",
  },
  {
    idea: "Touchscreens & keyboards that sense liquids and shut down devices. Sensor toggle-on-off for fast activation around coffee and drinks.",
  },
  {
    idea: "An app where you take a picture of your houseplant and it tells you what it is, how much light/water it needs etc",
  },
  {
    idea: "An app that comes with a pair of electronic arms that you can connect via Bluetooth to your phone. Your friends can then send you an e-hug via the app.",
  },
  {
    idea: "A way to block certain bands from appearing in Spotify mixes/shuffles.",
  },
  {
    idea: "Design beer six-pack rings that when they come in contact with salt water they turn into edible fish food.",
  },
  {
    idea: "European travel card for old age pensioners so that they have free travel in all EU cities.",
  },
  {
    idea: "911 should have video chat capabilities so that they can see what’s going on.",
  },
  {
    idea: "Elevators should have a “Clear” button for when you accidentally select the wrong floor or to foil the pranksters who press all the buttons",
  },
  {
    idea: "An app that sends you the tl;dr of TOS from new apps you download that reads something like:\n– App X owns and can use anything you upload in advertisements\n– App X will read your text messages to deliver relevant ads to you\n– App X knows where you are at all times",
  },
  { idea: "WhatsApp feature to like other peoples messages." },
  {
    idea: "A recipe app where it can “overlay” other apps, similar to Facebook Messenger’s chat heads feature",
  },
  {
    idea: "App called ‘No Money Network’ where you offer services and products and have a separate ask list.",
  },
  {
    idea: "GMAIL feature that stops you sending an email if you’ve incorrectly spelt someone’s name, using the recipient’s email address or their signature as reference.",
  },
  { idea: "A shopping cart that shows the items you got and the total cost" },
  {
    idea: "Automatic watering device for houseplants that syncs with your phone and reminds you to refill it. Programmed by an actual horticulturist who knows how much water each species needs. Premium version adjusts flow based on humidity, soil type, etc…",
  },
  {
    idea: "Fast food places that are as geographically prominent as McDonald’s and only carry vegan food that is healthy and affordable",
  },
  { idea: "A solar-powered air conditioner." },
  { idea: "Integrated fact checker ratings in all social media." },
  {
    idea: "Blockchain protected video story validation system guaranteeing that any alteration, or even a single pixel, would reveal tampering.",
  },
  {
    idea: "A low carb beer that contains an additive which prevents hangovers.",
  },
  {
    idea: "A cinema where you could get takeaway food while you watch the film — Dominos, McDonald’s, Burger King, Sushi etc.",
  },
  {
    idea: "An app where you can screenshot people’s food and it tells you where it’s from.",
  },
  {
    idea: "Makeup adverts should use unattractive people looking attractive instead of attractive people looking more atractive to prove how well their product works.",
  },
  { idea: "Touch/FaceID to unlock/start your car" },
  {
    idea: "iPhone should have a feature where you could kill your phone by pressing the power button 3 times in the event of someone trying to rob your phone or if you don’t want someone to look at your phone.",
  },
  {
    idea: "Cars should have confetti in the airbags. It will help to lighten the ordeal.",
  },
  {
    idea: "An app where you can request an ice cream truck to drive down your street.",
  },
  {
    idea: "Kids lilos with built-in GPS, in case your child ever got blown out to sea.",
  },
  {
    idea: "Phones that displays what your camera sees as a faint overlay as you are using your phone apps. Walk, view, tap or swipe, and still see the world that’s in front of you.",
  },
  {
    idea: "An organic edible barcode on fruits to replace the stupid paper stickers.",
  },
  { idea: "Heated and cooled cup holders in vehicles." },
  {
    idea: "Tinder for finding new friends. The app will help lonely people connect with finding new friends.",
  },
  {
    idea: "An app called ‘sell it to me’ where you can enter a product and it will present you with the reasons why you should have it, top reviews, best product demos etc.",
  },
  {
    idea: "A joke cryptocurrency called Exposure. Creatives would pass it around when someone tries to pay them little to no money for their work.",
  },
  {
    idea: "An app where people will get notifications of state & federal laws straight to their mobile devices with a brief explanation(broken down) of how this law could affect them.",
  },
  {
    idea: "An app that helps you find the same clothes but in different sizes. When you wear out or outgrow an article of clothing, you scan a code that takes you to a page where you can order another one just like it.",
  },
  { idea: "A “hide pyramid scheme” option on Facebook posts." },
  {
    idea: "A site that allows you to add shows, movies, games, books maybe even comics you’ve read/watched and rate them",
  },
  {
    idea: "A way to block images based on what’s in them, similar to how you can mute words. Block ‘animal cruelty’ for example.",
  },
  {
    idea: "Voice-activated emoji. A way to add emojis by voice when writing messages.",
  },
  { idea: "Bus real-time app that lets you know if the bus is full or not." },
  {
    idea: "A hat with a removable peak or a swivel so you can shift from normal hat to snapback without having to remove the actual hat.",
  },
  {
    idea: "EXIT signs should be at floor level so you can see them crawling through a smoke-filled corridor.",
  },
  {
    idea: "Airplane windows should automatically raise the window blinds on take off and landing.",
  },
  {
    idea: "An app where you could write birthday texts in advance and schedule them to send.",
  },
  {
    idea: "Siri should be programmed to call out to you if it’s in close proximity. Imagine you can’t find your phone at home but yell “HEY SIRI” Siri could respond “I’M UNDER THE COUCH”.",
  },
  {
    idea: "An app which maps where in cities there will still be sun at the end of the day (after work).",
  },
  {
    idea: "A FitBit ball that counts how many steps your dog takes when fetching.",
  },
  {
    idea: "Acoustic guitars with a built-in tuner that automatically tunes your guitar.",
  },
  {
    idea: "Ice cream with low sugar, chamomile, and other sleep flavors. Would be perfect for that pre-bedtime treat.",
  },
  { idea: "Organic coconut oil that comes in a squeezable tube." },
  {
    idea: "Crayola should have the HEX version of their colors printed on their coloring pencils.",
  },
  {
    idea: "A TV where I can scan my old VHS and DVD barcodes and the movie displays on my screen.",
  },
  {
    idea: "An app that connects people driving long distances with people willing to pay for petrol to ride along.",
  },
  {
    idea: "Carzam. Shazam for weird car noises. Something wrong with your car? Making a weird noise? Carzam that sucka.",
  },
  {
    idea: "An app that monitors your stress levels and then suggests ideas to reduce, such as walking, meditation, or yoga.",
  },
  {
    idea: "Animals shelters should have an app where you can see the dogs and book them to take them out for a walk.",
  },
  {
    idea: "A map that shows when you’re nearby documented cases of recorded potential hauntings, and the stories behind those hauntings. As well as any publicly recorded murder locations.",
  },
  { idea: "A mouse that form fits your hand and helps with carpal tunnel." },
  {
    idea: "A running app that allows you, with the help of augmented reality and Google glasses to run with a buddy who is in another place. So you never run alone.",
  },
  {
    idea: "A mix of uber and Airbnb for parking spots. People who live in crowded cities or near events could rent out their driveway spot when they’re not home.",
  },
  { idea: "Twitter, but with a 100% chronological feed." },
  {
    idea: "A sports challenge game app. Scheduling people to challenge in your chosen sport in your area, tinder style.",
  },
  {
    idea: "A version of google maps that actually shows the street names when you zoom in on them",
  },
  {
    idea: "Stalkr app. An app where you can follow someone on all forms of social media at the same time.",
  },
  {
    idea: "A hang-up app. Because I miss being able to slam the phone down on people, so this will make the same slamming noise for both the person and for you.",
  },
  {
    idea: "Rent my garden website. A site where you could rent your garden space to people to host parties or events. Be great for families who have no gardens.",
  },
  {
    idea: "eBay and Amazon should allow sellers to upload videos to the gallery",
  },
  {
    idea: "An alarm app that automatically goes off if your phone reaches 1% battery before the scheduled alarm time.",
  },
  {
    idea: "Apartment laundry room app. Tells you if any washing machines and dryer are available and let’s you reserve them.",
  },
  {
    idea: "An app where you put the URL link to someone’s picture & it shows what the picture looks like without a filter.",
  },
  {
    idea: "A simple app that points a compass towards another user that you’re trying to find in a crowd.",
  },
  {
    idea: "A chrome extension that unsubscribes you automatically from emails after your purchase, create an account and do possibly anything on the internet with your email address.",
  },
  {
    idea: "A website where you input your height, weight, and goals along with the foods you like and don’t like. The website would output a detailed list of recipes that match your nutritional needs and goals along with shopping list and any relevant coupons available.",
  },
  {
    idea: "AR Graffiti. Using AR you can “tag” any location in the world and paint on it. It can only be seen holding a phone up to it.",
  },
  {
    idea: "An app that knew what clothes and shoes I had and every day it created an outfit for me to wear depending on the weather and what occasion I chose.",
  },
  {
    idea: "Delivery drivers should have an app that syncs with the recipient’s phone and if they’re within a 2–3 mile radius the app notifies them. Would be useful if you are returning home and the driver was in the area.",
  },
  {
    idea: "An app like tinder where you can find local playgroups for tabletop games.",
  },
  {
    idea: "Biking app that alerts other bikers that you are out, so people don’t have to ride alone. Permissions required of course bc no one wants a creep biking with them, knowing their route.",
  },
  {
    idea: "A cloud storage app that backups and deletes files that haven’t been for opened for ‘X amount of time’.",
  },
  {
    idea: "A washer & dryer that can notify my by phone that the clothes need to be changed.",
  },
  {
    idea: "An app where you can take a picture of a color or a pattern and it can search for clothing that fit that. Haven’t you ever randomly seen something and been, “That’s a really cool color, I would love a shirt like that!” Well, with this app, you can find a shirt that matches the color of the sky that one day at like 5:23 pm or that tablecloth at that one restaurant that would make a cool plaid shirt.",
  },
  {
    idea: "Friend Compass. Add your friends and request their location. It would show a compass pointing in their direction, along with a map. The idea is that in large crowds or outdoor events, a compass would be more useful in finding a friend than a map.",
  },
  {
    idea: "An app where you can just hit a button to say you are up for coffee and other people you know can do the same?",
  },
  {
    idea: "Gumshield teeth monitor app. An app that syncs to a censored gumshield that lets you know your teeth health and what teeth to focus on when brushing/ flossing.",
  },
  {
    idea: "Neighbourhood watch app. An app that notifies all neighbors when one home security system on the street has been set off.",
  },
  {
    idea: "Apple needs to add two new alarm options: an “ease in” option that would start at low volume and increase the volume over time + ability to edit snooze length.",
  },
  {
    idea: "An app that shows you a floor plan of the closest Starbucks & where the open seats are & if they’re near outlets.",
  },
  { idea: "Tinder for motivational quotes." },
  {
    idea: "An app for travelers where when you enter into a high crime area, you get a warning notification.",
  },
  {
    idea: "A chat/date app that randomly connects you to someone within 100 meters and remains anonymous unless you both agree.",
  },
  {
    idea: "AppleWatch should have a feature where it would pulse faster or slower depending on if you’re closer or farther from the phone.",
  },
  { idea: "Augmented reality hopscotch game." },
  { idea: "Paint houses black in colder regions to preserve energy." },
  {
    idea: "Create movie cinema seats where, if you kick the seat in front of you, the force is replicated on your own chair.",
  },
  { idea: "Cheetos flavored Doritos." },
  { idea: "A laundromat/ coffee shop hybrid." },
  {
    idea: "An app where you don’t get to read the comments and replies until you’ve commented your own opinion. Force you to formulate your own thought before being swayed in either way by the other responses.",
  },
  {
    idea: "An app where you put together a playlist of your favorite music & the app matches you with people that have similar tastes.",
  },
  {
    idea: "Twitter chrome extension that notifies you which annoying trend/news item is about to blow up and allows you to mute all related words with one tap.",
  },
  { idea: "An alarm clock that wakes you up with inspiring TED talks." },
  {
    idea: "An app where you could type in how your feeling and the app would suggest songs to listen to.",
  },
  {
    idea: "A setting on my phone where I could choose to never, ever be asked to rate an app.",
  },
  { idea: "AR Bonsai. Take your Bonsai anywhere with you." },
  {
    idea: "Vehicles should have a thank you light located at the rear that lights up with the press of a button that you press whenever someone allows you to merge into their lane.",
  },
  { idea: "A Twitter equivalent of the Instagram explore page." },
  {
    idea: "An app where people write nice things about their friends/acquaintances and then on a bad day you can access one at a time.",
  },
  {
    idea: "A car audio system that senses when your car slows down and turns the music down accordingly.",
  },
  {
    idea: "An app made where everyone can share what kind of dreams they experience.",
  },
  {
    idea: "When inputting credit card info online they should require the card owner’s birth year.",
  },
  {
    idea: "A smoke alarm with a “Cooking” mode that’s synced to your cooking appliances.",
  },
  {
    idea: "A bookmark option on Instagram. If I don’t feel like looking through my entire feed I want to save my spot, come back to it, then start looking at new stuff.",
  },
  {
    idea: "An undo button for Spotify when I accidentally click on a song and ruin my shuffle.",
  },
  {
    idea: "Children’s book about a group of fairies that sneak into your room every night and mess up your hair.",
  },
  {
    idea: "Instead of horrible lounge music why not learn a language while on hold with customer support.",
  },
  {
    idea: "A weather app that tells me “Wear a sweater today.” “Bring an umbrella.” “Today is short sleeve weather.” Then, at the end of the day, you tell it whether you were dressed too warmly, too coldly, or just right, so it can adapt to your specific preferences.",
  },
  {
    idea: "An app where you can find local people to give you directions and ideas for places to eat.",
  },
  {
    idea: "Google should rent out ad space overlayed on to billboards on Google Maps.",
  },
  {
    idea: "An additional blinker that signals that you are going to make a U-turn.",
  },
  {
    idea: "A betting website where the public place bets relating to the failings and false promises of politicians and the government.",
  },
  {
    idea: "An app that uses the facial recognition on phones to find gifs or photos that match your reaction.",
  },
  { idea: "Shopping trolleys with turn signals." },
  {
    idea: "Tinder for musicians, the app for musicians who want to start/ join a band.",
  },
  {
    idea: "An app that automatically cycles through free streaming services whenever you hit an ad.",
  },
  {
    idea: "Email software that takes long emails and paraphrased them into bullet points.",
  },
  {
    idea: "An app to request a food truck to come to a certain location, the truck’s location would be based on how many people requested that area.",
  },
  {
    idea: "WhatsApp should have a feature where it reminds you to respond to texts that you have read but didn’t reply to.",
  },
  {
    idea: "Tinder for creatives — artist, writers, photographers, bloggers etc. Ability to swipe right for possible collaborations with each other.",
  },
  {
    idea: "A meta subscription service that gives access in one shot to: Economist, WSJ, NYT, and Financial Times.",
  },
  {
    idea: "Find my credit card app. An app that you could sync to your credit card via Bluetooth.",
  },
  {
    idea: "A service that transfers stickers from an old laptop to a new one.",
  },
  {
    idea: "Animal pounds should partner up with offices who want an office cat/ dog. Increase more people engaging with the animal which leads to increased chance of someone adopting, at the very least the animal gets a bit of company for the day.",
  },
  {
    idea: "Apple photos feature that prompts you when you save a duplicate image with the option to delete.",
  },
  { idea: "Skype should add filters to their video calls." },
  { idea: "I wish there was a night mode for notes app." },
  {
    idea: "Interactive headphones that allow other people listen to your music with the same make via Bluetooth.",
  },
  {
    idea: "An LED display for displaying digital stickers/logos that you can add to your laptop. For people in the startup community who don’t want to ruin their laptop with actual stickers.",
  },
  {
    idea: "A website like Netflix or Hulu that had only old 90’s cartoons from Cartoon Network, Disney Channel, & Nickelodeon",
  },
  {
    idea: "Software that allows you to preview contents of a zip before downloading.",
  },
  {
    idea: "An app like tinder but for pairing you with new shows to binge watch and you swipe yes or no to their trailers and synopses.",
  },
  {
    idea: "Headphones that shift to mono audio when you remove one side from your ear.",
  },
  {
    idea: "Spoiler blackout. A chrome extension where you enter in the Movie/ TV show you want to blackout spoilers and ability to choose which social networks to filter.",
  },
  { idea: "Healthy food/ sweet options at the cinema." },
  {
    idea: "An iPhone feature where you can undo the action of moving/ deleting an app by accident. Nothing worse than when you accidentally move/ delete an app on your home screen.",
  },
  {
    idea: "An AI fridge that monitors your grocery items and tells you what you need to reorder.",
  },
  {
    idea: "A WIFI router that around your child’s “bedtime” changes the wifi password so only the parents can access.",
  },
  {
    idea: "An app where you get ‘X amount of’ unlocks of your phone per day and after your limit, each time you unlock your phone you donate $2 to a savings account",
  },
  { idea: "A 24-hour wine delivery service." },
  {
    idea: "An app that lets kids do programming or math tasks in order to unlock the games/ social networks on the device.",
  },
  {
    idea: "Uber eats but instead, Uber drinks. An alcohol delivery service.",
  },
  {
    idea: "An app that reminds you to buy a card and mail it in time for it to arrive for birthdays/holidays?",
  },
  { idea: "Bath bomb delivery service." },
  { idea: "Metal detectors rental service at the beach." },
  {
    idea: "An app for beer gardens on sunny days where every beer garden in a city inputs their capacity and how many seats they have left.",
  },
  { idea: "An app the tells you how busy skateparks are." },
  { idea: "A screenshot app that automatically blurs personal data." },
  {
    idea: "Auto translate Instagram messages/ comments into your default language selection.",
  },
  {
    idea: "An iPhone setting to make your app icons transparent so you can see your wallpaper.",
  },
  {
    idea: "Weightlifting/ gym shoes with a Kevlar tip, to save your toes when you drop a weight on them.",
  },
  {
    idea: "iPhone feature to lock your phone and a set time and unlock at another. Great way to force you to go asleep. You can still answer calls.",
  },
  {
    idea: "An app which recognized when you copied text from a website, then took that website’s URL, runs it through easybib, then when you paste the quote in your Word document, it inserts the in-text citation and then the full citation at the end of your paper",
  },
  { idea: "Tinder but for people trying to find workout buddies." },
  {
    idea: "A pinky emoji so that you could send pinky promises over messages.",
  },
  { idea: "Apple should have a time mute function for app notifications." },
  {
    idea: "An App to find missing people/ animals. The app updates in real time of missing people/ animals in your area.",
  },
  { idea: "Delivery service just for snacks." },
  {
    idea: "An app where you can scan a page of handwriting and it types it up for you.",
  },
  {
    idea: "A car feature where if it reaches a certain temperature and it senses movement within the car it will automatically roll down the window a certain %. This will save both children & dogs left in the car on hot days.",
  },
  {
    idea: "An app to tell me what the estimated wait time is at my local post office.",
  },
  {
    idea: "An anonymous or incognito feature on Instagram to view a person story.",
  },
  {
    idea: "A car feature that tells you if you’ve been spotted by a speed camera.",
  },
  {
    idea: "Netflix should have an option to add a black background to the subtitles. A lot of the time the white text gets lost.",
  },
  {
    idea: "As an April fools joke, Shazam should identify every song as Rick Astley — Never Gonna Give You Up.",
  },
  { idea: "24-hour library." },
  {
    idea: "Emoji update where you can choose different colors/fur types for animal emojis.",
  },
  {
    idea: "An app where you can request childcare come to you immediately. An example — I really need a nap, they come over for an hour and I pay $100.",
  },
  {
    idea: "A dating website where post your top five fictional character crushes.",
  },
  { idea: "Scale parking fines according to the person’s income." },
  {
    idea: "A browser extension that automatically fixes grammar mistakes. I’m sick of seeing the wrong use of ‘your’ when they should be using ‘you’re’",
  },
  {
    idea: "Tinder for finding a barber. Get matched with barbers who have similar interests to yourself so you can talk about stuff you like.",
  },
  {
    idea: "An app where I input my eyeglass prescription and the screen will adjust so that I don’t need to wear my glasses when using my phone.",
  },
  {
    idea: "I wish there was a text tone for the sound iPhones make when you download an app ?",
  },
  {
    idea: "A parking ticket that is mint flavored so when you put the ticket in your mouth when you’re looking for parking you get fresh breath.",
  },
  { idea: "A livestock tracking app for farmers." },
  { idea: "An app similar to find my iPhone but for your earphones." },
  { idea: "Twitter should have a ‘hide tweet from’ option feature." },
  { idea: "Instagram should allow polls with more than two options." },
  {
    idea: "Golf ball tracker app. An app that gives you the location of your golf ball.",
  },
  {
    idea: "An app that identifies bugs and animals that you take a picture of.",
  },
  { idea: "Shazam for cosplayers." },
  {
    idea: "Tinder for roommates and house sharing. The app would match your personalities such as whether you’re a party animal or like a clean bathroom etc.",
  },
  {
    idea: "Laundry service app scheduling service. Similar to Instacart but for laundry.",
  },
  { idea: "A backpack that can be opened with fingerprint ID only." },
  {
    idea: "An Instagram feature where you can reply to comments directly from the notifications tab.",
  },
  {
    idea: "An app that, based on GPS coordinates, will tell you about interesting historical events/facts that occurred at your current location.",
  },
  {
    idea: "Bank accounts should have an option to donate your spare change to charities automatically every week. i.e If I have $123.30 in my bank, the bank will donate the $0.30 to a charity of my choice.",
  },
  {
    idea: "An app for parents/students to track when their school bus is coming.",
  },
  {
    idea: "Table tennis that automatically adjusts its height according to who’s playing. So for kids, it would lower to the children’s height and raise to the adult’s height.",
  },
  {
    idea: "A way to gift digital ebooks — providing a choice of device type and ability to enclose inscriptions!",
  },
  { idea: "Shazam for skin rashes" },
  {
    idea: "A subscription service that sends me a new #iPhone cable every 2–3 months.",
  },
  {
    idea: "Autocorrect for drunk text. An anti-drunk message feature that converts drunk messages into politically correct ones!",
  },
  { idea: "Shazam for skin rashes." },
  {
    idea: "I wish AirPods should connect simultaneously while switching between Mac and iPhone.",
  },
  {
    idea: "A water fountains/ taps finder. Users would post locations of fountains/ taps for others to visit and review.",
  },
  {
    idea: "A hyperlink color that is lighter than the ‘clicked link’ color and use it to represent links/posts you’ve scrolled past, but never clicked.",
  },
  { idea: "VSCO app for desktop." },
  {
    idea: "An app that’s a combination of LinkedIn and Tinder. Where you match with other people working in your field and you can connect/ network with them, get advice, bounce ideas off them, apply for jobs etc.",
  },
  {
    idea: "A practical way we can reuse prescription bottles at the pharmacy instead of them regularly giving us new bottles.",
  },
  {
    idea: "A Dragons Den/ Shark Tank product subscription service. Set a budget and every month you get sent a product that gets picked up on the show.",
  },
  {
    idea: "GMAIL should have a GDPR tab so I could review/ unsubscribe all at once.",
  },
  { idea: "A way to easily share dissertations and theses." },
  { idea: "A website that connects college students with host families." },
  {
    idea: "A manga reading service like Hulu where you pay a few $ per month to get unlimited manga.",
  },
  {
    idea: "A running app for women who like to run at night. The app will connect you with other women who run at night in your area.",
  },
  {
    idea: "Shazam for sneakers. Take a picture of someone’s sneakers and the app will tell you where to buy them.",
  },
  { idea: "A cinema app where you can order food and drink to your seat." },
  {
    idea: "A debit card feature that could block me from buying particular items a set amount of times per day/ week/ month/ year. Example: “I’m sorry, David, you have surpassed your daily limit for coffees. Please try again tomorrow.”",
  },
  {
    idea: "An app that sends you a notification when your TV show returns from a commercial break.",
  },
  {
    idea: "They should have animal rescue centres in airports. Imagine your flight was delayed and you got to hang out and be bros with a sweet dog for a few hours.",
  },
  {
    idea: "A box of five senses. Five objects in a box set to help sharpen your sense of taste, smell, touch, sound, and sight.",
  },
  { idea: "An IDE or text editor with a built-in media player." },
  {
    idea: "A website where you can debate with people. Just type in what you want to debate about and then you get paired with someone.",
  },
  {
    idea: "A shuffle button on Netflix for TV shows. Netflix would choose a random episode to start from.",
  },
  {
    idea: "An app that cancels plans for you. It sends well thought out & genuine reasons why I can’t attend.",
  },
  {
    idea: "Instagram/ Twitter option to leave a reason why you’re blocking someone.",
  },
  { idea: "Twitter feature for muting a specific article." },
  { idea: "All seats on public buses should have their own bin." },
  {
    idea: "A library book lending period should be based on how long the book is or based on the average lending time of the reader.",
  },
  {
    idea: "WhatsApp feature where you can edit your voice messages (split/ delete/ noise filters etc).",
  },
  { idea: "An app like Tinder but for finding friends." },
  {
    idea: "A website that ranks events or speakers to help you decide if you should go or not.",
  },
  {
    idea: "An app where you earn points for not being on your phone while driving. The points would be used to receive rewards or discounts from participating companies.",
  },
  { idea: "A website where you could resell flights." },
  {
    idea: "Microwaves and pacemakers should sense each other and shut off the microwave when someone with a pacemaker is near.",
  },
  {
    idea: "Apple Music AI feature where it remembers your volume settings for every song and turns it up or down accordingly. Some songs I like turned up and some I like turned down.",
  },
  {
    idea: "A battery powered self-heating plate to keep your food hotter for longer.",
  },
  {
    idea: "A wearable device that is equipped with a solar-powered armband that can charge it.",
  },
  { idea: "iPhone spam caller button for all these incoming spam calls." },
  {
    idea: "Garden app where if I hold my phone over my plants the app will tell me which are plants and which are weeds.",
  },
  { idea: "A microwave that turns itself off when it detects smoke." },
  {
    idea: "A car that adjusts the tempo of the indicator after a determined amount of time so that drivers won’t forget they’ve left them on.",
  },
  {
    idea: "An app that has a list of all your clothes and shoes. Let’s you categorize them and create outfits.",
  },
  {
    idea: "VR wedding videos. Film your wedding using 3d cameras for multiple perspectives. The married couple can later view their wedding via VR glasses reliving the whole day.",
  },
  { idea: "Headlights should automatically turn on when it gets darker." },
  {
    idea: "SubsribeBlock. Similar to Adblock but it blocks all those annoying subscribe pop up boxes on every single website.",
  },
  {
    idea: "An app that’s a mix between Twitter and Spotify where you can share a part of a song and quote your thoughts while people that follow you can share, like, and comment.",
  },
  {
    idea: "They should teach kids that money doesn’t buy happiness in school.",
  },
  {
    idea: "iPhone feature where you use your camera to scan WiFi credentials and it automatically connects.",
  },
  {
    idea: "An audio social network. You leave audio messages, no text, and you listen to posts as running conversations in genuine voices.",
  },
  {
    idea: "Cover that adjusts its thread weight depending on how hot or cold it is.",
  },
  { idea: "Car manuals should come with an app for your phone." },
  {
    idea: "A site like where can generate relevant avatars to your country based on your IP.",
  },
  {
    idea: "A “disable like for X amount of time” feature on Instagram so I can cruise Instagram without having to worry about liking a photo by accident.",
  },
  {
    idea: "An app where you can take one video and upload it to all your social media stories.",
  },
  {
    idea: "Take a picture of a business card with an iPhone and it automatically adds it as a contact.",
  },
  { idea: "Petrol home delivery." },
  { idea: "An app to meet people at airports while you wait." },
  { idea: "Face masks for pollen protection." },
  {
    idea: "An app where you find out who else on the plane wants to split a cab to town or maybe going to the same hotel etc.",
  },
  {
    idea: "A hitchhiking app. The app will look for a vehicle that has the same end destination as you and uses the same road as your pickup location. Then they will notify the vehicles who fulfilled these criteria and they can choose to accept or not.",
  },
  {
    idea: "A messaging app where the individual characters appear in real time on the other person’s screen.",
  },
  {
    idea: "An app where you enter your diet and it tells you what vitamins etc you are lacking.",
  },
  {
    idea: "A Google Maps feature for cyclists that allows you to adjust your route based on the weather.",
  },
  {
    idea: "A cooking app that shows you recipes based on what ingredients you have in your fridge.",
  },
  {
    idea: "IMDB should have the picture of the character in the movie you’re looking for next to the actor.",
  },
  { idea: "Instagram feature to like Instagram stories" },
  {
    idea: "Comedy Central Roasts alarm clock app. An alarm clock where comedians insult you until you get up.",
  },
  {
    idea: "An app where you take a picture of a spider or a snake and it tells you what it is and if it’s poisonous.",
  },
  { idea: "An app where anonymous people can help you respond to texts?" },
  { idea: "An Uber for lawn care." },
  { idea: "A travel bag that tells you via an app how heavy it is." },
  {
    idea: "Instead of “America’s next top model”, why not have “America’s next top role model” for our children.",
  },
  { idea: "Hackathon app. Find and join upcoming hackathons in your area." },
  { idea: "Shazam for art." },
  { idea: "A board game rental service." },
  { idea: "A travel bag that tells you via an app how heavy it is." },
  {
    idea: "Instead of “America’s next top model”, why not have “America’s next top role model” for our children.",
  },
  { idea: "Hackathon app. Find and join upcoming hackathons in your area." },
  { idea: "Shazam for art." },
  {
    idea: "Tinder for playdates for mothers who want their kids to play with other kids who also have similar interests.",
  },
  { idea: "A board game rental service." },
  { idea: "An app for sober flat sharers." },
  {
    idea: "A Premiere Pro feature that scans your project files and marks things you haven’t used & automatically trashes them for you.",
  },
  {
    idea: "An app that informs you when someone in your area orders food and allows you to “add-on” your order to be delivered to you.",
  },
  {
    idea: "Netflix feature that compares your Netflix list with someone else’s and shows what items you have in common.",
  },
  {
    idea: "A service to help people find compatible organs. Tinder but for organ donors.",
  },
  {
    idea: "A status on online comments to verify if the person really read the article or merely commented based on the title.",
  },
  { idea: "An option to bcc on WhatsApp." },
  { idea: "Tinder needs a ‘who’s your friend’ button." },
  { idea: "A way to poke someone to respond to your email." },
  { idea: "Hire temporary phones for a boarding pass." },
  {
    idea: "A Facebook/ Instagram/ Twitter feature to “Hide this person for one month”… Give them a time out for being annoying without writing them off entirely.",
  },
  { idea: "An app like Tinder that was just for making friends." },
  {
    idea: "People take smoke breaks in work, non-smokers should take mental health breaks. It’s actually healthy to get up for 15 minutes every hour to stretch the body and mind.",
  },
  { idea: "I wish there was a way to mute commentary for all sports games." },
  { idea: "A website that lets you queue YouTube, Vimeo, and other videos." },
  {
    idea: "An app to connect you with people who are going to the same concert/ event as you.",
  },
  { idea: "Uber for tuk-tuks." },
  { idea: "A drive-thru dominoes." },
  {
    idea: "Twitter feature to filter your DMs to put the unread ones at the top.",
  },
  {
    idea: "Group therapy app. An app where you connect depressed people with people near them to chat too or meet up.",
  },
  {
    idea: "Remote control scooters for parents. Control your children’s speed on the streets.",
  },
  {
    idea: "Digital wedding rings that are wirelessly rechargeable and have LED lights inside them. The rings beat and glow brighter the closer the two rings are together.",
  },
  {
    idea: "An app that connects you to other people when you feel an anxiety attack coming on.",
  },
  { idea: "Shazam for candle scents." },
  {
    idea: "An app that compares Uber and Lyft Prices and then books you the cheaper ride so you don’t have to open both apps and enter your location!",
  },
  {
    idea: "Sun cream fountains at beaches. Similar to water fountains. Pay $1 and receive\nsun cream for the days you forget.",
  },
  {
    idea: "A mix between home improvement & Airbnb. Allow people from different countries\nwith construction skills to stay in your house. Instead of cash payment, they fix up your house.",
  },
  {
    idea: "An app ai wardrobe, linked with online retailers to suggest clothing.",
  },
  {
    idea: "Bring back intermission at movies so you can go to the bathroom or buy snacks\nwithout missing the movie.",
  },
  {
    idea: "Physical books should come with a digital copy similar to vinyl records or Blu-Rays/DVDs.",
  },
  {
    idea: "Cars should come equipped with emergency lights, only to be used in an emergency. Flicking the lights would automatically alert all authorities in the proximity. This way you’d have the same caution as pulling the fire alarm and would also deter people from abusing the system.",
  },
  {
    idea: "A hairdresser app that has a feature to decide if you want to have a conversation with the barber or not.",
  },
  {
    idea: "A website where people can get feedback for their ideas/resumes/works, and also get viewed by investors and employers.",
  },
  {
    idea: "A universal method of wearing rings to tell more people about where you stand in the dating market.",
  },
  {
    idea: "A chrome extension that took long emails and paraphrased them into 2–3 bullet points.",
  },
  {
    idea: "A bank app feature where you can let them know you’re on holidays so they don’t freeze your account.",
  },
  {
    idea: "World Cup App idea. An app to let you call fouls via the app on players during the game. At the end of each half, you could compare a chart/ graph against real fouls/ other users called on players.",
  },
  {
    idea: "Running AI app synced with your Fitbit/ google maps. The app through a mixture of voice/ music encourages you based on your goals. “Come on Dave, you’re currently 60 seconds quicker than yesterday, take a left here as the traffic lights are down up ahead *intense music* ”",
  },
  {
    idea: "A website where new users get rated by the opposite sex and you only get to swipe with people within a few points.",
  },
  {
    idea: "A platform that could recommend personalized diets for people with autoimmune problems.",
  },
  {
    idea: "An app similar to Instagram but rather than likes, it is time viewed. The app tracks the time spent viewing a picture and under each photo, it will show how much time users have spent viewing.",
  },
  {
    idea: "Clothing store where salespeople have instant mobile-based billing to avoid queues at the counter.",
  },
  {
    idea: "An app that shows you how long is the security line at the airport?",
  },
  {
    idea: "Night mode on speakers that detects brainwaves and shuts off music off when you fall asleep.",
  },
  {
    idea: "Dockless bikes, deckles scooters… what about dockless pogo sticks.",
  },
  {
    idea: "A TV screen that auto adjusts to one’s corrective lens prescription.",
  },
  { idea: "Temporarily injured parking spots." },
  {
    idea: "Creche cinema service so people won’t take their young kids to rated R movies.",
  },
  {
    idea: "An email feature that scans each email and categorizes them into 2 folders — formal and informal.",
  },
  { idea: "A gym that disables your camera phone." },
  {
    idea: "Measuring cups should have their own weight written on them, so you can just subtract it if you forget to press the tare button on a scale.",
  },
  {
    idea: "A business of renting out costume boxes to kindergartens so kids there can play dress ups",
  },
  {
    idea: "Glassdoor clone where freelances rate their experience with businesses i.e stay away I had to chase for money etc",
  },
  {
    idea: "A website that helps you contact your elected officials with ease.",
  },
  { idea: "A way to poke someone to respond to an email." },
  { idea: "A Dyson style hand-dryer but for dishes." },
  { idea: "Mosquito repellent which smells nice." },
  {
    idea: "A browser extension that shows where I can buy an Amazon product at a local business.",
  },
  {
    idea: "A Chrome extension to block any posts that contain animal cruelty on all social networks.",
  },
  { idea: "Twitter option to create folders for your messages." },
  { idea: "Ability to filter films on Netflix by rating (G, PG, etc.)" },
  {
    idea: "An app that will randomly set off an alarm during all hours to better prepare you for having a kid. To turn off alarm you must sing a lullaby.",
  },
  {
    idea: "Book Depository should have a feature where you can chat to other users viewing the same book in real-time. Be great to talk to other people about the author or previous books you read etc.",
  },
  {
    idea: "Karaoke app, think of it like group facetime with music and lyrics.",
  },
  {
    idea: "A gym that reduces your monthly fee based on how frequent you go.",
  },
  { idea: "Netflix should have an “I’m feeling lucky button.”" },
  { idea: "A voice-activated kitchen tap." },
  {
    idea: "A WhatsApp feature that notifies you when someone opens your message.",
  },
  { idea: "An app where you can color pictures with your friends." },
  { idea: "Undo delete option on iPhone Mail." },
  {
    idea: "An app that ranked restaurants/bars/coffee shops by how air-conditioned they are.",
  },
  { idea: "On-demand ATM service for when you need cash." },
  { idea: "An app to diagnose vehicle engine noises." },
  { idea: "An iPhone feature where Siri screams when you drop your phone." },
  {
    idea: "A monthly subscription service where someone collects your makeup brushes and cleans them.",
  },
  { idea: "An app that reminds me to respond to texts I’ve read." },
  {
    idea: "An Instagram feature where you can sync your desktop to live stories. Be great to share design/ programming tutorials in real-time. Think of it like SkillShare/ Udemy but for stories.",
  },
  { idea: "A service where I can verify the price of car spare parts." },
  {
    idea: "iPhone feature where it will send you a notification if an app has been detected using the camera without you knowing.",
  },
  {
    idea: "Twitter shows followers/ following, they should also show how many times you’ve been blocked/ reported. I feel this would make users think twice before trolling/ abusing someone. You would have the ability to toggle its public visibility on and off.",
  },
  {
    idea: "YouTube edit feature that suggests music tracks to your video uploads.",
  },
  { idea: "A heat-color changing pan handle" },
  {
    idea: "Kids scary shampoo bottle that makes a sick noise when you squeeze it.",
  },
  {
    idea: "iPhone feature where If you’re on 1% battery Siri says “help me I’m dying”.",
  },
  { idea: "A FaceTime feature where you could turn on/ off subtitles." },
  {
    idea: "Twitter feature (optional): if you upload a new Twitter profile photo it will create a new tweet with the photo and the #newprofile.",
  },
  {
    idea: "A non-profit that has access to fruit trees on people’s property. They would pick the fruit at the right time and then use the fruit to feed the homeless.",
  },
  { idea: "A way to mute the Vuvuzela when watching the World Cup on TV." },
  {
    idea: "An option to make certain tweets private that only other users with the code could unlock to view.",
  },
  {
    idea: "A Twitter feature where I could toggle retweets on and off on my timeline so that I could actually read tweets from the people I follow.",
  },
  {
    idea: "Alexa skill called ‘Dress Code’. It will let you know what to wear depending on where you’re going.",
  },
  {
    idea: "An app where you cough into your phone and it tells you what type of cough you have.",
  },
  {
    idea: "Natural peanut butter jars should come in short, extra-wide jars to facilitate easier stirring.",
  },
  {
    idea: "A trading app like Tinder where you trade items like furniture, phones, and other things.",
  },
  { idea: "Farmer’s market drive-thru." },
  { idea: "Netflix should allow profiles to be private." },
  { idea: "A robot that would rack your weights for you." },
  {
    idea: "Location-based music playlists. A music app feature that would suggest different playlists depending on where I am. If I’m in the office — chill playlist, if I’m at the gym — Hip Hop/ Rock etc.",
  },
  {
    idea: "Every receipt should have a QR code so you can scan it, record the transaction securely, then throw away the paper bit.",
  },
  {
    idea: "Outdoor children’s games synced to their phone. The more time the kids play on the outdoor games the more time they can spend on their phone. #balance",
  },
  {
    idea: "Fat cats app. A game where you play against your friend. The idea is you feed your cat with money. The more active/steps you take the more your cat feeds and the fatter it gets. You can bet money to see who has the fattest cat at the end of the week/ month/ year. The app can sync with your wearable device.",
  },
  { idea: "Shazam for fonts." },
  {
    idea: "iPhone should be able to turn back on as soon as I plug it into the power outlet instead of having to wait 5 minutes.",
  },
  {
    idea: "Politicians should get a small shock if they dodge a question on live TV.",
  },
  {
    idea: "Alexa should only respond to children if they say “please” or “thank you”. Emergency calls override the restraints.",
  },
  {
    idea: "Connect cyclists with drink drivers. The cyclist would cycle to the person’s location/ put their bike in the car and drive them home.",
  },
  {
    idea: "When your hands are full ask Siri to scroll up or down by voice.",
  },
  { idea: "Should be a “no wifi needed” category in the app store." },
  {
    idea: "An app that alerted you when the gym machine you’re waiting for becomes free.",
  },
  {
    idea: "Shazam should have a feature that lets you know you’ve already Shazamed a song so you don’t repeat yourself.",
  },
  {
    idea: "An app where you scan a photo and it lets you know what app and filters were used to edit it.",
  },
  {
    idea: "iPhone feature that if another iPhone user is in the same room as you and a phone rings, your iPhone will tell you if it’s you or not “David, it’s you ringing.”",
  },
  {
    idea: "On-demand service pregnant women that delivers them anything they are craving.",
  },
  {
    idea: "Smart Fridge that closes itself, rather than playing a loud annoying alarm until it’s closed manually.",
  },
  {
    idea: "An e-mail service that detects Out of Office status and asks if you still want to send that e-mail.",
  },
  {
    idea: "Motion-activated sinks that don’t turn on until at least 5 seconds after the soap has been dispensed.",
  },
  {
    idea: "Windows that quickly become opaque when detecting a bird is flying towards it.",
  },
  {
    idea: "A shower device that sets the correct blend of cold and hot water for people in your house and then slowly turns on cold water when you’ve been in the shower for more than a set time.",
  },
  {
    idea: "All household appliance should have a QR code which, when scanned, would lead straight to the manual download page.",
  },
  {
    idea: "An app where you can type in what gym you go to and all the people who also go there pop up and you can choose your partner.",
  },
  {
    idea: "An app that automatically fills airport wifi sign up with a dummy email address when you go to log in.",
  },
  {
    idea: "Hazard lights that change a different color depending if you wish to signal others you’re turning left or right.",
  },
  {
    idea: "Radio stations that play progressively more upbeat music as traffic conditions get worse.",
  },
  {
    idea: "A site that automatically assembles videos of public events from social media and edits them into a single multicamera viewable experience.",
  },
  { idea: "iPhone feature built in style of tinder to delete photos." },
  {
    idea: "An app where you can customize a voodoo doll and then interact with it.",
  },
  {
    idea: "An app that tells you where the nearest McDonald’s that has a working ice cream machine.",
  },
  {
    idea: "A charger that stops charging when your device is fully charged.",
  },
  {
    idea: "A little lightbulb on our house keys, showing if the house is locked or not.",
  },
  {
    idea: "iPhone feature where if you hold down the decline call, it gives you the option to immediately block the caller.",
  },
  {
    idea: "A Tl;DR Slackbot that summarizes all messages that you missed while offline.",
  },
  {
    idea: "A LinkedIn filter that auto-blocks any non-custom connection request.",
  },
  { idea: "Dynamic jewelry that reconfigures itself to suit your location." },
  {
    idea: "iPhone feature that shows me how many km my fingers has swiped every day.",
  },
  {
    idea: "An app that edits out sirens and horn honks in music when played in your car.",
  },
  { idea: "A bot which reveals who everyone is subtweeting." },
  { idea: "A bathroom mirror that takes selfies for you." },
  { idea: "Hotel review site that lists verified WiFi download speeds." },
  {
    idea: "Save to drafts option on the Twitter desktop. Why is this not a thing, they have it on the mobile app?",
  },
  {
    idea: "AR labeling points of interest, towns, etc. built into the airplane window so you know what you’re looking at with touchscreen interaction.",
  },
  {
    idea: "Headphones that instantly pause the source when you remove them.",
  },
  {
    idea: "Holographic children that run onto the road when the system identifies a speeding car.",
  },
  {
    idea: "An Amazon feature that posts random presents to you. Select the amount of money that you would like to spend, then it randomly picks items from your cart, or a list of products, and ships it to you. Receive a lovely surprise in the post each month.",
  },
  { idea: "WhatsApp feature to save audio messages to your phone." },
  {
    idea: "Amazon Alexa that can detect boredom and come up with trivia challenges for you in real time.",
  },
  {
    idea: "Google search results should block sites that make you subscribe in order to see the article.",
  },
  {
    idea: "The ability to donate the collective number of minutes between when a conference call is scheduled to begin and when a conference call actually begins to charity.",
  },
  {
    idea: "A shower head that doubles up as a microphone. Synced via Bluetooth with an app so you can share your signing with friends.",
  },
  { idea: "A “ Stop showing me this product” button on advertisements." },
  {
    idea: "A chat app for new parents out there who are awake during the late shifts.",
  },
  {
    idea: "Smart directional fire sprinklers that drenches people who smoke in nonsmoking areas.",
  },
  {
    idea: "An elevator that when empty will go to the floor with the most people near the button.",
  },
  {
    idea: "Coupon & shopping list app that sorts items by store layout to minimize back-tracking.",
  },
  { idea: "Windshield wipers that shake themselves to remove ice build up." },
  {
    idea: "Smart Pill dispenser synced with a smartphone app for the elderly. Vibrates phone when pills dispensed. Family can check status remotely.",
  },
  {
    idea: "An iWatch app that understands your Sleep Cycle and shuts down the entire house (lights, tv, phone, door locks, garage door, etc.) into sleep mode when you cycle into a deep sleep! On wake, your coffee machine starts.",
  },
  { idea: "Spray on nail varnish." },
  {
    idea: "A toilet that tests your pee and sends data to your phone for daily health recommendations.",
  },
  { idea: "iMessage app that allows you to schedule messages for later." },
  { idea: "Engagement ring rental service." },
  {
    idea: "Color e-ink display on the reverse side of a laptop screen for digital stickers.",
  },
  { idea: "A mobile browser that auto-clicks the tiny ‘X’ on pop-up ads." },
  {
    idea: "Clothing hangers with an e-ink display that tells you when the last time you wore that item of clothing. Also synced up to an app to tell you which item gets the least wear so you can give it to charity.",
  },
  {
    idea: "A calendar that tells your colleagues what time slots you have free and also what time zone you’ll be in.",
  },
  {
    idea: "An app where you take a picture of yourself and you receive a complete set of emojis with your face.",
  },
  {
    idea: "iPhone Siri feature. A car app partnered with Siri where you can ask what the speed limit is while you’re driving or Siri will tell you to slow down.",
  },
  {
    idea: "An alarm app connected to GPS that could wake me up from a nap before my bus stop.",
  },
  {
    idea: "Headphones earplugs should be contrasting colors to differentiate between right and left.",
  },
  {
    idea: "Smart traffic lights that trigger notifications on all nearby phones when they change. “The light turned green, now is the time to put down your phone and drive.”",
  },
  {
    idea: "Machine learning app that correctly adjusts your friends arrival time when they say there, “15 minutes away”",
  },
  {
    idea: "Luggage that looks like giant sushi so baggage claim looks like a huge sushi revolving belt.",
  },
  {
    idea: "Phones that can only be powered by the sun, a great way to get kids outside.",
  },
  {
    idea: "Toilet seats that double as scales. Because they don’t lie, you KNOW you’ve been curious about your weight before and after!",
  },
  {
    idea: "Bars should have an app where you can vote if the DJ should skip the trash song they’re playing, and if it reaches to 20% of the occupants at the bar they skip the song.",
  },
  { idea: "A roommate locating service that matches based on interests." },
  {
    idea: "An audio-based dating app, where profiles contain no photos but just sound recordings of people describing themselves. For those of us very sensitive to sounds & words, this could be a powerful & novel way to connect people.",
  },
  {
    idea: "An app for people with social anxiety that tells them where the bathroom is in a restaurant so you don’t have to bother the staff.",
  },
  { idea: "An app like tinder but to find musicians to start bands with." },
  {
    idea: "An app that lets you rate your day and look for patterns that affect your mood.",
  },
  {
    idea: "Convenience stores that get robbed should keep a bright colored spray can under the counter and use it like pepper spray. The bright color will help police find the culprit.",
  },
  {
    idea: "Universal loyalty program as a game with levels and leaderboard with actual rewards from brands.",
  },
  {
    idea: "Object recognition scanners at checkouts so that all those sticky labels on fruit & veg can be eliminated!",
  },
  { idea: "Bras should have pockets." },
  { idea: "Build children’s playgrounds on the land of Nursing homes." },
  {
    idea: "Uber for suitcases so you don’t have to stumble around town with bags. Instead have them picked up and delivered to the airport for later.",
  },
  {
    idea: "VR Treadmill for open world games. A passive mode that lets you wander the wastelands of Fallout, or walk the streets of Los Santos in GTA 5 uninterrupted.",
  },
  {
    idea: "Podcasts should have a searchable speech to text to go with them. Will make it a lot easy to find all podcasts related to a specific topic I want to search for!",
  },
  {
    idea: "TL;DR versions of long text, should be put at the top of the article instead of at the bottom.",
  },
  {
    idea: "A clothes dryer that automatically folds your clothes when they are dry.",
  },
  {
    idea: "An AI that goes back over all my emails, finds chains about meetings I’ve forgotten to organise and adds a time in my diary.",
  },
  {
    idea: "An AI dishwasher that tells me when I’m spending more time loading an item than it would take to wash it.",
  },
  { idea: "Banana stickers with a live countdown of optimal ripeness." },
  {
    idea: "A tv that will pause what you’re watching if the sound in the room is suddenly loud.",
  },
  {
    idea: "A toilet that evaluates if you’ve had enough water and nutrients each use.",
  },
  {
    idea: "FaceTime should let you leave a Video-Voice Mail if the person you’re trying to reach can’t answer.",
  },
  {
    idea: "An app that notifies when someone has an email reply in draft so you don’t have to bug them.",
  },
  { idea: "An AI-powered app that tells you when to ignore Waze advice." },
  {
    idea: "Option to set the voice speed of any automated customer support. Press #2 if you want to listen at x2 speed etc.",
  },
  {
    idea: "Headphones that display whether someone can interrupt you or not. You can set to busy, on call, available etc",
  },
  {
    idea: "Coffee Thermos with a magnetic bottom in case you leave it on top of your car.",
  },
  {
    idea: "Conference calls where everyone is given a set amount of time after their time is up they are cut off.",
  },
  {
    idea: "Coffee /Teacup that changes color to show the coffee/ tea temperature.",
  },
  { idea: "A noise-canceling toilet." },
  {
    idea: "A way to tell the car in front of you that it wasn’t you who honked at them.",
  },
  {
    idea: "Option to set the voice speed of any automated customer support. “Press #2 if you want to listen at x2 speed etc.”",
  },
  {
    idea: "Headphones that display whether someone can interrupt you or not. You can set to busy, on call, available etc",
  },
  {
    idea: "Conference calls where everyone is given a set amount of time after their time is up they are cut off.",
  },
  {
    idea: "A toilet that evaluates if you’ve had enough water and nutrients each use.",
  },
  {
    idea: "An alarm app connected to GPS that could wake me up from a nap before my bus stop.",
  },
  {
    idea: "An app that uses geolocation and voice recording to create guided tours and log oral history.",
  },
  {
    idea: "An app that lets you mark off who completed a chore and over time see who does that chore what percentage of the time.",
  },
  {
    idea: "Make boycotting easier. Barcode scanning app that tells you the true owner of the brand of product you want to purchase.",
  },
  { idea: "Deodorant labels should all be scratch-and-sniff." },
  {
    idea: "Ovens that tell you when they last opened in case you forget to set a timer.",
  },
  {
    idea: "Car keys should have a beeper that sounds when your car alarm does.",
  },
  {
    idea: "A browser extension that would censor/remove based on keywords. Trump, Kardashian etc.",
  },
  {
    idea: "Start over button on all social networks. Delete all your content, friends, comments, likes etc and start fresh.",
  },
  { idea: "Self-cleaning car windows." },
  {
    idea: "Facebook, Instagram, Twitter option that hides your likes and follower count.",
  },
  {
    idea: "Allow people to buy the whole TV show on Amazon Prime instead of just each season separately.",
  },
  { idea: "A pill that reduces your need to sleep by 50%." },
  {
    idea: "Traffic lights that won’t give you a green light if your on your phone.",
  },
  { idea: "Automatic salt dispensing winter boots." },
  {
    idea: "An app where you input your address and your friend’s address, and it maps out shops and restaurants that are halfway between your addresses.",
  },
  {
    idea: "An app called “Gym Friends” where you match up with a local friend who will motivate you to go to the gym with them.",
  },
  {
    idea: "Make cell phone cameras shoot in landscape mode when held in the vertical position on the back camera.",
  },
  { idea: "Ben & Jerry’s drive thru." },
  {
    idea: "A candle that smelled like the smell of candles when you blow them out.",
  },
  { idea: "A way to flag text messages" },
  {
    idea: "AR app where you enter a book title or author that you like, then aim the phone camera at a bookshelf in a store and the app highlights the books you may be interested in.",
  },
  { idea: "Add “parkour” to Google map routes.." },
  {
    idea: "A way to buy a paper book and get the Kindle version for a nominal extra charge.",
  },
  {
    idea: "Netflix should invent wearable glasses that will track your eye activity and when it senses your eyes are closed for more than 2 mins (asleep) it will pause and turn of your device.",
  },
  {
    idea: "AR app where you point your phone camera at an apartment building and it tells you if any are for sale.",
  },
  {
    idea: "A different firefighter siren for when they have to drive on the opposite lane.",
  },
  {
    idea: "An app that alerts you when your favorite wines are on sale? And where they are sold.",
  },
  {
    idea: "A ‘I went to a concert” section for snap stories that way i know not to look at them.",
  },
  { idea: "A dislike button on Twitter." },
  {
    idea: "An AR app that lets you arrange your artwork on the wall before you commit to hanging it.",
  },
  { idea: "Irish driver’s licenses should list your blood type." },
  { idea: "Scratch & sniff deodorant labels." },
  {
    idea: "Car keys should have a beeper that sounds when your car alarm does.",
  },
  {
    idea: "A candle that smelled like the smell of candles when you blow them out.",
  },
  {
    idea: "AR app where you enter a book title or author that you like, then aim the phone camera at a bookshelf in a store and the app highlights the books you may be interested in.",
  },
  { idea: "An on-demand manicure service." },
  {
    idea: "An app that alerts you when your favorite wines are on sale. And where they are sold.",
  },
  {
    idea: "An app that would tell me when to leave to pick up someone at the airport based on their flight status.",
  },
  {
    idea: "Artist Radio that shows you what your favourite musician is listening to.",
  },
  { idea: "Twitter should recommend tweets based on the posts you liked." },
  {
    idea: "Wearable Glass App where you could have staring competitions with random people. First one to blink loses. Compete against your friends in a leaderboard.",
  },
  {
    idea: "Wearable glasses that act as an alternative to hearing aids. The glasses translate voice into AR captions/ subtitles.",
  },
  {
    idea: "Microwave that automatically opens the door once the time has elapsed.",
  },
  { idea: "Mandatory rock music in all public bathrooms!" },
  {
    idea: "An app where i point my phone at a sign or graphic and it automatically tells me what it means.",
  },
  {
    idea: "An app where you can insert someone’s face and it blocks it from showing up on all of your social media.",
  },
  { idea: "Netflix should have a shuffle option." },
  {
    idea: "A melody/beats search where you input a song and get results of other songs with similar melodies and beats.",
  },
  {
    idea: "Twitter feature that unfollows people your following if they follow Trump.",
  },
  {
    idea: "Coffee shops should have markers to put on the table when you’re alone to let other people know you don’t mind them sitting and talking with you.",
  },
  { idea: "A VR game where you play as the opposite gender for a day." },
  {
    idea: "LEGO should partner up with IKEA where LEGO makes instructions for IKEA furniture.",
  },
  {
    idea: "A website filled with ads to help people test if their adblocker works.",
  },
  {
    idea: "An app where you get the users to choose the best photo between two options.",
  },
  {
    idea: "A travel website where I can find the cheapest flights by only inputting length of the trip.",
  },
  { idea: "Traffic lights with progress bars until the next color change." },
  {
    idea: "An app that records meetings, then converts them into notes, and adds a tl;dr version.",
  },
  {
    idea: "Add an option to Yelp where employees can rate their experiences with their employer.",
  },
  { idea: "An app where you can create collaborative playlists." },
  {
    idea: "Anti-social phone. A phone for kids where they can’t download any social network apps.",
  },
  {
    idea: "An app where you input a movie and it tells you when is the best time to go to the toilet or buy drinks/ food.",
  },
  { idea: "A fridge that locks you out after a certain time." },
  {
    idea: "An app where you can input a TV or movie title and it will tell you if the TV/ movie is on Netflix, Amazon Prime, Hulu or Amazon Streaming for purchase.",
  },
  {
    idea: "An app where I can take a picture of a sheet of music and it will play it back for you.",
  },
  {
    idea: "An app where you can debate with another user over a chosen subject, but you can only respond to an argument 24 hours later so you can formulate the best possible reply.",
  },
  {
    idea: "A Netflix feature to create a playlist queue similar to YouTube.",
  },
  { idea: "Glassdoor for government contracts." },
  {
    idea: "A way to individually control other people’s mic volume in your online gaming chat.",
  },
  {
    idea: "Book vending machines. With each book, you would get the digital version.",
  },
  {
    idea: "Upload a photo of yourself and find how many online pictures you are the random person in the background.",
  },
  {
    idea: "A book site that lists all the books recommended in a book by the author.",
  },
  {
    idea: "A Shazam-style app for movies, TV shows, spoken word, or any audio recording!",
  },
  {
    idea: "A location-based app that allows users to ask others questions within a specified area.",
  },
  {
    idea: "Tea bags that change color to indicate when your tea is suitable to drink.",
  },
  {
    idea: "An app that can convert a YouTube playlist into an Apple/ Spotify playlist.",
  },
  { idea: "An app where people pay for your spot in line at an event." },
  {
    idea: "Truth Day: The opposite of April Fool’s Day where everyone agrees to be honest and straightforward in communication.",
  },
  {
    idea: "An app where you type in your graduation year and it shows you a list of things science has since found to have been falsely taught when you were in school.",
  },
  {
    idea: "Chrome extension that detects AI-generated text on Twitter and other platforms, with a reporting feature for suspicious content.",
  },
  {
    idea: "App that suggests convenient meeting points based on real-time locations of friends and customizable venue preferences.",
  },
  {
    idea: "App that breaks down goals into manageable tasks with progress tracking and reminder features.",
  },
  {
    idea: "A way to trigger my GPS system that only turns on when I reach a certain destination I’m not familiar with.",
  },
  {
    idea: "Non-stick poop toilet surface made of easy-to-clean materials, with a built-in cleaning system or special cleaner.",
  },
  {
    idea: "Toilet paper holders that alert you via phone message when it’s running low.",
  },
  {
    idea: "Polaroid app where photos don’t appear til 10 mins later. Shaking the phone speeds up the process of developing the photo.",
  },
  {
    idea: "Netflix app where if I’m watching tv with subtitles they appear on my phone in case I’m browsing.",
  },
  {
    idea: "A smart hoover head expands or reduces itself depending on the space it has to fit in between.",
  },
  { idea: "Movie ticket prices should reflect a film’s popularity." },
  {
    idea: "A hose equipped with a small radar sensor that automatically adjusts the pressure based on the density of plants, such as flowers and bushes.",
  },
  {
    idea: "Geo-tagged stickers that can be placed on any surface and tracked using a corresponding app.",
  },
  {
    idea: "Popcorn should include a small packet of floss or toothpicks for post-consumption cleaning.",
  },
  {
    idea: "A feature that allows you to link your streaming service accounts (e.g. Netflix, Hulu, Amazon Prime) to your social media accounts and filters out spoiler posts.",
  },
  {
    idea: "A feature on Netflix that allows you to view a summary of the total time you spent watching TV shows and movies",
  },
  {
    idea: "Gravebook. A place for you to chat , share photos and stories with family members about a loved one that passed. Invites are sent by an admin.",
  },
  {
    idea: "Social networks should have the option to hide posts from certain age groups. Allowing users to customize their feed and only see posts from people within a specific age range.",
  },
  {
    idea: "A smart fridge that tracks the expiration dates of your food and sends reminders to use up items that are about to expire.",
  },
  {
    idea: "A virtual reality headset that allows you to attend live concerts and events from the comfort of your own home.",
  },
  {
    idea: "A device that translates sign language into spoken words in real-time, allowing for better communication between hearing and non-hearing individuals.",
  },
  {
    idea: "A way to self destruct all my social accounts after i pass away.",
  },
  {
    idea: "Smart toilet with sensors and AI that adjusts the amount of water used for flushing based on the size of the waste.",
  },
  {
    idea: "Toilet with built-in composting system for sustainable waste management.",
  },
  {
    idea: "Children’s toothbrush that vibrates or plays a song for two minutes of brushing.",
  },
  {
    idea: "A virtual garden app that allows kids to plant, grow, and harvest virtual vegetables, and helps them learn about the process of growing food.",
  },
  {
    idea: "A sleek, long, thin screen that fits under your TV, displaying fully customizable close captions text.",
  },
  {
    idea: "On demand hotel maids that come to your house. I love the look & feel of the bed, how it’s made, the sheets, lil chocolate, origami towel.",
  },
  {
    idea: "Set up a small library at the bus stop where riders can borrow and exchange books while they wait.",
  },
  {
    idea: "An app that not only provides delicious recipes, but also curates a personalized music playlist for each one!",
  },
  {
    idea: "An app that you can scan your junk items and instantly see how much money you can make by selling them.",
  },
  {
    idea: "An app that helps people reduce their carbon footprint by tracking and optimizing their daily habits and activities.",
  },
  {
    idea: "A subscription service that provides monthly deliveries of sustainable, eco-friendly personal care products.",
  },
  {
    idea: "A platform that connects local farmers with consumers, allowing them to sell their fresh produce directly.",
  },
  {
    idea: "Zoom feature that people get charged X amount of money if they go over their set time on a call.",
  },
  {
    idea: "A PDF reader that saves your reading position and zoom level, syncing it across all devices for a seamless reading experience. No more scrolling and zooming to find your place – it’s all automatically saved for you.",
  },
  {
    idea: "Instagram feature that automatically generates captions and hashtags based on the content of a post, making it easier for users to create engaging and searchable content.",
  },
  {
    idea: "Linekdin feature that helps users identify and connect with potential mentors, based on their career goals and interests.",
  },
  {
    idea: "Create an AI tool that can monitor crops and soil conditions, using sensors and satellite imagery, to optimize irrigation and fertilization, and predict yields and pests.",
  },
  {
    idea: "Create an AI tool that can analyze large amounts of medical data and images, such as MRIs and CT scans, to identify patterns and diagnose diseases more accurately and efficiently than humans.",
  },
  {
    idea: "A VR game that lets players experience different historical periods and cultures, and interact with the people and events that shaped them, in a highly immersive and educational way.",
  },
  {
    idea: "AI that auto-converts my blog posts into a bite-sized twitter thread.",
  },
  {
    idea: "WhatsApp feature to translate audio messages into different languages.",
  },
  { idea: "Cars gas tank opening should be behind the rear license plate." },
  {
    idea: "USB-heated fingerless gloves, for the cold mornings at my computer.",
  },
  {
    idea: "WhatsApp feature shows you the local time of the person you’re texting.",
  },
  {
    idea: "AI that scans all your social network accounts and deletes anything that could affect your chances of getting a job.",
  },
  {
    idea: "Newsletter app. The app gives you an email in which you can sign up to newsletters. Keeps your email free and reduces the noise & distractions.",
  },
  {
    idea: "An app where you upload a reference art picture & it tells you what colour paints were used and links to buy.",
  },
  {
    idea: "A “hide pyramid scheme” option on LinkedIn posts or motivational posts.",
  },
  { idea: "An app the tells you how busy local playgrounds are." },
  {
    idea: "Ice cream truck but for coffee – a coffee truck that would drive around your area at a set time.",
  },
  {
    idea: "An app that automatically records your achievements in work which could be used for monthly reviews or promotion requests.",
  },
  {
    idea: "Sound-to-text ai glasses. The ai glasses would be able to tell what the sound is and understand situations such as – approaching vehicles, person shouting, phone ringing, doorbell, alarm and many more.",
  },
  {
    idea: "AI dream to image app. Whenever you wake up you would quickly out loud describe your dream. The app would then convert it into an image.",
  },
  {
    idea: "A collaboration design tool for architects. Ability to add along with the client every other person needed to build a house.",
  },
  {
    idea: "An app that can convert any cloud shape into a real-world object in real-time.",
  },
  { idea: "A lazer cutting pumpkin machine." },
  {
    idea: "An apple feature to convert any message into audio when listening to your Airpods.",
  },
  {
    idea: "An AI that could convert any voice recording to take the place of SIRI.",
  },
  {
    idea: "Twitter feature to show how many people have reported an account. Maybe change the color of the account to red.",
  },
  { idea: "Real-time view of your countries energy usage." },
  {
    idea: "Build a Dog rescue/ Retirement home hybrid. Both parties gain companionships.",
  },
  {
    idea: "A light shade that looks like a helieum balloon stuck to the ceiling.",
  },
  {
    idea: "Washing machine that detects when a non clothing item is in the barrel and notifies you. Having not spotted a nappy within a bundle of clothes this would have been a life saver.",
  },
  {
    idea: "A bowl that doubles up as a blender. Add all your porridge ingreditents to bowl and then blend.",
  },
  { idea: "WhatsApp feature to add captions to video messages." },
  { idea: "A music social network called EarBuds." },
  {
    idea: "Online platform where you can share highlights and quotes of a book you are currently reading.",
  },
  {
    idea: "A stopwatch that shows money increasing while it runs to help keep you motivated at work.",
  },
  {
    idea: "Netflix ‘watching with parents’ feature where it skips the sex scenes.",
  },
  { idea: "Device to control your child’s bike speed/ brakes" },
  {
    idea: "Duolingo AI feature that would change random words from your favorite song into the language you’re trying to learn.",
  },
  { idea: "24 hour disappearing tweet option." },
  {
    idea: "A hat that can adjust its tightness depending on the strength of the wind.",
  },
  {
    idea: "WhatsApp feature to send a message within a group but hide that message from an individual group member.",
  },
  { idea: "Wikipedia for datasets." },
  {
    idea: "Grammarly for Figma. A plugin that would give you real-time tips to improve your design.",
  },
  { idea: "Launch a microphone into space. Anyone can listen in real-time." },
  { idea: "Create flushable baby wipes." },
  {
    idea: "Garbage disposal for your toilet which would guarantee nothing gets blocked.",
  },
  {
    idea: "A wearable device that would detect when my body temperature got to warm and would automatically turn on my fan.",
  },
  {
    idea: "An app for influencers to help take the best photo depending on what location they are in.",
  },
  { idea: "A smart remote that makes a noise when you say “find remote!”" },
  {
    idea: "An iPhone feature where if you add someone’s number all of their social handles pop up and ask if you want to follow them.",
  },
  {
    idea: "iPhones should let us set an alarm – Warn me when my battery has X mins left before it dies.",
  },
  { idea: "A kid’s toilet with a whack-a-mole style flusher." },
  { idea: "An app where I can group buy local services with my neighbors." },
  {
    idea: "An app to vent for people who were struggling and needed an outlet. One person vents and listeners could only listen, no chat, no nothing. Just listen.",
  },
  {
    idea: "Alarm clock projector. The alarm clock would project a beautiful sunrise with the associated noises.",
  },
  {
    idea: "A Twitter/Instagram ‘follow random account’ button that would follow an account based on your engagement.",
  },
  {
    idea: "A problem to help with blank canvas fear. You simply tell the tool what you are looking to create, i.e a drawing, a poem, a book. The tool will then give you a one-liner to help start the creativity.",
  },
  { idea: "Recycle old clothes into punching bags." },
  { idea: "A vape that doubles up as a stylus pen." },
  {
    idea: "A Dall-E app that you can scan text with and it will create AI-generated images. Could be very interesting with fiction books.",
  },
  {
    idea: "A service that creates physical art in any medium from any digital art.",
  },
  { idea: "YouTube should should auto hide videos you have watched." },
  { idea: "Google maps should have a pot hole alert feature." },
  { idea: "An app that converts lego models into real world objects." },
  { idea: "Reverse of above. Turn photos of 3D lego objects." },
  {
    idea: "An app that every day gives you a concept with a 24h limit to create a drawing, photo or a short piece of text around the concept.",
  },
  {
    idea: "A microwave while on gives you short facts about topics you want to learn more about.",
  },
  {
    idea: "Charity websites should show exactly where your donations are going. i.e 80% charity 10% marketing 10% salaries.",
  },
  { idea: "A healthy protein fortune cookie." },
  { idea: "Kinder egg bath bomb that has a fun lil toy inside." },
  {
    idea: "A way to see your friend’s targeted ads so I know what to buy them for their birthdays.",
  },
  {
    idea: "Erasable tattoo ink. An ink that breaks down when exposed to intense UV light.",
  },
  { idea: "Temporary Tattoo printers." },
  {
    idea: "Dyson air purifiers should have an alarm that warns you when air quality is bad.",
  },
  {
    idea: "AI Glasses with built-in ad blockers. AI would remove any IRL ads.",
  },
  {
    idea: "Spotify dating app which matches you with a partner that has similar music taste.",
  },
  { idea: "A hybrid of a coffee shop & a library." },
  {
    idea: "GoHelpMe. A site similar to GoFundMe but you offer your help or volunteer depending on what they’re trying to accomplish.",
  },
  {
    idea: "An app which allows me to take a picture of a business card, the AI would then create a digital version.",
  },
  {
    idea: "The cardboard within toilet paper rolls should be made out of flushable materials.",
  },
  {
    idea: "Amazon should pick-up your old boxes when you get a new package.",
  },
  { idea: "An alarm that only turns off after X amount of steps." },
  { idea: "A self-cleaning microwave." },
  { idea: "A walking app that would." },
  {
    idea: "SoundTracker. An app where you input any movie/ tv show to find the songs accompanied.",
  },
  { idea: "Contact fish eye lenses." },
  { idea: "A version of Subway but you get to make your own sushi burrito." },
  { idea: "Why don’t electric cars have solar panel roofs?" },
  { idea: "Minecraft amusement park." },
  { idea: "Fly swatter that makes the lightsaber noise." },
  { idea: "Instagram, but only still images. No reels. No stories." },
  { idea: "Ladder with the shape of feet to step on." },
  {
    idea: "A highlighter that you can only see with special glasses. A great way to highlight books without marking them.",
  },
  { idea: "An edible skewer that comes in both sweet & savoury flavours." },
  {
    idea: "Doggy poo catcher that attaches to your shoe so you can slide under and catch.",
  },
  { idea: "Reusable roll-on deodorant." },
  { idea: "Car windows that self clean when you lower them." },
  { idea: "Website to permanently swap your home." },
  { idea: "WhatsApp feature to trim your audio message." },
  {
    idea: "An app where I could write one review and it gets shared to all the places I want to publish – Amazon, goodreads, storygraph, etc.",
  },
  {
    idea: "An app where people can share one song per day and you can also see your friend’s recommendations.",
  },
  { idea: "AR origami app." },
  { idea: "Slippers with a clip on sole for outside use." },
  { idea: "Milk carton that changes color if the milk is spoiled." },
  {
    idea: "A 3D service that turns your children’s drawings into 3D objects.",
  },
  {
    idea: "Social media feature to only allow you post X amount of times per day",
  },
  { idea: "TV that follows you around your room." },
  { idea: "Soother changes color depending on how dirty it is." },
  { idea: "Cold/ Heat pack for the entire body (maybe a suit)" },
  { idea: "Dyson garden leaf blower." },
  { idea: "An everlasting tea bag." },
  {
    idea: "Alexa feature that notices arguments and responds with calming words.",
  },
  { idea: "Popular beaches should have sunscreen vending machines." },
  {
    idea: "An app to tell you your legal rights in certain situations. For example, if you’re being pulled over then you can review your legal rights for that scenario.",
  },
  { idea: "Wikipedia for new and emerging ideas." },
  { idea: "A tool to convert Twitter threads into blog posts." },
  { idea: "A candle that smells like new books." },
  {
    idea: "A website where people can submit their websites for other people to rate and review.",
  },
  {
    idea: "A website that shows you ratings of products or places over time.",
  },
  {
    idea: "Your WIFI should auto reset when it detects no internet connection.",
  },
  {
    idea: "An astrology dating app, where you can match people compatible with your natal charts",
  },
  {
    idea: "A restaurant that allows you to dine with someone in another part of the world via a large screen & zoom.",
  },
  { idea: "A bot that auto logs you in to your online meetings." },
  {
    idea: "I love the oats pringle style can but why don’t all cereal come in it too?",
  },
  {
    idea: "An indoor flower pot that tells you if your overwatering or underwatering your flowers.",
  },
  {
    idea: "A to-do list and social media hybrid. Buddies add activities to each other’s to-do lists and vote on what should be done first.",
  },
  {
    idea: "A zipper that gives you a small shock if it’s open for longer then X amount of time.",
  },
  {
    idea: "Brown bins should have a small feeding hatch for birds to feed on the maggots.",
  },
  {
    idea: "A laptop that closes itself over when idle for X amount of time.",
  },
  {
    idea: "An app that scans your food items and lets you know when the item is about to go off.",
  },
  {
    idea: "Instagram feature to turn off stories/ igtv/ comments/ likes pretty much everything except posts. Bare bones.",
  },
  {
    idea: "An app that shows you what you’re going to look like ‘X’ years from now if you continue your current lifestyle.",
  },
  { idea: "Google News but only free sites, no paywalls." },
  { idea: "Tik-Tok but for poetry." },
  {
    idea: "An alarm clock that donates to charity every time you hit snooze.",
  },
  {
    idea: "A slack feature that notifies you when someone screenshots your conversation.",
  },
  {
    idea: "All videos should have a universal symbol/ icon for “Caution Epilepsy Trigger”",
  },
  {
    idea: "Google maps should allow users to review sections of their route.",
  },
  {
    idea: "Shower towels that has two sides. One side for upper and one side for lower.",
  },
  {
    idea: "An app that accesses a different home screen depending on the entered password.",
  },
  { idea: "GPT-3 Gift suggester." },
  {
    idea: "Movie theaters should offer a ten-minute intermission period for movies over a certain time to allow people to use the restrooms.",
  },
  {
    idea: "Replicas of space planets where people can take vacations in different space-like conditions.",
  },
  {
    idea: "head phones which mute when someone says ‘hello’ or ‘goodbye’ to you.",
  },
  { idea: "iCloud hide my email, but for phone numbers." },
  { idea: "LEGO that is soft enough to step on." },
  {
    idea: "A bike with a built-in theft feature where you can eject a spike in the seat from your phone.",
  },
  { idea: "Caffeine-free Redbull." },
  {
    idea: "An app where kids do chores and earn rewards or digital tokens to buy items.",
  },
  { idea: "Swap on-hold music for guided meditations." },
  {
    idea: "Marketplace to get custom build hardware. From wearables, 3d prints, or even Arduino boards.",
  },
  { idea: "A dating app based on your Netflix watch history." },
  { idea: "WhatsApp should have a built-in translator feature." },
  {
    idea: "Car brake lights that increase in brightness depending on how hard the car is braking.",
  },
  { idea: "A mixture of a personal trainer & a psychiatrist service." },
  {
    idea: "An alarm clock that puffs out the scent of freshly brewed coffee.",
  },
  { idea: "Memory foam toilet seats." },
  {
    idea: "Ring doorbell with a thermal camera. Quickly tell if someone has a high body temperature.",
  },
  { idea: "Microfiber shirts so you can easily wipe your glasses." },
  { idea: "A filter to remove stock photos from Google image results." },
  {
    idea: "An app where you can scan your old gift cards to see how much money is left on them.",
  },
  { idea: "An oven that beeps periodically to let you know it’s still on." },
  {
    idea: "Replace my desktop rubbish bin with a Pac-man. I want to be able to select multiple items to delete and have the Pac-man icon move around my screen eating the items.",
  },
  { idea: "On-Demand EV charging service." },
  { idea: "An app where you can invest in up-and-coming musicians." },
  { idea: "Dating app for fully vaccinated people." },
  {
    idea: "Shazam for photo filters. Upload a photo and the app will tell you what filter was used.",
  },
  {
    idea: "An art hologram projector where you could project any piece of art in its true dimensions.",
  },
  { idea: "An app where you can search for food by the macro ratio" },
  {
    idea: "David Goggins alarm clock. David throws insults at you until you turn him off.",
  },
  { idea: "Create a dating app for single parents and call it PlayDate." },
  {
    idea: "Skincare app where I  select all the skincare products I own and it automatically lists out the order I should use those products in.",
  },
  { idea: "Create a mirror that can take a photo." },
  { idea: "AI that that reminds me whenever I start procrastinating." },
  { idea: "An app that reminds you to live in the present." },
  {
    idea: "Google Chrome should reorder your tabs based on how much CPU memory they are taking up.",
  },
  { idea: "Cars should have a U-Turn signal." },
  {
    idea: "There should be a brake light on the back of cars that show how much pressure is being applied to the brakes.",
  },
  {
    idea: "An iPhone feature where Siri will shout “OUCH” when you drop your phone.",
  },
  {
    idea: "A monthly subscription service where a cleaner will come and clean your baby’s pram.",
  },
  {
    idea: "Google Chrome feature that lets you know you’ve already bookmarked a webpage.",
  },
  {
    idea: "Food takeaway app that will allow me to upload a photo of my house to help the delivery driver spot it.",
  },
  {
    idea: "Chrome Extension for Yelp to block out restaurants so that it does not show up anymore in search results.",
  },
  {
    idea: "Chrome Extension for Amazon that blocks out search results that don’t deliver to my location.",
  },
  {
    idea: "An app that automatically sends gifts to your loved ones. Be useful for anniversaries, birthdays, valentines, etc",
  },
  {
    idea: "Social media curse word crawler. The crawler will examine all your social posts and delete anything that contains any curse words.",
  },
  {
    idea: "Virtual assistant AI that you can share your ideas with.The AI will give you feedback/ advice on your ideas and tell you wether they are any good or have already been developed.",
  },
  {
    idea: "Running shoes that change color depending on how fast you are running or how fast your heart rate is.",
  },
  { idea: "Tattoo ink that fades after X amount of time." },
  { idea: "Voice activated WIFI router. “Router please reset yourself”" },
  {
    idea: "Chrome extension meme generator.  Quickly grab any image you see and overlay text to create a meme.",
  },
  {
    idea: "My 9 month likes to play with the TV remote so it would be great to have a lock button.",
  },
  {
    idea: "Ex deleter. An app that goes through all your social media posts and removes any photos with your ex.",
  },
  { idea: "Spray-on gift wrapping." },
  {
    idea: "Book a call app where you can set X amount of time and that call will end when the time has run down, no exceptions.",
  },
  { idea: "An app to store my vaccine card and show it when needed." },
  { idea: "A search engine that lets you filter out specific domains." },
  { idea: "Option on mobile to have voicemails converted to a transcript." },
  { idea: "On-demand-fuel-delivery app." },
  {
    idea: "An app called Traffic Jam. The app would let you can connect with people stuck in the same traffic jam as you and listen to music & chat together.",
  },
  { idea: "An app to help you find fruit stands." },
  { idea: "Shopping trolleys with turn signals." },
  {
    idea: "iPhone feature that prompts you when you save a duplicate image with the option to delete.",
  },
  {
    idea: "Zoom feature that would allow you to change your voice to different characters – Darth Vader, Christoper Walken etc.",
  },
  { idea: "A microwave that turns itself off when it detects smoke." },
  {
    idea: "Mate Roast alarm clock app. An alarm clock where your mates insult you until you get up.",
  },
  {
    idea: "We have ebooks but why not sketch ebooks. Imagine a digital sketchbook where each day your favorite artist adds one sketch every day for a year for you to view. You can view the sketch happen in real-time.",
  },
  {
    idea: "Make a range of bath bombs in the style of stock cubes. You can even have them called beef, chicken, lamb & vegetable but obviously, they won’t smell as the name suggests.",
  },
  {
    idea: "Your payslip should have a breakdown of where your tax is going. We need more transparency around this.",
  },
  {
    idea: "A debate website where you can paste a social media link that you disagree with from Twitter/ YouTube/ Facebook/ Instagram/ Tik Tok and then talk about it.",
  },
  {
    idea: "An app where I can create a collaborative stock portfolio with a group of friends.",
  },
  {
    idea: "Public trash cans should have a lever to press down the rubbish so you can fit more into the bin.",
  },
  { idea: "A social feature to “Hide this person for X amount of time”" },
  { idea: "Microwave that removes horrible odors when off." },
  {
    idea: "Babies sleeping bag that reduces/ increases the tog depending on the temperature of their room.",
  },
  {
    idea: "A bookmark feature where it stops you from adding the same link multiple times.",
  },
  {
    idea: "Autonomous shopping cart. Scan your shopping receipt and the cart will lead you on the quickest path to collect your items.",
  },
  { idea: "Drone garden trimmer that can cut your grass and your hedges." },
  {
    idea: "iPhone feature to uninstall an app but then schedule to auto reinstall it at X date.",
  },
  {
    idea: "A chrome extension that scans for negative/ troll comments on my social posts. The extension removes the comments while blocking the user.",
  },
  {
    idea: "An app that scans any hard-to-read handwriting and outputs it into readable text.",
  },
  { idea: "Doorbell that turns down the volume when your baby is napping." },
  {
    idea: "A horror ebook that has a random scary character jump out of the page to keep you on our toes.",
  },
  {
    idea: "Bored games. Tinder for finding people to play board games with.",
  },
  {
    idea: "A book app that will help you learn other topics of interest through book recommendations.",
  },
  { idea: "Glassdoor for landlords." },
  {
    idea: "iPhone optional feature where I can watermark my videos & photos automatically.",
  },
  {
    idea: "An app where you upload a photo and it generates a few caption ideas.",
  },
  {
    idea: "Shazam for food. An app where you take a picture of whatever meal you are eating at a restaurant and the app will show you the recipe & the ingredients.",
  },
  {
    idea: "A to-do app where as soon as you open any social media apps the to-do app will pop open with a list of your tasks.",
  },
  {
    idea: "Email feature where if I paste a link into a new email it would show red if the link is broken.",
  },
  {
    idea: "TV that adjusts the volume automatically depending on the scene within a movie or TV show. For example during a loud explosion the TV would reduce the sound slightly.",
  },
  { idea: "Rotten Tomato scores should be integrated into Netflix." },
  {
    idea: "An app where I input junk food I’m craving and it will give me a list of healthy alternatives.",
  },
  { idea: "A drive-thru make up artist." },
  {
    idea: "An alarm clock with a built in sensor where the only way to turn it off is by doing X amount of burpees.",
  },
  {
    idea: "An app where I take a picture of a plate and it tells me macros.",
  },
  {
    idea: "A travel website where I add my budget and plans an entire trip for me.",
  },
  {
    idea: "WhatsApp feature where you could flag texts and then sends you an e-mail reminder.",
  },
  {
    idea: "Create a Meetup app where you enter your location and your friend’s location. The app will then give you the best bar/ restaurant/ park etc in the middle.",
  },
  {
    idea: "An app where you’re shown lost dogs based on your GPS coordinates.",
  },
  {
    idea: "An app to scan a barcode and find out who the owner is of the product.",
  },
  {
    idea: "A WhatsApp message sound that changes depending on how long the message is.",
  },
  {
    idea: "A WhatsApp subtitle feature that converts an audio message into text.",
  },
  {
    idea: "Bank app feature to warn me if making a purchase would result in my bills not being paid for that month.",
  },
  {
    idea: "SMS, instant messages, and emails should have a “quiet” flag, so you can send a message to someone without waking/ disturbing them if you think they might be busy or asleep.",
  },
  {
    idea: "Another version of Uber where someone would come pick you up in a classic car.",
  },
  {
    idea: "Creative Mornings but for ideas. Once a week a group of like-minded individuals have a zoom call and chat about ideas that they have thought about during the week.",
  },
  {
    idea: "Nail clippers for kids that make the Cookie Monster eating sound when you clip.",
  },
  { idea: "Delete all my social networks with one click of a button." },
  {
    idea: "Screenshots automatically delete themselves off your phone after 24 hours, saved to the cloud just in case you need any of them back.",
  },
  {
    idea: "An app where you can take a pic of your junk and it shows you what Pinterest projects you can make with it.",
  },
  {
    idea: "An app that connects you to someone in the world who is interested in learning your language and vice versa.",
  },
  {
    idea: "AI that goes back over all my emails, finds chains about meetings I’ve forgotten to organize, and adds a time in my diary.",
  },
  {
    idea: "Walking or running app where the podcast only plays if you’re moving. If you want to finish that podcast you need to put the extra work in.",
  },
  {
    idea: "Pinterest but for music. Create mood boards and add your favorite songs etc.",
  },
  {
    idea: "Instead of dark mode why not have “Color mode” where you can choose from a colorful palette.",
  },
  { idea: "Wikipedia website needs a dark mode." },
  {
    idea: "Twitter unfollow feature where if someone ‘unfollows’ a pop-up asks them why. Get feedback on why people are unfollowing you. Optional to turn on/off.",
  },
  {
    idea: "An app where you enter a list of things you’re grateful for – your partner, kids, an upcoming holiday, friends, etc. The app then randomly notifies you throughout the day with a reminder.",
  },
  {
    idea: "An app where you swipe left & right on books and it matches you with other books.",
  },
  { idea: "Shazam for cars. Upload a photo of a car and get the full spec." },
  { idea: "An app where you can color pictures with other people." },
  {
    idea: "An app where I’m able to tip podcast creators on an episode-by-episode basis.",
  },
  {
    idea: "AI gift scheduler that purchased and delivers gifts to your friends in time for their special day.",
  },
  {
    idea: "A group alarm clock where you wake up with people on a similar sleep schedule. First-person up can wake the people sleeping in.",
  },
  {
    idea: "A website that will generate a no-code tech stack for your idea.",
  },
  {
    idea: "CBD finder app. Find, share, and recommend cannabis products for adults over 65+.",
  },
  {
    idea: "An app that would notify you when you’re near something of historical significance.",
  },
  {
    idea: "A website where you can save articles you want to read and it will randomly show you an article when you visit the site.",
  },
  {
    idea: "Pub finder app where I can input my location and number of people, and it will tell me any pub/bar which has space.",
  },
  {
    idea: "Lego AR that scans all your loose lego and then gives you a list of things to build with real-time instructions.",
  },
  {
    idea: "An app for pregnant women where you scan a food barcode and it tells you if it’s safe.",
  },
  {
    idea: "A website where you type in the perfumes you like and they suggest other perfumes that you will like.",
  },
  {
    idea: "Meals on Feels – an app where you input your mood and it tells you what to eat.",
  },
  {
    idea: "Instagram for gamers. A place to share game clips & screenshots.",
  },
  {
    idea: "Heely should release a range of electric Heelys that you can control with a remote.",
  },
  {
    idea: "An app where you can add multiple ear piercings to a photo of your ear to see what they would look like together.",
  },
  {
    idea: "An app for creatives and photographers where they can pin places to shoot or use as interesting backdrops.",
  },
  {
    idea: "WhatsApp should remind me to respond to texts I’ve read but didn’t reply.",
  },
  {
    idea: "LinkedIn should remove those automated ‘anniversary’ and other messages.",
  },
  {
    idea: "An alarm clock/ To do list hybrid where 15 mins are taken off your alarm time for every task that is not complete. This will allow you to get up earlier the next day to complete the incomplete task. You can assign a time to each task and that can be subtracted maybe.",
  },
  { idea: "A website that you can see all the latest conspiracies." },
  {
    idea: "Twitter should allow you save your bookmarks into categories and folders.",
  },
  { idea: "The ability to mute the laughing track when watching comedies." },
  {
    idea: "A physical LCD bookcase that displays all your ebooks. Simply click on the ebook you want and it will open on your Kindle.",
  },
  {
    idea: "An app where I could scan the cover of a book I own, and it automatically emails me an electronic .pdf of the book.",
  },
  { idea: "Website which curates the best tweet and threads on Twitter." },
  {
    idea: "A lock toggle for when you want to show someone a picture on your phone but don’t want them to swipe to other pictures.",
  },
  { idea: "All libraries should have a coffee shop." },
  {
    idea: "Chrome extension that helps reduce anxiety by blocking COVID-19 related content.",
  },
  { idea: "There should be an eating popcorn emoji." },
  {
    idea: "Dating app where you can set a date suggestion, and then you’re only shown people who want to do that date idea as well. For example “I want to visit a rock climbing wall and then go get wings & a beer after”",
  },
  {
    idea: "WhatsApp feature where you could write birthday messages in advance and schedule them to send.",
  },
  {
    idea: "Bathroom handle that shocks you if you forget to wash your hands after using the toilet.",
  },
  {
    idea: "A baseball hat that adjusts its tightness depending on how windy it is.",
  },
  { idea: "A way to barter your expertise for equity in a startup" },
  {
    idea: "Tinder for couples to find a movie to watch. Find a movie you both match on",
  },
  {
    idea: "A website to help you find the missing piece from your jigsaw. Simply upload a photo of your jigsaw and the AI will find, print and ship it to you.",
  },
  {
    idea: "Smartphones should let you know when the person on the other end is using speaker phone.",
  },
  {
    idea: "Scratch & sniff coffee bags. I would like the ability to smell the coffee before I buy.",
  },
  {
    idea: "An app where you can scan the ingredients of any product and it will quickly highlight anything harmful",
  },
  { idea: "Coffee in a juice box." },
  {
    idea: "Headphones with interchangeable caps in the shape of ears – cat, dog, elves, etc",
  },
  {
    idea: "An app where i can unfollow everyone who follows a specific person",
  },
  { idea: "Submit an article and people pitch headlines for it." },
  {
    idea: "An app where I can save articles for later reading but then receive a newspaper version of all the stories I haven’t read yet in the mail at the end of each month.",
  },
  {
    idea: "An app where you upload your grocery list and they will sort it by aisle.",
  },
  {
    idea: "An app where I enter my food order and it tells me which delivery service is the cheapest.",
  },
  { idea: "Drone hedge trimmer." },
  {
    idea: "An app where you can find a bench to sit based on your location.",
  },
  {
    idea: "Fitted sheets company that lets you enter the brand, size and then will send you fitted sheets that will fit your bed perfectly.",
  },
  {
    idea: "A Spotify feature where you input the time it takes for you to get home and it comes up with a perfectly timed playlist so you never have to miss the next verse",
  },
  {
    idea: "A cooking website for kids that makes cooking fun, educational and safe.",
  },
  { idea: "A bank just for kids." },
  {
    idea: "An option on Uber Eats where you can enter your budget and let the website pick something for you to eat. A great way to expand your taste palate",
  },
  {
    idea: "Brands on the stock market should have an upsell after you purchase their product online – “Would you like to buy some stock?”",
  },
  { idea: "Espresso flavoured cereal" },
  {
    idea: "YouTube feature where if someone ‘dislikes’ a video a pop-up asks them why. There dislike won’t process until they give their reason.",
  },
  { idea: "Auto-cancel whatever I join for a free 30 days." },
  {
    idea: "A tool that generate high end mockups from a text, a color and a logo",
  },
  {
    idea: "There are photos where we have unintentionally photobombed and it’s just on the internet somewhere… An app where you can find yourself in the background of stranger’s photos.",
  },
  {
    idea: "An email AI assistant that cleans up all my unread emails and unsubscribes me from the endless junk.",
  },
  {
    idea: "An app where you can create a shopping list. The app will give you the cheapest shops to purchase your items based on your location. Think Trivago for your shopping list items.",
  },
  {
    idea: "Woolly hat with fake ears so it’s easy for you to put on and take off a mask.",
  },
  {
    idea: "A non-profit that has access to fruit trees on people’s property. They would pick the fruit at the right time and then use the fruit to feed the homeless.",
  },
  {
    idea: "A social network called Give A Fuck, instead of likes you give a fuck. “Oh I love this meme * clicks ‘give a fuck’ icon *”",
  },
  {
    idea: "Your phone should show you a history of all the text you have copied",
  },
  { idea: "Take away that only serves meals under 1,000 calories." },
  {
    idea: "Twitter allows you to mute words but it should also let you mute images. Upload an image you want to mute such as the ‘Bernie Sanders mittens meme’ Twitter would then remove those images from your feed.",
  },
  {
    idea: "A bot that auto responds to all of your social media messages that you are away and you will respond soon.",
  },
  {
    idea: "A website where you input your dream and certain specifics. You then get shown other users who had similar dreams with the ability to chat.",
  },
  {
    idea: "An app to let you borrow and rent items you need from people close by.",
  },
  { idea: "On demand buggy cleaning service" },
  {
    idea: "Washing machine that won’t start if it detects tissue paper in the drum.",
  },
  {
    idea: "My download folder should remind me every few days of files that I haven’t engaged with and also with the option to bulk delete.",
  },
  { idea: "An app where I can remove any filter and see the original photo" },
  {
    idea: "A printing service that will create a framed vintage silhouette portrait from any photo.",
  },
  {
    idea: "An umbrella that has a waterproof surface in which you can write your ideas on. The tip of the umbrella would act as a removable pen.",
  },
  {
    idea: "Custom pre-filled diaries. For example I want to get fitter, so you fill out your goals and then get send a pre-filled diary.",
  },
  {
    idea: "A blank jacket you can slip over your book. Sometimes I don’t want people to know what I’m reading when in a public space.",
  },
  { idea: "A trackpad that shows its “mileage”" },
  { idea: "A TV that automatically mutes the advertisements." },
  { idea: "Shazam for flower smells" },
  {
    idea: "A “Phone” built with interchangeable lens options and other plug n play accessories (shotgun mic/lighting/etc.) that is used for mobile live streaming and video creation through apps like TikTok and Instagram.",
  },
  {
    idea: "A customized package of apps for you to get started running your own business or next project. Get app subscription discounts and learn what works for you.",
  },
  {
    idea: "Bluetooth preference that reconnects to correct headphones without having to re-pair if you got out of range for a second",
  },
  {
    idea: "Mobile phones should allow you to screen share your phone with support to help fix your issue",
  },
  { idea: "Face masks that change your voice to Bane." },
  {
    idea: "A dating app that once match with someone, you can’t match with anyone else until you unmatch with that person.",
  },
  {
    idea: "A calendar app that responds to new meeting invites with a $ figure of how much that meeting costs you per hour. “Hey, are you free to jump on a quick 30 min call to talk about a new project” App will auto-respond with an automated “Sure thing I charge $150 for 30 mins of my time. Please click here to book it in”",
  },
  {
    idea: "A zoom feature that if the same person has been talking for too long, The Oscars “Wrap it up music” plays",
  },
  {
    idea: "Data-driven wishlist. A way for me to see my close friends & families targeted online ads so I can get them better gifts.",
  },
  {
    idea: "Phone app where if I place my phone near another phone it will sync with the calendar and book in a time to meet up, other features could be share number, email, notes, documents etc",
  },
  {
    idea: "An app where you enter media you didn’t enjoy and it will match you up with people who also didn’t enjoy it.",
  },
  {
    idea: "An advice column app that younger people can write into and is responded to by our elders.",
  },
  { idea: "DocuSign just for NDAs." },
  {
    idea: "Digital sink that tells you how many dishes you need to clean and who cleaned what. Think of it as an email inbox – “You have 3 uncleaned mugs, this week top cleaner was Katie.”",
  },
  {
    idea: "Microwave style car cleaner. The car sits on a turntable where it is cleaned and then dried.",
  },
  {
    idea: "Fingerprint doorbell. The doorbell would recognize the fingerprint of anyone who was added to the database. Each user has their unique ringtone.",
  },
  {
    idea: "A tool to help you get feedback on responses to people’s emails.",
  },
  {
    idea: "An AI tool that scans your pitch deck and gives you ways to improve.",
  },
  {
    idea: "A website that helps you choose where to live based on your goals. For example I want to go for forest walks, join Crossfit, eat healthier, work for X and my budget is X.",
  },
  {
    idea: "Author reads aloud app where authors read their books to a small group of fans and then at the end you can ask the author questions.",
  },
  { idea: "Podcast where Morgan Freeman reads you bedtime stories." },
  { idea: "Bernie Sanders should launch his own range of mittens." },
  {
    idea: "Create a Chrome extension for Amazon that tells me where I can buy an item locally.Help support your local businesses.",
  },
  {
    idea: "Temperature control baby bottle that allows you to set the precise temperature of your baby bottle. The tech already exists",
  },
  { idea: "An app where your alarms sync with your calendar" },
  { idea: "A marketplace to purchase ads on popular newsletters." },
  {
    idea: "A matchmaking app that connects designers and developers based on projects, interests, wants, ambition, skills and more.",
  },
  { idea: "Someone invent an easier way to clean a waffle maker" },
  {
    idea: "Batteries that vibrate when they are about to lose power. We need a better way of knowing when batteries are about to die.",
  },
  {
    idea: "The volume of your car increases/decreased depending on it’s surroundings. Window down – volume up etc.",
  },
  { idea: "A babys bottle that changes color when the milk becomes spoilt." },
  {
    idea: "Someone print and sell a real version of the Windows Solitaire deck of cards",
  },
  {
    idea: "Kids bunk bed with built in ebook reader on the roof so they can read there favorite stories at night",
  },
  {
    idea: "A bathroom sink that that flushes from the rim just like a toilet",
  },
  {
    idea: "A oven barcode system that lets me scan the box to begin cooking the food for the right amount of time and power level.",
  },
  {
    idea: "Email feature that tells me how much of an email the recipient actually read.",
  },
  {
    idea: "An app where you could flag texts and then it sends you an e-mail reminder.",
  },
  {
    idea: "Sleep Bet App. Bet money that you will wake up at a certain time. Winners split the earnings that are lost by those that lose.",
  },
  {
    idea: "Custom newspaper delivery service. Have your very own newspaper using RSS feeds delivered to you daily or weekly.",
  },
  {
    idea: "An alarm clock that sprays you with water to wake you up. Add your oils for a custom smell.",
  },
  { idea: "Amazon filter to let you sort results by delivery times." },
  {
    idea: "Amazon should let you return items by scheduling a pickup along the driver’s route like they do for a delivery.",
  },
  {
    idea: "Photoshop voice-controls for basic editing. “Adjust the contrast by 10% & export image for web as a PNG.”",
  },
  {
    idea: "A campaign/funnel landing page AI bot that provides various size and position design suggestions to your landing page url based on the data of popular designs.",
  },
  {
    idea: "Lottery seed funding. Like Kickstarter, except you buy votes on new products/services and the top product gets all of the money each round.",
  },
  { idea: "On demand car defrosting service." },
  {
    idea: "AI-enabled smart storage unit that identifies and sells items shit that you haven’t used for years.",
  },
  { idea: "A way to remove all Pinterest results from Google image search." },
  {
    idea: "Twitter bot that screenshots any tweets with the words “My New Years Resolutions are…” it will then tweet you with the screenshot on the 31 Dec to let you know what a failure you are.",
  },
  {
    idea: "A chat recording service. My dad has lots of interesting stories and lived an eventful life. As a new parent I would love my kid to hear these stories when she gets older. Imagine a service that could record a conversation both audio & film between my dad and me, edit it and then give me the recording on my perferred medium – vinyl, cassete, cd or digital.",
  },
  {
    idea: "Launch a range of Cockroach milk. (Cockroach milk is three times as nutritious as cow’s milk)",
  },
  {
    idea: "An option on Amazon to filter out “does not deliver to ‘select country’ ”",
  },
  {
    idea: "An app where you enter a show you want to watch and it tells you what streaming service has it for free.",
  },
  {
    idea: "Read and swipe dating app based on descriptions. If you swipe yes, you then get to see pictures and decide whether or not to go through with it.",
  },
  {
    idea: "Start naming natural disasters after companies that contribute the most to global warming.",
  },
  {
    idea: "iPhone feature where ivy slowly grows on icon shortcuts that don’t get clicked on in a long time.",
  },
  {
    idea: "Google Maps should send me a push notification if I get close to a place I added on my “Want to go” list.",
  },
  {
    idea: "Similar to  Reddit, all social networks should have the ability for users to award other users. The awards could be converted into certain rewards – gift cards, ad spend etc.",
  },
  {
    idea: "Air freshener device that shouts insults at you when it detects your car being smelly. “Oi piggy this car is disgusting, clean it now!”",
  },
  { idea: "Self-disinfecting door handles on bathrooms." },
  {
    idea: "Dating app for people who got dumped, the app finds you matches based on photos of your ex.",
  },
  {
    idea: "A phone that offers both vertical and horizontal views when recording.",
  },
  {
    idea: "Replace on-hold music with a choice of an audiobook or a podcast.",
  },
  {
    idea: "Washing machine metal detector. The detector would tell you if there is anything metal in the machine before you turn it on.",
  },
  { idea: "A group alarm app." },
  { idea: "A social network where you can create and use your own font." },
  {
    idea: "Garage sale finder app. Find local garage sales in your area with feedback and ratings of each garage sale.",
  },
  { idea: "A better way for deaf people to access Podcasts." },
  {
    idea: "A chrome extension to auto convert any WeP file into a jpeg when downloaded.",
  },
  {
    idea: "Social network lotto. Each month pay $X amount to enter a lotto to win 1 million followers on Facebook, Twitter, Instagram etc.",
  },
  {
    idea: "Create a font out of a scanned letter. Preserve your loved ones handwriting forever.",
  },
  { idea: "Metacritic for restaurants." },
  {
    idea: "A shop that sells custom sized gloves. Place your hand on a scanner and a machine will create gloves that exactly fit your hand.",
  },
  {
    idea: "Guess the sound. An app that plays a sound and you have to guess it.",
  },
  {
    idea: "GoFundMe for movies/ tv shows. Bring back your favourite tv show.",
  },
  {
    idea: "An app that finds a halfway point for you to meet with a friend.",
  },
  {
    idea: "AI that recreates your hand writing and sends birthday, Christmas cards every year automatically to your family and friends.",
  },
  { idea: "Gas delivery service." },
  {
    idea: "A website for designers and developers to pitch their projects to each other for partnership.",
  },
  {
    idea: "When our brains get linked via neuralink someone will build a marketplace for IQ – “Rent a developers brain for X amount of time”",
  },
  {
    idea: "Swap printed receipts for digital. If I pay with my card then the receipt is sent to my bank or phone where I can see a digital version.",
  },
  { idea: "Create 2 metre Christmas crackers." },
  {
    idea: "Instead of greeting cards, Break Up Cards, you send them when you want to break up with someone.",
  },
  {
    idea: "A public toilet that detects when someone is peeing all over the seat and sprays their piss back at them.",
  },
  {
    idea: "AI Present Scanner. AI that scans your friend’s social accounts and suggests presents to buy based on their engagement.",
  },
  { idea: "A kindle cover that smells like books." },
  { idea: "Netflix should have a Blooper section." },
  { idea: "Pram with a heated handlebar." },
  { idea: "An app that can tell whether your cough sounds like COVID." },
  { idea: "A book that helps you come up with great ideas" },
  {
    idea: "Rechargeable reusable bracelets teachers can handout for field trips and track them all via native FindMy app devices.",
  },
  {
    idea: "A digital vinyl player that applies a vinyl crackling sound effect to what is being played, giving it a retro radio aesthetic.",
  },
  { idea: "Apple FaceID recognition even with a facemask." },
  {
    idea: "A plug-in that alerts you when watching YouTube, if the presenter is actually sponsored by that product or not.",
  },
  { idea: "Drone metal detector for the ocean." },
  {
    idea: "A community platform for local businesses. The owners can share insights, sell courses on how to grow business in their niche or franchises.",
  },
  {
    idea: "Netflix auto generated watchlist similar to Spotify’s Discover Weekly.",
  },
  {
    idea: "An alarm clock that charges you  X amount each time you hit snooze.",
  },
  {
    idea: "Personal KPI dashboard. An application in which I can write down my goal, link to it financial indicators or health indicators and make the stages of achieving the goal integrated into the calendar. In this way, you can monitor the achievement of goals, plan tasks, and measure progress.",
  },
  {
    idea: "App where you hover over a plant and find out about the optimal conditions and care for it. Similar to Translation apps where you hover over an image or text and it translates.",
  },
  {
    idea: "A GMAIL feature to block all “Out of office” auto response emails.",
  },
  {
    idea: "A browser plugin or app that allows users to screen record a broken app/site UI issue or error with details like device internet connection strength. Users upload recorded session to tweet link or submit it to the company to fix.",
  },
  {
    idea: "An app where you take a photo of how a car is parked. An AI detects the license plate. You can only send the text “you park great/ terrible”. When someone registers with their license plate, they are shown all the feedback they got.",
  },
  {
    idea: "An app that automatically links to your Spotify playlists for music when you’re put on hold by customer service.",
  },
  {
    idea: "A collaborative playlist where you can add and upvote tracks to move them forward in the queue. You should not be able to skip the currently playing track. Backed by your favorite music provider such as Spotify.",
  },
  {
    idea: "Subscription service that gives you a refrigerated box with vision sensors. You choose your items and then every time you want groceries you place the box outside your house and it senses it and a drone delivers your shopping directly to the box",
  },
  {
    idea: "Wardrobe with a built in steamer. Help to kill bacteria and freshen your clothes.",
  },
  {
    idea: "A simple todo app focused on tracking how long tasks took from start and finish to predict future task time estimates",
  },
  {
    idea: "A service that was tied to my todo list and held me accountable for things I didn’t do that week. The service would give me an automated call / text telling me what I was missing & give me tips to catch up.",
  },
  { idea: "America’s next top model but for Graphic Designers." },
  { idea: "A heated bike saddle for the cold days." },
  {
    idea: "A baby bottle that changes colour when it’s at the perfect temperature for feeding.",
  },
  {
    idea: "Aroma alarm clock that releases a smell that starts off gentle but gets more pungent the longer you ignore it.",
  },
  {
    idea: "Toothpaste should come in aerosol cans similar to whipped cream.",
  },
  {
    idea: "A smart fridge that turns down the light when you open it at 2 am.",
  },
  {
    idea: "An app where your goals are represented by flowers. The more you work towards your goal the quicker the flower will grow. Stop and your flower will wither and die.",
  },
  {
    idea: "After Effects should suggest videos to watch within the rendering box.",
  },
  {
    idea: "An app where you scan food and it will list the health benefits.",
  },
  {
    idea: "Bed sheets should all have standardized markings to indicate the ends and sides.",
  },
  { idea: "Car freshener that smells like freshly brewed coffee." },
  {
    idea: "Netflix feature that lets you create a custom queue of different TV episodes.",
  },
  {
    idea: "Start a TV club where a few people watch a set amount of episodes a week of a series and get together to discuss.",
  },
  { idea: "Mayo & ketchup squirt bottles that have nozzles on both ends." },
  {
    idea: "Bank Cards should use a QR Code to store information. The current contacts of the chip get damaged easily.",
  },
  {
    idea: "A smart television that is smart enough to recognise that kids are watching too close and turns itself off",
  },
  {
    idea: "Battery plug that unplugs itself from the socket after your device is fully charged.",
  },
  {
    idea: "An alarm clock that gives away spoilers to your favourite TV shows the longer you sleep.",
  },
  { idea: "Solar panel beach umbrella. Charge your phone at the beach." },
  {
    idea: "A smart microwave that automatically stops and stirs your food halfway through the power duration.",
  },
  {
    idea: "Plastic spoons that you peel a cover off of and they are full of peanut butter or Nutella.",
  },
  {
    idea: "A dating app synced with a wearable ring. When you’re in proximity to a match your ring glows brighter the closer you get.",
  },
  {
    idea: "A website that connects cosplay with hospitals so they can visit sick children and cheer them up.",
  },
  { idea: "Google Maps should have a safety rating for routes filter." },
  { idea: "IMDB scores should be integrated into Netflix." },
  { idea: "Marvel should create a CGI Stan Lee to keep the cameos going." },
  {
    idea: "An IMDB for startups. The ability to search for a startup idea and see if it’s been done before and if it was a success or a failure. Features such as team size, sales, insights are included etc.",
  },
  {
    idea: "Free bus journeys with the requirement that you must watch ads for the entirety of your bus journey.",
  },
  {
    idea: "An app where a random song would play that matches the amount of time it will take for me to get home.",
  },
  {
    idea: "A time-delay capsule that contains 400mg of caffeine. Take it before you go to bed. 8 hours later it begins releasing the dosage.",
  },
  {
    idea: "There should be a breathalyzer to show how sick you are. This would be fair to employers/employees alike. Measure amount of bile, pathogens in breath/blood",
  },
  {
    idea: "Anyone who wants to buy a gun should have to get approval from a Psychologist before purchasing.",
  },
  {
    idea: "Google map should have a ‘noise level’ filter for streets — can be helpful when booking a hotel (Pre-Corona Idea).",
  },
  { idea: "Toilet paper rolls should be made out of flushable materials." },
  {
    idea: "A Chrome Plugin that removes Pinterest links out of all Google searches.",
  },
  {
    idea: "Instagram should auto suggest hashtags based on what you’re posting about.",
  },
  {
    idea: "Peloton for Wheelchair users. A great way for the disabled to join a community and still keep fit while indoors.",
  },
  {
    idea: "An app where you can share anything and ask the users to roast it. Roast my photo. Roast my drawing.",
  },
  {
    idea: "Tinder for racket games. Match with people to play different racket games involving two-player games – tennis, squash, badminton, beach tennis and so on.",
  },
  {
    idea: "A car with a built-in drone camera. The camera can help you deal with blind turns, corners or curves.",
  },
  { idea: "A cologne that smells like new books." },
  {
    idea: "A dating app called discovery. When you match with someone the app will choose a spot for you to meet. The only directions you will have will be given by a compass.",
  },
  {
    idea: "Kids toilet called cookie monster. Every time you flush the toilet will scream “SNACK TIME” and make the cookie monsters eating noises.",
  },
  {
    idea: "An app that every day gives you a concept with a 24h limit to create a drawing, photo or a short piece of text around the concept.",
  },
  {
    idea: "Tinder to help couples decide on things. Each partner would add what movies, tv shows, places to eat, recipes to make, places to visit that they like. They would then swipe left or right on what their partner has added. A way to help couples decide on what to do.",
  },
  {
    idea: "A water bed that gives the illusion you are floating on an inflatable at sea – seagulls, waves crashing and similar wave movements.",
  },
  { idea: "Apple watch should have a blood glucose monitor feature." },
  {
    idea: "Netflix should create a subtitle feature to help you learn a new language. It would swap out a random word into the language you are trying to learn.",
  },
  {
    idea: "Gun safes should have a breathalyser test. If you are over the level the safe won’t open.",
  },
  { idea: "An app that converts speech into sign language." },
  { idea: "Airpod cases should double up as a controller." },
  {
    idea: "Anti-social network phone that allows you to only post three times per day across all social networks.",
  },
  {
    idea: "Onlyfans for chefs. You subscribe to a chef and get cooking ideas, recipes, videos etc.",
  },
  { idea: "Windows that automatically open when they recognise smoke." },
  {
    idea: "Recipe chrome extension that extracts the actual recipe. No more endless scrolling looking for the god damn recipe.",
  },
  { idea: "A candle that has that new book smell." },
  {
    idea: "An app that matches you to people who highlighted the same passages while reading.",
  },
  {
    idea: "Hard reset app. Connect all your social accounts to the app. Once connected you can do a hard reset on all your followers or all your content or both. Start fresh.",
  },
  {
    idea: "A light on your laptop that changes color depending on your wifi speed.",
  },
  { idea: "An Netflix option to remove the laughing track on sitcoms." },
  { idea: "A service that provides custom jack-in-the-box." },
  { idea: "Charity boxing match between Elon Musk and Jeff Bezos." },
  {
    idea: "A text editor where Pac-Man will start eating the text whenever you press backspace.",
  },
  {
    idea: "AI chrome extension for anxious people. You flag any posts that make you anxious across any social network. The more posts you flag the smarter the AI will become in auto-blocking.",
  },
  {
    idea: "iPhone feature to assign different ringing levels to different people. i.e set my family & work too loud, all others to medium.",
  },
  {
    idea: "A noise-cancelling toilet, so you don’t wake your partner up at night or in the morning.",
  },
  { idea: "A mini cement mixer that you can mix ice/drinks in." },
  {
    idea: "A recycling bin that compresses my trash allowing me more space to fill.",
  },
  {
    idea: "Instagram feature to blacklist posts that use certain words or hashtags.",
  },
  {
    idea: "An app that would allow you to sell multiple items on multiple platforms. Create one listing for each item and the app would post the item to ALL platforms (eBay, Amazon, Facebook groups etc).",
  },
  {
    idea: "Tinder for actors. Where fellow actors can meet and go over their lines together.",
  },
  { idea: "An app where you can exchange unwanted Christmas presents." },
  { idea: "A microwave that won’t turn on if it detects metal." },
  {
    idea: "Book club finder app. People get matched into a group based on their reading interests.",
  },
  {
    idea: "iPhone feature called ‘Fortune cookie’. When you break your screen a fortune cookie will pop up with some words of wisdom.",
  },
  {
    idea: "Fruit that has stickers on them should sell space for another sticker as Adspace",
  },
  { idea: "AI that dumbs down wordy eBooks into basic English." },
  {
    idea: "Flavoured lemon, lime & other fruit-flavoured ice cubes. You could add the cubes to your soft drinks or alcohol to enhance the flavour rather than the generic water ice cubes.",
  },
  {
    idea: "Goodreads for Podcasts – A place to share, discover and track podcasts.",
  },
  {
    idea: "When you search for a shop/ bar/ restaurant on Google it should tell you whether it is mandatory for a mask or not.",
  },
  {
    idea: "YouTube feature where if someone ‘dislikes’ a video a pop-up asks them why. Their dislike won’t process until they give their reason.",
  },
  {
    idea: "Remove my ex. An algorithm that removes a selected person from all your photos.",
  },
  {
    idea: "Clothing company should start selling masks that match their upper-body apparel.",
  },
  { idea: "A news app that only delivers positive news." },
  {
    idea: "An app where I add my favourite artists and when they announce a tour ill receive an alert.",
  },
  {
    idea: "Sports fan app. A select amount of fans will have access where they can cheer during games which will play into the stadiums. Each seat would have a speaker that’s connected to each fan’s phone.",
  },
  {
    idea: "An app where you partner up with people and watch each other’s favorite movies and then talk about them.",
  },
  { idea: "An app to block a person on all social networks with one click." },
  {
    idea: "Filter finder. An app where you screenshot a photo and it tells you what filter/editing that person used.",
  },
  {
    idea: "FaceRuff. An app where you create a social profile for your dog. You can follow other dogs, go for walks, tag each other in photos.",
  },
  {
    idea: "Music app that can detect your running speed and alter the music in realtime to fit your tempo.",
  },
  { idea: "A device that can locate annoying sounds." },
  {
    idea: "An app where I scan my grocery receipts and it will track the prices of the items I buy most frequently so I can know when something is on sale for a good price or not.",
  },
  {
    idea: "GoHelpMe. A site similar to GoFundMe but you offer your help or volunteer depending on what they’re trying to accomplish.",
  },
  {
    idea: "Spotify/ Apply Music should add the ability to discuss the song you’re listening to with other users in real-time.",
  },
  {
    idea: "An app where people sign up to show up at dirty Airbnb rooms and leave it cleaned up in exchange for staying free.",
  },
  {
    idea: "A smart television that is smart enough to recognise that kids are watching too close and turns itself off",
  },
  { idea: "Substack for Podcasts." },
  {
    idea: "A zip that if left unzipped for more than 1 min starts screaming",
  },
  {
    idea: "Develop a jacket with airbags for protecting elderly people when falling.",
  },
  {
    idea: "Auto applies job app. Upload your CV, Cover Letter, and personal details. The app scrapes all jobs in your industry and auto applies to any new relevant jobs.",
  },
  {
    idea: "A to-do app where as soon as you open any social media the to-do app will pop open with a list of your tasks",
  },
  {
    idea: "Create a green vegetable smoothie recipe for kids and call it Hulk Juice.",
  },
  {
    idea: "A cooking app where each recipe has its own music playlist that you can listen to while cooking.",
  },
  { idea: "Smart tv with a built-in adblocker." },
  {
    idea: "Gofundme for cancelled TV shows. Bring back your favorite shows.",
  },
  { idea: "Tinder but for filmmakers to match with scriptwriters" },
  { idea: "Laptop trackpad that only works with your fingerprint." },
  {
    idea: "An app that scans all your social media and removes any content that could come back and bite you on the ass.",
  },
  { idea: "Chrome tabs should reorder themselves in order of memory usage." },
  { idea: "Drive-thru wash built just for washing motorbikes." },
  { idea: "Garden foot gloves for the armless." },
  {
    idea: "You should be able to change the speed of WhatsApp voice messages",
  },
  {
    idea: "QR code that people can scan to tip buskers and street performers.",
  },
  {
    idea: "A browser extension that would automatically hide all the “Cookie Law” pop-ups.",
  },
  { idea: "Stackoverflow for designers." },
  {
    idea: "To get kids to wear Facemasks create a series with superhero designs.",
  },
  {
    idea: "You should be able to set the frequency of tweets you want to receive from an account you follow.",
  },
  {
    idea: "Tesla self-driving feature should have an “I’m Feeling Lucky” option that drives you to a random location.",
  },
  {
    idea: "Someone should create a website where you can filter available jobs by % of diversity.",
  },
  {
    idea: "Police should wear jerseys with a large QR code. Next time you’re filming the policeman’s details will appear – name/ profile photo/ badge number etc saved to your phone.",
  },
  {
    idea: "Reflection day. A day where the citizens of the world take a day off and reflect on how we can improve as a nation.",
  },
  {
    idea: "Personal analytics software that gathers and examines your browser history, email newsletters, social accounts, apps, bookmarks and presents it graphically.",
  },
  { idea: "Twitter feature to create a word cloud out of a thread." },
  {
    idea: "Chrome extension that automatically declines all GDPR, cookies, email newsletter sign-ups, follow us, etc pop-ups.",
  },
  {
    idea: "A product that allows me to read newsletters on an e-ink display.",
  },
  {
    idea: "A motivational alarm clock for entrepreneurs that is synced with your Stripe account. The alarm wakes you up with your Stripe balance. “Morning David, today you have $2,100 in your account, you made $150 while you slept. Your goal for this month is $3,200”",
  },
  {
    idea: "Lego AI scanner app. Scan your lego pieces and the app will provide instructions for more models to build.",
  },
  {
    idea: "A Twitter feature where the best threads are curated under different categories.",
  },
  {
    idea: "Duolingo music feature that would replace random words from your beloved songs with your chosen language.",
  },
  {
    idea: "A social media platform exclusively for artists/content creators.",
  },
  { idea: "Shazam for dreams." },
  {
    idea: "An iPhone call feature where I could set a time for any call. SIRI would announce to the caller the duration of the call before I pick up “This call will end in 5 mins”.",
  },
  {
    idea: "Twitter & LinkedIn should allow you to filter out all ‘I got a new job!’ posts.",
  },
  {
    idea: "On-Demand Portable Toilet Service. Businesses are closed and nobody wants to use public toilets.",
  },
  {
    idea: "You Got Mail. A smart outdoor mailbox that sends you a notification when you get mail.",
  },
  {
    idea: "An app where you hover your phone camera over a link on a paper, or on your laptop, and it copies the link to your clipboard.",
  },
  {
    idea: "An iPhone feature that automatically sends my 5 favorite photos to an online printing service. Popularity is based on how many times I viewed a photo.",
  },
  { idea: "You should be able to change the voice for any audiobook." },
  { idea: "All restaurants should have a QR code for their menus." },
  {
    idea: "Social networks should allow you to block a user for a select number of days, months or even years.",
  },
  {
    idea: "Finance and entrepreneurship should be taught from a very young age in every school.",
  },
  { idea: "Netflix should give you an “always skip intro” option." },
  {
    idea: "Friend reminder app. The app will auto message a friend that you haven’t contacted for a while with a preset message such as “Hey buddy, how are you?” It will help keep friendships alive.",
  },
  { idea: "Netflix shuffle episode option." },
  { idea: "An “unsend message” option for iMessage" },
  { idea: "A “close friends” twitter option." },
  { idea: "VR game that teaches you magic tricks." },
  { idea: "Tinder but for finding side-project collaborators." },
  { idea: "Plant pots that change color when they are dry." },
  {
    idea: "A smart car that recognises your mood when you get in and selects the right music for the moment.",
  },
  {
    idea: "An app where you can point your phone’s camera at any logo and have it tell you who designed the logo and any previous versions.",
  },
  {
    idea: "Google search should have an option to ‘show me companies impacted by COVID-19’ first.",
  },
  {
    idea: "Chrome extension that tells you the word count of an article, so you know whether you have time to read.",
  },
  { idea: "A website for discovering the most popular remote work tools." },
  { idea: "Google Chrome tab feature where I can add background music." },
  {
    idea: "Chrome extension that helps reduce anxiety by blocking COVID-19 related content.",
  },
  {
    idea: "Twitter should auto suggest hashtags based on what you’re tweeting about.",
  },
  {
    idea: "An app where you can take a picture of your plate and it calculates the calories",
  },
  { idea: "Chrome extension that auto-blocks any TikTok videos." },
  { idea: "Find my TV remote app with a voice assistant." },
  {
    idea: "Netflix should have an episode review feature. so if my partner misses an episode they can watch a 60-second review. Save me having to watch it again.",
  },
  {
    idea: "iPhone feature to record sound on your photos. When you take a photo your phone will record a 5-second audio snippet to help you relive the moment even more.",
  },
  {
    idea: "A shopping list location app that sends you a reminder notification when you’re nearby a place where you can buy a list item.",
  },
  {
    idea: "An app that connects people who want to learn a certain skill with teachers who can teach them that skill. Tinder for skillshare?",
  },
  {
    idea: "An app that randomly sends you a notification every week to take a photo within 60 seconds. The app compiles your photos into a montage.",
  },
  {
    idea: "Childs toilet that after they have done the business and stand up they get a round of applause.",
  },
  {
    idea: "Apple should create a feature where if you try to take a group selfie a pop-up message will appear asking you to “please practice social distancing”.",
  },
  { idea: "Soap that changes color after 30 seconds." },
  { idea: "Laptop light to indicate if your microphone is on/off." },
  { idea: "An app to tell you where the closest shop has toilet paper." },
  { idea: "An app to report large social gatherings." },
  {
    idea: "An app where I can play a song and it will tell me the chords depending on my chosen instrument.",
  },
  {
    idea: "An app where you can buy nurses, cleaners and doctors breakfast/ lunch/ dinner or coffee.",
  },
  { idea: "All museums should create virtual tours of their attractions" },
  {
    idea: "SMAA — Social Media Addicts Anonymous. SMAA is a Twelve Step Fellowship dedicated to helping anyone suffering because of their Social Media Addiction.",
  },
  { idea: "All libraries should deliver books." },
  {
    idea: "An app where people mumble a bit of a song they don’t know the name of, other users can listen and tell them what the name of the song is.",
  },
  {
    idea: "Youtube best bits. A youtube clone that condensed all the best bits from a video. People always post comments like “scroll to 1:23 for the best bit” so why not automatically edit a video based on the user’s comments.",
  },
  {
    idea: "Ghost pepper-infused hand sanitizer, it would kill germs and stop you touching your face. #coronavirusidea",
  },
  {
    idea: "A motion sensor stovetop burner that switches itself off when it’s empty and left unattended for more than 1 min.",
  },
  {
    idea: "Self-storage facility for food. For people who need to buy in bulk but don’t have space at home.",
  },
  {
    idea: "A wearable ring that would shock you if it sensed you were about to touch your face. #coronavirusidea",
  },
  { idea: "Dating app that lets you filter users by their work schedule." },
  {
    idea: "AR app that shows you what the plant looks like when you scroll over the seed label.",
  },
  {
    idea: "A browser extension that blurs pictures of anything you have phobia off – Arachnophobia, Apiphobia, Musophobia etc",
  },
  {
    idea: "Duolingo alarm clock feature that wakes you up with a new word in a language you’re trying to learn.",
  },
  { idea: "A monthly subscription box for plants & seeds" },
  {
    idea: "Video Conferencing software that automatically mutes the person munching/ chewing on an open microphone.",
  },
  {
    idea: "A chrome extension that tells you what the password requirements were when you were creating the original password.",
  },
  {
    idea: "An app that automatically cancels all your recurring credit card payments for services you don’t use after the second month.",
  },
  {
    idea: "Facebook Marketplace app that scans your junk and automatically tells you how much you could make if you sell it.",
  },
  {
    idea: "Netflix app where if I’m on my phone and watching a tv show with subtitles then they appear on my phone so I don’t miss out.",
  },
  { idea: "Police officers should have to do a fitness test EVERY year." },
  {
    idea: "A voice-activated car horn. Next time someone cuts you off just yell “CAR HORN” to activate your horn.",
  },
  {
    idea: "A blank ebook but each day the writer adds one page every day for a year for you to read.",
  },
  {
    idea: "An Apple Music feature that starts your favorite songs in English and the more you play the more it slowly replaces words and then full sentences into a different language.",
  },
  {
    idea: "Taste Buds. An App where families can vote on what to eat for dinner for the week.",
  },
  {
    idea: "An app where people can track and share scenic drives that are near them.",
  },
  { idea: "github for musicians." },
  { idea: "Shazam for identifying sneakers." },
  {
    idea: "Boxes that fold into the smallest possible shape so it reduces space in your bin.",
  },
  {
    idea: "An app that randomly sends me ridiculous challenges. For example, “You must signup and complete a marathon in the next 3 months.",
  },
  {
    idea: "Google map feature where you can look up various locations to see if the leaves have changed color yet.",
  },
  { idea: "Build Wind Turbines next to airplane runways." },
  {
    idea: "Gmail feature where if I paste a link into a new email it would show red if the link was broken.",
  },
  {
    idea: "iPhone Contact reminder feature. The ability too quickly set an audio reminder when you finish a call. The reminder would be associated with that person so you could quickly listen back.",
  },
  {
    idea: "Connect lonely elderly people with people who are trying to learn their skill. Given the choice, I would choose to learn how to become better at X from someone who has 40+ years of experience with X. In my opinion, sometimes experience is more valuable than a piece of paper",
  },
  {
    idea: "A way to limit tweets from certain accounts. There are accounts I like to follow but they tweet way too much. Show me 2-3 tweets of the most popular tweets per day.",
  },
  {
    idea: "Candy Crush type game that has a feature where children get more lives when they do their chores.",
  },
  {
    idea: "A to-do app where as soon as you open any social media the to-do app will pop open with a list of your tasks",
  },
  {
    idea: "A 4 in 1 shower product that shampoos, conditions, body wash, and toothpaste.",
  },
  {
    idea: "Fitbit should create a VR zombie shooter game which is synced to your wearable device. Your heart rate would dictate how stressful the gameplay would be.",
  },
  { idea: "The ability add your timezone to WhatsApp." },
  {
    idea: "Why don’t all the big tech companies (Skype, Facebook, Amazon, Gmail) offer pared-back versions of their products for the elderly (non-tech-savvy)? It could include increased button/ font sizes, remove unnecessary features/ clutter, better phishing preventative systems etc",
  },
  {
    idea: "An app where you set a budget, select a few local restaurants, click shuffle and the app will deliver a surprise to your home.",
  },
  {
    idea: "Create a location based app that would alert you if you were close to the vicinity of a reported case of the virus",
  },
  {
    idea: "Tesla auto video/audio record function for when you get pulled over by the police.",
  },
  {
    idea: "An app where you could check how busy a coffee shop was before going.",
  },
  {
    idea: "Adaptive volume – a feature where a phone’s volume can adapt to its surroundings.",
  },
  { idea: "App where you rent out space in your home for storage" },
  {
    idea: "App to convert my Apple Music Playlist to YouTube Music Video Playlist or vice versa.",
  },
  {
    idea: "A dating app that slowly un blurs the profile photo the more you chat to that person. Focus is on conversations and not vanity. You could call it Clarity.",
  },
  {
    idea: "A TV that automatically pauses when you are out of range of the TV.",
  },
  { idea: "An app to find the closest public drinking fountain." },
  {
    idea: "Live fact checker that alerts in real time, lies being told during anyone being interviewed.",
  },
  {
    idea: "A gym motivation mode on your phone. When it knows you’re in the gym and senses that you’re texting or on scial media it will flash your old fat photos or motivational photos you uploaded. It will automatically enable ‘do not disturb’ mode",
  },
  {
    idea: "Car doors should have built-in intercom for when you when it’s raining and you want to go through a drive-thru.",
  },
  {
    idea: "An ad blocker that replaces ads with tasks from a to-do list. (Looking for a developer to help me build this – contact me if you would be interested)",
  },
  {
    idea: "Movie tickets should be based on how popular they are on release. So if a movie is flopping for e.g Cats, then the tickets are $2.00",
  },
  {
    idea: "An app where you type in the medications you’re on and it will tell you the possible negative drug interactions.",
  },
  {
    idea: "Audiobook should display a metric for a number of times read. There are books I’ve read multiple times and would love to read books others read multiple times.",
  },
  { idea: "Shazam but for celebrities." },
  { idea: "All chewing gum should be biodegradable." },
  {
    idea: "A Twitter feature to delete any tweet that contains a chosen word.",
  },
  {
    idea: "iPhone feature where you can select specific apps to shuffle there position on your home screen, by doing so it would reduce the usage of the selected apps – Instagram, Facebook etc",
  },
  {
    idea: "Movie theatres should have a creche, where you can leave the kids while you watch your movie",
  },
  { idea: "Cars should switch to parking lights when you put it in Park." },
  {
    idea: "A website that takes your age and tells you what people accomplished in the ages older than you. For example – Charles Darwin was 50 years old when he published “On the Origin of the Species”",
  },
  {
    idea: "MacBook feature that automatically converts any .webp into a .jpg when downloading from the web.",
  },
  {
    idea: "When you hover over someone’s username it should show all that person’s name changes to help you remember who that person is.",
  },
  {
    idea: "Compost app that when you scan a plant it will tell you what combustible materials suit the plant or don’t.",
  },
  { idea: "Tesla cars should be able to charge each other." },
  {
    idea: "Podcast app that can replace people’s voices with Morgan Freeman or David Attenborough.",
  },
  {
    idea: "Uber for your household items. Lend your idle powered drill for money.",
  },
  {
    idea: "An app that lets you record and digitally sign verbal agreements.",
  },
  {
    idea: "Confetti bomb delivery service. Send a person to deliver a confetti/ glitter bomb and surprise/ ruin someone’s day!",
  },
  {
    idea: "Netflix ‘watch random episode’ button. Occasionally I just want to watch a random episode of a TV show and don’t like being made to pick.",
  },
  {
    idea: "Waze for lost & found pets. If you find a lost pet you take a photo & pin-drop it’s location.",
  },
  {
    idea: "Fridge handles that shock you at night to stop late-night snacking.",
  },
  {
    idea: "Netflix should have a Wrapped 2019 like Spotify. You could share your most viewed movies/ shows, minutes watched and other analytics.",
  },
  {
    idea: "A streaming service that takes in canceled tv shows, the shows are decided by its paying users.",
  },
  {
    idea: "Happiness reminder app. An app where you enter a list of things you’re happy for – your partner, kids, an upcoming holiday, friends, etc. The app then randomly notifies you throughout the day with a reminder.",
  },
  { idea: "An app like Tinder but matches tourists with locals to hangout." },
  {
    idea: "Twitter should provide users with a list of options as to why they are unfollowing someone",
  },
  { idea: "A music box with a pencil sharpener." },
  {
    idea: "Premium styling service which uses a body double who goes clothes shopping for you.",
  },
  {
    idea: "A fridge with a built-in AI juicer which holds all your veg/ fruit. When the juicer detects any fruit that is starting to ‘go off’ it will auto blend for you.",
  },
  { idea: "Fly tracking app called Swat." },
  {
    idea: "Hulu. Netflix, Disney+ should have a stand-alone app where you could listen to soundtracks of the movies/ tv series that they own.",
  },
  { idea: "Cinema candy should be sold in zip lock bags to reduce noise." },
  {
    idea: "Shazam for food. An app where you take a picture of whatever meal you are eating at a restaurant and the app will show you the recipe & the ingredients.",
  },
  {
    idea: "Drive-thru restaurants should project their menu onto your windscreen.",
  },
  {
    idea: "An email AI to automatically optimize the emotional tone of writing depending on who you’re writing too.",
  },
  { idea: "Uber for printing. An on-demand printing service." },
  { idea: "Tesla with a built-in coffee maker." },
  {
    idea: "A butter dish that keeps your butter to a spreadable state. No more hard butter",
  },
  {
    idea: "A dating app for a bibliophile. Swipe or click on a person’s profile based on your shared interest in books.",
  },
  {
    idea: "Place dog shelters and retirement homes in the same building so the elderly don’t get lonely and the animals have people to interact with to help them engage more with humans.",
  },
  {
    idea: "Podcast app that can replace people’s voices with Morgan Freeman or David Attenborough.",
  },
  {
    idea: "A smart plate which is split into 3 areas – carbs, protein & fats. The 3 areas will increase/ decrease size depending on your body goals.",
  },
  {
    idea: "Social media blocker app called Thanos. The app will delete all social media icons for a set amount of time giving you more time to focus on things that actually need your attention.",
  },
  { idea: "Create a greenhouse that also serves coffee." },
  {
    idea: "A Twitter feature where I can unfollow inactive/ ghost accounts.",
  },
  {
    idea: "Rubbish app. An app that locates bins nearby to help you dispose of your rubbish.",
  },
  {
    idea: "There should be a way for a parent to read their child a bedtime story remotely.",
  },
  { idea: "Enable push notifications airport announcements." },
  { idea: "Twitter should offer ‘Unfollow Suggestions.’" },
  { idea: "WhatsApp option to send self-destructing messages." },
  { idea: "A website/app to plant swap with other people." },
  {
    idea: "Convert movie DVD commentaries and repackage them as podcast episodes.",
  },
  { idea: "Social networks should remove all ads in your birthday" },
  {
    idea: "There should be one day where everyone tries to go 24 hours (if possible) without going online.",
  },
  {
    idea: "WhatsApp feature where if you message someone who is presumably asleep it tells you the current time in their time zone.",
  },
  { idea: "WhatsApp feature to preview audio messages before sending them." },
  {
    idea: "Tesla feature where you can chat to other Tesla drivers if you’re in a certain distance of each other.",
  },
  {
    idea: "Digital restaurant menus where you can filter by most popular, read reviews, shows you the dishes you’ve ordered in the past, plus more.",
  },
  {
    idea: "Tesla auto video/audio record function for when you get pulled over by the police.",
  },
  { idea: "We have spray-on plasters but why not spray-on gift wrapping?" },
  { idea: "A browser extension that reads aloud any selected text." },
  { idea: "A way to monitor your laundry from your phone." },
  { idea: "FaceApp but for your animals" },
  { idea: "TrustPilot for Healthcare" },
  {
    idea: "An app using object detection to tell you what items you can recycle and what bin to put it in.",
  },
  { idea: "A way to browse the web with a group of friends" },
  {
    idea: "App called ‘Pocket Money’. Parents set credits for chores completed. The teens can then use those credits for prizes i.e “attend Kates 16th birthday”",
  },
  {
    idea: "An app where you enter your skills, certifications, and tools used and it tells you possible roles.",
  },
  {
    idea: "Language learning/ alarm app where you translate sentences to turn off the alarm.",
  },
  { idea: "IMDB but for theme parks." },
  { idea: "Yelp for landlords" },
  {
    idea: "On-demand board games. Have your favorite board games delivered to your house. Return when finished",
  },
  {
    idea: "Book app where you input all the books you’ve ever read and it will give you a top-level overview of what topics they covered. The app will help you learn other topics of interest through book recommendations.",
  },
  {
    idea: "A Russian roulette call feature on your phone. A great feature to talk to random people from your contact list.",
  },
  {
    idea: "Machine learning therapist app. You connect all your social media accounts and the app will tell you what issues you have and how to improve.",
  },
  {
    idea: "Create a VR sports channel called POV (point of view), be great to watch a game from the refs POV.",
  },
  {
    idea: "Google map should have a Trick or Treat filter to let you know which houses to knock too.",
  },
  {
    idea: "A dating app that syncs with your library card and matches you with people.",
  },
  {
    idea: "A lift that doesn’t close if it recognizes that someone is approaching and that there is enough room for that person.",
  },
  {
    idea: "When booking an airplane ticket you should be able to choose a preference for “sociable” or ” unsociable”. You are then seated beside a match.",
  },
  {
    idea: "A game called ‘Piggy Bank’ where you look after a pig by paying for food, taking it to the vet, buying it toys, etc. The game requires you to spend real money which goes into a savings account.",
  },
  {
    idea: "A website where you can send letters to children with serious illnesses.",
  },
  {
    idea: "A necktie that shocks you if you have been inactive for more than X amount of time. You can set the X.",
  },
  { idea: "An urbandictionary.com version of scrabble." },
  {
    idea: "Create a subscription app that keeps track of all your online subscriptions.",
  },
  {
    idea: "Public bathroom doorknob that shocks you if the sink isn’t used after you’ve flushed the toilet and try to exit.",
  },
  {
    idea: "Gesture recognition that allows you to quit/ close any open applications on your computer when you fire finger guns at your screen. Making the ‘pew pew’ sound completes the action.",
  },
  { idea: "A browser extension that auto accepts the cookies and banners." },
  {
    idea: "Skype recognition feature that automatically mutes you while you’re eating and lets everyone else know with a status update “David is currently eating”",
  },
  {
    idea: "Apple Music should have a ‘memories’ feature similar to Snapchat, which shows your most played songs from a selected date.",
  },
  {
    idea: "A mattress that’s soft when you go to bed so to help you sleep. Once the bed recognizes you’re asleep the mattress will begin to harden for better back support.",
  },
  { idea: "Uber for hiring security." },
  {
    idea: "Daily scrum app. The app would allow you to find people working on similar projects – allowing you to bounce ideas off one another and maybe even collaborate.",
  },
  {
    idea: "An alarm clock that is affected by the weather. If the weather falls below freezing then the alarm will adjust itself to go off 10 mins earlier allowing you extra time to defrost your car.",
  },
  { idea: "Airbnb for storage (warehouses)." },
  {
    idea: "Facebook should tell you how many times a link has been shared before you share it.",
  },
  {
    idea: "A gas cooker that has a smart pressure system. When the cooker has recognised that the gas is on and there is no pot/ pan it will turn itself off automatically after a set time.",
  },
  {
    idea: "Alexa feature where I can tell her what I have in my fridge and she ill give me recipe ideas.",
  },
  {
    idea: "Car doors should have a pop-out shoe cleaner to help keep the car floor tidy.",
  },
  { idea: "Let’s rename Monday to Funday." },
  { idea: "An app so you can find out where your nearest ice cream van is." },
  { idea: "Digital piggy bank that displays how much you have inside" },
  {
    idea: "Instagram should allow you to repost other users post to your feed.",
  },
  {
    idea: "A hybrid between Tinder & Yelp. The ability to leave a review AFTER your date.",
  },
  {
    idea: "Gordon Ramsay alarm clock. Gordon throws insults at you until you turn him off.",
  },
  { idea: "Waterproof AirPods." },
  { idea: "A meet up app to find people to play board games." },
  {
    idea: "YouTube filter to remove ‘Reaction’ videos from my search results",
  },
];

export default data;
