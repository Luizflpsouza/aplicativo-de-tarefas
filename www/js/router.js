var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'Tarefas app',
    // App id
    id: 'com.app.tarfas',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/index/',
        url: 'index.html',
        on: {
            pageInit: function(e, page){
                $.getScript('js/index.js');

            },
        }
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');