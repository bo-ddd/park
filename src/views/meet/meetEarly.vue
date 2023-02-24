//应急模拟演练
<template>
    <div class="wrap">
        <div class="header">
            <span>应急模拟演练</span>
        </div>

        <div class="form">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="名称">
                    <el-input v-model="formInline.user" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="演练种类">
                    <el-select v-model="formInline.region" placeholder="请选择类型">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>

            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>

        </div>
        <div class="add">
            <el-button class="add-button" type="primary" @click="onSubmit">添加</el-button>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
                user: '',
                region: '',
                currentPage4: 1
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<style>
.wrap {
    width: calc(100vw - 200px);
    height: 100vh;
    background-color: #f1f1f1;
}

.header {
    padding: 20px;
    background: #fff;
}

.form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
.el-form-item {
    margin-bottom: 0px;
}
.add-button{
    margin: 0 20px;
}
.el-button{
    border-radius: 25px;
    padding: 10px 15px;
}
</style>