/**
 * Jelli, Inc
 * Copyright 2015 Jelli, Inc
 * All Rights Reserved.
 *
 * Author: Shuo Chen
 *
 * Date: 10/09/2015
 *
 */
import DS from 'ember-data';

var AuthenticationHttpHeader = 'X-Jelli-Authentication';

export default DS.RESTAdapter.extend({
	namespace: 'api',
	headers: function(){
		var headers = {};
		headers[AuthenticationHttpHeader] = ('accessToken=' + this.container.lookup('session:auth').accessToken);
		return headers;
	}.property()
});