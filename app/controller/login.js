'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async saveUser() {
    this.ctx.body = 'saving';
  }
}

module.exports = LoginController;
