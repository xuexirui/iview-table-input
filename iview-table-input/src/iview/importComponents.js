import Vue from "vue";
import {
    Table,
    ButtonGroup,
    Button,
    Input,
    Message,
    Icon,
    Modal,
    Form,
    FormItem,
    // Col,
    Row,
    Card,
} from 'iview';

Vue.use(Vue => {
    Vue.prototype.$Message = Message;
});

Vue.component("Table", Table);
Vue.component("ButtonGroup", ButtonGroup);
Vue.component("Button", Button);
Vue.component("Input", Input);
Vue.component("Icon", Icon);
Vue.component("Modal", Modal);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Row", Row);
Vue.component("Card", Card);
// Vue.component("Col", Col);

