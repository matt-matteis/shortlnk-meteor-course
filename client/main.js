import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import React from 'react';
import ReactDom from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { routes, onAuthChange } from './../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Session.set('showVisible', true);
  ReactDom.render(routes, document.getElementById('app'));
});
