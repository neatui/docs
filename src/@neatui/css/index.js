const mcui = {
  theme: {
    set: function (theme) {
      document.documentElement.attr('theme', theme);
    },
    get: function () {
      return document.documentElement.attr('theme');
    }
  },
  size: {
    set(size) {
      document.documentElement.attr('size', size);
    },
    get: function () {
      return document.documentElement.attr('size');
    }
  },
  layout: {
    set(layout) {
      document.documentElement.attr('layout', layout);
    },
    get: function () {
      return document.documentElement.attr('layout');
    }
  }
};

module.exports = mcui;
