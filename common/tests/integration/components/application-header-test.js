import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('application-header', 'Integration | Component | application header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{application-header}}`);
  
  var className = 'application-header';
  assert.ok(this.$().html().indexOf(className) > 0, 'application-header inline render ok');
  //assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#application-header}}
      template block text
    {{/application-header}}
  `);

  assert.ok(this.$().html().indexOf(className) > 0, 'application-header block render ok');
});
