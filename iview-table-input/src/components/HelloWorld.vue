<template>
    <div class="full">
        <Row>
          <div class="toolbar-buttom-10">
            <Card :padding="5">
                <div class="toolbar">
                    123
                </div>
            </Card>
          </div>
        </Row>
        <Row class="full">
            <Col span="6" class="tree">
                <Card class="full">
                    <div class="edittable-test-con">
                        123
                    </div>
                </Card>
            </Col>
            <Col span="18" class="table">
                <Card class="full">
                    <div class="edittable-con-1">
                      15545
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.full{
  height: 100%;
  width: 100%;
}
.tree{
  height: calc(100% - 75px);
}
.toolbar-buttom-10{
  padding-bottom: 10px;
}
.toolbar{
  height: 15px;
}
.edittable-test-con{
    height: 100%;
}
.table{
    height: calc(100% - 75px);
    padding-left: 10px;
}
.edittable-con-1{
    box-sizing: content-box;
    padding: 15px 0 0;
    height: 100%;
}
</style>

