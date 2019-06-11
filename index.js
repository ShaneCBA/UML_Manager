let template = [
    {
        className: 'SubstanceChecker',
        attributes: [
            {
                name: 'MIN_TEMP',
                type: 'int',
                isStatic: true,
                isPrivate: true
            },
            {
                name: 'MAX_TEMP',
                type: 'int',
                isStatic: true,
                isPrivate: false
            },
            {
                name: 'temperature',
                type: 'int',//Potentially have binary system denoting size and type serial numbers (https://www.tutorialspoint.com/cplusplus/cpp_variable_types.htm)
                isStatic: false,
                isPrivate: true
            }
        ],
        methods: [
            {
                name: 'SubstanceChecker',
                type: '',
                args: [
                    {
                        name: 'temperature',
                        type: 'int'
                    }
                ]
            },
            {
                name: 'isEthylFreezing',
                type: 'bool',
                args: [
                    {
                        name: 'temperature',
                        type: 'int'
                    },
                    {
                        name: 'bullshit',
                        type: 'string'
                    },
                    {
                        name: 'temperature',
                        type: 'bool'
                    }
                ]
            },
            {
                name: 'isEthylBoiling',
                type: 'bool'
            },
            {
                name: 'isOxygenFreezing',
                type: 'bool'
            },
            {
                name: 'isOxygenBoiling',
                type: 'bool'
            },
            {
                name: 'isWaterFreezing',
                type: 'bool'
            },
            {
                name: 'isWaterBoiling',
                type: 'bool'
            }
        ]
    },
    {
        className: 'SubstanceChecker',
        attributes: [
            {
                name: 'MIN_TEMP',
                type: 'int',
                isStatic: true,
                isPrivate: true
            },
            {
                name: 'temperature',
                type: 'int',//Potentially have binary system denoting size and type serial numbers (https://www.tutorialspoint.com/cplusplus/cpp_variable_types.htm)
                isStatic: false,
                isPrivate: true
            }
        ],
        methods: [
            {
                name: 'SubstanceChecker',
                type: '',
                args: [
                    {
                        name: 'temperature',
                        type: 'int'
                    }
                ]
            },
            {
                name: 'isEthylFreezing',
                type: 'bool'
            },
            {
                name: 'isEthylBoiling',
                type: 'bool'
            },
            {
                name: 'isOxygenFreezing',
                type: 'bool'
            },
            {
                name: 'isOxygenBoiling',
                type: 'bool'
            },
            {
                name: 'isWaterFreezing',
                type: 'bool'
            },
            {
                name: 'isWaterBoiling',
                type: 'bool'
            }
        ]
    },
    {
        className: 'SubstanceChecker',
        attributes: [
            {
                name: 'MIN_TEMP',
                type: 'int',
                isStatic: true,
                isPrivate: true
            },
            {
                name: 'temperature',
                type: 'int',//Potentially have binary system denoting size and type serial numbers (https://www.tutorialspoint.com/cplusplus/cpp_variable_types.htm)
                isStatic: false,
                isPrivate: true
            }
        ],
        methods: [
            {
                name: 'SubstanceChecker',
                type: '',
                args: [
                    {
                        name: 'temperature',
                        type: 'int'
                    }
                ]
            },
            {
                name: 'isEthylFreezing',
                type: 'bool'
            },
            {
                name: 'isEthylBoiling',
                type: 'bool'
            },
            {
                name: 'isOxygenFreezing',
                type: 'bool'
            },
            {
                name: 'isOxygenBoiling',
                type: 'bool'
            },
            {
                name: 'isWaterFreezing',
                type: 'bool'
            },
            {
                name: 'isWaterBoiling',
                type: 'bool'
            }
        ]
    },
    {
        className: 'SubstanceChecker',
        attributes: [
            {
                name: 'MIN_TEMP',
                type: 'int',
                isStatic: true,
                isPrivate: true
            },
            {
                name: 'temperature',
                type: 'int',//Potentially have binary system denoting size and type serial numbers (https://www.tutorialspoint.com/cplusplus/cpp_variable_types.htm)
                isStatic: false,
                isPrivate: true
            }
        ],
        methods: [
            {
                name: 'SubstanceChecker',
                type: '',
                args: [
                    {
                        name: 'temperature',
                        type: 'int'
                    }
                ]
            },
            {
                name: 'isEthylFreezing',
                type: 'bool'
            },
            {
                name: 'isEthylBoiling',
                type: 'bool'
            },
            {
                name: 'isOxygenFreezing',
                type: 'bool'
            },
            {
                name: 'isOxygenBoiling',
                type: 'bool'
            },
            {
                name: 'isWaterFreezing',
                type: 'bool'
            },
            {
                name: 'isWaterBoiling',
                type: 'bool'
            }
        ]
    }
];

const createClass = () => {
    return {
        className: 'NEW_CLASS',
        attributes: [],
        methods: []
    }
}

const TYPES = {
    1: 'bool',
    2: 'char',
    3: 'int',
    4: 'float',
    5: 'double',
    6: 'void',
    7: 'wchar_t',
    8: 'UDT'//maybe not dropdown
}//oh shit wait user defined types exists

