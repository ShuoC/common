import Ember from 'ember';
import layout from '../templates/components/application-header';

export default Ember.Component.extend({
  	layout: layout,
  	controller: null,
	isLoading: true,
	classNames: ['application-header'],
	partnerLogoUrl: Ember.computed('', function(){
		var user = this.container.lookup('session:user');
		console.log('application-header', user);
		console.log('common application-header');
		return user.get('partnerLogoUrl');
	}),
	currentUser: Ember.computed('', function(){
		this.set('isLoading', false);
		return this.container.lookup('session:user');
	}),
	actions: {
		logout: function(){
			console.log('sendAction logout');
			this.sendAction('action');
		}
	}
});
