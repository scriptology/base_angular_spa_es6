'use strict';

class NewsDetailController {
  constructor() {
      this.dataDetail = "Text detail page";
  }
}

export default angular
  .module('news.detail.controller', [])
  .controller('NewsDetailController', NewsDetailController);
