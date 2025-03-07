Shopware.Component.override('sw-promotion-discount-component', {
    methods: {
        onDiscountValueChanged(value) {

            if(this.discount.type == 'absolute'){
                this.discount.value = value
                return;
            }

            this.$super('onDiscountValueChanged');
        },
    }
});
