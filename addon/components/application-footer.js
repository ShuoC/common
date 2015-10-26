import Ember from 'ember';
import layout from '../templates/components/application-footer';

export default Ember.Component.extend({
	layout: layout,
	classNames: ['application-footer'],
	currentYear: function(){
		return new Date().getFullYear();
	}.property(),
	willInsertElement: function(){
		Ember.$('.application-placeholder').remove();
		console.log('createElement app-skeleton');
		this._super();
	}
});