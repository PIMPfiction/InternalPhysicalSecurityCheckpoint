/*FormXeditable Init*/
$(function(){
	"use strict";

	/* editables*/
	$('#username').editable({
	 type: 'text',
	 pk: 1,
	 name: 'username',
	 title: 'Enter username'
	});

	$('#firstname').editable({
	  validate: function(value) {
	   if($.trim(value) == '') return 'This field is required';
	 }
	});

	$('#sex').editable({
	  prepend: "not selected",
	  source: [
	  {value: 1, text: 'Male'},
	  {value: 2, text: 'Female'}
	  ],
	  display: function(value, sourceData) {
	   var colors = {"": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec"},
	   elem = $.grep(sourceData, function(o){return o.value == value;});

	   if(elem.length) {
		 $(this).text(elem[0].text).css("color", colors[value]);
	   } else {
		 $(this).empty();
	   }
	 }
	});

	$('#status').editable();

	$('#group').editable({
	  showbuttons: false
	});

	$('#dob').editable();

	$('#comments').editable({
	  showbuttons: 'bottom'
	});

	/*inline*/
	$('#inline-username').editable({
	 type: 'text',
	 pk: 1,
	 name: 'username',
	 title: 'Enter username',
	 mode: 'inline'
	});

	$('#inline-gozlem').editable({
		validate: function(value) {
	   	if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'int',
	 pk: 1,
	 name: 'gozlem',
	 title: 'gozlem',
	 mode: 'inline'
	});

	$('#inline-kaygi').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'kaygi',
	 title: 'kaygi',
	 mode: 'inline'
	});

	$('#inline-iletisim').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'iletisim',
	 title: 'iletisim',
	 mode: 'inline'
	});

	$('#inline-ekip_ruhu').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'ekip_ruhu',
	 title: 'ekip_ruhu',
	 mode: 'inline'
	});

	$('#inline-motivasyon').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'motivasyon',
	 title: 'motivasyon',
	 mode: 'inline'
	});

	$('#inline-mukavemet').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'mukavemet',
	 title: 'mukavemet',
	 mode: 'inline'
	});

	$('#inline-enerji').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'enerji',
	 title: 'enerji',
	 mode: 'inline'
	});



	/*inline*/
	$('#inline1-username').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'username',
	 title: 'Enter username',
	 mode: 'inline'
	});

	$('#inline1-gozlem').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'gozlem',
	 title: 'gozlem',
	 mode: 'inline'
	});

	$('#inline1-kaygi').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'kaygi',
	 title: 'kaygi',
	 mode: 'inline'
	});

	$('#inline1-iletisim').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'iletisim',
	 title: 'iletisim',
	 mode: 'inline'
	});

	$('#inline1-ekip_ruhu').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'ekip_ruhu',
	 title: 'ekip_ruhu',
	 mode: 'inline'
	});

	$('#inline1-motivasyon').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'motivasyon',
	 title: 'motivasyon',
	 mode: 'inline'
	});

	$('#inline1-mukavemet').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'mukavemet',
	 title: 'mukavemet',
	 mode: 'inline'
	});

	$('#inline1-enerji').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
			if( Number.isInteger(parseInt($.trim(value)) ) == false ) return 'This field must be integer.';
			if((parseInt($.trim(value))) >= 11 ) return 'This field cannot be greater than 10!';
			if((parseInt($.trim(value))) <= -1 ) return 'This field cannot be less than 0!';
	 },
	 type: 'text',
	 pk: 1,
	 name: 'enerji',
	 title: 'enerji',
	 mode: 'inline'
	});


	$('#inline-firstname').editable({
	  validate: function(value) {
	   if($.trim(value) == '') return 'This field is required';
	 },
	 mode: 'inline'
	});

	$('#inline-sex').editable({
	  prepend: "not selected",
	  mode: 'inline',
	  source: [
	  {value: 1, text: 'Male'},
	  {value: 2, text: 'Female'}
	  ],
	  display: function(value, sourceData) {
	   var colors = {"": "#98a6ad", 1: "#5fbeaa", 2: "#5d9cec"},
	   elem = $.grep(sourceData, function(o){return o.value == value;});

	   if(elem.length) {
		 $(this).text(elem[0].text).css("color", colors[value]);
	   } else {
		 $(this).empty();
	   }
	 }
	});

	$('#inline-status').editable({mode: 'inline'});

	$('#inline-group').editable({
	  showbuttons: false,
	  mode: 'inline'
	});

	$('#inline-dob').editable({mode: 'inline'});

	$('#inline-comments').editable({
	  showbuttons: 'bottom',
	  mode: 'inline'
	});
	$('#inline1-comments').editable({
	  showbuttons: 'bottom',
	  mode: 'inline'
	});
});
