'use strict';

class NewsController {
  constructor() {
      this.user = "Alex";
  }
}

export default angular
  .module('news.controller', [])
  .controller('NewsController', NewsController);
