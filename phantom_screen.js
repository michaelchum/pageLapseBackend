var page = require('webpage').create(),
    system = require('system'),
    address, output;

if (system.args.length < 3 || system.args.length > 5) {
    console.log('Usage: phantom_screen.js URL filename [paperwidth*paperheight|paperformat] [zoom]');
    console.log('  paper (pdf output) examples: "5in*7.5in", "10cm*20cm", "A4", "Letter"');
    console.log('  image (png/jpg output) examples: "1920px" entire page, window width 1920px');
    console.log('                                   "800px*600px" window, clipped to 800x600');
    phantom.exit(1);
}

address = system.args[1];
output = system.args[2];
page.viewportSize = { width: 1440, height: 768 };
page.open(address, function() {
  page.render(output);
  phantom.exit();
});