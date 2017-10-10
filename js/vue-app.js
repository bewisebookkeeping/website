var app = new Vue({
  el: '#app',
  data: {
    heading: '',
    aboutHeader: '',
    about: '',
    partnerships: [],
    experience: {
      heading: '',
      blurb: '',
      industries: [],
    },
    fixTheMess: {
      heading: '',
      blurb: ''
    },
    services: [],
    contact: {
      heading: '',
      blurb: '',
      methods: [],
    },
  }
});

var client = contentful.createClient({
  accessToken: 'd9d86021651dfc724a80a587849fc837b0481241acff761872317a05156568fe',
  space: 'rb92l2zmtf6j'
});

//set header
client.getEntry('MTidb7OMiAuII0YeiQGI0')
      .then(function(entry) {
        app.heading = entry.fields.value;
      });

//set about text
client.getEntry('2m6fnzZFVaa4AEewY4AAik')
      .then(function(entry) {
        app.aboutHeader = entry.fields.title;
        app.about = entry.fields.value;
      });

//set industry experience
client.getEntry('3nROxNkm12eoWoGKUiY6eW')
      .then(function(entry) {
        app.experience.heading = entry.fields.title;
        app.experience.blurb = entry.fields.value;
      });

//populate partnerships
client.getEntries({
  content_type: 'partnership',
  order: 'fields.order'
}).then(function(partnerships) {
  app.partnerships = partnerships.items;
});

//populate industries
client.getEntries({
  content_type: 'industry',
  order: 'fields.order'
}).then(function(industries) {
  app.experience.industries = industries.items;
});

client.getEntry('4vStRJUeMUW80geMyg6mMu')
      .then(function(entry) {
        app.fixTheMess.heading = entry.fields.title;
        app.fixTheMess.blurb = entry.fields.value;
      });

client.getEntries({
  content_type: 'service',
  order: 'fields.order'
}).then(function(services) {
  app.services = services.items;
});

client.getEntry('5Wfo68t7zywyymcKwEyKqI')
      .then(function(entry) {
        app.contact.heading = entry.fields.title;
        app.contact.blurb = entry.fields.value;
      });

client.getEntries({
  content_type: 'contactMethod',
  order: 'fields.order'
}).then(function(contactMethods) {
  app.contact.methods = contactMethods.items;
});