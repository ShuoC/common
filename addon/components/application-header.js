import Ember from 'ember';
import layout from '../templates/components/application-header';

export default Ember.Component.extend({
	layout: layout,
	controller: null,
	isLoading: true,
	classNames: ['application-header'],
	partnerLogoUrl: function(){
		var user = this.container.lookup('session:user');
		console.log('application-header', user);
		return user.get('partnerLogoUrl');
	}.property(),
	currentUser: function(){
		console.log('currentUser');
		this.set('isLoading', false);
		return this.container.lookup('session:user');
	}.property(),
	actions: {
		logout: function(){
			console.log('sendAction logout');
			this.sendAction('action');
		}
	}
});