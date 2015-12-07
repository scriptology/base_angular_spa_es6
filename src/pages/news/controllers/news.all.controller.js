'use strict';

class NewsAllController {
  constructor() {
      this.user = "Alex";
      this.dataDetail = "detail test from list";
  }
}

export default angular
  .module('news.all.controller', [])
  .controller('NewsAllController', NewsAllController);
