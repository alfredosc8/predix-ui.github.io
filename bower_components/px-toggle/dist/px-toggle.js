'use strict';(function(){'use strict';Polymer({is:'px-toggle',behaviors:[Polymer.IronCheckedElementBehavior],properties:{size:{type:String,value:''},disabled:{type:Boolean,value:false,reflectToAttribute:true}},listeners:{'tap':'_onCheckTap'},attached:function attached(){this.setAttribute('role','switch')},_checkDisabledState:function _checkDisabledState(disabled){this.setAttribute('aria-disabled',disabled);return''+(disabled?'toggle--disabled':'')},_checkLabelSize:function _checkLabelSize(size){return'toggle__label--'+size},_checkInputSize:function _checkInputSize(size){return'toggle__input--'+size},_onCheckTap:function _onCheckTap(evt){this.checked=!this.checked}})})();
//# sourceMappingURL=px-toggle.js.map