class Attribute
{
    constructor({name, type, isStatic, isPrivate}){
        this.name = name;
        this.type = type;
        this.isStatic = isStatic;
        this.isPrivate = isPrivate;
    }
};
class Method
{
    constructor({name, type, isStatic, isPrivate, args})
    {
        this.name = name;
        this.type = type;
        this.isStatic = isStatic;
        this.isPrivate = isPrivate;
        this.arguments = args || [];
    }
};

Vue.component('private-dropdown', {
    props: ['private'],
    template: `
    <select @change="changePrivate" :value="private" class="private_selection">
        <option value="false">+</option>
        <option value="true">-</option>
    </select>
    `,
    methods: {
        changePrivate(event) {
            this.$emit('privateChange', event.target.value == 'true');
        }
    }
})

Vue.component('fab', {
    template: `
    <div class="fab attach_up right">
        <svg v-on:click="count++" width="50px" height="50px" fill="white">
            <rect x="24" y="13px" width="2" height="24"></rect>
            <rect y="24" x="13px" height="2" width="24"></rect>
        </svg>
    </div>
    `
});

Vue.component('fancy-button', {
    props: ['title', 'list'],
    template: '<div v-on:click="newClass" class="button">{{ title }}<add-icon size="1em" right="true"></add-icon></div>',
    methods: {
        newClass(){
            this.$emit('append')
        }
    }
});

Vue.component('add-icon', {
    props: ['size', 'color', 'right', 'left'],
    template: `
    <svg v-bind:class="{right: right, left: left, icon: true}" v-on:click="count++" :width="size || '50px'" :height="size || '50px'" :fill="color || 'black'" viewBox="0 0 30 30">
        <rect x="13" y="0" width="4" height="30"></rect>
        <rect y="13" x="0" height="4" width="30"></rect>
    </svg>
    `
});

//include all TYPES, and all UDT from the rest of the program
//not actually dropdown, but will offer auto-complete options
Vue.component('type-selection', {
    props: ['current'],
    template: `
    <span class="uml_type" @input="input" contenteditable/>
    `,
    mounted: function(){
        this.$el.innerText = this.current;
    },
    methods: {
        input: function(event) {
            this.$emit('typeChange', event.target.innerText)
        }
    }
})
Vue.component('name-input', {
    props: ['current'],
    template: `
        <span @input="input" contenteditable/>
    `,
    mounted: function(){
        this.$el.innerText = this.current;
    },
    methods: {
        input: function(event) {
            this.$emit('nameChange', event.target.innerText)
        }
    }
})

Vue.component('attribute', {
    props: ['editable', 'item', 'index'],
    template: `
    <span>
        <span v-if="editable">
            <private-dropdown @privateChange="privateChange" :private="item.isPrivate"></private-dropdown><name-input @nameChange="nameChange" :current="item.name"></name-input> : <type-selection @typeChange="typeChange" :current="item.type"></type-selection>
        </span><span v-if="!editable">{{item.name}} : <span class="uml_type">{{item.type}}</span>
        </span>
        <div v-if="editable"><input @change="staticChange" :checked="item.isStatic" type="checkbox"/>static</div>
    </span>
    `,
    methods: {
        nameChange(newName) {
            this.$emit('attributeChange', newName, this.item.type, this.item.isPrivate, this.item.isStatic, this.index);
        },
        typeChange(newType) {
            this.$emit('attributeChange', this.item.name, newType, this.item.isPrivate, this.item.isStatic, this.index);
        },
        privateChange(isPrivate) {
            this.$emit('attributeChange', this.item.name, this.item.type, isPrivate, this.item.isStatic, this.index);
        },
        staticChange(event) {
            this.$emit('attributeChange', this.item.name, this.item.type, this.item.isPrivate, event.target.checked, this.index);
        }
    }
})

Vue.component('attribute-list', {
    props: ['attributes', 'editable'],
    template: `
    <ul class="uml_data uml_attributes">
        <li v-for="(item, index) in attributes" :class="item.isPrivate ? 'uml_pr' : 'uml_pl'" :key="index">
            <i v-if="editable" style="text-decoration: none" class="icon">remove_circle_outline</i>
            <attribute @attributeChange="attributeChange" v-bind:class="{static: item.isStatic}" :editable="editable" :item="item" :index="index"></attribute>
        </li>
    </ul>
    `,
    methods: {
        attributeChange(name, type, isPrivate, isStatic, index) {
            this.$emit('modifyAttribute', name, type, isPrivate, isStatic, index);
        }
    }
});

