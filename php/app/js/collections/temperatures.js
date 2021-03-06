
define ([
    'backbone',
    'models/temperature',
    'common',
], function (Backbone, TemperatureModel, Common) {

  'use strict';
  var TemperaturesCollection = Backbone.Collection.extend ({ 

      //define instances
      model : TemperatureModel,
      url: Common.ApiUrl + '/temperatures',

      /**
       * constructor
       */
      initialize: function(){
        this.on ('request', this.indicate, this);
        this.on ('sync', this.disindicate, this);
      },

      indicate: function () {
      },

      disindicate: function () {
      },

  });

  return TemperaturesCollection;
});

