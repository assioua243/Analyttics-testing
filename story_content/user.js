window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Define your Google Tag Manager ID
const googleTagManagerID = 'G-JE78QWP1CP';

// Create the first script tag for Google Tag Manager
var gtmScript = document.createElement('script');
gtmScript.id = 'google-ga-script';
gtmScript.async = true;
gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + googleTagManagerID;

// Append the first script tag to the head
document.head.appendChild(gtmScript);

// Create the inline script
var inlineScript = document.createElement('script');
inlineScript.id = 'google-ga-datalayer-script';
inlineScript.text =
`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '` +
googleTagManagerID +
`', {
  'cookie_flags': 'SameSite=None;Secure'
});
`;

// Append the inline script to the head
document.head.appendChild(inlineScript);
}

window.Script2 = function()
{
  gtag('event', 'button_click', {
  'event_category': 'Buttons',
  'event_label': 'Start Slide',
  'value': 1
});

}

window.Script3 = function()
{
  gtag('event', 'button_click', {
  'event_category': 'Buttons',
  'event_label': 'Open Slide 4',
  'value': 1
});

}

window.Script4 = function()
{
  gtag('event', 'button_click', {
  'event_category': 'Buttons',
  'event_label': 'Open Slide 5',
  'value': 1
});

}

window.Script5 = function()
{
  gtag('event', 'button_click', {
  'event_category': 'Buttons',
  'event_label': 'Open Slide 7',
  'value': 1
});

}

window.Script6 = function()
{
  // Get the Storyline player object
var player = GetPlayer();

// Retrieve the value of the Storyline variable (e.g., QuizScore)
var jsVMB_Mistakes = player.GetVar("VMB_Mistakes"); // Replace "QuizScore" with your variable name

// Send the variable value to GA as a custom event
gtag('event', 'VMB_Mistakes', {
  'event_category': 'VMB_Page',
  'event_label': 'VMB_Mistakes', // You can customize this label
  'value': jsVMB_Mistakes // The value to send (from Storyline variable)
});

console.log('Sent Storyline variable to GA4: ' + storylineVariable);

}

window.Script7 = function()
{
  gtag('event', 'button_click', {
  'event_category': 'Buttons',
  'event_label': 'Open Slide 3',
  'value': 1
});

}

window.Script8 = function()
{
  gtag('event', 'button_click', {
  'event_category': 'Buttons',
  'event_label': 'Open Slide 6',
  'value': 1
});

}

window.Script9 = function()
{
  gtag('event', 'button_click', {
  'event_category': 'Buttons',
  'event_label': 'Open Slide 8',
  'value': 1
});

}

window.Script10 = function()
{
  gtag('event', 'button_click', {
  'event_category': 'Buttons',
  'event_label': 'Open Slide 9
  ',
  'value': 1
});

}

};