Vue.component('method-list', {
    props: ['methods', 'editable'],
    template: `
    <ul class="uml_data uml_methods">
        <li :class="item.isPrivate ? 'uml_pr' : 'uml_pl'" v-for="(item, index) in methods" :key="index">
            <span v-if="!editable">{{item.name}}(<args :args="item.args"></args>) : <span class="uml_type">{{item.type}}</span></span>
            <span v-if="editable">
                <div>
                    <private-dropdown @privateChange="(isPrivate)=>privateChange(item.name, item.type, index, isPrivate, item.args)" :private="item.isPrivate || false"></private-dropdown><name-input @nameChange="(name)=>nameChange(name, item.type, item.isPrivate, item.args, index)" :current="item.name"></name-input>() : <type-selection @typeChange="(type)=>typeChange(type, item.name, item.isPrivate, item.args, index)" :current="item.type"></type-selection>
                </div>
                <args-modifier @argChange="(name, type, argIndex)=>argChange(item.name, item.type, index, name, type, item.isPrivate, argIndex)" v-if="item.args" :args="item.args"></args-modifier>
            </span>
        </li>
    </ul>
    `,
    methods: {
        argChange(methodName, methodType, methodIndex, name, type, isPrivate, index) {
            let newArgs = [...this.methods[methodIndex].args];
            newArgs[index].name = name;
            newArgs[index].type = type;
            this.$emit('modifyMethod', methodIndex, methodName, methodType, isPrivate, newArgs);
        },
        privateChange(methodName, methodType, index, isPrivate, args) {
            this.$emit('modifyMethod', index, methodName, methodType, isPrivate, args)
        },
        nameChange(newName, type, isPrivate, args, index) {
            this.$emit('modifyMethod', index, newName, type, isPrivate, args)
        },
        typeChange(newType, name, isPrivate, args, index) {
            this.$emit('modifyMethod', index, name, newType, isPrivate, args)
        }
    }
});

Vue.component('uml-class', {
    props: ['item', 'index'],
    data: function(){
        return {
            editMode: false
        };
    },
    template: `
    <div v-bind:class="{uml_container: true, edit_mode: editMode}">
        <div class="uml_title">{{item.className}}<i v-on:click="toggleEdit" class="icon">create</i><i class="icon">remove_circle_outline</i></div>
        <attribute-list @modifyAttribute="modifyAttribute" :editable="editMode" :attributes="item.attributes"></attribute-list>
        <method-list @modifyMethod="modifyMethod" :editable="editMode" :methods="item.methods"></method-list>
    </div>
    `,
    methods: {
        toggleEdit() {
            this.editMode = !this.editMode;
        },
        modifyAttribute(name, type, isPrivate, isStatic, index) {
            this.$emit('modified', true, this.index, index, {name, type, isPrivate, isStatic});
        },
        modifyMethod(index, name, type, isPrivate, args){ //index, methodName, methodType, newArgs TODO [have private thingy]
            this.$emit('modified', false, this.index, index, {name, type, isPrivate, isStatic: false, args});
        }
    }
})

Vue.component('class-list', {
    props: [
        'fuckingList'
    ],
    template: `
    <div class="classList">
        <uml-class @modified="modifyItem" :item="item" v-for="(item, index) in fuckingList" :key="index" :index="index"></uml-class>
    </div>`,
    methods: {
        modifyItem(isAttribute, index, otherIndex, data) {
            this.$emit('update', isAttribute, index, otherIndex, data)
        }
    }
});

Vue.component('args', {
    props: [
        'args'
    ],
    template: `
    <span>
        <span class="arguments"><span v-for="(item, index) in args">{{item.name}} : <span class="uml_type" :key="index">{{item.type}}</span>, </span></span>
    </span>
    `,
    methods: {

    }
});
Vue.component('args-modifier', {
    props: [
        'args'
    ],
    template: `
    <div class="arguments">
        <li v-for="(item, index) in args"><name-input @nameChange="(newName)=>argChange(newName, item.type, index)" :current="item.name"></name-input> : <type-selection @typeChange="(newType)=>argChange(item.name, newType, index)" :current="item.type"></type-selection></span></li>
    </div>
    `,
    methods: {
        argChange(name, type, index) {
            this.$emit('argChange', name, type, index);
        }
    }
});

var app = new Vue({
    el: '#app',
    data: function(){
        return {classes: template}
    },
    methods: {
        updateList(isAttribute, index, otherIndex, data) {
            if (isAttribute) {
                this.$set(this.classes[index].attributes[otherIndex], 'name', data.name);
                this.$set(this.classes[index].attributes[otherIndex], 'type', data.type);
                this.$set(this.classes[index].attributes[otherIndex], 'isPrivate', data.isPrivate);
                this.$set(this.classes[index].attributes[otherIndex], 'isStatic', data.isStatic);
            }
            else {
                // this.$emit('modified', false, this.index, index, {name, type, isPrivate: false, isStatic: false, args});
                this.$set(this.classes[index].methods[otherIndex], 'name', data.name);
                this.$set(this.classes[index].methods[otherIndex], 'type', data.type);
                this.$set(this.classes[index].methods[otherIndex], 'isPrivate', data.isPrivate);
                this.$set(this.classes[index].methods[otherIndex], 'isStatic', data.isStatic);
                this.$set(this.classes[index].methods[otherIndex], 'args', data.args);
            }
        },
        addItem(){
            let shit = this.classes;
            shit.push(createClass());
            this.$set(this, 'classes', shit);
        }
    }
});
