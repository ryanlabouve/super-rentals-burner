import Service from '@ember/service';
import {module, test} from 'qunit';
import {
  click,
  visit,
  currentURL,
  fillIn,
  triggerKeyEvent,
} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {resolve} from 'rsvp';

let StubMapsService = Service.extend({
  getMapElement() {
    return resolve(document.createElement('div'));
  },
});

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:map-element', StubMapsService);
  });

  test('should show rentals as the home page', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to info about the company', async function(assert) {
    await visit('/');
    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should linke to contact info', async function(assert) {
    await visit('/');
    await click('.menu-contact');
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list available rentals', async function(assert) {
    server.createList('rental', 3)
    await visit('/');
    assert.equal(
      this.element.querySelectorAll('.listing').length,
      3,
      'should display 3 listings',
    );
  });

  test('should filter the list of rentals by city', async function(assert) {
    server.create('rental', {
      city: 'Tulsa'
    });

    server.create('rental', {
      city: 'okc'
    });

    await visit('/');
    await fillIn('.list-filter input', 'tulsa');
    await triggerKeyEvent('.list-filter input', 'keyup', 69);
    assert.equal(
      this.element.querySelectorAll('.results .listing').length,
      1,
      'should display 1 listing',
    );
    assert.ok(
      this.element
        .querySelector('.listing .location')
        .textContent.includes('Tulsa'),
      'should contain 1 listing with location Tulsa',
    );
  });

  test('should show details for a selected rental', async function(assert) {
    server.create('rental', {
      title: 'Grand Old Mansion'
    })

    await visit('/rentals');
    await click(`[href='/rentals/1']`);
    assert.equal(
      currentURL(),
      '/rentals/1',
      'should navigate to show route',
    );
    assert.ok(
      this.element
        .querySelector('.show-listing h2')
        .textContent.includes('Grand Old Mansion'),
      'should list rental title',
    );
    assert.ok(
      this.element.querySelector('.show-listing .description'),
      'should list a description of the property',
    );
  });
});
