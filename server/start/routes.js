'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({request}) => {
  return { greeting: 'Hello world in JSON' }
})

/*
Route.post('auth/register', ({ request }) => {
  return {
    message:'hello world',
  };
}); 
效果同*/
Route.group(() => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');

  Route.get('projects','ProjectController.index').middleware('auth');
})
  .prefix('api');

