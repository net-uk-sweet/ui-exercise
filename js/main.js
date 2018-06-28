var toggle = (function ($) {

    'use strict';

    var $trigger,
        $target;

    var visibleClass = 'is-visible';

    return {
        init: function () {
            this.$trigger = $('[data-toggle-trigger]');
            this.$target = $('[data-toggle-target]');

            this.$trigger.on('click', this.toggle.bind(this));
        },

        toggle: function (e) {
            if (e) {
                e.preventDefault();
            }

            this.$target.toggleClass(visibleClass);
        }
    }
}(jQuery));

toggle.init();