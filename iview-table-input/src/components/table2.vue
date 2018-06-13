<template>
    <div ref="table1">
        <Table border height="500" :width="tableWidth" :columns="columns1" :data="data2"></Table>
        <Button @click="get">获得input里面的参数</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                width:'',
                tableWidth:'',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name',
                        width:100
                    },
                     {
                        title: 'cc',
                        key: 'cc',
                        width:100
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width:100
                    },
                    {
                        title: 'ss',
                        key: 'ss',
                        width:100
                    },
                    {
                        title: 'aa',
                        key: 'aa',
                        width:100
                    },
                    {
                        title: 'bb',
                        key: 'bb',
                        width:100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width:100,
                        render:(h,params) => {
                            var _this = this;
                            var address = _this.data2[params.index].address;
                            return h('div',[
                                h('div',{
                                    style:{
                                        width:_this.width+'px',
                                        height:'18px'
                                    },
                                    on:{
                                        dblclick:(event) => {
                                            let first = event.currentTarget;
                                            let last = event.currentTarget.parentElement.lastElementChild;
                                            last.value = _this.data2[params.index].address;
                                            first.style.display = 'none';
                                            last.style.display = 'block';
                                            last.focus();
                                        }
                                    }
                                },address),
                                h('input',{
                                    domProps:{
                                        type:'text',
                                        value:_this.data2[params.index].address
                                    },
                                    style:{
                                        display: 'none',
                                        width:_this.width+'px'
                                    },
                                    size:_this.width,
                                    on:{
                                        blur:(event) => {
                                            _this.data2[params.index].address = event.target.value;
                                            let first = event.currentTarget.parentElement.firstElementChild;
                                            let last = event.currentTarget;
                                            first.innerText = _this.data2[params.index].address;

                                            first.style.display = 'block';
                                            last.style.display = 'none';
                                        },
                                    }
                                },params.row.address),
                            ]);
                        }
                    }
                ],
                data2: [
                    {
                        name: 'John Brown',
                        age: 18,
                        cc: 'cccc',
                        ss:'ssss',
                        aa:'aaaa',
                        bb:'bbbb',
                        address: "",
                        date: '2016-10-03'
                    }
                ],
                
            }
        },
        methods:{
            
            get(){
                alert(this.data2[0].address)
            }
        },
        mounted:function(){
            this.$nextTick(function(){
            let _this = this;
            let divWidth = this.$refs.table1.offsetWidth-1;
            let length = _this.columns1.length;
            let colunmWidth = parseInt(divWidth/length);
            _this.tableWidth = colunmWidth*length+2;
            for(let i=0;i<length;i++){
                _this.columns1[i].width = colunmWidth
            }
            _this.width = colunmWidth -36;
        })
            
        }
        
    }
</script>
