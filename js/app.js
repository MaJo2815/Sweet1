// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'RunGran Shop',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/carrito/',
    	url: 'carrito.html',
    	name: 'carrito',
  		}
	],
	dialog: {
		title: 'Sweet!',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('¡ Welcome to Rungran Shop !');
    }
	
});




$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {	

		var notification = app.notification.create({

		 icon: '<i class="material-icons">check</i>',

		 title: 'Order',

		 titleRightText: '',

		 subtitle: '',

		 text: "Tu orden ha sido recibida",

		 closeTimeout: 3000,

		});

		notification.open();

		

	});
	
});


